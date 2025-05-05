import { LayoutGrid } from "lucide-react";
import PortfolioButton from "./portfolio-button";

interface PersonalProjectsButtonProps {
  path: string;
}

const PersonalProjectsButton = ({ path }: PersonalProjectsButtonProps) => {
  return (
    <PortfolioButton
      symbol={<LayoutGrid className="mr-2 h-4 w-4" />}
      text="Personal Projects"
      href="/personal-projects"
      path={path}
    />
  );
};

export default PersonalProjectsButton;
