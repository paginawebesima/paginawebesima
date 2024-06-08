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




export const preinscripciones1=z.object({
    _id:z.string(),
    titulo:z.string(),
    requerimiento1:z.string(),
    requerimiento2:z.string(),
    requerimiento3:z.string(),
    requerimiento4:z.string(),
    requerimiento5:z.string()
})

export const ShemaPreinscripciones=z.array(
    preinscripciones1.pick({
        _id:true,
        titulo:true,
        requerimiento1:true,
        requerimiento2:true,
        requerimiento3:true,
        requerimiento4:true,
        requerimiento5:true
    })
)


export type preinscripciones2= z.infer<typeof preinscripciones1>

export type PreinscripcionesEsima = Pick<preinscripciones2,'titulo'|'requerimiento1'|'requerimiento2'|'requerimiento3'|'requerimiento4'|'requerimiento5'>