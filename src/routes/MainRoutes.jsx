import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Secret";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../pages/Dashboard/UserHome/UserHome";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path:'userHome',
          element:<UserHome></UserHome>
        },
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'menu',
            element:<Menu></Menu>
        },
        {
            path:'order/:category',
            element:<Order></Order>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        },
        {
          path:'secret',
          element:<PrivateRoute><Secret></Secret></PrivateRoute>
        },
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'userHome',
          element:<UserHome></UserHome>
        },
        {
          path:'cart',
          element:<Cart></Cart>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        },
        {
          path:'paymentHistory',
          element:<PaymentHistory></PaymentHistory>
        },
        //admin routes
        {
          path:'adminHome',
          element:<AdminRoutes><AdminHome></AdminHome></AdminRoutes>
        },
        {
          path:'addItem',
          element:<AdminRoutes><AddItems></AddItems></AdminRoutes>
        },
        {
          path:'addItem',
          element:<AdminRoutes><AddItems></AddItems></AdminRoutes>
        },
        {
          path:'manageItems',
          element:<AdminRoutes><ManageItems></ManageItems></AdminRoutes>
        },
        {
          path:'updateItem/:id',
          element:<AdminRoutes><UpdateItem></UpdateItem></AdminRoutes>,
          loader: ({params}) => fetch(`http://localhost:5001/menu/${params.id}`)
        },
        {
          path:'allUsers',
          element:<AdminRoutes><AllUsers></AllUsers></AdminRoutes>
        }
      ]
    }
  ]);