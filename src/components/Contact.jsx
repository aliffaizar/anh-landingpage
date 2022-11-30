import { FaLinkedin, FaMapMarkedAlt, FaWhatsapp } from "react-icons/fa";
import { GoMailRead } from "react-icons/go";
import { MdContactPhone } from "react-icons/md";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full bg-farm bg-no-repeat bg-center bg-cover scroll-smooth"
    >
      <div className="h-full min-h-[350px] bg-gray-300">
        <div className="container py-10">
          <h1 className="text-center text-3xl font-bold uppercase text-gray-600">
            Contacts Us
          </h1>
          <div className="relative flex flex-col lg:flex-row items-center gap-5 p-5">
            <div className="bg-gray-800 h-72 w-full lg:w-96 lg:absolute lg:top-1/2  lg:-translate-y-1/2 rounded p-10">
              <div className="flex flex-col justify-center gap-3">
                <h3 className="text-center text-gray-300 text-xl font-semibold">
                  Contact Info
                </h3>
                <div className="flex items-center text-gray-300 gap-3">
                  <FaMapMarkedAlt className="w-7 h-7" />
                  <p>Puspahiang, Tasikmalya, Indonesia</p>
                </div>
                <div className="flex items-center text-gray-300 gap-3">
                  <GoMailRead className="w-7 h-7" />
                  <p>info@anh.co.id</p>
                </div>
                <div className="flex items-center text-gray-300 gap-3">
                  <MdContactPhone className="w-7 h-7" />
                  <p>+62 8521-1134-765</p>
                </div>
                <div className="w-full text-gray-300 flex gap-5 items-center justify-center mt-7">
                  <a
                    href="https://wa.me/628122222411"
                    target="_blank"
                    className="hover:text-green-500"
                  >
                    <FaWhatsapp className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/pt-bumi-merdeka-selatan/"
                    target="_blank"
                    className="hover:text-green-500"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-md shadow-gray-200 p-5 lg:ml-48 lg:pl-48 rounded">
              <h3 className="text-center text-2xl text-gray-600 font-semibold">
                Send Message
              </h3>
              <form className="space-y-5 p-5 mb-5">
                <input
                  className="w-full outline outline-1 outline-gray-400 focus:outline-green-500 rounded px-3 py-1"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                />
                <input
                  className="w-full outline outline-1 outline-gray-400 focus:outline-green-500 rounded px-3 py-1"
                  type="text"
                  name="company"
                  id="company"
                  placeholder="Company"
                />
                <input
                  className="w-full outline outline-1 outline-gray-400 focus:outline-green-500 rounded px-3 py-1"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Emial"
                />
                <textarea
                  className="w-full outline outline-1 outline-gray-400 focus:outline-green-500 rounded px-3 py-1 resize-none"
                  name="message"
                  id="message"
                  rows={3}
                  placeholder="message"
                />
                {/* <input
                  type="button"
                  value="SEND"
                  className="float-right bg-green-500 text-white px-7 py-1 rounded"
                /> */}
                <button
                  disabled
                  className="float-right bg-green-500 text-white px-16 py-2 rounded"
                >
                  SEND
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
