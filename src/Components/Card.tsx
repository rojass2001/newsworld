"use client"
import React from 'react'
import Image from 'next/image'
import { newslist } from '@/commontypes.ts/type'
function Card({ news }: { news: newslist }) {
  return (
    <div  className="min-h-[280px] pb-3 space-y-2 relative text-white border-2 border-white ">
        <div className="w-full  relative h-[120px]">
            {news.urlToImage &&(
             <Image className="w-full h-full"  fill src={news.urlToImage} alt="image loading" />
            )}
          <div className="w-full text-center">image loading</div>
        </div>  
        <p className="font-bold">{news.title?.slice(0,50)}</p>
        <p>{news.description?.slice(0, 50)}</p>
        <a href={news.url} className="px-4 py-2 absolute bottom-1 left-4 bg-blue-600" >Read More</a>
    </div>
  )
}

export default Card
