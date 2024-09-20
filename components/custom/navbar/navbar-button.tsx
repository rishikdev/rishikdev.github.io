import { Button } from "@/components/ui/button";
import Link from "next/link";

interface NavbarButtonProps {
  symbol: React.ReactNode;
  href: string;
  target?: string;
}

const NavbarButton = ({ symbol, href, target = "" }: NavbarButtonProps) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="p-1 transition-all duration-500 hover:text-green-600"
      asChild
    >
      <Link href={href} target={target}>
        {symbol}
      </Link>
    </Button>
  );
};

export default NavbarButton;
