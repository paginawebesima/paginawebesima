import { FieldErrors, UseFormRegister } from "react-hook-form"
import { LibrosFormData } from "../../../types"
import ErrorMessage from "../../../components/ErrorMessage"

type InventarioProps = {
  register: UseFormRegister<LibrosFormData>
  errors: FieldErrors<LibrosFormData>
}

export default function Inventario({ register, errors }: InventarioProps) {
  return (
    <>
      <div className="formulario_flex">
        <label htmlFor="titulo">Titulo</label>
        <input className="formulario_input" type="text" 
          id='titulo'
          {...register('titulo', {
            required: "El titulo es obligatorio"
          })}
        />
        {errors.titulo && (
          <ErrorMessage>{errors.titulo.message}</ErrorMessage>
        )}
      </div>
      <div className="formulario_flex">
        <label htmlFor="autor">Autor</label>
        <input className="formulario_input" type="text" 
          id='autor'
          {...register('autor', {
            required: "El autor es obligatorio"
          })}
        />
        {errors.autor && (
          <ErrorMessage>{errors.autor.message}</ErrorMessage>
        )}
      </div>
      <div className="formulario_flex">
        <label htmlFor="genero">Género</label>
        <input className="formulario_input" type="text" 
          id='genero'
          {...register('genero', {
            required: "El género es obligatorio"
          })}
        />
        {errors.genero && (
          <ErrorMessage>{errors.genero.message}</ErrorMessage>
        )}
      </div>
      <div className="formulario_flex">
        <label htmlFor="cantidad_total">Cantidad Total</label>
        <input className="formulario_input" type="number" 
          id='cantidad_total'
          {...register('cantidad_total', {
            required: "La cantidad total es obligatoria"
          })}
        />
        {errors.cantidad_total && (
          <ErrorMessage>{errors.cantidad_total.message}</ErrorMessage>
        )}
      </div>
    </>
  )
}