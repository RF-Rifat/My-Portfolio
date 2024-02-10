import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedDialWithTextOutside } from "@/components/Shared/SpeedDial";
import CustomCursor from "@/components/AnimatedCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="max-w-[90rem] mx-auto">
          {children}
          <SpeedDialWithTextOutside />
          <CustomCursor />
        </div>
      </body>
    </html>
  );
}
