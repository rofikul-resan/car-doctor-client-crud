const StepCard = ({ i, number }) => {
  return (
    <div className="border bg-base-100 rounded-md p-12 flex flex-col justify-center items-center text-center space-y-5">
      <div className="h-16 w-16 font-bold text-white text-2xl rounded-full grid place-items-center bg-[#ff3811] border-8 border-base-200">
        {i}
      </div>
      <h3 className="uppercase font-semibold">Step {number}</h3>
      <p>It uses a dictionary of over 200 .</p>
    </div>
  );
};

export default StepCard;
