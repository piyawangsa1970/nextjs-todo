"use client"

import EditTodoForm from "@/components/todo/EditTodoForm";


const getTopicById = async (id:string) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  try {
    const res = await fetch(`${baseUrl}/api/topics/read/${id}`, {
    //const res = await fetch(`http://localhost:3000/api/topics/read/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const EditTodo = async ({params}:any) => {
  const { id } = params  
  const { topic } = await getTopicById(id);
  const { title, content } = topic;
  

  return <EditTodoForm id={id} title={title} content={content} />;
}

export default EditTodo