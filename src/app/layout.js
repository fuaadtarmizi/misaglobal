import { Inter } from "next/font/google";
import Head from 'next/head';
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "MISA",
  description: "Malaysian Industry Skills Academy melahirkan pakar industri dalam bidang Oil & Gas, Maritim, Renewble Energy, Telekomunikasi .",
  rel:"icon",
  href:"./logomisa.png",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      

      <body className={inter.className}>{children}</body>
      
    </html>    
  );
}
