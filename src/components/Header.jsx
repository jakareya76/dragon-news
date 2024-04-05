import logo from "../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center pt-10">
      <img src={logo} alt="logo" className="max-w-[350px]" />
      <p className="py-2 text-[#706F6F]">Journalism Without Fear or Favour</p>
      <p className="text-xl font-semibold text-[#4d4a4a]">
        {moment().format("dddd, MMMM Do, YYYY")}
      </p>
    </header>
  );
};

export default Header;
