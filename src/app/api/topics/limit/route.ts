import { connectDB } from "@/lib/mongodb";
import Topic from "@/models/topics";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        await connectDB()
        const topics = await Topic.find({}).limit(10)

        return NextResponse.json({topics},{status:200})
    }catch(error){
        return NextResponse.json({error:error} ,{status:500})
    }
}