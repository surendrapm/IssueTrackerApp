import React from 'react'
import {fetchAllIssues} from '@/app/lib/data'

export const Totalissues = async() => {
   const ListOfIssues = await  fetchAllIssues()
   console.log(ListOfIssues)
  return (
    <div>
      <h1>Totalissues</h1>
         {
          ListOfIssues.map((index)=>{
               return (
                   <div key={index.id}>{index.description}</div>
               )
          })
         }
    </div>
  )
}
