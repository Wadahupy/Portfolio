import React from "react";

const NavBar = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="justify-center">
        <h1>My Website</h1>
      </div>
      <div>
        <ul className="flex flex-row justify-center gap-50 font-header text-2xl">
          <li>Home</li>
          <li>About</li>
          <li>Works</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex flex-row">
        <form action="search">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-lg p-2"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default NavBar;
