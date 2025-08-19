import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { Link } from "react-scroll";

const NavLinks = ({ onClick }) => (
  <>
    {["home", "about", "works", "contact"].map((section) => (
      <Link
        key={section}
        to={section}
        smooth={true}
        duration={500}
        onClick={onClick}
        className="cursor-pointer hover:text-paragraph capitalize"
      >
        {section}
      </Link>
    ))}
  </>
);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="w-full fixed z-20 bg-black text-white">
      <div className="flex items-center justify-between px-6 py-4 md:px-10 ">
        <h1 className="text-2xl font-bold tracking-widest">DCQ</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 font-header text-xl">
          <NavLinks />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggle} className="text-white">
            {isOpen ? <LuX size={32} /> : <LuMenu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col items-center bg-black text-white space-y-6 py-6 md:hidden font-header text-xl border-t border-gray-700">
          <NavLinks onClick={closeMenu} />
        </div>
      )}
    </div>
  );
};

export default NavBar;
