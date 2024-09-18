interface CardFooterProps {
  footer: React.ReactNode;
}

const CardFooter = ({ footer }: CardFooterProps) => {
  return <div className="text-sm text-muted-foreground py-2">{footer}</div>;
};

export default CardFooter;
