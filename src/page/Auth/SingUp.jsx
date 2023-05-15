import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import SocialLogin from "./SocialLogin";

const SingUp = () => {
  const navigate = useNavigate();
  const { createUser, setLoading } = useContext(AuthContext);
  const location = useLocation();
  const from = location?.state;
  console.log(from);
  const handleSinUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    createUser(email, password)
      .then((res) => {
        form.reset();
        navigate(from || "/");
        const user = res.user;
        console.log(user);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  return (
    <div>
      <div className="w-2/3 border-2 px-16 py-8 rounded-lg shadow-xl space-y-4 ">
        <form onSubmit={handleSinUp} className="space-y-4 ">
          <h2 className="text-center font-semibold">Sing Up</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Your Email"
              name="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Your password"
              name="password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <button className="btn bg-orange-600 text-white hover:bg-orange-800">
              Sign Up
            </button>
          </div>
        </form>
        <div className="text-center">
          <p>Or Sign In with</p>
        </div>
        <SocialLogin />
        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link to={"/auth/login"} className="text-[#FF3811] font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SingUp;
