"use client";

import NavbarTopComponents from "./navbar-top-components";

const Navbar = () => {
  return (
    <div className="h-[3rem] fixed top-0 left-0 right-0 z-50 px-1 backdrop-blur-md">
      <NavbarTopComponents />
    </div>
  );
};

export default Navbar;
