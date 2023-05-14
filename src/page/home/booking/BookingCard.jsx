import { AiOutlineClose } from "react-icons/ai";

const BookingCard = ({ booking, handleConform, handleDelete }) => {
  const { date, serviceCost, name, img, serviceName, _id } = booking;
  return (
    <div className="grid booking-table-layout bg-base-200 rounded-md mb-6 px-6  items-center">
      <button
        onClick={() => handleDelete(_id)}
        className="btn btn-circle btn-outline btn-primary text-xl"
      >
        <AiOutlineClose></AiOutlineClose>
      </button>
      <div className="p-4">
        <img className="rounded-md" src={img} alt="" />
      </div>
      <div className="w-10/12 space-y-4">
        <h3>{serviceName}</h3>
        <p>Owner : {name}</p>
      </div>
      <p className="font-semibold text-xl">{serviceCost}</p>
      <p className="font-semibold text-xl">{date}</p>
      <div className="justify-self-center">
        {booking.state === "conform" ? (
          <p className="text-primary text-xl font-bold">conformed</p>
        ) : (
          <button
            onClick={() => handleConform(_id)}
            className="btn btn-success "
          >
            {" "}
            conform
          </button>
        )}
      </div>
    </div>
  );
};

export default BookingCard;
