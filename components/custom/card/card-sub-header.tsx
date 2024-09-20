import { cn } from "@/lib/utils";

interface CardSubHeaderProps {
  primary_header1?: React.ReactNode;
  primary_header2?: React.ReactNode;
  secondary_header1?: React.ReactNode;
  secondary_header2?: React.ReactNode;
  className?: string;
}

const CardSubHeader = ({
  primary_header1 = undefined,
  primary_header2 = undefined,
  secondary_header1 = undefined,
  secondary_header2 = undefined,
  className = "",
}: CardSubHeaderProps) => {
  return (
    <div className={cn("grid", className)}>
      <div className="">
        {primary_header1 && <div className="font-bold">{primary_header1}</div>}
        {primary_header2 && (
          <div className="font-medium">{primary_header2}</div>
        )}
      </div>
      <div className="flex gap-2 divide-x">
        {secondary_header1 && (
          <div className="text-sm text-muted-foreground">
            {secondary_header1}
          </div>
        )}
        {secondary_header2 && (
          <div className="pl-2 text-sm text-muted-foreground">
            {secondary_header2}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardSubHeader;
