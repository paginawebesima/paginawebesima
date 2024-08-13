import { ToastContainer, toast } from 'react-toastify';
import { Link} from "react-router-dom"
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
    const {register,handleSubmit,formState:{errors}}=useForm({defaultValues:{
            alumno:data.alumno,
            grado:data.grado,
            grupo:data.grupo,
            libro:data.libro,
            fechaprestamo:data.fechaprestamo,
            fechadevolucion:data.fechadevolucion,
            personaAutorizacion:data.personaAutorizacion
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
        <h2 className='texto_prestamo'>Actualizar préstamo turno matutino</h2>
        <div className='div_formulario'>
        <form className='formulario' noValidate onSubmit={handleSubmit(handleForm)}>
            <Prestamo register={register} errors={errors}/>
            <div className='formulario_flex'>
            <label htmlFor="">Persona quien autorizo</label>
            <p>{data.personaAutorizacion}</p>
            </div>
            <input className='boton_guardar' type="submit" value='Guardar' />
        </form>
        </div>
        <Link className="boton_regresar enlace_eliminar" to='/prestamos/matutino'>Regresar</Link>
    </div>
  )
}
