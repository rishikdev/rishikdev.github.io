import { ScrollText } from "lucide-react";
import PortfolioButton from "./portfolio-button";

const ArticlesButton = () => {
  return (
    <PortfolioButton
      symbol={<ScrollText className="mr-2 h-4 w-4" />}
      text="Articles"
    />
  );
};

export default ArticlesButton;
