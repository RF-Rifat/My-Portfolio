import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/AnimatedCursor";
import ToggleButton from "@/components/Shared/ToggleButton";
import { SpeedDialWithTextOutside } from "@/components/Shared/SpeedDial";
import ChatApp from "@/components/Shared/ChatApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "Web developer || Mern Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <body className={`dark:bg-dark ${inter.className}`}>
        <div className="max-w-[90rem] mx-auto">
          {children}
          <div className="fixed top-10 z-50">
            <ToggleButton />
            <SpeedDialWithTextOutside />
          </div>
          <CustomCursor />
          <ChatApp />
        </div>
      </body>
    </html>
  );
}
