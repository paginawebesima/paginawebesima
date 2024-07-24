import api from "../lib/axios";
import { isAxiosError } from "axios";
import { SalonPrestamoFormData, TSalonPrestamo } from "../types";


export async function obtenerAdministracion() {
    try {
        const {data} = await api('/obtenerAdministracion')
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}
export async function crearAdministracionSalon(formData:SalonPrestamoFormData) {
    try {
        const { data } = await api.post('/crearPrestamoSalon',formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function eliminarAdministracion(id:TSalonPrestamo['_id']) {
    try {
        const{data} = await api.delete<string>(`/eliminarAdministracion/${id}`)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function obtenerAdministracionById(id:TSalonPrestamo['_id']) {
    try {
        const{data} = await api.get(`/obtenerAdministracionSalon/${id}`)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}
type actualizarAdministracionType={
    formData:SalonPrestamoFormData
    prestamoSalonId:TSalonPrestamo['_id']
}
export async function actualizarAdministracion({formData,prestamoSalonId}:actualizarAdministracionType) {
    try {
        const{data} = await api.put<string>(`/actualizarAdministracion/${prestamoSalonId}`,formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}