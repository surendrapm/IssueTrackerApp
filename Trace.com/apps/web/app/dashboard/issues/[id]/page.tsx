
import { notFound } from 'next/navigation'
import React from 'react'
import prisma from "@repo/database";
import { Card, Flex, Heading, Text } from '@radix-ui/themes';
import IssueStatusBadge from '../../../components/IssueStatusBadge';
interface Props {
  params:{id:string}
}

const IssueDetailPage =async ({params}:Props) => {
  


  const issue = await prisma.issue.findUnique({
     where : {id:parseInt(params.id)}
  })

if(!issue) return notFound();



  return (
    <div>
      <Flex className="space-x-3" my="2">
        <Heading>{issue.title}</Heading>
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card>
        <p>{issue.description}</p>
      </Card>
    </div>
  );
}

export default IssueDetailPage


