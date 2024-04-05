import {
  FaGoogle,
  FaFacebookF,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import SwimmingImg from "../assets/qZone1.png";
import SwimmingClass from "../assets/qZone2.png";
import SwimmingPlay from "../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <>
      <div className="p-5 border rounded-lg">
        <h2 className="text-xl font-bold">Login With</h2>
        <div>
          <button className="w-full mt-4 text-blue-400 bg-transparent border-blue-400 btn hover:bg-white">
            <FaGoogle />
            Login With Google
          </button>
          <button className="w-full my-4 bg-transparent border-zinc-800 text-zinc-800 btn hover:bg-white">
            <FaFacebookF />
            Login With Facebook
          </button>
        </div>
      </div>

      <div className="p-5 my-5 border rounded-lg">
        <h2 className="text-xl font-bold">Find Us On</h2>
        <div>
          <a href="#">
            <div className="flex items-center w-full gap-4 p-2 mt-4 text-left text-blue-500 bg-transparent border border-blue-500 cursor-pointer rounded-xl hover:bg-white">
              <FaFacebook size={24} />
              Facebook
            </div>
          </a>
          <a href="#">
            <div className="flex items-center w-full gap-4 p-2 mt-4 text-left text-blue-500 bg-transparent border border-blue-500 cursor-pointer rounded-xl hover:bg-white">
              <FaTwitter size={24} />
              Twitter
            </div>
          </a>
          <a href="#">
            <div className="flex items-center w-full gap-4 p-2 mt-4 text-left text-blue-500 bg-transparent border border-blue-500 cursor-pointer rounded-xl text -xl hover:bg-white">
              <FaInstagram size={24} />
              Instagram
            </div>
          </a>
        </div>
      </div>

      <div className="bg-[#F3F3F3] p-5 border rounded-lg">
        <h2 className="text-xl font-bold">Q-Zone</h2>
        <img src={SwimmingImg} alt="img" className="my-5" />
        <img src={SwimmingClass} alt="img" className="my-5" />
        <img src={SwimmingPlay} alt="img" />
      </div>
    </>
  );
};

export default RightSideNav;
