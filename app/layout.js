import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Houses for Rent",
  description: "Generated by create next app",
  name: "robots",
  content: "index",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} transition-all`}>{children}</body>
    </html>
  );
}
