import { ToastContainer, toast } from 'react-toastify';
import { Link} from "react-router-dom"
import { LibrosFormData, TInventario } from '../../../types';
import { useForm } from "react-hook-form"
import Inventario from './Inventario';
import { useMutation } from "react-query"
import { actualizarLibros } from '../../../api/api';

type EditarLibrosProps={
    data:LibrosFormData
    inventarioId:TInventario['_id']
}
export default function EditarLibros({data,inventarioId}:EditarLibrosProps) {
    const {register,handleSubmit,formState:{errors}}=useForm({defaultValues:{
            titulo:data.titulo,
            autor:data.autor,
            genero:data.genero,
            cantidad_total:data.cantidad_total,
        }
    })
    const {mutate} = useMutation({
        mutationFn:actualizarLibros,
        onError:(error:Error)=>{
            toast.error(error.message)
        },
        onSuccess:(data)=>{
            toast.success(data)
            
        }
    })
    const handleForm = (formData2:LibrosFormData)=>{
        const data2 = {
            formData2,
            inventarioId
        }
        mutate(data2)
    }
   
  return (
    <div>
         <ToastContainer 
         pauseOnHover={false}
            pauseOnFocusLoss={false}
        />
        <h2 className='texto_prestamo'>Actualizar libro</h2>
        <div className='div_formulario'>
        <form className='formulario' noValidate onSubmit={handleSubmit(handleForm)}>
            <Inventario register={register} errors={errors}/>
            <input className='boton_guardar' type="submit" value='Guardar' />
        </form>
        </div>
        <Link className="boton_regresar enlace_eliminar" to='/prestamos/inventario'>Regresar</Link>
    </div>
  )
}