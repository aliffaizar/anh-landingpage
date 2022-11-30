import { ImLeaf } from "react-icons/im";
import Header from "./Header";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative z-10 bg-hero bg-cover bg-center scroll-smooth"
    >
      <Header />
      <div className="bg-gray-900/50 h-screen w-full flex items-center justify-center relative">
        <div className="text-center">
          <h1 className="text-3xl lg:text-5xl text-gray-300 font-bold uppercase">
            Fresh organic fruits
          </h1>
          <h1 className="text-2xl lg:text-4xl text-gray-300 font-bold capitalize">
            Healthy Life With Fresh and organic fruits
          </h1>

          <a
            className="bg-green-600 text-white uppercase px-6 py-2 rounded-md mt-3 font-semibold inline-block"
            href="https://wa.me/628122222411?text=hello..."
            target="_blank"
          >
            Contact
          </a>
        </div>
      </div>
      <div className=" w-full relative z-10 -mt-20 bg-gray-100 pb-10">
        <div className="container grid grid-cols-2 gap-10 lg:grid-cols-4 px-5">
          <div className="flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-white flex items-center justify-center rounded-full shadow-md shadow-gray-200 text-green-500 -mt-10">
              <ImLeaf className="w-7 h-7" />
            </div>
            <p className="text-lg lg:text-xl font-semibold capitalize text-gray-600">
              Certified organic
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-white flex items-center justify-center rounded-full shadow-md shadow-gray-200 text-green-500 -mt-10">
              <ImLeaf className="w-7 h-7" />
            </div>
            <p className="text-lg lg:text-xl font-semibold capitalize text-gray-600">
              Certified organic
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-white flex items-center justify-center rounded-full shadow-md shadow-gray-200 text-green-500 lg:-mt-10">
              <ImLeaf className="w-7 h-7" />
            </div>
            <p className="text-lg lg:text-xl font-semibold capitalize text-gray-600">
              Certified organic
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-white flex items-center justify-center rounded-full shadow-md shadow-gray-200 text-green-500 lg:-mt-10">
              <ImLeaf className="w-7 h-7" />
            </div>
            <p className="text-lg lg:text-xl font-semibold capitalize text-gray-600">
              Certified organic
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
