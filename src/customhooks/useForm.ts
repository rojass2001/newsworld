import { fetchnews } from "@/redux/Newsslice";
import { useState } from "react"
import { useDispatch } from 'react-redux';
import { Appdispatch } from "@/redux/Store";

function useForm() {
    const[search,setsearch]=useState<string>("")
    const dispatch = useDispatch<Appdispatch>();
  const handlechange=(e: React.ChangeEvent<HTMLInputElement>): void => {
    setsearch(e.target.value)
    console.log(e.target.value)
    }
    
  const submit=(e:React.FormEvent)=>{
     e.preventDefault()
     dispatch(fetchnews(search))
    }
    
  return{handlechange,search,submit}
}

export default useForm
