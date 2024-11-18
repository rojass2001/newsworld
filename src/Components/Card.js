import React from 'react'
import'./Card.css'
import { useSelector,useDispatch } from 'react-redux';
function Card() {   
    const {search,artic}=useSelector((state)=>state.cart);
    const dispatch=useDispatch();
  return (
    <div>  
        <div className='cardcontainer'>  
        {artic.map((news,index)=>(
       <div className='cards bg-black' key={news.id} >  
        <img className='cardimage 'src= {news.image?news.image:"https://tse2.mm.bing.net/th?id=OIP.G37tgeQqSNt7v2oPfj9ltQHaE7&pid=Api&P=0&h=180"}/>
          <p className='title'>{news.title?news.title.slice(0,60):"nodata"}</p>
          <p className='des'>{news.description?news.description.slice(0,80):"nodata"}</p>
          <a href={news.url} className='btn btn-primary'>readmore</a>
      </div>
))}

    </div>
    </div>
  )
}

export default Card
