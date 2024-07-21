import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form"
import { LibrosFormData } from "../../../types"; 
import { Link} from "react-router-dom"
import { useMutation} from "react-query";
import { crearLibros } from "../../../api/api"; 
import 'react-toastify/dist/ReactToastify.css'
import Inventario from "./Inventario";

export default function CrearLibros() {
    const valoresIniciales:LibrosFormData={
        titulo:"",
        autor:"",
        genero:"",
        cantidad_total:0,
    }
    const {register,handleSubmit,formState:{errors}} = useForm({defaultValues:valoresIniciales})
    const {mutate}=useMutation({
        mutationFn:crearLibros,
        onError:(error:Error)=>{
            toast.error(error.message)
        },
        onSuccess:(data)=>{
            toast.success(data)
        }
    })
    const handleForm = (formData:LibrosFormData)=>mutate(formData)
    
  return (
    <>
       <ToastContainer 
         pauseOnHover={false}
            pauseOnFocusLoss={false}
        />
        <h2 className="texto_prestamo">Añadir libros</h2>
        <div className="div_formulario">
        <form className="formulario" noValidate onSubmit={handleSubmit(handleForm)}>
            <Inventario
            register={register}
            errors={errors}
            />
        <input type="submit" className="boton_guardar" value='Guardar' />
        </form>
        </div>
        <Link className="enlace_eliminar boton_regresar" to='/prestamos/inventario'>Regresar</Link>
    </>
  )
}
