import { Container, Theme } from '@radix-ui/themes'
import React from 'react'
import Navbar from '../ui/Navbar'
import '@radix-ui/themes/styles.css';


const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      <Theme accentColor="violet">
        <Navbar />
        <main className="p-5">
          <Container>{children}</Container>
        </main>
      </Theme>
    </div>
  );
}

export default layout
