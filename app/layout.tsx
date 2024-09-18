import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/custom/theme/theme-provider";
import Navbar from "@/components/custom/navbar/navbar";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rishik's Portfolio",
  description:
    "A website that details the work, competencies, and education qualifications of Rishik Dev.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="mt-[3rem] p-4 flex w-full justify-center text-justify">
            <div className="w-[95%] 2xl:w-[50%] transition-all duration-500">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
