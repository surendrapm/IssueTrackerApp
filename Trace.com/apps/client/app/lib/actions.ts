
import { NextRequest, NextResponse } from 'next/server'
import { createIssueSchema } from '../validationSchemas';
import prisma from '@repo/database';



//creating issues
export async function CreateIssue(request:NextRequest){

    const body =  await request.json();
    console.log(body.title)
    const validation = createIssueSchema.safeParse(body);
    if(!validation.success){
     
         return NextResponse.json(validation.error.errors,{status:400})
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















//Reading a issues
// export async function GET(response:NextResponse){
//   try{
//     const GetAllIssues = await prisma.issue.findMany();
//     return NextResponse.json(GetAllIssues,{status:201})
//   }catch(error){
//       return NextResponse.json("issues not found",{status:401})
//   }
   
// }