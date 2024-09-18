"use client";

import { Button } from "@/components/ui/button";
import { FileBadge } from "lucide-react";

const CertificationsButton = () => {
  return (
    <div className="w-full grid md:flex gap-4">
      <Button
        variant="ghost"
        className="w-full flex justify-start transition-all duration-500"
      >
        <FileBadge className="mr-2 h-4 w-4" />
        Certifications
      </Button>
    </div>
  );
};

export default CertificationsButton;
