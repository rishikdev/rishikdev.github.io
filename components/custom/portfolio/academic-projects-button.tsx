"use client";

import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

const AcademicProjectsButton = () => {
  return (
    <div className="w-full grid md:flex gap-4">
      <Button
        variant="ghost"
        className="w-full flex justify-start transition-all duration-500"
      >
        <GraduationCap className="mr-2 h-4 w-4" />
        Academic Projects
      </Button>
    </div>
  );
};

export default AcademicProjectsButton;
