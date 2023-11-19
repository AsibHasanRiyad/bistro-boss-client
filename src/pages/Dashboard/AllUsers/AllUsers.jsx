import { FaTrashCan, FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  //make admin
  const handelAdmin = (user) => {
    console.log(user);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Success!",
              text: `${user.name} is an Admin Now`,
              icon: "success",
            });
            refetch();
          } else {
            Swal.fire({
              title: "Error!",
              text: `${user.name} is already an admin`,
              icon: "error",
            });
          }
        });
      }
    });
  };
  const handelDeleteUser = (id) => {
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
        axiosSecure.delete(`/users/${id}`).then((res) => {
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
        <h1 className=" text-4xl">Total Users: {users.length} </h1>
      </div>
      <div>
        <div className="overflow-x-auto mt-10 rounded-t-md">
          <table className="table">
            {/* head */}
            <thead className=" bg-[#D1A054] text-white">
              <tr>
                <th></th>
                <th className=" py-4">Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>
                    <h1>{user.name}</h1>
                  </td>
                  <td>
                    <h1>{user.email}</h1>
                  </td>
                  <td>
                    {user.role === "admin" ? (
                      <p>Admin</p>
                    ) : (
                      <button onClick={() => handelAdmin(user)}>
                        <FaUsers className=" bg-[#D1A054] text-white p-2 text-3xl rounded"></FaUsers>
                      </button>
                    )}
                  </td>
                  <td>
                    <button onClick={() => handelDeleteUser(user._id)}>
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

export default AllUsers;
