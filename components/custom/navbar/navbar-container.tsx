"use client";

import Navbar from "./navbar";

const NavbarContainer = () => {
  return (
    <div className="h-[3rem] fixed top-0 left-0 right-0 z-50 px-1 backdrop-blur-md">
      <Navbar />
    </div>
  );
};

export default NavbarContainer;
