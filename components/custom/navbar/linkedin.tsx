import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import Link from "next/link";

const LinkedIn = () => {
  return (
    <Button variant="ghost" size="icon" className="p-1" asChild>
      <Link href="http://www.linkedin.com/in/rishik-dev" target="_blank">
        <Linkedin className="h-[1.2rem] w-[1.2rem]" />
      </Link>
    </Button>
  );
};

export default LinkedIn;
