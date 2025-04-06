"use client"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchnews } from '../redux/Newsslice'
import { Appdispatch } from '@/redux/Store'

function Searchbar() {
    {/* search functionality*/}
    const [search,setsearch]=useState("")
  const dispatch:Appdispatch=useDispatch()
  const searchs=(e: React.ChangeEvent<HTMLInputElement>): void => {
    setsearch(e.target.value)
    console.log(e.target.value)
  }
  const submit=(e:React.FormEvent)=>{
 e.preventDefault()
  dispatch(fetchnews(search))
    }
    
  return (
    <>
       <form className="flex gap-1 items-center" onSubmit={submit}>
            <input className="w-[90%] text-black bg-white h-7"type="text" placeholder="Search News Here" onChange={searchs} />
            <button type="submit" className=" bg-blue-600 text-white h-7">Search</button>
          </form>
    </>
  )
}

export default Searchbar
