
import prisma from '@repo/database'
import React from 'react'


const layout = async() => {

const issues = await prisma.issue.findMany()

  return (
    <div> 
      {
        issues.map((list)=>{
            return <div>{list.description}</div>
        })
      }
    </div>
    
  )
}

export default layout