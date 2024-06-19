import { useForm } from "react-hook-form"
import { PreinscripcionesEsima } from "../types"
import { useMutation } from "react-query"
import { crearRequerimiento } from "../api/api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
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
    <h1 className="texto">Añadir Requerimiento de Preinscripcion</h1>
    <div className="dos-columnas">
        <form
        noValidate
        onSubmit={handleSubmit(handleForm)}
        className="form-register flex1"
        >
            <FormularioEditarNuevoIngreso register={register} errors={errors} />
            <input className="botons" type="submit" value='Aceptar' />
        </form>
        <div className="flex2">
            <RutasIconos/>
        </div>
    </div>
    </>
  )
}
