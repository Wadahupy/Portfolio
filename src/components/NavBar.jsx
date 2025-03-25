import { useState } from "react";
import { NavLink } from "react-router";
import { LuMenu, LuX } from "react-icons/lu";

const Nav = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-20 font-header text-2xl stick">
      <NavLink to="/" className="hover:text-gray-500">
        Home
      </NavLink>
      <NavLink to="/about" className="hover:text-gray-500">
        About
      </NavLink>
      <NavLink to="/works" className="hover:text-gray-500">
        Works
      </NavLink>
      <NavLink to="/contact" className="hover:text-gray-500">
        Contacts
      </NavLink>
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
        <div className="hidden md:flex">
          <Nav />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggle} className="text-3xl">
            {isOpen ? <LuX size={50} /> : <LuMenu size={50} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="flex flex-col items-center gap-4 bg-white w-full py-4 border-t border-gray-300 md:hidden">
          <Nav />
        </div>
      )}
    </>
  );
};

export default NavBar;
