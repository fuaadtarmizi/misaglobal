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
      <section className="w-full">
        <Intro/>
        <MindStream/>
        <Courses/>
        <HouseCourse/>
        <Value/>
        <Testimoni/>
      </section>
    </>
  );
}