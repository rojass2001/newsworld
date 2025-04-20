"use client"
import { useDispatch, useSelector } from "react-redux"
import { fetchnews} from "../redux/Newsslice"
import { useEffect, } from "react";
import { Appdispatch, Rootstate } from '../redux/Store';
import { newslist } from "@/commontypes.ts/type";
import Card from "./Card";

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
        {newslist?.map((news:newslist) => (
            <Card news={news} key={news.url}/>
          ))}
        </div>
    </div>
    </>
  )
}

export default Newsgrid
