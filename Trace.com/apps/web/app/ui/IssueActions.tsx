import React from 'react'
import IssueStatusFilter from './IssueStatusFilter'
import { Flex } from '@radix-ui/themes'

export const IssueActions = () => {
  return (
   <Flex justify="between">
             <IssueStatusFilter/>
   </Flex>
    
 
  )
}
