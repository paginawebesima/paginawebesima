import { FieldErrors, UseFormRegister } from "react-hook-form"
import { SalonPrestamoFormData } from "../../types"
import ErrorMessage from "../../components/ErrorMessage"

type PrestamoSalonProps={
    register:UseFormRegister<SalonPrestamoFormData>
    errors:FieldErrors<SalonPrestamoFormData>
}
export default function PrestamoSalon({register,errors}:PrestamoSalonProps) {
  return (
    <>
            <div className="formulario_flex">
                <label htmlFor="Persona">Persona</label>
                <input
                    className="formulario_input"
                    type="text"
                    id="persona"
                    {...register('persona', {
                        required: "La persona es obligatorio"
                    })}
                />
                {errors.persona && (
                    <ErrorMessage>{errors.persona.message}</ErrorMessage>
                )}
            </div>
            <div className="formulario_flex">
                <label htmlFor="Grupo">Grupo</label>
                <input
                    className="formulario_input"
                    type="text"
                    id="Grupo"
                    {...register('grupo', {
                        
                    })}
                />
            </div>
            <div className="formulario_flex">
                <label htmlFor="Fecha">Fecha</label>
                <input
                    type="date"
                    id="Fecha"
                    {...register('fecha', {
                        required: "La fecha de prestamo es obligatoria"
                    })}
                    className="formulario_input"
                />
                {errors.fecha && (
                    <ErrorMessage>{errors.fecha.message}</ErrorMessage>
                )}
            </div>
            <div className="formulario_flex">
                <label htmlFor="hora_inicio">Hora Inicio</label>
                <input
                    className="formulario_input"
                    type="time"
                    id="hora_inicio"
                    {...register('hora_inicio', {
                        required: "La hora inicio es obligatoria"
                    })}
                />
                {errors.hora_inicio && (
                    <ErrorMessage>{errors.hora_inicio.message}</ErrorMessage>
                )}
            </div>
            <div className="formulario_flex">
                <label htmlFor="hora_final">Hora Final</label>
                <input
                    className="formulario_input"
                    type="time"
                    id="hora_final"
                    {...register('hora_final', {
                        required: "La hora final es obligatoria"
                    })}
                />
                {errors.hora_final&& (
                    <ErrorMessage>{errors.hora_final.message}</ErrorMessage>
                )}
            </div>
            <div className="formulario_flex formulario_ultimo">
            <label htmlFor="Motivo">Motivo</label>
            <textarea id="Motivo"
            className="formulario_input"
            {...register('motivo', {
                required: "El motivo es obligatorio",
            })}
            ></textarea>
            {errors.motivo&& (
                    <ErrorMessage>{errors.motivo.message}</ErrorMessage>
                )}
        </div>
    </>
  )
}
