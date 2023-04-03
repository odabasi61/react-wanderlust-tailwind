import { data } from "../helper/data";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineHome } from "react-icons/ai";

const CityDetail = () => {
  const navigate = useNavigate();

  // const { title, desc, image } = data;

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
        <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-green-600 pt-8">
          {data[id - 1].title}
        </h2>
      </div>
      <div className="p-6 md:p-12">
        <p>{data[id - 1].desc}</p>
      </div>
      <div className="p-6 md:p-12 flex justify-center">
        <div className="w-4/5 sm:w-1/2 lg:w-1/3 bg-gray-200 rounded-xl p-4 sm:p-6 md:p-8">
          <div className="flex justify-between border-b border-black">
            <p>
              <strong>Accommodation:</strong>
            </p>
            <span>{data[id - 1].accommodation}</span>
          </div>
          <div className="flex justify-between pt-2 border-b border-black">
            <p>
              <strong>Difficulty:</strong>
            </p>
            <span>{data[id - 1].difficulty}</span>
          </div>
          <div className="flex justify-between pt-2 border-b border-black">
            <p>
              <strong>Guide:</strong>
            </p>
            <span>{data[id - 1].guide}</span>
          </div>
          <div className="flex justify-between pt-2 border-b border-black">
            <p>
              <strong>Group:</strong>
            </p>
            <span>{data[id - 1].people}</span>
          </div>
          <div className="flex justify-between pt-2 border-b border-black">
            <p>
              <strong>Period:</strong>
            </p>
            <span>{data[id - 1].day}</span>
          </div>
          <div className="flex justify-between pt-2 border-b border-black">
            <p>
              <strong>Price:</strong>
            </p>
            <span>{data[id - 1].price}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 py-4">
        <div
          type="button"
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 cursor-pointer font-bold bg-green-500 text-white py-2 px-4 rounded-full outline hover:bg-white hover:text-green-500 duration-300"
        >
          <AiOutlineArrowLeft />
          Go Back
        </div>
        <div
          type="button"
          onClick={() => navigate("/")}
          className="flex items-center gap-1 cursor-pointer font-bold bg-green-500 text-white py-2 px-4 rounded-full outline hover:bg-white hover:text-green-500 duration-300"
        >
          <AiOutlineHome /> Home Page
        </div>
      </div>
    </div>
  );
};

export default CityDetail;
