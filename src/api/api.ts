import { isAxiosError } from "axios"
import api from "../lib/axios"
import { EsimaprestamosAlumnosShema, FormTelefono, PreinscripcionesEsima,PrestamosFormData,TPrestamos,Telefono3,UserLoginForm,UserRegistrationForm,preinscripciones2,telefonoshema } from "../types"

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
        if(isAxiosError(error)&&error.response){
            throw new Error(error.response.data.error)
        }
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
        if(isAxiosError(error)&&error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function obtenerTelefonoById(id:Telefono3['_id']) {
    try {
        const {data} = await api.get(`obtenerTelefono/${id}`)
        return data
    } catch (error) {
        if(isAxiosError(error)&&error.response){
            throw new Error(error.response.data.error)
        }
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
        if(isAxiosError(error)&&error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function eliminarTelefono(id:Telefono3['_id']) {
    try {
        const {data} = await api.delete<string>(`eliminarTel/${id}`)
        return data
    } catch (error) {
        if(isAxiosError(error)&&error.response){
            throw new Error(error.response.data.error)
        }
    }
}


//Requerimientos 
export async function crearRequerimiento(formData:PreinscripcionesEsima) {
    try {
        const {data } = await api.post('/preinscripciones',formData)
        return data
    } catch (error) {
        if(isAxiosError(error)&&error.response){
            throw new Error(error.response.data.error)
        }
    }
}


export async function requerimientosPreinscripciones() {
    try {
        const {data} = await api('/obtenerRequerimientos')
        return data
    } catch (error) {
        if(isAxiosError(error)&&error.response){
            throw new Error(error.response.data.error)
        }
    }
}


export async function obtenerRequerimientoPorID(id:preinscripciones2['_id']) {
    try {
        const {data} = await api(`requerimiento/${id}`)
        return data
    } catch (error) {
        if(isAxiosError(error)&&error.response){
            throw new Error(error.response.data.error)
        }
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
        if(isAxiosError(error)&&error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function eliminarRequerimiento(id:preinscripciones2['_id']) {
    try {
        const {data} = await api.delete<string>(`preinscripciones/eliminar/${id}`)
        return data
    } catch (error) {
        if(isAxiosError(error)&&error.response){
            throw new Error(error.response.data.error)
        }
    }
}



//Prestamos

export async function obtenerPrestamos() {
    try {
        const data = await api('/obtenerPrestamos')
        return data.data
    } catch (error) {
        if(isAxiosError(error)&&error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function crearPrestamo(formData:PrestamosFormData) {
    try {
        const {data} = await api.post('/prestamo',formData)
        return data    
    } catch (error) {
        if(isAxiosError(error)&&error.response){
            throw new Error(error.response.data.error)
        }
    }
    
}

export async function eliminarPrestamo(id:TPrestamos['_id']) {
    try {
        const {data} = await api.delete<string>(`/eliminarPrestamo/${id}`)
        return data
    } catch (error) {
        if(isAxiosError(error)&&error.response){
            throw new Error(error.response.data.error)
        }
    }
}


export async function obtenerPrestamoById(id:TPrestamos['_id']) {
    try {
        const {data} = await api.get(`/obtenerPrestamos/${id}`)
        return data
    } catch (error) {
        if(isAxiosError(error)&&error.response){
            throw new Error(error.response.data.error)
        }
    }
}


type actualizarPrestamoType={
    formData2:PrestamosFormData
    prestamoId:TPrestamos['_id']
}

export async function actualizarPrestamo({formData2,prestamoId}:actualizarPrestamoType) {
    try {
        const {data} = await api.put<string>(`actualizarPrestamo/${prestamoId}`,formData2)
        return data
    } catch (error) {
        if(isAxiosError(error)&&error.response){
            throw new Error(error.response.data.error)
        }
    }
}