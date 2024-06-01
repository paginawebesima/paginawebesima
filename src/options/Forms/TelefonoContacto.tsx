import {UseFormRegister,FieldErrors} from 'react-hook-form'
import { FormTelefono } from '../../types'

type TelefonoContactoProps={
    register: UseFormRegister<FormTelefono>
    errors:FieldErrors<FormTelefono>
}


export default function TelefonoContacto({register,errors}:TelefonoContactoProps) {
  return (
    <>
    <div className="formulario_actualizar_tel">
                <div className="Telefono_Actual">
                    <label htmlFor="">Telefono actual: <span>6182930123</span> </label>
                    <input type="text" {...register('telefono',{
                        required:"El telefono es obligatorio"
                    })}/>
                    {errors.telefono &&(
                        <p>{errors.telefono.message}</p>
                    )}
                </div>
            <input className="formulario_aceptar" type="submit" value='Aceptar'/>
    </div>
    </>
  )
}
