import { FieldErrors, UseFormRegister } from "react-hook-form"
import { PrestamosFormData } from "../types"
import MensajeError from "./MensajeError"

type PrestamoProps={
    register:UseFormRegister<PrestamosFormData>
    errors:FieldErrors<PrestamosFormData>
}
export default function Prestamo({register,errors}:PrestamoProps) {
  return (
    <>
    <div>
        <label htmlFor="">Alumno</label>
        <input type="text" 
        id='alumno'
        {...register('alumno',{
            required:"El nombre es obligatorio"
        })}
        />
        {errors.alumno&&(
            <MensajeError>{errors.alumno.message}</MensajeError>
        )}
    </div>
    <div>
        <label htmlFor="">Grado</label>
        <input type="text" 
        id="grado"
        {...register('grado',{
            required:"El grado es obligatorio"
        })}
        />
        {errors.grado&&(
            <MensajeError>{errors.grado.message}</MensajeError>
        )}
    </div>
    <div>
        <label htmlFor="">Grupo</label>
        <input type="text"
        id="grupo"
        {...register('grupo',{
            required:"El grupo es obligatorio"
        })}
        />
        {errors.grupo&&(
            <MensajeError>{errors.grupo.message}</MensajeError>
        )}
    </div>
    <div>
        <label htmlFor="">Libro</label>
        <input type="text" 
        id="libro"
        {...register('libro',{
            required:"El libro es obligatorio"
        })}
        />
        {errors.libro&&(
            <MensajeError>{errors.libro.message}</MensajeError>
        )}
    </div>
    <div>
        <label htmlFor="">Fecha prestamo</label>
        <input type="text" 
        id="fechaprestamo"
        {...register('fechaprestamo',{
            required:"La fecha de prestamo es obligatoria"
        })}
        />
        {errors.fechaprestamo&&(
            <MensajeError>{errors.fechaprestamo.message}</MensajeError>
        )}
    </div>
    <div>
        <label htmlFor="">Fecha Devolucion</label>
        <input type="text" 
        id=""
        {...register('fechadevolucion',{
            required:"La fecha de devolucion es obligatoria"
        })}
        />
        {errors.fechadevolucion&&(
            <MensajeError>{errors.fechadevolucion.message}</MensajeError>
        )}
    </div>
    </>
  )
}
