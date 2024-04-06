import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const SignUp = () => {
  const { signUpUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");

    if (password.length < 8) {
      alert("Password Must Be 8 Character");
      return;
    }

    try {
      await signUpUser(name, email, password);

      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Navbar />

      <div className="hero">
        <div className="flex-col hero-content">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold text-center">Sign Up now!</h1>
          </div>
          <div className="w-full shadow-2xl card shrink-0 bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link to="/login" className="label-text-alt link link-hover">
                    Already Have An Account?
                  </Link>
                </label>
              </div>
              <div className="form-control">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
