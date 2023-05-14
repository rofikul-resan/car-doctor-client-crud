import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Banner from "../../../components/Banner";
import BookingCard from "./BookingCard";
import RequestLoading from "../../../components/RequestLoading";

const Booking = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const [bookService, setBookService] = useState([]);
  const url = `http://localhost:5000/booking?email=${user?.email}`;
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setBookService(data);
      });
  }, [url]);

  const handleConform = (id) => {
    setLoading(true);
    fetch(`http://localhost:5000/booking/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ state: "conform" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount > 0) {
          const remain = bookService.filter((bs) => bs._id !== id);
          const update = bookService.find((bs) => bs._id === id);
          update.state = "conform";
          setBookService([update, ...remain]);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  const handleDelete = (id) => {
    setLoading(true);
    fetch(`http://localhost:5000/booking/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remain = bookService.filter((bs) => bs._id !== id);
          setBookService(remain);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      {loading && <RequestLoading />}
      <div>
        <Banner info={"Booking Details"} />
        <div className="my-24">
          {bookService.map((bs) => (
            <BookingCard
              key={bs._id}
              booking={bs}
              handleConform={handleConform}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Booking;
