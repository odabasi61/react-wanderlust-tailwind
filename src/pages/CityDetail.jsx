import { data } from "../helper/data";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineHome } from "react-icons/ai";

const CityDetail = () => {
  const navigate = useNavigate();

  const { title, desc, image } = data;

  const { id } = useParams();

  return (
    <div className="flex flex-col">
      <div>
        <img
          className="w-full h-[80vh]"
          src={data[id - 1].image}
          alt={data[id - 1].title}
        />
      </div>
      <div>
        <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold py-4">
          {data[id - 1].title}
        </h2>
      </div>
      <div className="p-6 md:p-12">
        <p>{data[id - 1].desc}</p>
      </div>
      <div className="flex justify-center gap-4 py-4">
        <div
          type="button"
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 cursor-pointer bg-green-500 text-white py-2 px-4 rounded-full outline hover:bg-white hover:text-green-500 duration-300"
        >
          <AiOutlineArrowLeft />
          Go Back
        </div>
        <div
          type="button"
          onClick={() => navigate("/")}
          className="flex items-center gap-1 cursor-pointer bg-green-500 text-white py-2 px-4 rounded-full outline hover:bg-white hover:text-green-500 duration-300"
        >
          <AiOutlineHome /> Home Page
        </div>
      </div>
    </div>
  );
};

export default CityDetail;
