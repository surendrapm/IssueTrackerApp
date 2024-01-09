

import { TextField,Button,TextArea } from "@radix-ui/themes"
import SimpleMDE from 'react-simplemde-editor'
import { useForm ,Controller } from "react-hook-form";
import "easymde/dist/easymde.min.css";


interface IssueForm {
  title: string;
  description: string;
};
interface IssueFormProps {
  onSubmit: (data: any) => void;
  
}

export  function IssueForm({ onSubmit }: IssueFormProps){
 const { register,control,handleSubmit } = useForm<IssueForm>();
 console.log(register('title'))
  return (
    <div className='max-w-xl space-y-3'>
     <form 
       className="max-w-xl space-y-3"
       onSubmit={handleSubmit(onSubmit)}
     >
      <TextField.Root>
                 <TextField.Input  placeholder="Title" {...register('title')}/>
      </TextField.Root>
      <Controller
       name="description"
       control={control}
       render={({field})=> <SimpleMDE placeholder="Description" {...field}/>}
      />
                  
            
                    <Button type="submit">Submit new Issue</Button>
     </form>
               

      

    </div>
     )
}



