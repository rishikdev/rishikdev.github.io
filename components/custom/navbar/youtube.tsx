import { Button } from "@/components/ui/button";
import { Youtube } from "lucide-react";
import Link from "next/link";

const YouTube = () => {
  return (
    <Button variant="ghost" size="icon" className="p-1" asChild>
      <Link href="https://www.youtube.com/@RishikDev" target="_blank">
        <Youtube className="h-[1.2rem] w-[1.2rem]" />
      </Link>
    </Button>
  );
};

export default YouTube;
