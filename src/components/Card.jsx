import { Link, Navigate, useNavigate } from "react-router-dom";

const Card = ({ id, title, desc, image }) => {
  const navigate = useNavigate();

  // console.log(id, title, desc, image);
  return (
    <div
      type="button"
      onClick={() => navigate(`/destinations/${id}`)}
      className="cities p-4 bg-gray-200 rounded-lg shadow-xl overflow-hidden relative cursor-pointer"
    >
      <p className="py-3 font-bold text-green-600 text-xl md:text-2xl">{title}</p>
      <div>
        <img
          className="w-full h-[400px] md:w-[400px] md:h-[350px] object-cover rounded-lg"
          src={image}
          alt={title}
        />
      </div>
    </div>
  );
};

export default Card;
