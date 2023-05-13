/* eslint-disable react/prop-types */

import { BsArrowRight } from "react-icons/bs";

const ServiceCard = ({ service }) => {
  // eslint-disable-next-line no-unused-vars
  const { img, price, title, service_id } = service;
  return (
    <div className="p-6 border">
      <div className="h-52 overflow-hidden rounded-md">
        <img className="w-full" src={img} alt="" />
      </div>
      <h4 className="my-3">{title}</h4>
      <div className="text-[#FF3811] flex justify-between items-center font-semibold ">
        <p> Price : $ {price}</p>
        <button>
          <BsArrowRight className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
