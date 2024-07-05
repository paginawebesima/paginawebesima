import { Link} from "react-router-dom"
import { EsimaClausuraFormData, TClausura } from "../../types"
import { useForm } from "react-hook-form"
import { useMutation } from "react-query"
import { actualizarClausura } from "../../api/api"
import { toast } from "react-toastify"
import InputClausura from "./InputClausura"

type InformacionActualizacionProps={
    data:EsimaClausuraFormData
    clausuraId:TClausura['_id']
}
export default function InformacionActualizacion({clausuraId,data}:InformacionActualizacionProps) {
    const {register,handleSubmit,formState:{errors}} = useForm({defaultValues:{
        titulo:data.titulo,
        informacion:data.informacion
    }})
    const {mutate} = useMutation({
        mutationFn:actualizarClausura,
        onError:(error:Error)=>{
            toast.error(error.message)
        },
        onSuccess:(data)=>{
            toast.success(data)
            
        }
    })
    const handleForm = (formData:EsimaClausuraFormData)=>{
        const data = {
            formData,
            clausuraId
        }
        mutate(data)
    }
  return (
    <>
    <h2 className="texto_prestamo">Actualizacion titulo clausura</h2>
    <div className="div_formulario">
    <form noValidate className="formulario" onSubmit={handleSubmit(handleForm)}>
        <InputClausura register={register} errors={errors}/>
        <input className="boton_guardar" type="submit"  value='Guardar'/>
    </form>
    </div>
    <Link className="boton_regresar enlace_eliminar" to='/panel/clausura/actualizar'>Regresar</Link>
    </>
  )
}
