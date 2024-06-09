import api from "../lib/axios"
import { FormTelefono, PreinscripcionesEsima,preinscripciones2,telefonoshema } from "../types"



export async function creartelefonocontacto(FormData:FormTelefono) {
    try {
        const {data} = await api.post('/crearnumero',FormData)
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function requerimientosPreinscripciones() {
    try {
        const {data} = await api('/obtenerRequerimientos')
        return data
    } catch (error) {
        console.log(error)
    }
}
export async function obtenertelefono() {
    try {
        const {data} = await api('/obtenerTelefono')
        const respuesta = telefonoshema.safeParse(data)
        
        if(respuesta.success){
            return respuesta.data
        }
    } catch (error) {
        console.log(error)
    }
}

export async function obtenerRequerimientoPorID(id:preinscripciones2['_id']) {
    try {
        const {data} = await api(`requerimiento/${id}`)
        return data
    } catch (error) {
        console.log(error)
    }
}

type actualizarRequerimientoProps={
    formData:PreinscripcionesEsima
    preinscripcionesId:preinscripciones2['_id']
}

export async function actualizarRequerimiento({formData, preinscripcionesId}:actualizarRequerimientoProps) {
    try {
        const {data} = await api.put<string>(`preinscripciones/${preinscripcionesId}`,formData)
        return data
    } catch (error) {
        console.log(error)
    }
}