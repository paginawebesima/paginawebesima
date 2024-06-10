import { useNavigate } from "react-router-dom"
import { FormTelefono, Telefono3} from "../../types"
import { useForm } from "react-hook-form"
import { useMutation, useQueryClient } from "react-query"
import { actualizarTelefono } from "../../api/api"
import TelefonoContacto from "./TelefonoContacto"
import { toast } from "react-toastify"
import RutasIconos from "../../components/RutasIconos"

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
    onError:()=>{

    },
    onSuccess:(data)=>{
      toast.success(data)
      navigate('/panel')
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
    <div>
      <form noValidate onSubmit={handleSubmit(handleform)}>
      
        <TelefonoContacto register={register} errors={errors}/>
      </form>
      
    </div>
  )
}
