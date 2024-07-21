import { FieldErrors, UseFormRegister } from "react-hook-form"
import { EsimaClausuraFormData } from "../../types"
import ErrorMessage from "../../components/ErrorMessage"

type InputClausuraProps={
    register:UseFormRegister<EsimaClausuraFormData>
    errors:FieldErrors<EsimaClausuraFormData>
}
export default function InputClausura({register,errors}:InputClausuraProps) {
  return (
    <>
        <div className="formulario_flex">  
            <label htmlFor="titulo_clausura">Titulo</label>
            <input type="text"
            className="formulario_input" 
            id="titulo_clausura"
            {...register('titulo', {
                required: "El titulo es obligatorio",
            })}
            />
            {errors.titulo&& (
                    <ErrorMessage>{errors.titulo.message}</ErrorMessage>
                )}
        </div>
        <div className="formulario_flex formulario_ultimo">
            <label htmlFor="informacion_clausura">Informacion</label>
            <textarea id="informacion_clausura"
            className="formulario_input"
            {...register('informacion', {
                required: "La informacion es obligatoria",
            })}
            ></textarea>
            {errors.informacion&& (
                    <ErrorMessage>{errors.informacion.message}</ErrorMessage>
                )}
        </div>
    </>
  )
}
