import bannerImg from "../assets/images/checkout/checkout.png";
const Banner = ({ info }) => {
  return (
    <div className="relative  overflow-hidden rounded-xl">
      <img className="w-full" src={bannerImg} alt="" />
      <div className="absolute text-white inset-0 bg-gradient-to-r from-black to-transparent flex items-center z-10 pl-24">
        <h1>{info}</h1>
      </div>
    </div>
  );
};

export default Banner;
