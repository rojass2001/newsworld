import React from 'react'
import './Helo.css'
import { fetchproduct } from '../Redux/Reducer';
import { useSelector,useDispatch } from 'react-redux';
function Helo() {
    const dispatch=useDispatch();
//const  getdata=()=>{
  
 //}
  return (
    <div>
      <div className='helos'>
    <button onClick={()=>dispatch((fetchproduct()))}>helfgo</button>
    <h1 className='warning'>hello</h1>
      </div>
    </div>
  )
}

export default Helo
