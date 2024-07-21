import { isAxiosError } from "axios"
import api from "../lib/axios"
import { FormTelefono, PreinscripcionesEsima, PrestamosFormData, RecoverPassword, TPrestamos, Telefono3, UserLoginForm, UserRegistrationForm, UserRequestCodeForm, ForgotPasswordForm, preinscripciones2, telefonoshema, ConfirmToken, NewPasswordForm, userSchema, EsimaClausuraFormData, TClausura, TProceso, EsimaAdministrativosFormData, TAdministrativos, User, LibrosFormData, TInventario } from "../types"

//Usuarios
export async function obtenerUsuarios() {
    try {
        const data = await api('/obtenerUsuarios')
        return data.data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function createAccount(formData: UserRegistrationForm) {
    try {
        const url = "/create-account";
        const { data } = await api.post<string>(url, formData)
        return data

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function crearUsuarios(formData: UserRegistrationForm) {
    try {
        const url = "/crearUsuarios";
        const { data } = await api.post<string>(url, formData)
        return data

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function eliminarUsuarios(id: User['_id']) {
    try {
        const { data } = await api.delete<string>(`/eliminarUsuarios/${id}`)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}


export async function obtenerUsuariosById(id: User['_id']) {
    try {
        const { data } = await api.get(`/obtenerUsuarios/${id}`)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}


type ActualizarUsuariosProps = {
    formData: UserRegistrationForm,
    usuariosId: User['_id']
}

export async function actualizarUsuarios({ formData, usuariosId }: ActualizarUsuariosProps) {
    try {
        const { data } = await api.put<string>(`/actualizarUsuarios/${usuariosId}`, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
        throw new Error('An unexpected error occurred');
    }
}

//Autenticación del login
export async function authenticateUser(formData: UserLoginForm) {
    try {
        const url = "/login";
        const { data } = await api.post<{ token: string, rol: string }>(url, formData);
        localStorage.setItem('AUTH_TOKEN', data.token);
        localStorage.setItem('USER_ROL', data.rol);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
        throw new Error('An unexpected error occurred');
    }
}

//Contraseña olvidada
export async function forgotPassword(formData: ForgotPasswordForm) {
    try {
        const url = "/forgot-password";
        const { data } = await api.post<string>(url, formData)
        return data

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

//Recuperar contraseña
export async function recoverPassword(formData: RecoverPassword) {
    try {
        const url = "/token";
        const { data } = await api.post<string>(url, formData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

//Reenviar token
export async function userRequestCode(formData: UserRequestCodeForm) {
    try {
        const url = "/request-code";
        const { data } = await api.post<string>(url, formData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

//Validar token
export async function validateToken(formData: ConfirmToken) {
    try {
        const url = "/validate-token";
        const { data } = await api.post<string>(url, formData)
        return data

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

//Actualizar contraseña
export async function updatePasswordWithToken({ formData, token }: { formData: NewPasswordForm, token: ConfirmToken['token'] }) {
    try {
        const url = `/update-password/${token}`;
        const { data } = await api.post<string>(url, formData)
        return data

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

//telefono
export async function creartelefonocontacto(FormData: FormTelefono) {
    try {
        const { data } = await api.post('/crearnumero', FormData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function obtenertelefono() {
    try {
        const { data } = await api('/obtenerTelefono')
        const respuesta = telefonoshema.safeParse(data)

        if (respuesta.success) {
            return respuesta.data
        }
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function obtenerTelefonoById(id: Telefono3['_id']) {
    try {
        const { data } = await api.get(`obtenerTelefono/${id}`)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}


type actualizarTelefonoProps = {
    formData: FormTelefono
    telefonoId: Telefono3['_id']
}

export async function actualizarTelefono({ formData, telefonoId }: actualizarTelefonoProps) {
    try {
        const { data } = await api.put<string>(`actualizar/${telefonoId}`, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function eliminarTelefono(id: Telefono3['_id']) {
    try {
        const { data } = await api.delete<string>(`eliminarTel/${id}`)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}


//Requerimientos 
export async function crearRequerimiento(formData: PreinscripcionesEsima) {
    try {
        const { data } = await api.post('/preinscripciones', formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}


export async function requerimientosPreinscripciones() {
    try {
        const { data } = await api('/obtenerRequerimientos')
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}


export async function obtenerRequerimientoPorID(id: preinscripciones2['_id']) {
    try {
        const { data } = await api(`requerimiento/${id}`)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

type actualizarRequerimientoProps = {
    formData: PreinscripcionesEsima
    preinscripcionesId: preinscripciones2['_id']
}

export async function actualizarRequerimiento({ formData, preinscripcionesId }: actualizarRequerimientoProps) {
    try {
        const { data } = await api.put<string>(`preinscripciones/${preinscripcionesId}`, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function eliminarRequerimiento(id: preinscripciones2['_id']) {
    try {
        const { data } = await api.delete<string>(`preinscripciones/eliminar/${id}`)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
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
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function crearPrestamo(formData: PrestamosFormData) {
    try {
        const { data } = await api.post('/prestamo', formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function eliminarPrestamo(id: TPrestamos['_id']) {
    try {
        const { data } = await api.delete<string>(`/eliminarPrestamo/${id}`)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function obtenerPrestamoById(id: TPrestamos['_id']) {
    try {
        const { data } = await api.get(`/obtenerPrestamos/${id}`)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

type actualizarPrestamoType = {
    formData2: PrestamosFormData
    prestamoId: TPrestamos['_id']
}

export async function actualizarPrestamo({ formData2, prestamoId }: actualizarPrestamoType) {
    try {
        const { data } = await api.put<string>(`actualizarPrestamo/${prestamoId}`, formData2)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

//Inventario
export async function obtenerLibros() {
    try {
        const data = await api('/obtenerLibros')
        return data.data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}
export const obtenerLibrosDisponibles = async () => {
    const response = await api('/obtenerLibrosDisponibles');
    return response.data;
};
export async function crearLibros(formData: LibrosFormData) {
    try {
        const { data } = await api.post('/inventario', formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function eliminarLibros(id: TInventario['_id']) {
    try {
        const { data } = await api.delete<string>(`/eliminarLibros/${id}`)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function obtenerLibrosById(id: TInventario['_id']) {
    try {
        const { data } = await api.get(`/obtenerLibros/${id}`)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

type actualizarLibrosType = {
    formData2: LibrosFormData
    inventarioId: TInventario['_id']
}

export async function actualizarLibros({ formData2, inventarioId }: actualizarLibrosType) {
    try {
        const { data } = await api.put<string>(`actualizarLibros/${inventarioId}`, formData2)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function getUser() {
    try {
        const { data } = await api('/user')
        const response = userSchema.safeParse(data)
        if (response.success) {
            return response.data
        }
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function crearClausura(formData:EsimaClausuraFormData) {
    try {
        const { data } = await api.post('/crearClausura', formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function obtenerClausura() {
    try {
        const data = await api('/obtenerClausura')
        return data.data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function eliminarClausura(id:TClausura['_id']) {
    try {
        const {data} = await api.delete<string>(`/eliminarClausura/${id}`)
        return data
    } catch (error) {
        if(isAxiosError(error)&&error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function obtenerClausuraId(id:TClausura['_id']) {
    try {
        const { data } = await api.get(`/obtenerClausuraId/${id}`)
        return data
    } catch (error) {
        if(isAxiosError(error)&&error.response){
            throw new Error(error.response.data.error)
        }
    }
}

type actualizarClausuraTypes={
    formData:EsimaClausuraFormData
    clausuraId:TClausura['_id']
}

export async function actualizarClausura({formData,clausuraId}:actualizarClausuraTypes) {
    try {
        const { data } = await api.put<string>(`/actualizarClausura/${clausuraId}`, formData)
        return data
    } catch (error) {
        if(isAxiosError(error)&&error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function crearAdministrativos(formData:EsimaAdministrativosFormData) {
    try {
        const { data } = await api.post('/crearAdministrativos', formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function obtenerAdministrativos() {
    try {
        const data = await api('/obtenerAdministrativos')
        return data.data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function eliminarAdministrativos(id:TAdministrativos['_id']) {
    try {
        const {data} = await api.delete<string>(`/eliminarAdministrativos/${id}`)
        return data
    } catch (error) {
        if(isAxiosError(error)&&error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function obtenerAdministrativosId(id:TAdministrativos['_id']) {
    try {
        const { data } = await api.get(`/obtenerAdministrativosId/${id}`)
        return data
    } catch (error) {
        if(isAxiosError(error)&&error.response){
            throw new Error(error.response.data.error)
        }
    }
}

type actualizarAdministrativosTypes={
    formData:EsimaAdministrativosFormData
    administrativosId:TAdministrativos['_id']
}

export async function actualizarAdministrativos({formData,administrativosId}:actualizarAdministrativosTypes) {
    try {
        const { data } = await api.put<string>(`/actualizarAdministrativos/${administrativosId}`, formData)
        return data
    } catch (error) {
        if(isAxiosError(error)&&error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function obtenerPrestamos_Vespertino() {
    try {
        const data = await api('/obtenerPrestamosVespertino')
        return data.data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function eliminarPrestamo_Vespertino(id: TPrestamos['_id']) {
    try {
        const { data } = await api.delete<string>(`/eliminarPrestamos_Vespertino/${id}`)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}


export async function crearPrestamo_Vespertino(formData: PrestamosFormData) {
    try {
        const { data } = await api.post('/crearPrestamoVerpertino', formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function obtenerPrestamoTurnoVespertino(id: TPrestamos['_id']) {
    try {
        const { data } = await api.get(`/obtenerPrestamos_Vespertino/${id}`)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function actualizarPrestamoVespertino({ formData2, prestamoId }: actualizarPrestamoType) {
    try {
        const { data } = await api.put<string>(`/actualizarPrestamos_Vespertino/${prestamoId}`, formData2)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}


export async function obtenerProceso() {
    try {
        const data = await api('/obtenerProceso')
        return data.data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}


export async function activarProcesoAPI(id:TProceso['_id']) {
    try {
        const { data } = await api.put<string>(`/activarProceso/${id}`)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}


export async function desactivarProcesoAPI(id:TProceso['_id']) {
    try {
        const { data } = await api.put<string>(`/desactivarProceso/${id}`)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}