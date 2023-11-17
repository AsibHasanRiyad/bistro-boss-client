import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const MainLayout = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      {noHeaderFooter || <NavBar></NavBar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default MainLayout;
