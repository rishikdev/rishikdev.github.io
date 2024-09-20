import { Linkedin } from "lucide-react";
import NavbarButton from "./navbar-button";

const LinkedIn = () => {
  return (
    <NavbarButton
      symbol={<Linkedin className="h-[1.2rem] w-[1.2rem]" />}
      href="http://www.linkedin.com/in/rishik-dev"
      target="_blank"
    />
  );
};

export default LinkedIn;
