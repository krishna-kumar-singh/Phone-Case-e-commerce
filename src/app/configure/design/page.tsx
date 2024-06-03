import React from 'react'
interface PageProps{
  searchParams:{
    [key:string]:string | string[ ]| undefined
  }
}
const page = ({searchParams}:PageProps) => {
  const {id}= searchParams

  return (
    <div>{id}</div>
  )
}

export default page