/* eslint-disable react/prop-types */
const BannerCard = ({ img }) => {
  return (
    <div className="h-[600px] overflow-hidden rounded-lg relative">
      <img className="w-full" src={img} alt="" />
      <div className="absolute px-10 inset-0 text-white flex items-center bg-gradient-to-r from-black to-transparent ">
        <div className="w-2/5 space-y-8">
          <h1 className="font-semibold">
            Affordable <br /> Price For Car <br /> Servicing
          </h1>
          <p className="w-2/3">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div>
            <button className="btn btn-success mr-4">Discover More</button>
            <button className="btn btn-outline text-white">
              Latest Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
