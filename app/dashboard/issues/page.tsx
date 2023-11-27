
import React, { Suspense, useEffect, useState } from 'react'
import {Button} from '@radix-ui/themes'
import Link from 'next/link'
import { Totalissues } from './Totalissues'
const IssuePage = () => {

  return (
    <div>
     
      <Suspense fallback="loading">
        <Totalissues></Totalissues>
      </Suspense>
      
      </div>
  )
}

export default IssuePage