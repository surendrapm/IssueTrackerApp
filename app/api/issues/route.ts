import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import prisma from "@/prisma/client";

const createIssueSchema = z.object({
    title: z.string().min(1,{message:'Title is required.'}).max(255),
    description:z.string().min(1,{message:'Description is required'})
})

export async function POST(request:NextRequest){

    const body =  await request.json();
    const validation = createIssueSchema.safeParse(body);
    if(!validation.success){
        const errorMessages = validation.error.errors.map(error=>error.message)
         return NextResponse.json(errorMessages,{status:400})
    }
   const newIssue = await prisma.issue.create({
      data:{
        title: body.title, 
        description: body.description
    }
   })
              console.log('successfully created issue')
       return NextResponse.json(newIssue,{status:201})
}