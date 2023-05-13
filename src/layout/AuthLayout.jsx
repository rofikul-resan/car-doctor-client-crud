import { Outlet } from "react-router-dom";
import loginImg from "../assets/images/login/login.svg";
import "./AuthLayout.css";
import Navbar from "../components/Navbar";
const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <div className="grid md:grid-cols-2 place-content-center gap-8 pb-16">
        <div className="self-center h-full grid place-items-center ">
          <img className="mx-auto h-[70%] " src={loginImg} alt="" />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
