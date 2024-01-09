"use client"
import React from 'react'
import {IssueForm} from '@repo/ui'
import axios from 'axios';



export default function page(){

  const handleSubmit = async (data) => {
    try {
      // Make an Axios POST request to your server endpoint
      const response = await axios.post('/api/issues', data);

      // Handle the response as needed (e.g., show success message)
      console.log(response.data);
    } catch (error) {
      // Handle errors (e.g., show error message)
      console.error('Error submitting issue:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* IssueForm component */}
      <IssueForm onSubmit={handleSubmit}/>
    </div>
  );
}
