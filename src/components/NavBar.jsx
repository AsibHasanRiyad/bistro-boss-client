import { Link, NavLink } from "react-router-dom";
import "../css/nav.css";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../hooks/useCart";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const handelLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Log Out",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navOptions = (
    <div className=" lg:flex justify-center items-center gap-5">
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to={"/menu"}
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to={"/order/salad"}
        >
          Order
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to={"/secret"}
        >
          Secret
        </NavLink>
      </li>

      {user ? (
        <>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-black rounded-box w-52 navbar-end"
            >
              {" "}
              <li>
                <img
                  className=" rounded-md w-24 h-24 mx-auto border-2 border-red-500"
                  src={user?.photoURL}
                  alt=""
                />
              </li>
              <li>
                <a className="justify-between">
                  {user.email}
                </a>
              </li>
              <li>
                <p>{user?.displayName}</p>
              </li>
              <li>
                <button onClick={handelLogOut}> LogOut</button>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to={"/login"}
            >
              Login
            </NavLink>
          </li>
        </>
      )}
    </div>
  );
  return (
    <div className="navbar bg-black text-white fixed z-10 max-w-screen-xl bg-opacity-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className=" lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-500 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <div className=" font-cinzel font-bold">
          <h1 className=" text-xs md:text-2xl lg:text-3xl font-black">
            BISTRO BOSS
          </h1>
          <h1 className=" text-[10px] md:text-lg lg:text-2xl tracking-widest">
            Restaurant
          </h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5 px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        <Link to={'dashboard'}>
          <button className=" border-none flex items-start">
            <FaCartShopping className=" text-4xl text-white"></FaCartShopping>
            <div className="badge text-xs w-5 h-5 rounded-full border-none text-black">
              {cart.length}
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
