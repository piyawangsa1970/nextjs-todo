"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"


function AddTodo() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const router = useRouter()

  const handleSubmit= async (e:any)=>{
      e.preventDefault()

      if(!title || !content){
        alert("Title and content are required.")
        return
      }
      try {
        const res = await fetch(`${baseUrl}/api/topics/create`, {
        //const res = await fetch("http://localhost:3000/api/topics/create", {
          method:"POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({title, content})
        }) 
        if (res.ok){
          router.push('/todo')
        } else{
          throw new Error('Failed to create a topic')
        }

      }catch(error){
        console.log('error:', error);
      }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">

      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setContent(e.target.value)}
        value={content}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic content"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add Topic
      </button>

    </form>
  )
}

export default AddTodo