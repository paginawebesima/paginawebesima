import {useForm} from 'react-hook-form'
import {useMutation} from 'react-query'
import { FormTelefono } from '../types';
import {toast} from 'react-toastify'
import { creartelefonocontacto } from '../api/api';
import TelefonoContacto from './Forms/TelefonoContacto';
import { useNavigate } from 'react-router-dom';
export default function InformationContact() {
  const navigate=useNavigate();
  const valoresiniciales={
    telefono:""
  }
  const {mutate} = useMutation({
    mutationFn:creartelefonocontacto,
    onError:(error)=>{
      toast.error("")
    },
    onSuccess:(data)=>{
      toast.success(data)
      navigate('/panel')
    }
  })

  const {register,handleSubmit,formState:{errors}} = useForm({defaultValues:valoresiniciales});
  const handleForm = (form:FormTelefono)=>mutate(form)
  return (
    <>
        <form noValidate onSubmit={handleSubmit(handleForm)} >
            <TelefonoContacto register={register} errors={errors}/>
        </form>
    </>
  )
}
