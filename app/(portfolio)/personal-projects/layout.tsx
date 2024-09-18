import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rishik's Personal Projects",
  description:
    "This webpage lists the details of some of the personal projects completed by Rishik Dev.",
};

const PersonalProjectsLayout = ({
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

export default PersonalProjectsLayout;
