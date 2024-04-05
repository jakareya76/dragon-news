import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex items-center bg-[#F3F3F3] p-5 rounded my-8 gap-10">
      <button className="px-10 text-lg text-white btn btn-error">Latest</button>
      <Marquee pauseOnHover={true}>
        <p className="text-xl font-medium">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as
        </p>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
