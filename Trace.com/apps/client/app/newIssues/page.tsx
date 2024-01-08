"use client"
import React from 'react'
import {IssueForm} from '@repo/ui'
import { CreateIssue} from '../lib/actions';
import { useFormState } from 'react-dom';
export default function page(){

  const initialState = { message: null, errors: {} };

  const [state, dispatch] = useFormState(CreateIssue, initialState);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* IssueForm component */}
      <IssueForm onSubmit={dispatch} />
    </div>
  );
}
