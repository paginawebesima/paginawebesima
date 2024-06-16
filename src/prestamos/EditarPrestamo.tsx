import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom"
import { PrestamosFormData, TPrestamos } from "../types"
import { useForm } from "react-hook-form"
import Prestamo from "./Prestamo"
import { useMutation } from "react-query"
import { actualizarPrestamo } from "../api/api"


type EditarPrestamoProps={
    data:PrestamosFormData
    prestamoId:TPrestamos['_id']
}
export default function EditarPrestamo({data,prestamoId}:EditarPrestamoProps) {
    const navigate = useNavigate();
    const {register,handleSubmit,formState:{errors}}=useForm({defaultValues:{
            alumno:data.alumno,
            grado:data.grado,
            grupo:data.grupo,
            libro:data.libro,
            fechaprestamo:data.fechaprestamo,
            fechadevolucion:data.fechadevolucion
        }
    })
    const {mutate} = useMutation({
        mutationFn:actualizarPrestamo,
        onError:(error:Error)=>{
            toast.error(error.message)
        },
        onSuccess:(data)=>{
            toast.success(data)
            
        }
    })
    const handleForm = (formData2:PrestamosFormData)=>{
        const data2 = {
            formData2,
            prestamoId
        }
        mutate(data2)
    }
   
  return (
    <div>
         <ToastContainer 
         pauseOnHover={false}
            pauseOnFocusLoss={false}
        />
        <form action="" noValidate onSubmit={handleSubmit(handleForm)}>
            <Prestamo register={register} errors={errors}/>
            <input type="submit" value='Actualizar Prestamo' />
        </form>
        <Link to='/prestamos'>Volver a prestamos</Link>
    </div>
  )
}
