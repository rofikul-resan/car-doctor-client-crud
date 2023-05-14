import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../../../assets/logo.svg";

const ServiceDetailsRight = ({ price, id }) => {
  const location = useLocation();
  const [services, setService] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="space-y-10">
      <div className="bg-base-200 rounded-md space-y-6 p-10">
        {services.map((ser) => (
          <div key={ser._id} className="bg-white rounded-md overflow-hidden">
            <NavLink
              to={`/services/${ser._id}`}
              className={`
                ${
                  location.pathname === `/services/${ser._id}` &&
                  "bg-orange-600 text-white"
                } 
                    p-6 font-semibold flex w-full justify-between items-center    `}
            >
              {ser.title} <BsArrowRight className="text-xl" />{" "}
            </NavLink>
          </div>
        ))}
      </div>
      <div className="p-10 bg-[#151515] text-white space-y-8 ">
        <img className="mx-auto" src={logo} alt="" />
        <p className="w-3/5 mx-auto text-center font-semibold">
          Need Help? We Are Here <br /> To Help You
        </p>
      </div>
      <div>
        <h2 className="text-black font-semibold">Price ${price}</h2>
        <Link
          to={`/check-out/${id}`}
          className="btn btn-block bg-[#FF3811] mt-6 hover:bg-[#d82400]"
        >
          Proceed Checkout
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetailsRight;
