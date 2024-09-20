import { Youtube } from "lucide-react";
import NavbarButton from "./navbar-button";

const YouTube = () => {
  return (
    <NavbarButton
      symbol={<Youtube className="h-[1.2rem] w-[1.2rem]" />}
      href="https://www.youtube.com/@RishikDev"
      target="_blank"
    />
  );
};

export default YouTube;
