import React from 'react'
import {fetchAllIssues} from '@/app/lib/data'

 export default async function IssuesTable (){
   const ListOfIssues = await  fetchAllIssues()
   console.log(ListOfIssues)
  return (
    <div>Totalissues</div>
  )}