import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const SignUp = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen hero">
        <div className="flex-col hero-content">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold text-center">Sign Up now!</h1>
          </div>
          <div className="w-full shadow-2xl card shrink-0 bg-base-100">
            <form className="card-body">
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
              <div className="mt-6 form-control">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
