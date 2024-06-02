import {z} from 'zod'

export const telefono1=z.object({
    _id:z.string(),
    telefono:z.string()
})


export const telefonoshema=z.array(
    telefono1.pick({
        _id:true,
        telefono:true
    })
)

export type Telefono3 = z.infer<typeof telefono1>


export type FormTelefono=Pick<Telefono3,'telefono'>