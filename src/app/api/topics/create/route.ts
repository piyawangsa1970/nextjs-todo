import { connectDB } from "@/lib/mongodb";
import Topic from "@/models/topics";
import { NextResponse } from "next/server";

export async function POST(req: Request){
    try{
        const { title, content } = await req.json();
        
        await connectDB()
        await Topic.create({title, content})

        return NextResponse.json({title, content},{status:200})
    }catch(error){
        return NextResponse.json({error:error} ,{status:500})
    }
}