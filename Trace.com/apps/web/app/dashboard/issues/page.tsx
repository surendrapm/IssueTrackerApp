import React from 'react'
import IssuesTable, { IssueQuery, columnNames } from '../../ui/IssuesTable'
import prisma from '@repo/database'
import Status from '@repo/database'
import { Flex } from '@radix-ui/themes'

interface Props{
  searchParams:IssueQuery
}

const page = async({searchParams}:Props) => {
  const statuses = Object.values(Status)
  
  const status  = statuses.includes(searchParams.status)?searchParams.status : undefined;
  const orderBy = columnNames.includes(searchParams.orderBy)?{[searchParams.orderBy]:'asc'}:undefined

  const where = {status}
  const page = parseInt(searchParams.page) || 1
  const pageSize = 10
  const issues = await prisma.issue.findMany({
    where,
    orderBy,
    skip:(page -1) * pageSize,
    take:pageSize
  })
 
  return (
   <Flex direction="column" gap="3">
   
          <IssuesTable searchParams={searchParams} issues={issues}/>
   </Flex>
    
  )
}

export default page