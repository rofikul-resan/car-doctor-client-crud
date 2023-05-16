import { useLoaderData } from "react-router-dom";
import Banner from "../../../../components/Banner";
import StepCard from "./StepCard";
import ServiceDetailsRight from "./ServiceDetailsRight";
import ScrollToTop from "../../../../components/ScrollToTop";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { _id, title, price, img, facility, description } = service;
  console.log(service);
  return (
    <div>
      <ScrollToTop />
      <Banner info="Service Details" />
      <div className="grid service-details-layout gap-6">
        <div className="my-28">
          <img className="w-full rounded-lg" src={img} alt={title} />
          <div className="mt-12 space-y-10">
            <h1 className="font-bold text-black">{title}</h1>
            <p className="text-justify">{description}</p>
            <div className="grid grid-cols-2 gap-6">
              {facility.map((fac, i) => (
                <div
                  key={i}
                  className="border-t-4 border-orange-700 rounded-lg mb-6 bg-base-300 "
                >
                  <div className="p-10 space-y-4">
                    <h3>{fac.name}</h3>
                    <p>{fac.details}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-justify">{description}</p>
          </div>
          <div className="mt-12">
            <h2 className="font-bold text-black">3 Simple Steps to Process</h2>
            <p className="text-justify mt-10">{description}</p>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <StepCard i={"01"} number={"one"} />
              <StepCard i={"02"} number={"Tow"} />
              <StepCard i={"03"} number={"three"} />
            </div>
          </div>
        </div>
        <div className="my-28">
          <ServiceDetailsRight price={price} id={_id} />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
