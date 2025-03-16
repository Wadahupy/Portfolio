import React from "react";
import Logo from "../components/Logo";
import Navbar from "../components/NavBar";

const Header = () => {
  return (
    <header className="container flex-wrap bg-dark-background sticky top-0 z-[20] mx-auto flex w-full items-center justify-between">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
