import { useState } from "react"
import { useForm } from "react-hook-form";
import { EsimaClausuraFormData } from "../../../types";
import { useMutation } from "react-query";
import InputClausura from "../InputClausura";
import { crearClausura } from "../../../api/api";
import { toast } from "react-toastify";
export default function InsertarClausura() {
    const initialValues:EsimaClausuraFormData={
        titulo:"",
        informacion:""
    }
    const {register,handleSubmit,formState:{errors}} = useForm({defaultValues:initialValues})
    const {mutate} = useMutation({
        mutationFn:crearClausura,
        onError:(error:Error)=>{
            toast.error(error.message)
        },
        onSuccess:(data)=>{
            toast.success(data)
        }
    })
    const handleForm = (formData:EsimaClausuraFormData)=>mutate(formData)
    const [modal,setModal] = useState(false);
    const abrirModal=()=>{
        setModal(!modal)
    }
    if(modal){
        document.body.classList.add('activar-modal')
    }else{
        document.body.classList.remove('activar-modal')
    }
  return (
    <>
        <button className="box1_clausura_modal" onClick={abrirModal}>Añadir clausura</button>
        {modal &&(
            <div className="modal_clausura">
                <div onClick={abrirModal} className="overlay_clausura"></div>
                <div className="modal-content_clausura">
                <button className="close-modal_clausura" onClick={abrirModal}>
                X
                </button>
                <form noValidate onSubmit={handleSubmit(handleForm)}>
                    <h2 className="espacio-texto">Insertar nota informativa clausura</h2>
                    <InputClausura register={register} errors={errors}/>
                    <input className="boton_guardar espacio" type="submit" value='Guardar' />
                </form>
                </div>
            </div>
        )}
    </>
  )
}
