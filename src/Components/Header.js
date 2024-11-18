import React,{useEffect,useState} from 'react'
import'./Header.css';
import { fetchproduct } from '../Redux/Reducer';
import { useDispatch } from 'react-redux';
function Header() {
    const [searched,setsearched]=useState("india");
    
    const dispatch=useDispatch();
    const handles=(e)=>{
        setsearched(e.target.value);       
       }
    const  getdata=()=>{
    dispatch(fetchproduct(searched));
       
       }
        useEffect(()=>{ 
       getdata(); 
        },[] )
  return (
    <div className='header bg-black'>
     <h4 className='newsworld'><span className='badge  bg-danger'>NewsWorld</span></h4>
     <div className='search'>
     <input className='text' type="text" value={searched} placeholder='search news here' onChange={handles}/>
        <button onClick={getdata}>search</button>
     </div>
    </div>
  )
}

export default Header
