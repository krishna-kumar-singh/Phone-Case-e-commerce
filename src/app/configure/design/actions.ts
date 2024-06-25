"use server"

import { db } from "@/lib/db"
import { CaseColor, CaseFinish, CaseMaterial, PhoneModel } from "@prisma/client"


export type saveConfigArg={
    color:CaseColor,
    finish:CaseFinish,
    material:CaseMaterial,
    model:PhoneModel
    configId:string
}
export async function saveConfig({color,finish,material,model,configId}:saveConfigArg) {
    await db.configuration.update({
        where:{
            id:configId
        },
        data:{
            color,finish,model,material
        }
    })
}