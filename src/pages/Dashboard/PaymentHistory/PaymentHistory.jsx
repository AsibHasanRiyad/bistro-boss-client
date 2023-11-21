import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const PaymentHistory = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure()
    const {data: payments} = useQuery({
        queryKey:['payments', user.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data
        }
    })
    console.log(payments);
    return (
        <div>
            <h1 className=" font-cinzel text-4xl font-semibold">Total Payment : {payments?.length} </h1>
            <div>
        <div className="overflow-x-auto mt-10 rounded-t-md">
          <table className="table">
            {/* head */}
            <thead className=" bg-[#D1A054] text-white">
              <tr>
                <th className=" py-4">Email</th>
                <th>Price</th>
                <th>Transaction Id</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {payments?.map((pay) => (
                <tr key={pay._id}>
                  <td>
                    <h1>{pay.email}</h1>
                  </td>
                  <td>
                    <h1>{pay.price}$</h1>
                  </td>
                  <td>
                    <h1>{pay.transactionId}</h1>
                  </td>
                  <td>
                    <h1>{pay.date}</h1>
                  </td>
                  <td>
                    <h1>{pay.status}</h1>
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

export default PaymentHistory;