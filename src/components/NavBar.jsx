import { NavLink } from "react-router-dom";
import "../css/nav.css";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handelLogOut = () => {
    logOut()
    .then(() =>{
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User Log Out",
        showConfirmButton: false,
        timer: 1500
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };
  const navOptions = (
    <>
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

      {user ? (
        <>
          <li>
            <button onClick={handelLogOut}> LogOut</button>
          </li>
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
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to={"/signup"}
            >
              SignUp
            </NavLink>
          </li>
        </>
      )}
    </>
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
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
      <div className="navbar-end">
        <a className="btn btn-sm md:btn-md">Button</a>
      </div>
    </div>
  );
};

export default NavBar;
