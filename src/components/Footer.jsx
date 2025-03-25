import React from "react";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-neutral-200 text-center text-white dark:bg-neutral-600">
      <div className="container mx-auto pt-9">
        <div className="mb-9 flex flex-row gap-10 text-2xl justify-center">
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
      </div>

      {/* <!--Copyright section--> */}
      <div className="bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
        © 2023 Copyright
      </div>
    </footer>
  );
};

export default Footer;
