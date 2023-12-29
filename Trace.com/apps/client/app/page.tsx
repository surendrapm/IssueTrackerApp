// Import necessary dependencies and components
import React from "react";
import Image from "next/image";
import  './globals.css';
import {Signup} from '@repo/ui'


// Define the Page component
export default function Page({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <main >
      <div>
        <Signup></Signup>
      </div>
      {children}
    </main>
  );
}