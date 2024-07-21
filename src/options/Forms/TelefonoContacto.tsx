import {UseFormRegister,FieldErrors} from 'react-hook-form'
import { FormTelefono } from '../../types'
import ErrorMessage from '../../components/ErrorMessage'

type TelefonoContactoProps={
    register: UseFormRegister<FormTelefono>
    errors:FieldErrors<FormTelefono>
}


export default function TelefonoContacto({register,errors}:TelefonoContactoProps) {
  return (
    <>
    <div className="formulario_actualizar_tel">
                <div className="Telefono_Actual">
                    <label htmlFor="">Telefono</label>
                    <input className='formulario_input' type="text" {...register('telefono',{
                        required:"El telefono es obligatorio"
                    })}/>
                    {errors.telefono &&(
                        <ErrorMessage>{errors.telefono.message}</ErrorMessage>
                    )}
                </div>
    </div>
    </>
  )
}
