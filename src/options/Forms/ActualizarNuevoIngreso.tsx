import { useForm } from "react-hook-form"
import { PreinscripcionesEsima, preinscripciones2 } from "../../types"
import FormularioEditarNuevoIngreso from "../../formularios/FormularioEditarNuevoIngreso"
import { Link, useNavigate } from "react-router-dom"
import { useMutation, useQueryClient } from "react-query"
import { toast } from "react-toastify"
import 'react-toastify/ReactToastify.css'
import { actualizarRequerimiento } from "../../api/api"
import RutasIconos from "../../components/RutasIconos"

type ActualizarNuevoIngresoProps={
    data:PreinscripcionesEsima
    preinscripcionesId:preinscripciones2['_id']
}
export default function ActualizarNuevoIngreso({data,preinscripcionesId}:ActualizarNuevoIngresoProps) {
    const navigate = useNavigate();
    
    const {register,handleSubmit,formState:{errors}} = useForm({
        defaultValues:{
            titulo:data.titulo,
            requerimiento1:data.requerimiento1,
            requerimiento2:data.requerimiento2,
            requerimiento3:data.requerimiento3,
            requerimiento4:data.requerimiento4,
            requerimiento5:data.requerimiento5,
            icono:data.icono
        }
    })
    const {mutate} = useMutation({
        mutationFn:actualizarRequerimiento,
        onError:(error:Error)=>{
            toast.error(error.message)
        },
        onSuccess:(data)=>{
            toast.success(data)
            navigate('/panel')
        }
    })
    const handleForm=(formData:PreinscripcionesEsima)=>{
        const data = {
            formData,
            preinscripcionesId
        }
        mutate(data)
    }
  return (
    <>
    <h2 className="texto_prestamo separacion_abajo">Actualizar Informacion Nuevo Ingreso</h2>
      <div className="dos-columnas dos-columnas_separacion">
        <form className="formulario" noValidate onSubmit={handleSubmit(handleForm)}>
            <FormularioEditarNuevoIngreso register={register} errors={errors} />
            <input className="boton_guardar" type="submit" value='Guardar' />
        </form>
        <div className="flex2">
            <RutasIconos/>
        </div>
    </div>
    <Link className="boton_regresar enlace_eliminar" to='/panel/nuevoIngreso/actualizar'>Regresar</Link>
    </>
  )
}
