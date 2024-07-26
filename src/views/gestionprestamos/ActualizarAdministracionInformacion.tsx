import { useForm } from "react-hook-form"
import { SalonPrestamoFormData, TSalonPrestamo } from "../../types"
import { useMutation, useQueryClient } from "react-query"
import { actualizarAdministracion } from "../../api/administracion"
import { toast } from "react-toastify"
import PrestamoSalon from "./PrestamoSalon"
import { Link, useNavigate } from "react-router-dom"

type ActualizarAdministracionInformacionProps={
    data:SalonPrestamoFormData
    prestamoSalonId:TSalonPrestamo['_id']
}
export default function ActualizarAdministracionInformacion({data,prestamoSalonId}:ActualizarAdministracionInformacionProps) {
    const {register,handleSubmit,formState:{errors}}=useForm({defaultValues:{
        persona:data.persona,
        grupo:data.grupo,
        fecha:data.fecha,
        hora_inicio:data.hora_inicio,
        hora_final:data.hora_final,
        motivo:data.motivo
    }})
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const{mutate} = useMutation({
        mutationFn:actualizarAdministracion,
        onError:(error:Error)=>{
            toast.error(error.message)
        },
        onSuccess:(data)=>{
            toast.success(data)
            navigate('/prestamos/administracion')
            queryClient.invalidateQueries({queryKey:['AdministracionSalon',prestamoSalonId]})
        }
    })
    const handleForm =(formData:SalonPrestamoFormData)=>{
        const data={
            formData,
            prestamoSalonId
        }
        mutate(data)
    }
  return (
    <div>
        <h2 className="prestamo_turno">Actualizar</h2>
        <div className="div_formulario">
        <form className="formulario" noValidate onSubmit={handleSubmit(handleForm)}>
        <PrestamoSalon register={register} errors={errors}/>
        <input type="submit" className="boton_guardar" value='Guardar' />
        </form>
        </div>
        <Link className="boton_regresar enlace_eliminar" to='/prestamos/administracion'>Regresar</Link>
    </div>
  )
}
