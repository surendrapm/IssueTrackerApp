"use client"

import { TextField,Button,TextArea } from "@radix-ui/themes"
import { useState } from "react"

type IssueData = {
  title: string;
  description: string;
};

interface IssueFormProps {
  onSubmit: (title: string, description: string) => void;
}


export  function IssueForm({onSubmit}){
 
  return (
    <div className='max-w-xl space-y-3'>
     <form 
       className="max-w-xl space-y-3"
       action={onSubmit}
     >
     
                  <input 
                     placeholder='Title'
                     name="title"
                  
                />
            
                <input placeholder="Description"
                    name="description"
                />
                    <Button type="submit">Submit new Issue</Button>
     </form>
               

      

    </div>
     )
}



