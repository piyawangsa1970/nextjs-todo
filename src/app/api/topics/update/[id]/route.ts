import { connectDB } from "@/lib/mongodb";
import Topic from "@/models/topics";
import { NextResponse, NextRequest } from "next/server";

export async function PUT(req:NextRequest, { params }:any){
    try{
        const { newTitle, newContent } = await req.json();
        const { id } = params 
        console.log(id, newTitle, newContent)
        await connectDB()
        await Topic.findByIdAndUpdate(id, {title: newTitle, content: newContent})

        return NextResponse.json({message:"updated"},{status:200})
    }catch(error){
        return NextResponse.json({error:error} ,{status:500})
    }
}