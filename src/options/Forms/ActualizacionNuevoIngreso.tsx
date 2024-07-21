import { Link, useNavigate } from "react-router-dom"
import { FormTelefono, Telefono3} from "../../types"
import { useForm } from "react-hook-form"
import { useMutation, useQueryClient } from "react-query"
import { actualizarTelefono } from "../../api/api"
import TelefonoContacto from "./TelefonoContacto"
import { toast } from "react-toastify"


type ActualizacionNuevoIngresoProps={
    data:FormTelefono
    telefonoId:Telefono3['_id']
}
export default function ActualizacionNuevoIngreso({data,telefonoId}:ActualizacionNuevoIngresoProps) {
  const navigate = useNavigate();
  const {register,handleSubmit,formState:{errors}} = useForm({
    defaultValues:{
      telefono:data.telefono
    }
  })
  const queryClient = useQueryClient();
  const {mutate} = useMutation({
    mutationFn:actualizarTelefono,
    onError:(error:Error)=>{
      toast.error(error.message)
    },
    onSuccess:(data)=>{
      toast.success(data)
      navigate('/panel/informacion')
      queryClient.invalidateQueries({queryKey:['telefonos']})
    }
  })
  const handleform=(formData:FormTelefono)=>{
    const data ={
      formData,
      telefonoId
    }
    mutate(data)
  }
  return (
    <>
    <h2 className="texto_prestamo">Actualizar telefono de contacto</h2>
    <div className="div_formulario">
      <form className="formulario" noValidate onSubmit={handleSubmit(handleform)}>
      
        <TelefonoContacto register={register} errors={errors}/>
        <input className="boton_guardar" type="submit" value='Aceptar'/>
      </form>
      
    </div>
    <Link className="enlace_eliminar boton_regresar" to='/panel/informacion/actualizar'>Regresar</Link>
    </>
  )
}
