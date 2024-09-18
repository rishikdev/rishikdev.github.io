import Image from "next/image";
import sign from "../../../public/sign.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Brand = () => {
  return (
    <Button variant="ghost" size="icon" className="p-1" asChild>
      <Link href="/">
        <Image src={sign} alt="RD Logo" width={25} height={25} />
      </Link>
    </Button>
  );
};

export default Brand;
