import { UseFormRegister,FieldErrors } from "react-hook-form";
import { PreinscripcionesEsima } from "../types";

type FormularioEditarNuevoIngresoProps={
    register:UseFormRegister<PreinscripcionesEsima>
    errors:FieldErrors<PreinscripcionesEsima>
}
export default function FormularioEditarNuevoIngreso({errors,register}:FormularioEditarNuevoIngresoProps) {
  return (
    <div className="form-register">
      <div>
        <label htmlFor="titulo">Titulo Requerimiento</label>
        <input className="controls" type="text" 
        id="titulo"
        {...register('titulo',{
            required:"El titulo es obligatorio"
        })}
        />
        {errors.titulo&&(
          <p className="alerta">{errors.titulo.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="Requerimiento1">Requerimiento 1</label>
        <input type="text" 
        className="controls"
        id="Requerimiento1"
        {...register('requerimiento1',{
            required:"Minimo ingresar 1 requerimiento"
        })}
        />
        {errors.requerimiento1&&(
          <p className="alerta">{errors.requerimiento1.message}</p>
        )}
      </div>
        <label htmlFor="Requerimiento2">Requerimiento 2</label>
         <input type="text" 
        id="Requerimiento2"
        className="controls"
        {...register('requerimiento2',{
            
        })}
        />
        <label htmlFor="Requerimiento3">Requerimiento 3</label>
         <input type="text" 
        id="Requerimiento3"
        className="controls"
        {...register('requerimiento3',{
            
        })}
        />
        <label htmlFor="Requerimiento4">Requerimiento 4</label>
        <input type="text" 
        id="Requerimiento4"
        className="controls"
        {...register('requerimiento4',{
            
        })}
        />
        <label htmlFor="Requerimiento5">Requerimiento 5</label>
        <input type="text" 
        id="Requerimiento5"
        className="controls"
        {...register('requerimiento5',{
            
        })}
        />
       <label htmlFor="icono">Icono</label>
        <input type="text" 
        id="icono"
        className="controls"
        {...register('icono',{
            required:"La imagen del icono es obligatoria"
        })}
        
        />
        {
          errors.icono&&(
            <p className="alerta">{errors.icono.message}</p>
          )
        }
    </div>
  )
}
