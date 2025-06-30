import Navbar from '@/components/Navbar'
import SideNav from '@/components/SideNav'
import Footers from '@/components/Footers'
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
      <body className={inter.className}>{children}
        <div className='absolute top-0 left-0 z-20 hidden lg:block w-full'><Navbar/></div>
        <div className='lg:hidden absolute top-0 w-full'><SideNav/></div>
        <Footers/>
      </body>
      
    </html>    
  );
}
