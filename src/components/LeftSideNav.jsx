import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const res = await fetch("/data/categories.json");
      const data = await res.json();

      setCategories(data);
    };

    getCategories();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold">All Categories</h2>
      {categories.map((category) => {
        return (
          <Link to="/" key={category.id}>
            <div className="p-4 my-4 text-xl font-semibold bg-gray-100 border rounded-lg cursor-pointer">
              <h2>{category.name}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default LeftSideNav;
