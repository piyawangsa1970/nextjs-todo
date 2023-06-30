"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
  title: string;
  content: string;
}

function EditTodoForm({ id, title, content }: Props) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setContent] = useState(content);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`${baseUrl}/api/topics/update/${id}`, {
      //const res = await fetch(`http://localhost:3000/api/topics/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newContent }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/todo");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setContent(e.target.value)}
        value={newContent}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic content"
      />

      <button 
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Topic
      </button>
    </form>
  );
}
export default EditTodoForm