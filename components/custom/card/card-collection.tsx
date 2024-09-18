interface CardCollectionProps {
  children: React.ReactNode;
}

const CardCollection = ({ children }: CardCollectionProps) => {
  return (
    <div className="grid gap-8 md:grid-cols-2 3xl:grid-cols-3 transition-all duration-500">
      {children}
    </div>
  );
};

export default CardCollection;
