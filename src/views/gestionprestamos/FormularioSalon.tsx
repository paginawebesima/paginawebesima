import { Link, useNavigate } from "react-router-dom";
import { SalonPrestamoFormData } from "../../types";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { crearAdministracionSalon } from "../../api/administracion";
import PrestamoSalon from "./PrestamoSalon";

export default function FormularioSalon() {
    const navigate = useNavigate()
    const valoresIniciales:SalonPrestamoFormData={
        persona:"",
        grupo:"",
        fecha:"",
        hora_inicio:"",
        hora_final:"",
        motivo:""
    }
    const{register,handleSubmit,formState:{errors}} = useForm({defaultValues:valoresIniciales})
    const{mutate} = useMutation({
        mutationFn:crearAdministracionSalon,
        onError:(error:Error)=>{
            toast.error(error.message)
        }
        ,onSuccess:(data)=>{
            toast.success(data)
            navigate('/prestamos/administracion')
        }
    })
    const handleForm = (formData:SalonPrestamoFormData)=>mutate(formData)
  return (
    <div>
        <h2 className="prestamo_turno">Crear</h2>
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
