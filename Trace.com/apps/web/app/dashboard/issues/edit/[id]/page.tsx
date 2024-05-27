
import React from 'react'
import { notFound } from 'next/navigation'
import prisma from '@repo/database'
import dynamic from 'next/dynamic'
import { Skeleton } from '../../../../components';
import IssueFormSkeleton from '../../_components/IssueFormSkeleton';

const IssueForm = dynamic(
  () => import("../../../../ui/IssueFrom").then((module) => module.default),{
    ssr: false,
    loading:()=><IssueFormSkeleton/>
  }
);

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