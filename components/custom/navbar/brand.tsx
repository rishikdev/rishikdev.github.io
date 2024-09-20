import Image from "next/image";
import sign from "../../../public/sign.png";
import NavbarButton from "./navbar-button";

const Brand = () => {
  return (
    <NavbarButton
      symbol={<Image src={sign} alt="RD Logo" width={25} height={25} />}
      href="/"
    />
  );
};

export default Brand;
