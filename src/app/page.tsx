"use client"
import Categories from "@/Components/Categories";
import Navbar from "@/Components/Navbar";
import Newsgrid from "@/Components/Newsgrid";


export default function Home() {
  return (
    <main>
      <Navbar />
      
      <div className='w-full pt-[80px]'>
        <Categories/>
          <Newsgrid/>
      </div>
  
    </main>
  );
}
