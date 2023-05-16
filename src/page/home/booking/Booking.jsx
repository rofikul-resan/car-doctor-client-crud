import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Banner from "../../../components/Banner";
import BookingCard from "./BookingCard";
import RequestLoading from "../../../components/RequestLoading";
import ScrollToTop from "../../../components/ScrollToTop";

const Booking = () => {
  const [loading, setLoading] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [bookService, setBookService] = useState([]);
  const url = `https://car-doctor-server-omega-azure.vercel.app/booking?email=${user?.email}`;
  useEffect(() => {
    setLoading(true);
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `berar ${localStorage.getItem("car-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          logOut().then().catch();
          return;
        }
        setLoading(false);
        setBookService(data);
      });
  }, [url, logOut]);

  const handleConform = (id) => {
    fetch(`https://car-doctor-server-omega-azure.vercel.app/booking/${id}`, {
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
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  const handleDelete = (id) => {
    setLoading(true);
    fetch(`https://car-doctor-server-omega-azure.vercel.app/booking/${id}`, {
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
      <ScrollToTop />
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
