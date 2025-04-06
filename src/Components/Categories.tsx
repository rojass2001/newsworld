"use client"
import { useDispatch } from "react-redux"
import  { Appdispatch } from "@/redux/Store"
const categories=["economics","Sports","Business","Politics","Bitcoin",]
  import { fetchnews } from "@/redux/Newsslice"
function Categories() {
     const dispatch:Appdispatch= useDispatch()
  return (
   
    <div className="w-full  h-[80px] px-5 justify-start md:justify-center flex items-center overflow-x-auto gap-5">
     {categories.map((a)=>(
    <button  onClick={()=>dispatch(fetchnews(a))}className="w-[130px] rounded-lg place-content-center h-9 bg-blue-600 text-center text-white" key={a}>
     {a}   
     </button>
      ))} 
      </div>
     
  )
}

export default Categories
