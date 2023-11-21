import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const CheckOutForm = () => {
    const {user} = useAuth()
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState('')
  const [transactionId, setTransactionId] = useState('')
  const [clientSecret, setClientSecret] = useState('')
  const axiosSecure = useAxiosSecure()
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price,0)
  useEffect( () =>{
    if (totalPrice > 0) {
        axiosSecure.post('/create-payment-intent', {price:totalPrice})
    .then(res =>{
    //   console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret)
    })
    }
  },[axiosSecure, totalPrice])
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const {error, paymentMethod} =await stripe.createPaymentMethod({
        type:'card',
        card
    })
    if (error) {
        console.log('error in payment method', error);
        setError(error.message)
    }
    if (paymentMethod) {
        console.log('Payment method', paymentMethod);
        setError('')
    }

    //confirm payment
    const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
            card:card,
            billing_details:{
                name:user?.displayName || 'anonymous',
                email:user?.email || 'anonymous'
            }
        }
    })
    if (confirmError) {
        console.log(confirmError,"confirm error");
    }
    if (paymentIntent) {
        console.log(paymentIntent,"Payment intent");
        if (paymentIntent.status === "succeeded") {
            setTransactionId(paymentIntent?.id)
            Swal.fire({
                title: "Congratulations!",
                text: "Payment success.",
                icon: "success"
              });
            // now set payment in the database
            const payment = {
                email:user.email,
                price:totalPrice,
                transactionId:paymentIntent.id,
                date:new Date(), //use moment js to convert utc date
                cartId:cart.map(item => item._id),
                menuId:cart.map(item => item.menuId),
                status:'pending'
            }
            const res = await axiosSecure.post('/payments', payment);
            console.log('payment save',res.data);
            refetch()
        }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
      className="border rounded-sm p-4 my-6"
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div className=" flex justify-center items-center">
        <button className=" btn btn-primary py-2 w-1/4 my-4" type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </div>
        <p className=" text-center text-sm text-red-500">{error}</p>
        {transactionId && <p className=" text-green-600">Transaction Id:{transactionId} </p> }
    </form>
  );
};

export default CheckOutForm;
