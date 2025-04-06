"use client"
import { useDispatch, useSelector } from "react-redux"
import { fetchnews} from "../redux/Newsslice"
import { useEffect, } from "react";
import Image from "next/image";
import { Appdispatch, Rootstate } from '../redux/Store';
import { newslist } from "@/app/commontypes.ts/type";

function Newsgrid() { 
    const {newslist} = useSelector((state: Rootstate) => state.news);
    const dispatch=useDispatch<Appdispatch>() 
   useEffect(()=>{
  dispatch(fetchnews("india"))
   },[dispatch])
  return (
    <>
      <div className="w-full py-6">
    <div className="w-full py-8 px-5 grid gap-x-12 gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {newslist?.map((a:newslist) => (
            <div key={a.url} className="min-h-[280px] pb-3 space-y-2 relative text-white border-2 border-white ">
         
            <div className="w-full  relative h-[120px]">
              {a.urlToImage &&(
                <Image className="w-full h-full"  fill src={a.urlToImage} alt="image loading" />
              )
              }
              <div className="w-full text-center">image loading</div>
             </div>
        
            <p className="font-bold">{a.title?.slice(0,50)}</p>
            <p>{a.description?.slice(0, 50)}</p>
            <a href={a.url} className="px-4 py-2 absolute bottom-1 left-4 bg-blue-600" >Read More</a>
            
             </div>
          ))
      }
       
        </div>
      </div>
    </>
  )
}

export default Newsgrid
