import { ScrollText } from "lucide-react";
import PortfolioButton from "./portfolio-button";

interface ArticlesButtonProps {
  path: string;
}

const ArticlesButton = ({ path }: ArticlesButtonProps) => {
  return (
    <PortfolioButton
      symbol={<ScrollText className="mr-2 h-4 w-4" />}
      text="Articles"
      href="/articles"
      path={path}
    />
  );
};

export default ArticlesButton;
