import { useForm } from "react-hook-form"
import { PreinscripcionesEsima } from "../types"
import { useMutation } from "react-query"
import { crearRequerimiento } from "../api/api"
import { toast } from "react-toastify"
import { Link, useNavigate } from "react-router-dom"
import FormularioEditarNuevoIngreso from "../formularios/FormularioEditarNuevoIngreso"
import RutasIconos from "./RutasIconos"


export default function InsertarRequerimientos() {
    const navigate = useNavigate();
    const valoresIniciales:PreinscripcionesEsima={
        titulo:"",
        requerimiento1:"",
        requerimiento2:"",
        requerimiento3:"",
        requerimiento4:"",
        requerimiento5:"",
        icono:"",
    }

   
    const {register,handleSubmit,formState:{errors}} = useForm({defaultValues:valoresIniciales})
    const handleForm= (formData:PreinscripcionesEsima)=>mutate(formData)
    const {mutate} = useMutation({
        mutationFn:crearRequerimiento,
        onError:(error:Error)=>{
            toast.error(error.message)
        },
        onSuccess:(data)=>{
            toast.success(data)
            navigate('/panel')
        }
    })
   
  return (
    <>  
    <h2 className="texto_prestamo separacion_abajo">Añadir Requerimiento de Preinscripcion</h2>
    <div className="dos-columnas dos-columnas_separacion">
        <form
        noValidate
        onSubmit={handleSubmit(handleForm)}
        className="formulario"
        >
            <FormularioEditarNuevoIngreso register={register} errors={errors} />
            <input className="boton_guardar" type="submit" value='Aceptar' />
        </form>
        <div className="flex2">
            <RutasIconos/>
        </div>
    </div>
    <Link className="boton_regresar enlace_eliminar" to='/panel/nuevoIngreso'>Regresar</Link>
    </>
  )
}
