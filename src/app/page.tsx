"use client"
import Categories from "@/Components/Categories";
import Navbar from "@/Components/Navbar";
import Newsgrid from "@/Components/Newsgrid";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Categories/>
     <div className='w-full pt-[130px]'>
          <Newsgrid/>
      </div>
  
    </main>
  );
}
