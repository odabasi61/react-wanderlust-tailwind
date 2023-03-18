import { GiPalmTree } from "react-icons/gi";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black px-4">
      <div className="flex justify-center pt-12">
        <GiPalmTree size={80} className="text-green-600" />
      </div>
      <h3 className="text-green-600 text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl py-6  font-bold">
        Wonderlust
      </h3>
      <div className="flex flex-col md:flex-row justify-between text-white text-center">
        <div className="border-t">
          <ul className="flex gap-4 p-4 justify-center">
            <Link to={"about"} className="hover:text-green-500 duration-500">
              About Us
            </Link>
            <Link to={"contact"} className="hover:text-green-500 duration-500">
              Contact Us
            </Link>
            <Link to={"privacy"} className="hover:text-green-500 duration-500">
              Privacy Policy
            </Link>
            <Link to={"support"} className="hover:text-green-500 duration-500">
              Support
            </Link>
          </ul>
        </div>
        <div className="flex flex-col">
          <div className="p-4 border-t">
            <p>
              copyrigths &copy; {new Date().getFullYear()},{" "}
              <Link
                to={"https://github.com/odabasi61"}
                className="hover:text-green-500 duration-500"
              >
                Ali ODABAŞI
              </Link>
            </p>
          </div>
          <div>
            <ul className="flex gap-4 p-4 justify-center">
              <Link to={"https://github.com/odabasi61"}>
                <AiOutlineGithub
                  size={30}
                  className="hover:scale-105 hover:text-green-500 duration-500"
                />
              </Link>
              <Link to={"https://www.linkedin.com/in/ali-odaba%C5%9F%C4%B1/"}>
                <AiOutlineLinkedin
                  size={30}
                  className="hover:scale-105 hover:text-green-500 duration-500"
                />
              </Link>
              <Link to={"https://www.instagram.com/aliodabas_a/"}>
                <AiOutlineInstagram
                  size={30}
                  className="hover:scale-105 hover:text-green-500 duration-500"
                />
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
