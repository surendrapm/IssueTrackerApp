'use client'


import {Button, Callout, TextField,Text} from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {useForm,Controller} from 'react-hook-form'
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/validationSchemas';
import { z } from 'zod'
import ErrorMessage from '@/app/components/ErrorMessage';
import Spinner from '@/app/components/Spinner';
import CreateIssue from '@/app/lib/actions'
import CrateIssueForm from '@/app/ui/CrateIssueForm';

type IssueForm =  z.infer<typeof createIssueSchema>

const NewIssuePage = () => {
  return(
    <>
      <CrateIssueForm></CrateIssueForm>
    </>
  )
}

export default NewIssuePage