import { ScaleLoader } from "react-spinners";

const RequestLoading = () => {
  return (
    <div className="absolute h-screen w-screen md:inset-0 flex justify-center items-center z-20 bg-black/75">
      <ScaleLoader color="#fff" />
    </div>
  );
};

export default RequestLoading;
