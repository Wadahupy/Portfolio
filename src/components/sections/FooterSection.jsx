import {FaArrowUp, FaArrowLeft } from "react-icons/fa";

const Footer = () => {

  
  return (
    <footer className="bg-black text-white py-10 mt-20">
      <div className="mx-10 px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand or Name */}
        <h2 className="text-2xl font-bold tracking-widest text-primary">DCQ</h2>

        {/* Navigation Links */}
        <ul className="flex flex-wrap gap-6 text-sm text-gray-400">
          <li className="hover:text-primary transition">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-primary transition">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-primary transition">
            <a href="#works">Projects</a>
          </li>
          <li className="hover:text-primary transition">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex flex-row gap-1 justify-center items-center text-lg ">
          <a href="#Home" className="text-paragraph text-sm hover:underline hover:text-primary">Back to the top </a><FaArrowUp className="size-3"/>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
