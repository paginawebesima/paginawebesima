import { useForm } from "react-hook-form"
import { PreinscripcionesEsima, preinscripciones2 } from "../../types"
import FormularioEditarNuevoIngreso from "../../formularios/FormularioEditarNuevoIngreso"

type ActualizarNuevoIngresoProps={
    data:PreinscripcionesEsima
    preinscripcionesId:preinscripciones2['_id']
}
export default function ActualizarNuevoIngreso({data,preinscripcionesId}:ActualizarNuevoIngresoProps) {
    const {register,handleSubmit,formState:{errors}} = useForm({
        defaultValues:{
            titulo:data.titulo,
            requerimiento1:data.requerimiento1,
            requerimiento2:data.requerimiento2,
            requerimiento3:data.requerimiento3,
            requerimiento4:data.requerimiento4,
            requerimiento5:data.requerimiento5
        }
    })
    const handleForm=()=>{

    }
  return (
    <div>
        <form className="form-register" onSubmit={handleSubmit(handleForm)}>
            <h4>Actualizar Informacion Nuevo Ingreso</h4>
            <FormularioEditarNuevoIngreso register={register} errors={errors} />
            <input className="botons" type="submit" value='Aceptar' />
        </form>
    </div>
  )
}
