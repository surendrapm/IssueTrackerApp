"use client"
import React from 'react'
import {IssueForm} from '@repo/ui'
export default function page(){
  return (
    <div className="flex items-center justify-center min-h-screen">
      
    {/* IssueForm component */}
    <IssueForm onSubmit={(title,description)=>{
              window.alert(title)
             window.alert(description)
    }}
    />

</div>
  )
}
