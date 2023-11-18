import { FaAlignJustify, FaBookBookmark, FaCalendar, FaCartShopping, FaHouse,  FaMoneyBillTransfer, FaRegEnvelope, FaShop, FaStar } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart()
  return (
    <div className=" flex">
      <div className=" min-h-screen w-72 bg-[#D1A054] pl-8 pt-12">
        <div className=" font-cinzel text-[#151515]  font-bold">
          <h1 className=" text-xs md:text-2xl lg:text-2xl font-black">
            BISTRO BOSS
          </h1>
          <h1 className=" text-[10px] md:text-lg lg:text-xl tracking-widest">
            Restaurant
          </h1>
        </div>
        <div>
          <ul className="menu font-cinzel uppercase text-base">
            <li>
              <NavLink to={"/dashboard/userHome"}>
                {" "}
                <FaHouse></FaHouse> User Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/reservation"}>
                {" "}
                <FaCalendar></FaCalendar> reservation
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/payment"}>
                {" "}
                <FaMoneyBillTransfer></FaMoneyBillTransfer> Payment History
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/cart"}>
                {" "}
                <FaCartShopping></FaCartShopping> My Cart ({cart.length})
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/review"}>
                {" "}
                <FaStar></FaStar> Add Review
              </NavLink>
            </li>
            <li >
              <NavLink to={"/dashboard/userHome"}>
                {" "}
                <FaBookBookmark></FaBookBookmark> My Booking
              </NavLink>
            </li>
            <div className="divider"></div>
            <li >
              <NavLink to={"/"}>
                {" "}
                <FaHouse></FaHouse>Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/menu"}>
                {" "}
                <FaAlignJustify></FaAlignJustify> Menu
              </NavLink>
            </li>
            <li>
              <NavLink to={"/order/offered"}>
                {" "}
                <FaShop></FaShop> Shop
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>
                {" "}
                <FaRegEnvelope></FaRegEnvelope> Contact
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
      <div className=" flex-1 p-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
