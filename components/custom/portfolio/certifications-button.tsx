import { FileBadge } from "lucide-react";
import PortfolioButton from "./portfolio-button";

const CertificationsButton = () => {
  return (
    <PortfolioButton
      symbol={<FileBadge className="mr-2 h-4 w-4" />}
      text="Certifications"
    />
  );
};

export default CertificationsButton;
