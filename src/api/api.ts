import { isAxiosError } from "axios"
import api from "../lib/axios"
import { FormTelefono } from "../types"


export async function creartelefonocontacto(FormData:FormTelefono) {
    try {
        const {data} = await api.post('/crearnumero',FormData)
        return data
    } catch (error) {
        console.log(error)
    }
}

