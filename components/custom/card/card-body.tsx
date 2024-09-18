interface CardBodyProps {
  body: React.ReactNode;
}

const CardBody = ({ body }: CardBodyProps) => {
  return <div className="py-2 whitespace-pre-line">{body}</div>;
};

export default CardBody;
