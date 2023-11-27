import { Theme } from '@radix-ui/themes'
import React from 'react'


const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
         <Theme appearance="light" accentColor="violet">
         
        <div className='p-5'>{children}</div> 
        </Theme>
    </div>
  )
}

export default layout