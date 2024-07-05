import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form"

import { Link} from "react-router-dom"
import { useMutation } from "react-query";

import 'react-toastify/dist/ReactToastify.css'
import { PrestamosFormData } from "../../types";
import Prestamo from "../../prestamos/Prestamo";
import { crearPrestamo_Vespertino } from "../../api/api";
import ErrorMessage from "../../components/ErrorMessage";


export default function Prestamo_Vespertino() {
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
        mutationFn:crearPrestamo_Vespertino,
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
        <h2 className="texto_prestamo">Añadir prestamo turno vespertino</h2>
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
        <p>Este apartado no podra ser modificado despues</p>
        {errors.personaAutorizacion&&(
            <ErrorMessage>{errors.personaAutorizacion.message}</ErrorMessage>
        )}
    </div>
            <input type="submit" value='Guardar' className="boton_guardar" />
        </form>
        </div>
        <Link className="enlace_eliminar boton_regresar" to='/prestamos/vespertino'>Regresar</Link>
    </>
  )
}
