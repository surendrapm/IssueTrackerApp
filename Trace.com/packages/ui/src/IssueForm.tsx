

import { TextField,Button,TextArea } from "@radix-ui/themes"
import { useState } from "react"

type IssueData = {
  title: string;
  description: string;
};

interface IssueFormProps {
  onSubmit: (title: string, description: string) => void;
}


export  function IssueForm({ onSubmit }: IssueFormProps){
         const[title,setTitle] = useState('')
         const[description,setDescription] = useState('')
  return (
    <div className='max-w-xl space-y-3'>
     
                <TextField.Root>
                  <TextField.Input placeholder='Title'
                   onChange={(e)=>{
                      setTitle(e.target.value)
                   }}
                  />
                </TextField.Root>
                <TextArea placeholder="Description"
                onChange={(e)=>{
                  setDescription(e.target.value)
               }}
                />
                    <Button
                     onClick={()=>{
                            onSubmit(title,description)
                     }}
                    >Submit new Issue</Button>

      

    </div>
     )
}



