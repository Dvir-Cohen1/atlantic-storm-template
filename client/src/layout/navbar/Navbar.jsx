import React from "react";
import Navlinks from "./components/Navlinks";
import SocialNavLinks from "./components/SocialNavLinks";

const Navbar = () => {
  return (
    <nav className="Navbar bg-card-background/20 h-16 w-full backdrop-blur-sm flex justify-center align-middle items-center">
      <div className="container flex items-center justify-between h-full">
        <div className="flex">
          <SocialNavLinks />
        </div>
        <Navlinks />
      </div>
    </nav>
  );
};

export default Navbar;
