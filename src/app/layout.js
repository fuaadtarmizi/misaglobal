import { Inter } from "next/font/google";
import Head from 'next/head';
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "MISA",
  description: "Malaysian Industry Skills Academy melahirkan pakar industri dalam bidang Oil & Gas, Maritim, Renewble Energy, Telekomunikasi .",
  rel:"icon",
  href:"./logomisa.svg",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charset="UTF-8"/>
        <title>{metadata.title}</title>
        <link rel="icon" href="./logomisa.svg" sizes="16x16" type="image/svg+xml" />
      </Head>
      
      <body className={inter.className}>{children}</body>
      
    </html>    
  );
}
