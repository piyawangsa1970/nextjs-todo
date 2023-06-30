import { connectDB } from "@/lib/mongodb";
import Topic from "@/models/topics";
import { NextResponse } from "next/server";

export async function GET(req:Request, { params }:any){
    try{
        const { id } = params 
        await connectDB()
        const topic = await Topic.findById(id)

        return NextResponse.json({topic},{status:200})
    }catch(error){
        return NextResponse.json({error:error} ,{status:500})
    }
}