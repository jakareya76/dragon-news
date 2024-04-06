import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, title, details, thumbnail_url, total_view, author, rating } =
    news;

  return (
    <div className="mb-8 border shadow-xl">
      <div className="p-5">
        <h2 className="card-title">{title}</h2>
      </div>
      <figure>
        <img
          src={thumbnail_url}
          alt="img"
          className="w-full h-[300px] object-cover bg-center"
        />
      </figure>
      <div className="p-5">
        <p className="text-sm font-normal text-justify text-gray-600">
          {details.slice(0, 200)}
        </p>
        <Link
          to={`news/${_id}`}
          className="text-sm text-orange-500 hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
