import Intro from '@/components/Intro'
import Courses from '@/components/Courses'
import Footers from '@/components/Footers'
import Testimoni from '@/components/Testimoni'
import Navbar from '@/components/Navbar'
import SideNav from '@/components/SideNav'
import MindStream from '@/components/MainStream'
import HouseCourse from '@/components/HouseCourse'
import Value from '@/components/Value'

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
        <Value/>
        <Testimoni/>
        <Footers/>
      </section>
    </>
  );
}