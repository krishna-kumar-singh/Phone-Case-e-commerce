import DesignConfigurator from '@/app/configure/design/DesignConfigurator'
import { db } from '@/lib/db'
import { notFound } from 'next/navigation'
import React from 'react'
interface PageProps{
  searchParams:{
    [key:string]:string | string[ ]| undefined
  }
}
const page = async ({searchParams}:PageProps) => {
  const {id}= searchParams

  if (!id|| typeof id !== "string"){

    return notFound()
  }

  const configuration = await db.configuration.findUnique({
    where:{id}
  })

  if (!configuration){
  
    return notFound()
  }

  const {imageUrl,width,croppedImageUrl,height} = configuration
  return <DesignConfigurator configId={configuration.id} imageDimension={{width,height}}  imageUrl={configuration.imageUrl} />
}

export default page