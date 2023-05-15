import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const from = location?.state;
  const navigate = useNavigate();
  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then(() => {
        form.reset();
        navigate(from || "/");
      })
      .catch((err) => {
        console.log(err);
        form.reset();
      });
  };
  return (
    <div className="w-2/3 border-2 px-16 py-8 rounded-lg shadow-xl space-y-4 h-fit">
      <form onSubmit={handleLogIn} className=" space-y-4">
        <h2 className="text-center font-semibold">Log in</h2>
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
            Sign In
          </button>
        </div>
      </form>
      <div className="text-center">
        <p>Or Sign In with</p>
      </div>
      <SocialLogin />
      <p className="text-center text-sm">
        Do not Have an account?{" "}
        <Link
          to={"/auth/sing-up"}
          className="text-[#FF3811] font-bold"
          state={from}
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
