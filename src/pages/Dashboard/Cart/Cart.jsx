import { FaTrashCan } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Cart = () => {
  const [cart] = useCart();
  const total = cart.reduce((total, item) => total + item.price, 0);
  const totalPrice = total.toFixed(3);
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const handelDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div>
      <div className=" flex items-center justify-between font-cinzel">
        <h1 className=" text-4xl">Items: {cart.length} </h1>
        <h1 className=" text-4xl">Total Price: {totalPrice}$ </h1>
        <button className=" rounded text-white bg-[#D1A054] px-6 py-2">
          Pay
        </button>
      </div>
      <div>
        <div className="overflow-x-auto mt-10 rounded-t-md">
          <table className="table">
            {/* head */}
            <thead className=" bg-[#D1A054] text-white">
              <tr>
                <th></th>
                <th className=" py-4">Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div>
                      <div className="avatar">
                        <div className="mask mask-square rounded w-24 h-24">
                          <img src={item.image} alt="Food" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h1>{item.name}</h1>
                  </td>
                  <td>{item.price}</td>
                  <td>
                    <button onClick={() => handelDelete(item._id)}>
                      <FaTrashCan className=" bg-red-700 text-white p-2 text-3xl rounded"></FaTrashCan>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
