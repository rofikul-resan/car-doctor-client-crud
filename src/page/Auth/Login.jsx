import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <form className="w-2/3 border-2 p-16 rounded-lg shadow-xl space-y-6">
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
            type="text"
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
        <div className="text-center">
          <p>Or Sign In with</p>
        </div>
        <div className="from-control flex gap-4 text-primary justify-center">
          <button>
            <BsFacebook className="btn btn-circle btn-ghost p-2" />
          </button>
          <button>
            <BsGithub className="btn btn-circle btn-ghost p-2" />
          </button>
          <button>
            <BsGoogle className="btn btn-circle btn-ghost p-2" />
          </button>
        </div>
        <p className="text-center text-sm">
          Do not Have an account?{" "}
          <Link className="text-[#FF3811] font-bold">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
