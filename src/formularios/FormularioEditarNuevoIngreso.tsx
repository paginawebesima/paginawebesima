import { UseFormRegister,FieldErrors } from "react-hook-form";
import { PreinscripcionesEsima } from "../types";
import ErrorMessage from "../components/ErrorMessage";

type FormularioEditarNuevoIngresoProps={
    register:UseFormRegister<PreinscripcionesEsima>
    errors:FieldErrors<PreinscripcionesEsima>
}
export default function FormularioEditarNuevoIngreso({errors,register}:FormularioEditarNuevoIngresoProps) {
  return (
    <div className="">
      <div className="formulario_flex">
        <label htmlFor="titulo">Titulo Requerimiento</label>
        <input className="formulario_input" type="text" 
        id="titulo"
        {...register('titulo',{
            required:"El titulo es obligatorio"
        })}
        />
        {errors.titulo&&(
          <ErrorMessage>{errors.titulo.message}</ErrorMessage>
        )}
      </div>
      <div className="formulario_flex">
        <label htmlFor="Requerimiento1">Requerimiento 1</label>
        <input type="text" 
        className="formulario_input"
        id="Requerimiento1"
        {...register('requerimiento1',{
            required:"Minimo ingresar 1 requerimiento"
        })}
        />
        {errors.requerimiento1&&(
          <ErrorMessage>{errors.requerimiento1.message}</ErrorMessage>
        )}
      </div>
      <div className="formulario_flex">
        <label htmlFor="Requerimiento2">Requerimiento 2</label>
         <input type="text" 
        id="Requerimiento2"
        className="formulario_input"
        {...register('requerimiento2',{
            
        })}
        />
      </div>
      <div className="formulario_flex">
        <label htmlFor="Requerimiento3">Requerimiento 3</label>
         <input type="text" 
        id="Requerimiento3"
        className="formulario_input"
        {...register('requerimiento3',{
            
        })}
        />
      </div>
      <div className="formulario_flex">
        <label htmlFor="Requerimiento4">Requerimiento 4</label>
        <input type="text" 
        id="Requerimiento4"
        className="formulario_input"
        {...register('requerimiento4',{
            
        })}
        />
      </div>
      <div className="formulario_flex">
        <label htmlFor="Requerimiento5">Requerimiento 5</label>
        <input type="text" 
        id="Requerimiento5"
        className="formulario_input"
        {...register('requerimiento5',{
            
        })}
        />
      </div>
      <div className="formulario_flex formulario_ultimo">
       <label htmlFor="icono">Icono</label>
        <select id="icono" 
        className="formulario_input"
        {...register('icono',{
          required:"La imagen del icono es obligatoria"
        })}
        >
          <option value="/examen.svg">/examen.svg</option>
          <option value="/horario.svg">/horario.svg</option>
          <option value="/papeleria.svg">/papeleria.svg</option>
          <option value="/resultados.svg">/resultados.svg</option>
        </select>
        {
          errors.icono&&(
            <ErrorMessage>{errors.icono.message}</ErrorMessage>
          )
        }
      </div>
    </div>
  )
}
