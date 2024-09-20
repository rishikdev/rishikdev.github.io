import { GraduationCap } from "lucide-react";
import PortfolioButton from "./portfolio-button";

const AcademicProjectsButton = () => {
  return (
    <PortfolioButton
      symbol={<GraduationCap className="mr-2 h-4 w-4" />}
      text="Academic Projects"
    />
  );
};

export default AcademicProjectsButton;
