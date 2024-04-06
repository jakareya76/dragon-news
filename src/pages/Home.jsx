import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import LeftSideNav from "../components/LeftSideNav";
import RightSideNav from "../components/RightSideNav";
import BreakingNews from "../components/BreakingNews";
import NewsCard from "../components/NewsCard";

const Home = () => {
  const news = useLoaderData();

  return (
    <>
      <Header />
      <BreakingNews />
      <Navbar />
      <main className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <div className="p-5 border">
          <LeftSideNav />
        </div>
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold">
            {news.map((item) => {
              return <NewsCard key={item._id} news={item} />;
            })}
          </h2>
        </div>
        <div>
          <RightSideNav />
        </div>
      </main>
    </>
  );
};

export default Home;
