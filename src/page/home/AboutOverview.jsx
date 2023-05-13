import parson from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";
const AboutOverview = () => {
  return (
    <div className="grid md:grid-cols-2 my-20 gap-8 place-items-center">
      <div className=" relative ">
        <img className="w-4/5 rounded-lg  shadow-lg " src={parson} alt="" />
        <img
          className="w-3/5 absolute -bottom-14 shadow-lg  right-5 rounded-lg border-8 border-white"
          src={parts}
          alt=""
        />
      </div>
      <div className="space-y-8">
        <h4 className="text-orange-700  font-semibold">About Us</h4>
        <h1 className="font-bold">
          We are qualified & of experience in this field
        </h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>
        <button className="btn bg-orange-600 text-white hover:bg-orange-800">
          Get More Info
        </button>
      </div>
    </div>
  );
};

export default AboutOverview;
