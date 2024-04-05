import Header from "../components/Header";
import Navbar from "../components/Navbar";
import LeftSideNav from "../components/LeftSideNav";
import RightSideNav from "../components/RightSideNav";
import BreakingNews from "../components/BreakingNews";

const Home = () => {
  return (
    <>
      <Header />
      <BreakingNews />
      <Navbar />
      <main className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <div className="p-5 border">
          <LeftSideNav />
        </div>
        <div className="p-5 border md:col-span-2">
          <h2 className="text-2xl font-semibold">News Comming Soon</h2>
        </div>
        <div>
          <RightSideNav />
        </div>
      </main>
    </>
  );
};

export default Home;
