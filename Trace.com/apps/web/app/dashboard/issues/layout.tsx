
import { Table } from '@radix-ui/themes'
import prisma from '@repo/database'
import React from 'react'
import IssuesTable from '../../ui/IssuesTable'


const layout = async() => {

const issues = await prisma.issue.findMany()

  return (
    <div> 
 
              <IssuesTable/>
    </div>
    
  )
}

export default layout