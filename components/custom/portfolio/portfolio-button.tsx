import { Button } from "@/components/ui/button";

interface PortfolioButtonProps {
  symbol: React.ReactNode;
  text: string;
}

const PortfolioButton = ({ symbol, text }: PortfolioButtonProps) => {
  return (
    <Button
      variant="ghost"
      className="w-full flex justify-start transition-all duration-500 hover:text-green-600"
    >
      {symbol}
      {text}
    </Button>
  );
};

export default PortfolioButton;
