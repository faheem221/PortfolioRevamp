import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Protfolio Revamp",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,300,400&display=swap"
          rel="stylesheet"
        ></link>
        

      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
