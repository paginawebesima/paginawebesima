import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form"
import { PrestamosFormData } from "../types"
import { Link, useNavigate } from "react-router-dom"
import { useMutation } from "react-query";
import { crearPrestamo } from "../api/api";
import 'react-toastify/dist/ReactToastify.css'
import Prestamo from "./Prestamo";

export default function CrearPrestamo() {
    const navigate = useNavigate();
    const valoresIniciales:PrestamosFormData={
        alumno:"",
        grado:"",
        grupo:"",
        libro:"",
        fechaprestamo:"",
        fechadevolucion:""
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
        <form className="" noValidate onSubmit={handleSubmit(handleForm)}>
            <Prestamo
            register={register}
            errors={errors}
            />
            <input type="submit" value='Crear Prestamo' />
        </form>
        <Link to='/prestamos'>Volver a prestamos</Link>
    </>
  )
}
