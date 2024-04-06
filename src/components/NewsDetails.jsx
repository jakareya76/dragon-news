import { useParams, useLoaderData } from "react-router-dom";
import Header from "./Header";
import BreakingNews from "./BreakingNews";
import RightSideNav from "./RightSideNav";
import Navbar from "./Navbar";

const NewsDetails = () => {
  const allNews = useLoaderData();

  const { id } = useParams();

  const currentNews = allNews.filter((news) => {
    return news._id === id;
  });

  const { image_url, title, details } = currentNews[0];

  return (
    <>
      <Header />
      <BreakingNews />
      <Navbar />

      <div className="grid md:grid-cols-4">
        <div className="p-4 md:col-span-3">
          <img src={image_url} alt="img" className="w-full" />
          <h2 className="my-4 text-2xl font-bold">{title}</h2>
          <p>{details}</p>
        </div>
        <div className="md:col-span-1">
          <RightSideNav />
        </div>
      </div>
    </>
  );
};

export default NewsDetails;
