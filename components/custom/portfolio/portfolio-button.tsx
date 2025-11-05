import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface PortfolioButtonProps {
  symbol: React.ReactNode;
  text: string;
  href: string;
  path?: string;
}

const PortfolioButton = ({
  symbol,
  text,
  href,
  path = "",
}: PortfolioButtonProps) => {
  return (
    <Link href={href}>
      <Button
        variant="ghost"
        className={cn(
          "w-full flex justify-start transition-all duration-500 lg:border-b-4 lg:border-transparent rounded-none",
          path === href && "bg-accent text-accent-foreground lg:bg-transparent lg:border-b-accent"
        )}
      >
        {symbol}
        {text}
      </Button>
    </Link>
  );
};

export default PortfolioButton;
