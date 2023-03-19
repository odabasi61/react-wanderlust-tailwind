import Card from "../components/Card";
import { data } from "../helper/data";

const Destinations = () => {
  // console.log(data);
  return (
    <div>
      <div className="backgroundDestination"></div>
      <div className="p-6 md:p-12 flex flex-col md:flex-row flex-wrap justify-center gap-4">
        {data.map(({ id, title, desc, image }) => (
          <Card key={id} id={id} title={title} desc={desc} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Destinations;
