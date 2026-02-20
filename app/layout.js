import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/views/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shivom Verma | Portfolio",
  description: "Personal portfolio of Shivom Verma - Full Stack Developer",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.className} antialiased bg-[#04081A] text-white`}
      >
        <Header />

        {children}
      </body>
    </html>
  );
}
