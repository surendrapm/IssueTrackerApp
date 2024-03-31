
import React from 'react'
import { IssueForm } from '../../../../ui'
import { notFound } from 'next/navigation'
import prisma from '@repo/database'


interface Props{
    params:{id:string}
}

const EditIssuePage = async({params}:Props) => {

  const issue = await prisma.issue.findUnique({
        where:{id:parseInt(params.id)}
    })
if(!issue) notFound();   


  return (
    <div>
        <IssueForm issue={issue}/>
    </div>
  )
}

export default EditIssuePage