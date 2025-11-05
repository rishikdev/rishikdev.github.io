"use client";

import Portfolio from "../portfolio/portfolio";
import PortfolioDrawer from "../portfolio/portfolio-drawer";
import { ThemeToggle } from "../theme/theme-toggle";
import Brand from "./brand";
import GitHub from "./github";
import LinkedIn from "./linkedin";
import ORCID from "./orcid";
import YouTube from "./youtube";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full h-[3rem] transition-all duration-500">
      <div className="flex-none">
        <Brand />
      </div>
      <div className="hidden lg:flex">
        <Portfolio />
      </div>
      <div className="flex gap-2">
        <GitHub />
        <LinkedIn />
        <ORCID />
        <YouTube />
        <ThemeToggle />
        <div className="lg:hidden">
          <PortfolioDrawer />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
