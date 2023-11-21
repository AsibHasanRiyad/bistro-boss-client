import { FaPen, FaTrashCan } from "react-icons/fa6";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  const handelDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        console.log(res.data, item._id);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: `${item.name} has been deleted.`,
            icon: "success",
          });
          refetch();
        }
      }
    });
  };

  // const handelDelete = (item) =>{

  //     Swal.fire({
  //         title: "Are you sure?",
  //         text: "You won't be able to revert this!",
  //         icon: "warning",
  //         showCancelButton: true,
  //         confirmButtonColor: "#3085d6",
  //         cancelButtonColor: "#d33",
  //         confirmButtonText: "Yes, delete it!"
  //       }).then(async(result) => {
  //         if (result.isConfirmed) {
  //             console.log(item._id);
  //             const res = await axiosSecure.delete(`/menu/${item._id}`)
  //             console.log(res.data);
  //         //   Swal.fire({
  //         //     title: "Deleted!",
  //         //     text: "Your file has been deleted.",
  //         //     icon: "success"
  //         //   });
  //         }
  //       });

  // }
  return (
    <div>
      <SectionTitle
        heading="Manage All Items"
        subHeading={"Hurry Up"}
      ></SectionTitle>
      {/* table for all items */}
      <div>
        <div className="overflow-x-auto mt-10 rounded-t-md">
          <h1 className=" font-cinzel text-3xl font-bold my-4">
            Total Items: {menu.length}{" "}
          </h1>
          <table className="table">
            {/* head */}
            <thead className=" bg-[#D1A054] text-white">
              <tr>
                <th></th>
                <th className=" py-4">Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      className=" w-20 h-20 rounded"
                      src={item.image}
                      alt=""
                    />
                  </td>
                  <td>
                    <h1>{item.name}</h1>
                  </td>
                  <td>
                    <h1>{item.price}$</h1>
                  </td>
                  <td>
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                      <button>
                        <FaPen className=" bg-red-700 text-white p-2 text-3xl rounded"></FaPen>
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button onClick={() => handelDelete(item)}>
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

export default ManageItems;
