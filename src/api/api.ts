import api from "../lib/axios"
import { UserRegistrationForm, FormTelefono, PreinscripcionesEsima,Telefono3,preinscripciones2,telefonoshema, UserLoginForm } from "../types"
import { isAxiosError } from "axios";

//Crear cuenta
export async function createAccount(formData: UserRegistrationForm) {
    try {
        const url = "/create-account";
        const {data} = await api.post<string>(url, formData)
        return data

    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

//Autenticación del login
export async function authenticateUser(formData: UserLoginForm) {
    try {
        const url = "/login";
        const {data} = await api.post<string>(url, formData)
        return data

    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

//telefono
export async function creartelefonocontacto(FormData:FormTelefono) {
    try {
        const {data} = await api.post('/crearnumero',FormData)
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

export async function obtenerTelefonoById(id:Telefono3['_id']) {
    try {
        const {data} = await api.get(`obtenerTelefono/${id}`)
        return data
    } catch (error) {
        console.log(error)
    }
}


type actualizarTelefonoProps = {
    formData:FormTelefono
    telefonoId:Telefono3['_id']
}

export async function actualizarTelefono({formData,telefonoId}:actualizarTelefonoProps) {
    try {
        const {data} = await api.put<string>(`actualizar/${telefonoId}`,formData)
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function eliminarTelefono(id:Telefono3['_id']) {
    try {
        const {data} = await api.delete<string>(`eliminarTel/${id}`)
        return data
    } catch (error) {
        console.log(error)
    }
}


//Requerimientos 
export async function crearRequerimiento(formData:PreinscripcionesEsima) {
    try {
        const {data } = await api.post('/preinscripciones',formData)
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

export async function eliminarRequerimiento(id:preinscripciones2['_id']) {
    try {
        const {data} = await api.delete<string>(`preinscripciones/eliminar/${id}`)
        return data
    } catch (error) {
        console.log(error)
    }
}