import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

const GitHub = () => {
  return (
    <Button variant="ghost" size="icon" className="p-1" asChild>
      <Link href="http://www.github.com/rishikdev" target="_blank">
        <Github className="h-[1.2rem] w-[1.2rem]" />
      </Link>
    </Button>
  );
};

export default GitHub;
