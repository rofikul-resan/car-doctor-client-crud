import { Link } from "react-router-dom";
import { BsHandbag, BsSearch } from "react-icons/bs";
import logo from "../assets/logo.svg";
const Navbar = () => {
  return (
    <nav className="flex md:items-center justify-between ">
      <div>
        <img className="h-20" src={logo} alt="" />
      </div>
      <div className="flex gap-4 font-semibold text-lg">
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>About</Link>
        <Link to={"/"}>Services</Link>
        <Link to={"/"}>Blog</Link>
        <Link to={"/"}>Contact</Link>
      </div>
      <div className="flex  gap-4 items-center ">
        <BsHandbag className="text-xl font-bold" />
        <BsSearch className="text-xl font-bold" />
        <Link className="btn btn-outline  text-[#FF3811]">Appointment</Link>
      </div>
    </nav>
  );
};

export default Navbar;
