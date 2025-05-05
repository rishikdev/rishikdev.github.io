import { FileBadge } from "lucide-react";
import PortfolioButton from "./portfolio-button";

interface CertificationsButtonProps {
  path: string;
}

const CertificationsButton = ({ path }: CertificationsButtonProps) => {
  return (
    <PortfolioButton
      symbol={<FileBadge className="mr-2 h-4 w-4" />}
      text="Certifications"
      href="/certifications"
      path={path}
    />
  );
};

export default CertificationsButton;
