import React from 'react'
import IssueStatusFilter from '../../../ui/IssuesStatusFilter'
import { Button, Flex } from '@radix-ui/themes'
import Link from 'next/link'

export const IssueActions = () => {
  return (
   <Flex justify="between">
             <IssueStatusFilter/>
             <Button>
              <Link href="/dashboard/issues/new">New Issue</Link>
             </Button>
   </Flex>
    
 
  )
}
