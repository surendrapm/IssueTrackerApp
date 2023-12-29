import React from "react";
import Image from 'next/image'
import  './globals.css';
import { Signup} from '@repo/ui'

export default function Home(): JSX.Element {
  return (
   <div style={{display:'flex', flexDirection:'column' }}>
    <h1 className='bg-gray-400'>login and intro part</h1>
      <Signup></Signup>
   </div>
  );
}
