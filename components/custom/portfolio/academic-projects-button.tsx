import { GraduationCap } from "lucide-react";
import PortfolioButton from "./portfolio-button";

interface AcademicProjectsButtonProps {
  path: string;
}

const AcademicProjectsButton = ({ path }: AcademicProjectsButtonProps) => {
  return (
    <PortfolioButton
      symbol={<GraduationCap className="mr-2 h-4 w-4" />}
      text="Academic Projects"
      href="/academic-projects"
      path={path}
    />
  );
};

export default AcademicProjectsButton;
