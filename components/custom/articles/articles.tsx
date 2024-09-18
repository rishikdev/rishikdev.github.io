"use client";

import Link from "next/link";
import certifications from "../../../public/data/certifications.json";
import { ScrollText } from "lucide-react";

const Articles = () => {
  return (
    <div className="flex h-fit text-6xl text-muted-foreground">
      <div className="m-auto">No Articles</div>
    </div>
  );
};

export default Articles;
