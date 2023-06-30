import { connectDB } from "@/lib/mongodb";
import Topic from "@/models/topics";
import { NextResponse } from "next/server";

export async function DELETE(req:Request, { params }:any){
    try{
        const { id } = params 
        await connectDB()
        await Topic.findByIdAndDelete(id)

        return NextResponse.json({message:"Deleted"},{status:200})
    }catch(error){
        return NextResponse.json({error:error} ,{status:500})
    }
}