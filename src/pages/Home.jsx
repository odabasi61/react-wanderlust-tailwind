import { Link } from "react-router-dom";
import nat1 from "../assets/nat-1.jpg";
import nat2 from "../assets/nat-2.jpg";
import nat3 from "../assets/nat-3.jpg";
import explore from '../assets/explore.png';
import { BiWorld, BiCompass, BiMapAlt, BiHeart } from "react-icons/bi";

const Home = () => {
  return (
    <div>
      <div className="backgroundHome text-white flex justify-center flex-col items-center gap-3">
        <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          Natural Wonders Expeditions
        </h1>
        <p className="text-sm md:text-lg lg:text-xl">
          Discover the beauty of the great outdoors
        </p>
        <Link
          to={"pricing"}
          className="bg-white font-bold text-green-500 py-2 px-4 rounded-lg hover:text-white hover:bg-green-400 duration-300"
        >
          {" "}
          Travel Plan
        </Link>
      </div>
      <div className="p-6 md:p-12">
        <h2 className="text-center text-green-500 text-xl md:text-2xl lg:text-3xl xl:text-4xl pb-6 md:pb-12">
          EXCITING TOURS FOR ADVENTUROUS PEOPLE
        </h2>
        <div className="flex flex-col-reverse lg:flex-row gap-14">
          <div className="w-full lg:w-1/2">
            <div className="mb-4 shadow-xl bg-gray-100 p-3 rounded-lg hover:-translate-y-2 duration-300">
              <h3 className="text-green-500 font-bold pb-3">
                YOU ARE GOING TO FALL IN LOVE WITH NATURE
              </h3>
              <p>
                Nature has an inexplicable way of captivating our hearts and
                souls. From the serene sound of a babbling brook to the majestic
                beauty of a towering mountain range, nature has the power to
                evoke a sense of wonder and awe within us. It is no wonder that
                many people find themselves falling in love with nature.
              </p>
            </div>
            <div className="shadow-xl bg-gray-100 p-3 rounded-lg hover:-translate-y-2 duration-300">
              <h3 className="text-green-500 font-bold pb-3">
                LIVE ADVENTURES THAT YOU NEVER HAD BEFORE
              </h3>
              <p>
                Life is full of adventures waiting to be explored. Every day
                presents new opportunities to step outside our comfort zones and
                try something new. Perhaps it's taking a spontaneous road trip,
                skydiving from a plane, or hiking through an unknown trail.
                Whatever it may be, the thrill of new experiences can be
                life-changing.
              </p>
            </div>
            <Link to={"destinations"}>
              <button className="text-green-500 pb-1 mt-3 border-b border-green-500">
                Learn more&rarr;
              </button>
            </Link>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="images relative flex flex-col md:flex-row gap-2 justify-center">
              <div>
                <img
                  className="lg:absolute lg:top-0 lg:left-32 rounded-lg hover:scale-105 hover:z-10 duration-200 m-auto"
                  src={nat1}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="lg:absolute lg:top-10 lg:left-40 rounded-lg hover:scale-105 hover:z-10 duration-200 m-auto"
                  src={nat2}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="lg:absolute lg:top-16 lg:left-20 rounded-lg hover:scale-105 hover:z-10 duration-200 m-auto"
                  src={nat3}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-12 flex flex-col md:flex-row flex-wrap gap-4 justify-center">
        <div className="card flex flex-col w-full md:w-72 p-4 text-center bg-green-400/20 shadow-xl rounded-lg hover:-translate-y-2 duration-300">
          <div className="flex justify-center">
            <BiWorld size={80} className="text-green-500" />
          </div>
          <h3 className="py-4 font-bold">EXPLORE THE WORLD</h3>
          <p>
            Exploring the world is an exhilarating experience that allows us to
            expand our horizons, learn about different cultures, and create
            unforgettable memories. From breathtaking natural landscapes to
            bustling cities, the world offers a diverse range of sights, sounds,
            and experiences to discover. Whether it's through traveling, trying
            new foods, or learning a new language, exploring the world can
            broaden our perspectives and deepen our understanding of the global
            community.
          </p>
        </div>

        <div className="card flex flex-col w-full md:w-72 p-4 text-center bg-green-400/20 shadow-xl rounded-lg hover:-translate-y-2 duration-300">
          <div className="flex justify-center">
            <BiCompass size={80} className="text-green-500" />
          </div>
          <h3 className="py-4 font-bold">MEET NATURE</h3>
          <p>
            Meeting nature is an opportunity to connect with the natural world
            and immerse oneself in its beauty, wonder, and tranquility. Whether
            it's hiking in a national park, swimming in the ocean, or simply
            enjoying a quiet walk through a forest, nature provides a respite
            from the hustle and bustle of daily life. It also offers a chance to
            learn about the interconnectedness of all living things and the
            delicate balance that sustains our planet.
          </p>
        </div>

        <div className="card flex flex-col w-full md:w-72 p-4 text-center bg-green-400/20 shadow-xl rounded-lg hover:-translate-y-2 duration-300">
          <div className="flex justify-center">
            <BiMapAlt size={80} className="text-green-500" />
          </div>
          <h3 className="py-4 font-bold">FIND YOUR WAY</h3>
          <p>
            Finding your way in nature can be a rewarding and transformative
            experience that allows you to connect with the natural world,
            challenge yourself, and develop a deeper appreciation for the beauty
            and complexity of our planet. Whether you're going on a day hike or
            embarking on a multi-day backpacking trip, it's important to
            familiarize yourself with the terrain, weather conditions, and
            potential hazards.
          </p>
        </div>

        <div className="card flex flex-col w-full md:w-72 p-4 text-center bg-green-400/20 shadow-xl rounded-lg hover:-translate-y-2 duration-300">
          <div className="flex justify-center">
            <BiHeart size={80} className="text-green-500" />
          </div>
          <h3 className="py-4 font-bold">LIVE A HEALTHIER LIFE</h3>
          <p>
            Natural sports, such as hiking, swimming, cycling, and running,
            offer a great way to exercise while also enjoying the beauty of the
            outdoors. These activities can provide a sense of adventure and
            exploration, as well as an opportunity to connect with nature and
            recharge our mental batteries. Furthermore, participating in natural
            sports can help build physical strength and endurance, improve
            cardiovascular health, and boost our immune systems.
          </p>
        </div>
      </div>

      <div className="p-6 md:p-12">
      <div className="flex flex-col lg:flex-row items-center gap-4 rounded-lg shadow-xl bg-gray-100 p-4">
          <div className=" w-full lg:w-2/5 xl:w-1/3">
            <img src={explore} alt="mountain" className="w-96 m-auto" />
          </div>
          <div className="w-full lg:w-3/5 xl:w-2/3 text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-green-500 py-4">EXPLORE THE WILD AND CHARMING NATURE</h2>
            <p>
            Exploring a beautiful landscape can be an exhilarating experience that invigorates the senses and lifts the soul. The natural beauty of the terrain can stimulate the imagination and inspire creativity. As you journey through the landscape, you may encounter breathtaking vistas, pristine lakes, and vibrant flora and fauna. The fresh air and the gentle rustling of leaves can calm the mind and soothe the spirit, providing a welcome respite from the hustle and bustle of everyday life. Whether you're hiking, biking, or simply taking a leisurely stroll, exploring a scenic landscape is a wonderful way to reconnect with nature and rejuvenate your body and mind.
            </p>
          </div>
        </div>
      </div>

      <Link to={"destinations"} className="flex w-fit m-auto mb-10">
          <button className="bg-green-500 rounded-full py-2 px-4 font-bold text-white hover:bg-white hover:text-green-500 outline duration-300">
            Discover All Tours
          </button>
        </Link>
    </div>
  );
};

export default Home;
