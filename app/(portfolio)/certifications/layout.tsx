import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rishik's Certifications",
  description: "This webpage lists the certifications completed by Rishik Dev.",
};

const CertificationsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <main>{children}</main>
    </div>
  );
};

export default CertificationsLayout;
