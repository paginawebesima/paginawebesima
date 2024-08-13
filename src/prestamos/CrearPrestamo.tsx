import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form"
import { PrestamosFormData } from "../types"
import { Link} from "react-router-dom"
import { useMutation} from "react-query";
import { crearPrestamo } from "../api/api";
import 'react-toastify/dist/ReactToastify.css'
import Prestamo from "./Prestamo";
import ErrorMessage from "../components/ErrorMessage";

export default function CrearPrestamo() {
    const valoresIniciales:PrestamosFormData={
        alumno:"",
        grado:"",
        grupo:"",
        libro:"",
        fechaprestamo:"",
        fechadevolucion:"",
        personaAutorizacion:""
    }
    const {register,handleSubmit,formState:{errors}} = useForm({defaultValues:valoresIniciales})
    const {mutate}=useMutation({
        mutationFn:crearPrestamo,
        onError:(error:Error)=>{
            toast.error(error.message)
        },
        onSuccess:(data)=>{
            toast.success(data)
        }
    })
    const handleForm = (formData:PrestamosFormData)=>mutate(formData)
    
  return (
    <>
       <ToastContainer 
         pauseOnHover={false}
            pauseOnFocusLoss={false}
        />
        <h2 className="texto_prestamo">Añadir préstamo turno matutino</h2>
        <div className="div_formulario">
        <form className="formulario" noValidate onSubmit={handleSubmit(handleForm)}>
            <Prestamo
            register={register}
            errors={errors}
            />
    <div className="formulario_flex formulario_ultimo">
        <label htmlFor="personaAutorizacion">Persona quien autoriza</label>
        <input type="text" 
        id="personaAutorizacion"
        {...register('personaAutorizacion',{
            required:"La persona quien autoriza el prestamo es obligatoria"
        })}
        className="formulario_input"
        />
        <p>Este apartado no podrá ser modificado despues</p>
        {errors.personaAutorizacion&&(
            <ErrorMessage>{errors.personaAutorizacion.message}</ErrorMessage>
        )}
    </div>
        <input type="submit" className="boton_guardar" value='Guardar' />
        </form>
        </div>
        <Link className="enlace_eliminar boton_regresar" to='/prestamos/matutino'>Regresar</Link>
    </>
  )
}
