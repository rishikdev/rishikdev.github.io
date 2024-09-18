"use client";

import { Button } from "@/components/ui/button";
import { ScrollText } from "lucide-react";

const ArticlesButton = () => {
  return (
    <div className="w-full grid md:flex gap-4">
      <Button
        variant="ghost"
        className="w-full flex justify-start transition-all duration-500"
      >
        <ScrollText className="mr-2 h-4 w-4" />
        Articles
      </Button>
    </div>
  );
};

export default ArticlesButton;
