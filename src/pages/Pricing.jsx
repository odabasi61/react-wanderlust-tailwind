import sea from "../assets/sea.jpg";
import jungle from "../assets/jungle.jpg";
import snow from "../assets/snow.jpg";

const Pricing = () => {
  return (
    <div>
      <div className="backgroundPrice"></div>
      <div className="p-6 md:p-12">
        <h2 className="text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold pb-12 text-green-500">
          OUR TOUR CATEGORIES
        </h2>
        <div className=" flex flex-wrap gap-6 justify-center">
          <div className="card shadow-xl rounded-lg overflow-hidden w-72 bg-white">
            <div className="image relative">
              <img className="img" src={sea} alt="sea side" />
              <div className="absolute bottom-10 right-0 text-right pr-4 text-lg">
                <span className="bg-orange-400/80 py-2 px-3 text-white">
                  THE SEA
                </span>
                <br />
                <span className="bg-orange-400/80 py-2 px-3 text-white">
                  EXPLORER
                </span>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-orange-500/20 z-10 bg"></div>
            </div>
            <div className="info">
              <ul className="text-center p-4">
                <li className="border-b py-2">7 day tours</li>
                <li className="border-b py-2">Up to 15 people</li>
                <li className="border-b py-2">3 tour guides</li>
                <li className="border-b py-2">Sleep in cozy hotels</li>
                <li className="border-b py-2">Difficulty: easy</li>
                <li className="border-b py-2">Price: $299</li>
              </ul>
            </div>
          </div>

          <div className="card shadow-xl rounded-lg overflow-hidden w-72 bg-white">
            <div className="image relative">
              <img className="img" src={jungle} alt="sea side" />
              <div className="absolute bottom-10 right-0 text-right pr-4 text-lg">
                <span className="bg-green-400/80 py-2 px-3 text-white">
                  THE FOREST
                </span>
                <br />
                <span className="bg-green-400/80 py-2 px-3 text-white">
                  HIKER
                </span>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-green-500/20 z-10 bg"></div>
            </div>
            <div className="info">
              <ul className="text-center p-4">
                <li className="border-b py-2">5 day tours</li>
                <li className="border-b py-2">Up to 20 people</li>
                <li className="border-b py-2">4 tour guides</li>
                <li className="border-b py-2">Sleep in tents</li>
                <li className="border-b py-2">Difficulty: medium</li>
                <li className="border-b py-2">Price: $399</li>
              </ul>
            </div>
          </div>

          <div className="card shadow-xl rounded-lg overflow-hidden w-72 bg-white">
            <div className="image relative">
              <img className="img" src={snow} alt="sea side" />
              <div className="absolute bottom-10 right-0 text-right pr-4 text-lg">
                <span className="bg-purple-400/80 py-2 px-3 text-white">
                  THE SNOW
                </span>
                <br />
                <span className="bg-purple-400/80 py-2 px-3 text-white">
                  ADVENTURER
                </span>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-purple-500/20 z-10 bg"></div>
            </div>
            <div className="info">
              <ul className="text-center p-4">
                <li className="border-b py-2">3 day tours</li>
                <li className="border-b py-2">Up to 5 people</li>
                <li className="border-b py-2">1 tour guide</li>
                <li className="border-b py-2">Sleep in tents</li>
                <li className="border-b py-2">Difficulty: hard</li>
                <li className="border-b py-2">Price: $499</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-center py-4">
          <span>
            <strong>Note:</strong>
          </span>{" "}
          These are the starting prices of the tours in their categories. Final
          price changes according to the destination.
        </p>
      </div>
    </div>
  );
};

export default Pricing;
