import { ToastContainer, toast } from 'react-toastify';
import { Link} from "react-router-dom"
import { User, UserRegistrationForm } from '../../types'; 
import { useForm } from "react-hook-form"
import { useMutation } from "react-query"
import { actualizarUsuarios } from '../../api/api'; 


type EditarUsuariosProps={
    data:UserRegistrationForm
    prestamoId:User['_id']
}
export default function EditarUsuarios({data,usuariosId}:EditarUsuariosProps) {
    const {register,handleSubmit,formState:{errors}}=useForm({defaultValues:{
            name:data.name,
            email:data.email,
            rol:data.rol
        }
    })
    const {mutate} = useMutation({
        mutationFn:actualizarUsuarios,
        onError:(error:Error)=>{
            toast.error(error.message)
        },
        onSuccess:(data)=>{
            toast.success(data)
            
        }
    })
    const handleForm = (formData2:UserRegistrationForm)=>{
        const data2 = {
            formData2,
            usuariosId
        }
        mutate(data2)
    }
   
  return (
    <div>
         <ToastContainer 
         pauseOnHover={false}
            pauseOnFocusLoss={false}
        />
        <h2 className='texto_prestamo'>Actualizar usuarios</h2>
        <div className='div_formulario'>
        <form className='formulario' noValidate onSubmit={handleSubmit(handleForm)}>
            <User register={register} errors={errors}/>
            <div className='formulario_flex'>
            </div>
            <input className='boton_guardar' type="submit" value='Guardar' />
        </form>
        </div>
        <Link className="boton_regresar enlace_eliminar" to='/usuarios'>Regresar</Link>
    </div>
  )
}
