import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="backgroundHome text-white flex justify-center flex-col items-center gap-3">
      <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
        Natural Wonders Expeditions
      </h1>
      <p className="text-sm md:text-lg lg:text-xl">
        Discover the beauty of the great outdoors
      </p>
      <Link
        to={"pricing"}
        className="bg-white text-green-500 py-2 px-4 rounded-lg hover:text-white hover:bg-green-400 duration-300"
      >
        {" "}
        Travel Plan
      </Link>
    </div>
  );
};

export default Home;
