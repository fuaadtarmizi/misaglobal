import { Inter } from "next/font/google";
import Head from 'next/head';
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "misa-global",
  description: "YEG ACADEMY adalah akronim kepada Your Education Guidance yang menyediakan khidmat konsultasi untuk kerjaya dan pendidikan terbaik pada masa kini. Kini, YEG Academy telah berkembang menjadi salah satu platform rujukan pendidikan terkini dan terbesar di Malaysia dengan menawarkan pelbagai bidang sambung belajar dengan penekanan modul pembelajaran berasaskan industri. Oleh itu, YEG Academy menjalinkan usahasama rapat bersama rakan IPT dalam merevolusikan modul diploma sedia ada supaya selaras dengan kehendak industri bagi mencapai 5 kayu ukur utama dalam memastikan graduan memenuhi kriteria seperti kelayakan, pengalaman, pendapatan, pekerjaan dan kebanggaan.",
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
