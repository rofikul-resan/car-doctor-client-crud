import { Link, NavLink, useLocation } from "react-router-dom";
import { BsHandbag, BsSearch } from "react-icons/bs";
import { AiOutlineCloseCircle, AiOutlineMenuUnfold } from "react-icons/ai";
import logo from "../assets/logo.svg";
import { useState } from "react";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();
  return (
    <nav className="flex  px-10   flex-col md:flex-row md:items-center my-8 justify-between relative ">
      <div className="md:hidden absolute right-10 top-5">
        <button
          onClick={() => setShowNav(!showNav)}
          className="text-2xl btn btn-ghost "
        >
          {!showNav ? <AiOutlineMenuUnfold /> : <AiOutlineCloseCircle />}
        </button>
      </div>
      <div>
        <img className="h-20 mb-4" src={logo} alt="" />
      </div>
      <div
        className={`md:ml-auto flex items-center flex-col md:flex-row gap-4 mb-4 font-semibold text-lg ${
          !showNav ? "hidden md:flex" : " flex"
        } `}
      >
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-4 border-orange-800" : ""
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-4 border-orange-800" : ""
          }
          to={"/about"}
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-4 border-orange-800" : ""
          }
          to={"/services"}
        >
          Services
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-4 border-orange-800" : ""
          }
          to={"/blog"}
        >
          Blog
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-4 border-orange-800" : ""
          }
          to={"/contact"}
        >
          Contact
        </NavLink>
        {location.pathname === "/auth/login" ? (
          <Link to={"/auth/sing-up"}>Sing Up</Link>
        ) : (
          <Link to={"/auth/login"}>Log in</Link>
        )}
        <div className="flex ml-auto md:ml-56  gap-4 items-center ">
          <BsHandbag className="text-xl font-bold" />
          <BsSearch className="text-xl font-bold" />
          <Link className="btn btn-outline  text-[#FF3811]">Appointment</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
