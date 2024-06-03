import MaxWidthWrapper from '@/components/personal/MaxWidthWrapper'
import Steps from '@/components/personal/Steps'
import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWidthWrapper className='flex-1 flex flex-col'>
      <Steps />
      {children}
    </MaxWidthWrapper>
  )
}

export default Layout
