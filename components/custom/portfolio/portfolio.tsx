"use client";

import Link from "next/link";
import AcademicProjectsButton from "./academic-projects-button";
import ArticlesButton from "./articles-button";
import CertificationsButton from "./certifications-button";
import PersonalProjectsButton from "./personal-projects-button";

const Portfolio = () => {
  return (
    <div className="grid grid-cols-2 lg:flex gap-4">
      <Link className="w-full" href="/academic-projects">
        <AcademicProjectsButton />
      </Link>

      <Link className="w-full" href="personal-projects">
        <PersonalProjectsButton />
      </Link>

      <Link className="w-full" href="/articles">
        <ArticlesButton />
      </Link>

      <Link className="w-full" href="/certifications">
        <CertificationsButton />
      </Link>
    </div>
  );
};

export default Portfolio;
