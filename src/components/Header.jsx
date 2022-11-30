import { useState } from "react";
import { Popover } from "@headlessui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logoanh.png";
import { useEffect } from "react";

export default function Header() {
  const [scrolled, setScolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setScolled(window.pageYOffset > 150);
  };

  return (
    <Popover
      as="div"
      className={`w-full fixed top-0 z-20 ${
        scrolled ? "bg-white text-gray-600" : "text-gray-300 "
      }`}
    >
      {(open) => (
        <header className="flex relative items-center justify-between container px-3 py-1 z-10">
          <a href="">
            <img
              className="w-[150px] lg:w-[200px]"
              src={logo}
              alt="anh fruits group"
            />
          </a>
          <nav
            className={`hidden lg:flex items-center gap-3 text-lg font-semibold ${
              scrolled ? "text-gray-600" : "text-gray-300"
            }`}
          >
            <a href="#hero">Home</a>
            <a href="#products">Products</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </nav>

          <Popover.Button className="lg:hidden">
            <FaBars className="w-6 h-6" />
          </Popover.Button>
          <Popover.Panel className="absolute inset-x-0 top-0 bg-white px-3 py-1 text-gray-600">
            <div className="flex items-center justify-between ">
              <a href="">
                <img className="w-[150px]" src={logo} alt="anh fruits group" />
              </a>
              <Popover.Button>
                <FaTimes className="w-6 h-6" />
              </Popover.Button>
            </div>
            <div className="flex flex-col p-3 text-lg font-semibold">
              <a href="/">Home</a>
              <a href="#products">Products</a>
              <a href="#about">About Us</a>
              <a href="#contact">Contact</a>
            </div>
          </Popover.Panel>
        </header>
      )}
    </Popover>
  );
}
