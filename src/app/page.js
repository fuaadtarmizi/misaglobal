// import Image from "next/image";
// import Intro from '@/components/Intro'
import Intro from '@/components/Intro'
import Courses from '@/components/Courses'
// import Section1 from '@/components/Section1'
import Footers from '@/components/Footers'
import Testimoni from '@/components/Testimoni'
import Navbar from '@/components/Navbar'
import SideNav from '@/components/SideNav'
// import ScrollMotion from '@/components/ui/ScrollMotion'
import MindStream from '@/components/MainStream'
import Animation from '@/components/Animation'
import HouseCourse from '@/components/HouseCourse'

export default function Home() {
  return (
    <>
    <div className='absolute top-0 left-0 z-20 hidden lg:block w-full'><Navbar/></div>
    <nav className='lg:hidden w-full'><SideNav/></nav>
      <section className="w-full">
        <Intro/>
        <MindStream/>
        <Courses/>
        <HouseCourse/>
        <Animation/>
        <Testimoni/>
        <Footers/>
      </section>
    </>
  );
}