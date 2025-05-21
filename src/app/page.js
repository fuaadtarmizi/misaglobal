import Image from "next/image";
import Intro from '@/components/Intro'
import Intro2 from '@/components/Intro2'
import Intro3 from '@/components/Intro3'
import Courses from '@/components/Courses'
import Section1 from '@/components/Section1'
import Footer from '@/components/Footer'
import Testimoni from '@/components/Testimoni'
import Navbar from '@/components/Navbar'
import SideNav from '@/components/SideNav'
import ScrollMotion from '@/components/ui/ScrollMotion'


export default function Home() {
  return (
    <>
    <div className='absolute top-0 left-0 z-20 hidden lg:block w-full'><Navbar/></div>
    <nav className='lg:hidden w-full'><SideNav/></nav>
      <section className="w-full">
        <Intro2/>
        <Intro3/>
        <Courses/>
        <Testimoni/>
        <Footer/>
      </section>
    </>
  );
}