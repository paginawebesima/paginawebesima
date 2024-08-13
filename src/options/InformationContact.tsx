import {useForm} from 'react-hook-form'
import {useMutation} from 'react-query'
import { FormTelefono } from '../types';
import {toast} from 'react-toastify'
import { creartelefonocontacto } from '../api/api';
import TelefonoContacto from './Forms/TelefonoContacto';
import { Link, useNavigate } from 'react-router-dom';
export default function InformationContact() {
  const navigate=useNavigate();
  const valoresiniciales={
    telefono:""
  }
  const {mutate} = useMutation({
    mutationFn:creartelefonocontacto,
    onError:(error:Error)=>{
      toast.error(error.message)
    },
    onSuccess:(data)=>{
      toast.success(data)
      navigate('/panel/informacion')
    }
  })

  const {register,handleSubmit,formState:{errors}} = useForm({defaultValues:valoresiniciales});
  const handleForm = (form:FormTelefono)=>mutate(form)
  return (
    <>
      <h2 className='texto_prestamo'>Añadir Teléfono</h2>
      <div className='div_formulario'>
        <form className='formulario' noValidate onSubmit={handleSubmit(handleForm)} >
            <TelefonoContacto register={register} errors={errors}/>
            <input className="boton_guardar" type="submit" value='Aceptar'/>
        </form>
      </div>
        <Link className='boton_regresar enlace_eliminar' to='/panel/informacion'>Regresar</Link>
    </>
  )
}
