import { useLoaderData } from "react-router-dom";
import Banner from "../../../components/Banner";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  console.log(service);
  const handelCheckOut = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const serviceCost = form.serviceCost.value;
    const date = form.date.value;
    const massage = form.textarea.value;
    const orderInfo = {
      img: service.img,
      name,
      email,
      serviceCost,
      date,
      massage,
      serviceName: service.title,
    };
    console.log(orderInfo);
    fetch(
      `https://car-doctor-server-omega-azure.vercel.app/orders/${service._id}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderInfo),
      }
    )
      .then((res) => res.json())
      .then((date) => {
        console.log(date);
        form.reset();
      });
  };
  return (
    <div>
      <Banner info={"Check Out"} />
      <div className="my-14">
        <form
          onSubmit={handelCheckOut}
          className=" px-10 md:px-24 py-10 bg-base-200 rounded-lg "
        >
          <h1 className="text-center font-bold mb-8 text-black">
            {service.title}
          </h1>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                defaultValue={user?.displayName}
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Cost</span>
              </label>
              <input
                type="text"
                placeholder="Service Cost"
                defaultValue={service.price}
                name="serviceCost"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <textarea
              name="textarea"
              placeholder="Your Message"
              className="p-6 input input-bordered h-[250px] resize-none"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-block bg-[#FF3811] mt-6 hover:bg-[#d82400]"
            >
              Order Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
