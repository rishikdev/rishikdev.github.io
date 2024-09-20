import { Github } from "lucide-react";
import NavbarButton from "./navbar-button";

const GitHub = () => {
  return (
    <NavbarButton
      symbol={<Github className="h-[1.2rem] w-[1.2rem]" />}
      href="https://github.com/rishikdev"
      target="_blank"
    />
  );
};

export default GitHub;
