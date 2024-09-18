import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rishik's Articles",
  description: "This webpage lists the articles written by Rishik Dev.",
};
const ArticlesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <main>{children}</main>
    </div>
  );
};

export default ArticlesLayout;
