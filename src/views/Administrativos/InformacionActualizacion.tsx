import { Link} from "react-router-dom"
import { EsimaAdministrativosFormData, TAdministrativos } from "../../types"
import { useForm } from "react-hook-form"
import { useMutation } from "react-query"
import { actualizarAdministrativos } from "../../api/api"
import { toast } from "react-toastify"
import InputAdministrativos from "./InputAdministrativos"

type InformacionActualizacionProps={
    data:EsimaAdministrativosFormData
    administrativosId:TAdministrativos['_id']
}
export default function InformacionActualizacion({administrativosId,data}:InformacionActualizacionProps) {
    const {register,handleSubmit,formState:{errors}} = useForm({defaultValues:{
        directivo:data.directivo,
        cargo:data.cargo
    }})
    const {mutate} = useMutation({
        mutationFn:actualizarAdministrativos,
        onError:(error:Error)=>{
            toast.error(error.message)
        },
        onSuccess:(data)=>{
            toast.success(data)
            
        }
    })
    const handleForm = (formData:EsimaAdministrativosFormData)=>{
        const data = {
            formData,
            administrativosId
        }
        mutate(data)
    }
  return (
    <>
    <h2 className="texto_prestamo">Actualizacion administrativos</h2>
    <div className="div_formulario">
    <form noValidate className="formulario" onSubmit={handleSubmit(handleForm)}>
        <InputAdministrativos register={register} errors={errors}/>
        <input className="boton_guardar" type="submit"  value='Guardar'/>
    </form>
    </div>
    <Link className="boton_regresar enlace_eliminar" to='/panel/administrativos/actualizar'>Regresar</Link>
    </>
  )
}
