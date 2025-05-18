"use client" // Enables client-side rendering for this component in Next.js 13+

// Import reusable components
import Categories from "@/Components/Categories";
import Navbar from "@/Components/Navbar";
import Newsgrid from "@/Components/Newsgrid";

// Home page component
export default function Home() {
  
  return (
    <main>
      {/* Navigation bar at the top of the page */}
      <Navbar />

      {/* Main content area with padding to avoid overlapping with fixed Navbar */}
      <div className='w-full pt-[80px]'>
        {/* Categories section, typically used for filtering or browsing by topics */}
        <Categories />

        {/* Grid layout displaying news or articles */}
        <Newsgrid />
      </div>
    </main>
  );
}

