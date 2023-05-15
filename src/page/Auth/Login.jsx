import { useContext } from "react";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const from = location?.state;
  console.log(from);
  const navigate = useNavigate();
  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    login(email, password)
      .then((res) => {
        form.reset();
        navigate(from || "/");
        const user = res.user;
        console.log(user);
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email: user.email, uid: user.uid }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("car-token", data.token);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form
        onSubmit={handleLogIn}
        className="w-2/3 border-2 px-16 py-8 rounded-lg shadow-xl space-y-4"
      >
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
          <Link
            to={"/auth/sing-up"}
            className="text-[#FF3811] font-bold"
            state={from}
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
