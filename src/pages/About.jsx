import mountain from "../assets/mountain.png";
import island from "../assets/island.png";

const About = () => {
  return (
    <div>
      <div className="backgroundAbout">
        <div className="flex justify-center pt-48">
          <h2 className="inline text-xl md:text-2xl lg:text-3xl xl:text-4xl text-green-500 bg-white/70 py-2 px-3 rounded-lg">
            About Us
          </h2>
        </div>
      </div>
      <div className="p-8">
        <h2 className="py-8 px-4 font-bold text-xl md:text-2xl lg:text-3xl">
          About Us
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-4 rounded-lg shadow-xl bg-gray-100 p-4">
          <div className=" w-full lg:w-2/5 xl:w-1/3">
            <img src={mountain} alt="mountain" className="w-96 m-auto" />
          </div>
          <div className="w-full lg:w-3/5 xl:w-2/3">
            <p>
              Welcome to our nature tour project! We are a team of passionate
              nature enthusiasts who are dedicated to sharing the beauty and
              wonder of the natural world with others. Our mission is to inspire
              people to connect with nature, to appreciate its value, and to
              take action to protect it for future generations. At the heart of
              our project is a deep love and respect for nature. We believe that
              spending time in nature is essential for our physical, mental, and
              spiritual well-being. It is a source of inspiration, wonder, and
              awe that can help us find meaning and purpose in our lives. Our
              team is made up of experienced nature guides, photographers,
              writers, and educators who are committed to creating meaningful
              and transformative nature experiences. We have traveled
              extensively around the world, exploring diverse ecosystems and
              learning about the incredible diversity of life on our planet. We
              are also passionate about sustainable tourism and responsible
              travel. We believe that travel can be a powerful force for good,
              creating economic opportunities for local communities and
              promoting conservation efforts. We strive to minimize our impact
              on the environment and to support local businesses and initiatives
              that promote sustainability.
            </p>
          </div>
        </div>
      </div>

      <div className="p-8">
        <h2 className="py-8 px-4 font-bold text-xl md:text-2xl lg:text-3xl">
          Our Tours
        </h2>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-4 rounded-lg shadow-xl bg-gray-100 p-4">
          <div className="w-full lg:w-3/5 xl:w-2/3">
            <p>
              Through our nature tours, we hope to share our love of nature and
              inspire others to explore and appreciate the natural world. We
              offer a range of tours and experiences, from guided hikes and
              wildlife safaris to photography workshops and cultural immersion
              programs. Our tours are carefully curated to showcase the best
              that nature has to offer. From stunning vistas to hidden
              waterfalls, we'll take you off the beaten path and show you the
              beauty that lies just beyond the horizon. Whether you're looking
              for a day trip or a multi-day adventure, we have something for
              everyone. Whether you're a seasoned adventurer or a first-time
              traveler, we have something for everyone. Thank you for joining us
              on this journey. We hope that our nature tours will not only give
              you a deeper appreciation of the natural world, but also inspire
              you to become a steward of the environment and a champion for
              conservation.
            </p>
          </div>
          <div className=" w-full lg:w-2/5 xl:w-1/3">
            <img src={island} alt="mountain" className="w-96 m-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
