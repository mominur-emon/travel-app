import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaSistrix,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };
  return (
    <div className="flex  justify-between items-center h-20 p-4">
      <div>
        <h1 onClick={handleNav} className={logo ? "hidden" : "block"}>
          BEACHES.
        </h1>
      </div>
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>View</li>
        <li>Back</li>
      </ul>
      <div className=" hidden md:flex">
        <FaSistrix className="mr-2" size={20} />
        <IoMdPerson size={20} />
      </div>
      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? <AiOutlineClose size={20} /> : <HiMenu size={20} />}
      </div>
      {/* Mobile Menu dropdown */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
            : "absolute left-[100%]"
        }
      >
        <ul>
          <h1>BEACHES.</h1>
          <li className="border-b">Destinations</li>
          <li className="border-b">Travel</li>
          <li className="border-b">Home</li>
          <li className="border-b">View</li>
          <li className="border-b">Back</li>
        </ul>
        <div className="flex flex-col">
          <button className="my-6">Search</button>
          <button>Account</button>
        </div>
        <div className="flex justify-between my-7">
          <FaFacebook className="icon" />
          <FaTwitter className="icon" />
          <FaYoutube className="icon" />
          <FaPinterest className="icon" />
          <FaInstagram className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
