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

const CrateIssueForm = () => {
    const router = useRouter()
  const {register,control,handleSubmit,formState:{errors}} = useForm<IssueForm>({
      resolver:zodResolver(createIssueSchema)
  });
  const [error,setError] = useState('')
  const [isSubmitting,setisSubmitting] = useState(false)

  const OnSubmit = handleSubmit(async(data)=>{
    try{
      setisSubmitting(true)
        await CreateIssue(data) 
        router.push('/issues')
    }catch(error){
       setError("oops some unexpected error occured")
       setisSubmitting(false)
    }     
})

  return (
    <div className='max-w-xl'>
      {error && <Callout.Root color='red' className='mb-5'>
             <Callout.Text>{error}</Callout.Text>
        </Callout.Root>}
            <form className='space-y-3'
         action={}
    >
        <TextField.Root>
           <TextField.Input placeholder='Title' {...register('title')}/>
        </TextField.Root>
        {errors.title && <ErrorMessage>{errors.title?.message}</ErrorMessage>}
        <Controller
          name="description"
          control={control}
          render={({field})=><SimpleMdeReact placeholder="Description" {...field} />}
        />
        {errors.description && <ErrorMessage>{errors.description?.message}</ErrorMessage>}
        <Button disabled={isSubmitting}>Submit New Issues{isSubmitting && <Spinner/>}</Button>
    </form> 
    </div>
  
     )
}

export default CrateIssueForm

