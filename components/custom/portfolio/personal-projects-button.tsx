"use client";

import { Button } from "@/components/ui/button";
import { LayoutGrid } from "lucide-react";

const PersonalProjectsButton = () => {
  return (
    <div className="w-full grid md:flex gap-4">
      <Button
        variant="ghost"
        className="w-full flex justify-start transition-all duration-500"
      >
        <LayoutGrid className="mr-2 h-4 w-4" />
        Personal Projects
      </Button>
    </div>
  );
};

export default PersonalProjectsButton;
