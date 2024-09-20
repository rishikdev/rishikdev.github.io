import { LayoutGrid } from "lucide-react";
import PortfolioButton from "./portfolio-button";

const PersonalProjectsButton = () => {
  return (
    <PortfolioButton
      symbol={<LayoutGrid className="mr-2 h-4 w-4" />}
      text="Personal Projects"
    />
  );
};

export default PersonalProjectsButton;
