

import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
const Food = ({item}) => {
    const navigate = useNavigate()
    const location = useLocation()
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()

    const {_id, image, price, name, recipe} = item
    const handelCart = food =>{
      if (user && user.email) {
        console.log(food, user.email);
        //add to cart 
        const cartItem = {
            menuId: _id,
            email:user.email,
            name,
            image,
            price
        }
        axiosSecure.post('/carts', cartItem)
        .then(res => {
            console.log(res.data)
            if (res.data.insertedId) {
                Swal.fire({
                  title: "Added!",
                  text: "Your food has been added to the cart.",
                  icon: "success"
                });}
                //refetch the cart
                refetch()
        })
      }
      else{
        Swal.fire({
          title: "You are not logged in",
          text: "Please login to add product on cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Go to login page"
        }).then((result) => {
          if (result.isConfirmed) {
           navigate('/login', {state:{from: location}})
          }
        });
      }
    }
    return (
        <div key={item._id} className="card w-96 mx-auto bg-[#F3F3F3] rounded-none">
        <figure>
          <img className=" w-full" src={image} alt="Food" />
        </figure>
        <p className=" absolute right-3 top-3 bg-black text-white py-2 px-4">${price}</p>
        <div className="card-body">
          <h2 className=" text-[#151515] text-2xl font-semibold text-center">{name}</h2>
          <p className=" text-sm text-[#737373] text-justify">{recipe}</p>
          <div className=" flex justify-center items-center mt-5">
            <button
            onClick={() => handelCart(item)}
            className=" btn btn-outline border-0 border-b-4 text-[#BB8506] border-[#BB8506] bg-[#E8E8E8] hover:bg-[#111827] hover:border-[#BB8506] ">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    );
};

export default Food;