import { useState } from "react"
import { useForm } from "react-hook-form";
import { EsimaAdministrativosFormData } from "../../../types";
import { useMutation } from "react-query";
import InputAdministrativo from "../InputAdministrativos";
import { crearAdministrativos } from "../../../api/api";
import { toast } from "react-toastify";
export default function InsertarAdministrativos() {
    const initialValues:EsimaAdministrativosFormData={
        directivo:"",
        cargo:""
    }
    const {register,handleSubmit,formState:{errors}} = useForm({defaultValues:initialValues})
    const {mutate} = useMutation({
        mutationFn:crearAdministrativos,
        onError:(error:Error)=>{
            toast.error(error.message)
        },
        onSuccess:(data)=>{
            toast.success(data)
        }
    })
    const handleForm = (formData:EsimaAdministrativosFormData)=>mutate(formData)
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
        <button className="box1_administrativos_modal" onClick={abrirModal}>Añadir administrativos</button>
        {modal &&(
            <div className="modal_administrativos">
                <div onClick={abrirModal} className="overlay_administrativos"></div>
                <div className="modal-content_administrativos">
                <button className="close-modal_administrativos" onClick={abrirModal}>
                X
                </button>
                <form noValidate onSubmit={handleSubmit(handleForm)}>
                    <h2 className="espacio-texto">Insertar administrativos</h2>
                    <InputAdministrativo register={register} errors={errors}/>
                    <input className="boton_guardar espacio" type="submit" value='Guardar' />
                </form>
                </div>
            </div>
        )}
    </>
  )
}
