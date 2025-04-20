"use client"
import useForm from "@/customhooks/useForm"
import Form from "./Form"

function Searchbar() {
  const{submit,handlechange}=useForm() 
  return (
    <>
       <Form className="flex gap-1 items-center" submit={submit}>
            <input className="w-[90%] text-black bg-white h-7"type="text" placeholder="Search News Here" onChange={handlechange} />
            <button type="submit" className=" bg-blue-600 text-white h-7">Search</button>
       </Form>
    </>
  )
}

export default Searchbar
