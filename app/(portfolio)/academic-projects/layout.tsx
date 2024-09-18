import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rishik's Academic Projects",
  description:
    "This webpage lists the details of academic projects completed by Rishik Dev.",
};

const AcademicProjectsLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-full relative">
      <main>{children}</main>
    </div>
  );
};

export default AcademicProjectsLayout;
