import { Button, Callout, TextField } from "@radix-ui/themes";
import ErrorMessage from "../components/ErrorMessage";
import { Controller, useForm } from "react-hook-form";
import SimpleMdeReact from "react-simplemde-editor";

import React, { useState } from 'react'
import { useRouter } from "next/router";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "../validationSchemas";
import { CreateIssue } from "../lib/actions";
import Spinner from "../components/Spinner";
import { z } from "zod";

const CreateIssueForm = () => {
    type IssueForm =  z.infer<typeof createIssueSchema>


  return (
    <div className='max-w-xl'>
    
            <form className='space-y-3'>
   
           <TextField.Input placeholder='Title'/>
    

      <SimpleMdeReact placeholder="Description"/>
    

        <Button >Submit New Issues</Button>
    </form> 
    </div>
  
     )
}

export default CreateIssueForm

