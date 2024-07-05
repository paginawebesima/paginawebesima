import { FieldErrors, UseFormRegister } from "react-hook-form"
import { EsimaAdministrativosFormData } from "../../types"
import ErrorMessage from "../../components/ErrorMessage"

type InputAdministrativosProps={
    register:UseFormRegister<EsimaAdministrativosFormData>
    errors:FieldErrors<EsimaAdministrativosFormData>
}
export default function InputAdministrativos({register,errors}:InputAdministrativosProps) {
  return (
    <>
        <div className="formulario_flex">  
            <label htmlFor="directivo_administrativos">Directivo</label>
            <input type="text"
            className="formulario_input" 
            id="directivo_administrativos"
            {...register('directivo', {
                required: "El nombre del directivo es obligatorio",
            })}
            />
            {errors.directivo&& (
                    <ErrorMessage>{errors.directivo.message}</ErrorMessage>
                )}
        </div>
        <div className="formulario_flex formulario_ultimo">
            <label htmlFor="cargo_administrativos">Cargo</label>
            <input type="text"
            className="formulario_input"
            id="cargo_administrativos"
            {...register('cargo', {
                required: "El cargo del administrativo es obligatorio",
            })}
            />
            {errors.cargo&& (
                    <ErrorMessage>{errors.cargo.message}</ErrorMessage>
                )}
        </div>
    </>
  )
}
