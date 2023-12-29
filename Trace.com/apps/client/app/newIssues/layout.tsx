import { Theme } from '@radix-ui/themes'

export default function Layout({
  children,
}:{
  children: React.ReactNode}){
    return (
      <div>
           <Theme appearance="light" accentColor="violet">
               <div className='p-5'>{children}</div> 
          </Theme>
      </div>
    )
  }
