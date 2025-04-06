"use client"
import Navbar from "@/Components/Navbar";
import Newsgrid from "@/Components/Newsgrid";


export default function Home() {
  return (
    <main>
    <Navbar/>
     <div className='w-full pt-[130px]'>
          <Newsgrid/>
      </div>
  
    </main>
  );
}
