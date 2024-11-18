import React from 'react'
import "./Category.css"
import { fetchproduct } from '../Redux/Reducer';
import { useDispatch } from 'react-redux';
function Category() {
  const dispatch=useDispatch();

  return (
    <div>
    <div className='category bg-black'>
        <button value="india" onClick={(e)=>dispatch(fetchproduct(e.target.value))}>Home</button>
        <button value="business" onClick={(e)=>dispatch(fetchproduct(e.target.value))}>business</button>
        <button value="sports" onClick={(e)=>dispatch(fetchproduct(e.target.value))}>sports</button>
        <button value="health" onClick={(e)=>dispatch(fetchproduct(e.target.value))}>health</button>
        <button value="politics" onClick={(e)=>dispatch(fetchproduct(e.target.value))}>politics</button>
    </div>  
    </div>
  )
}

export default Category
