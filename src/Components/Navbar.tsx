"use client"
import Searchbar from "./Searchbar"
function Navbar() {
  
  return (
    <nav className="w-full fixed top-0 right-0  bg-black left-0 z-30">
        <div className='w-full  flex items-center bg-black px-2 justify-between shadow-md shadow-gray-300 min-h-[60px]'>
            <div className=" h-[40px] w-[120px] rounded-lg bg-blue-600 flex text-xl text-white font-bold items-center">
              <h2>News World</h2>
             </div>
            <Searchbar/>
        </div>
       
    </nav>
  )
}

export default Navbar
