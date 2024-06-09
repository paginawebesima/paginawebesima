import { UseFormRegister,FieldErrors } from "react-hook-form";
import { PreinscripcionesEsima } from "../types";

type FormularioEditarNuevoIngresoProps={
    register:UseFormRegister<PreinscripcionesEsima>
    errors:FieldErrors<PreinscripcionesEsima>
}
export default function FormularioEditarNuevoIngreso({register}:FormularioEditarNuevoIngresoProps) {
  return (
    <div className="form-register">
        <label htmlFor="">Titulo Requerimiento</label>
        <input className="controls" type="text" 
        id="titulo"
        {...register('titulo',{
            required:"El titulo es obligatorio"
        })}
        />
        <label>Requerimiento 1</label>
        <input type="text" 
        className="controls"
        id="titulo"
        {...register('requerimiento1',{
            required:"El titulo es obligatorio"
        })}
        />
        <label>Requerimiento 2</label>
         <input type="text" 
        id="titulo"
        className="controls"
        {...register('requerimiento2',{
            required:"El titulo es obligatorio"
        })}
        />
        <label>Requerimiento 3</label>
         <input type="text" 
        id="titulo"
        className="controls"
        {...register('requerimiento3',{
            required:"El titulo es obligatorio"
        })}
        />
        <label>Requerimiento 4</label>
        <input type="text" 
        id="titulo"
        className="controls"
        {...register('requerimiento4',{
            required:"El titulo es obligatorio"
        })}
        />
        <label>Requerimiento 5</label>
        <input type="text" 
        id="titulo"
        className="controls"
        {...register('requerimiento5',{
            required:"El titulo es obligatorio"
        })}
        />
    </div>
  )
}
