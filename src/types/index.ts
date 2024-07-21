import {z} from 'zod'

/** Auth & Users */
const authSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    password_confirmation: z.string(),
    rol: z.enum(['Administrador', 'Gestor de Libros', 'Gestor de Salones']),
    token: z.string()
  });

type Auth = z.infer<typeof authSchema>
export type UserLoginForm = Pick<Auth, 'email' | 'password'>
export type UserRegistrationForm = Pick<Auth, 'name' | 'email' | 'password' | 'password_confirmation' | 'rol'>;
export type UserRequestCodeForm = Pick<Auth, 'email'>;
export type ForgotPasswordForm = Pick<Auth, 'email'>;
export type NewPasswordForm = Pick<Auth, 'password' | 'password_confirmation'>;
export type NewPassword = Pick<Auth, 'token'>
export type RecoverPassword = Pick<Auth, 'token'>
export type ConfirmToken = Pick<Auth, 'token'>

/** Users */
export const userSchema = authSchema.pick({
    name:true,
    email:true,
    rol:true
}).extend({
    _id: z.string()
})
export type User = z.infer<typeof userSchema>

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
    requerimiento5:z.string(),
    icono:z.string()
})

export const ShemaPreinscripciones=z.array(
    preinscripciones1.pick({
        _id:true,
        titulo:true,
        requerimiento1:true,
        requerimiento2:true,
        requerimiento3:true,
        requerimiento4:true,
        requerimiento5:true,
        icono:true
    })
)
export type preinscripciones2= z.infer<typeof preinscripciones1>
export type PreinscripcionesEsima = Pick<preinscripciones2,'titulo'|'requerimiento1'|'requerimiento2'|'requerimiento3'|'requerimiento4'|'requerimiento5'|'icono'>

export const prestamosAlumnosShema=z.object({
    _id:z.string(),
    alumno:z.string(),
    grado:z.string(),
    grupo:z.string(),
    libro:z.string(),
    fechaprestamo:z.string(),
    fechadevolucion:z.string(),
    personaAutorizacion:z.string()
})

export const EsimaprestamosAlumnosShema=z.array(
    prestamosAlumnosShema.pick({
        _id:true,
        alumno:true,
        grado:true,
        grupo:true,
        libro:true,
        fechaprestamo:true,
        fechadevolucion:true,
        personaAutorizacion:true
    })
)
export type TPrestamos = z.infer<typeof prestamosAlumnosShema>
export type PrestamosFormData= Pick<TPrestamos,'alumno'|'grado'|'grupo'|'libro'|'fechaprestamo'|'fechadevolucion'|'personaAutorizacion'>

export const inventarioShema=z.object({
    _id:z.string(),
    titulo:z.string(),
    autor:z.string(),
    genero:z.string(),
    cantidad_total:z.number(),
    cantidad_disponible:z.number(),
})

export const EsimainventarioShema=z.array(
    inventarioShema.pick({
        _id:true,
        titulo:true,
        autor:true,
        genero:true,
        cantidad_total:true,
        cantidad_disponible:true,
    })
)
export type TInventario = z.infer<typeof inventarioShema>

export type LibrosFormData= Pick<TInventario,'titulo'|'autor'|'genero'|'cantidad_total'>

export const InformacionClausura=z.object({
    _id:z.string(),
    titulo:z.string(),
    informacion:z.string()
})

export const SchemaClusuraEsima=z.array(
    InformacionClausura.pick({
        _id:true,
        titulo:true,
        informacion:true
    })
)
export type TClausura = z.infer<typeof InformacionClausura>
export type EsimaClausuraFormData = Pick<TClausura,'titulo'|'informacion'>

export const ProcesoBoolean=z.object({
    _id:z.string(),
    boolean:z.string()
})

export const SchemaProcesoBoolean = z.array(
    ProcesoBoolean.pick(
        {
            _id:true,
            boolean:true
        }
    )
)

export type TProceso = z.infer<typeof ProcesoBoolean>
export const InformacionAdministrativos=z.object({
    _id:z.string(),
    directivo:z.string(),
    cargo:z.string()
})

export const SchemaAdministrativosEsima=z.array(
    InformacionAdministrativos.pick({
        _id:true,
        directivo:true,
        cargo:true
    })
)

export type TAdministrativos = z.infer<typeof InformacionAdministrativos>
export type EsimaAdministrativosFormData = Pick<TAdministrativos,'directivo'|'cargo'>