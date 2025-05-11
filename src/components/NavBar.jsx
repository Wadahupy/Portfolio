import { useState } from "react";
import { NavLink } from "react-router";
import { LuMenu, LuX } from "react-icons/lu";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div className="flex flex-col text-white md:flex-col font-header text-2xl w-full ">
      <Link
        to="home"
        smooth={true}
        duration={500}
        className="cursor-pointer hover:text-gray-500"
      >
        Home
      </Link>
      <Link
        to="about"
        smooth={true}
        duration={500}
        className="cursor-pointer hover:text-gray-500"
      >
        About
      </Link>
      <Link
        to="works"
        smooth={true}
        duration={500}
        className="cursor-pointer hover:text-gray-500"
      >
        Works
      </Link>
      <Link
        to="contact"
        smooth={true}
        duration={500}
        className="cursor-pointer hover:text-gray-500"
      >
        Contacts
      </Link>
    </div>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex justify-between items-center p-4">
        {/* Desktop Navigation */}
        <div className="md:flex">
          <Nav />
        </div>

        {/* Mobile Menu Button */}
        {/* <div className="md:hidden">
          <button onClick={toggle} className="text-3xl">
            {isOpen ? <LuX size={50} /> : <LuMenu size={50} />}
          </button>
        </div> */}
      </nav>

      {/* Mobile Navigation */}
      {/* {isOpen && (
        <div className="flex flex-col items-center gap-4 bg-white w-full py-4 border-t border-gray-300 md:hidden">
          <Nav />
        </div>
      )} */}
    </>
  );
};

export default NavBar;
