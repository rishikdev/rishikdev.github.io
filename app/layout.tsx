import type { Metadata } from "next";
import { Varela_Round } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/custom/theme/theme-provider";
import NavbarContainer from "@/components/custom/navbar/navbar-container";
import { cn } from "@/lib/utils";

const font = Varela_Round({
  subsets: ["latin"],
  weight: "400",
});

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
      <body className={cn("bg-stone-300 dark:bg-black", font.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavbarContainer />
          <div className="mt-[3rem] p-4 flex w-full justify-center text-justify">
            <div className="w-[95%] lg:w-[75%] 2xl:w-[50%] transition-all duration-500">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
