import React from "react";
import Logo from "../components/Logo";
import Navbar from "../components/NavBar";

const Header = () => {
  return (
    <header className="flex-wrap z-[20] flex w-full justify-end text-end sticky top-0  px-10">
      <Navbar />
    </header>
  );
};

export default Header;
