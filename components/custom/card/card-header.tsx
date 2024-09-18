interface CardHeaderProps {
  header: React.ReactNode;
}

const CardHeader = ({ header }: CardHeaderProps) => {
  return <div className="text-xl font-bold py-2">{header}</div>;
};

export default CardHeader;
