"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtn({id}:any) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const router = useRouter();
    const removeTopic = async () => {
      const confirmed = confirm("Are you sure?");

      if (confirmed) {
        const res = await fetch(`${baseUrl}/api/topics/delete/${id}`, {
        //const res = await fetch(`http://localhost:3000/api/topics/delete/${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          router.refresh();
        }
      }
    };
    return (
      <button onClick={removeTopic} className="text-red-400">
        <HiOutlineTrash size={24} />
      </button>
    )
  }
