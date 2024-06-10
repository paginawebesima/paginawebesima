import { useForm } from "react-hook-form"
import { PreinscripcionesEsima, preinscripciones2 } from "../../types"
import FormularioEditarNuevoIngreso from "../../formularios/FormularioEditarNuevoIngreso"
import { useNavigate } from "react-router-dom"
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
            requerimiento5:data.requerimiento5
        }
    })
    const {mutate} = useMutation({
        mutationFn:actualizarRequerimiento,
        onError:()=>{
            
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
    <div>
        <form className="form-register" noValidate onSubmit={handleSubmit(handleForm)}>
            <h4>Actualizar Informacion Nuevo Ingreso</h4>
            <FormularioEditarNuevoIngreso register={register} errors={errors} />
            <input className="botons" type="submit" value='Aceptar' />
        </form>
        <div>
            <RutasIconos/>
        </div>
    </div>
  )
}
