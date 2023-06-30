"use client"
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi"
import RemoveBtn from "./RemoveBtn"

const getTopics = async () => {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
	try {
		const res = await fetch(`${baseUrl}/api/topics/limit`, {
		//const res = await fetch("http://localhost:3000/api/topics/limit", {
			cache: "no-store"
		})
		if (!res.ok) {
			throw new Error("Failed to fetch topics")
		}
		return res.json()
	} catch (error) {
		console.log("Error loading topics", error);
	}
}

async function TopicList() {
	const { topics } = await getTopics()
	return (
		<>{topics.map((topic:any) => (
			<div 
				key = {topic._id}
				className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">

				<div>
					<div className="text-2xl font-bold"> {topic.title}</div>
					<div>Topic Content</div>
				</div>

				<div className="flex gap-2">
					<RemoveBtn id={topic._id}/>
					<Link href={`/todo/edit/${topic._id}`}>
						<HiPencilAlt size={24} />
					</Link>
				</div>

			</div>
		))}
		</>
	)
}

export default TopicList