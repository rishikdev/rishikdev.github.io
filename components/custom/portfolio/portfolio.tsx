"use client";

import Link from "next/link";
import AcademicProjectsButton from "./academic-projects-button";
import ArticlesButton from "./articles-button";
import CertificationsButton from "./certifications-button";
import PersonalProjectsButton from "./personal-projects-button";
import { usePathname } from "next/navigation";

const Portfolio = () => {
  const path = usePathname();

  return (
    <div className="grid grid-cols-2 lg:flex gap-4">
      <AcademicProjectsButton path={path} />

      <PersonalProjectsButton path={path} />

      <ArticlesButton path={path} />

      <CertificationsButton path={path} />
    </div>
  );
};

export default Portfolio;
