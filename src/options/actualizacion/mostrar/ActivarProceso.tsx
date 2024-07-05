import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { activarProcesoAPI } from "../../../api/api";

export default function ActivarProceso() {
    const {mutate} = useMutation({
        mutationFn:activarProcesoAPI,
        onError:(error:Error)=>{
            toast.error(error.message)
        },
        onSuccess:()=>{
            toast.success("Proceso desactivado correctamente")
        }

    })
  return (
    <button onClick={()=>mutate('668225f0caa92deeb595ba24')} id='boton1' className='boton_desactivar'>Desactivar informacion nuevo ingreso</button>
  )
}
