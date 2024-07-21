import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { desactivarProcesoAPI } from "../../../api/api";

export default function DesactivarProceso() {
    const {mutate} = useMutation({
        mutationFn:desactivarProcesoAPI,
        onError:(error:Error)=>{
            toast.error(error.message)
        },
        onSuccess:()=>{
            toast.success("Proceso activado correctamente")
        }

    })
  return (
    <button onClick={()=>mutate('668225f0caa92deeb595ba24')} id='boton' className='boton_activar'>Activar informacion nuevo ingreso</button>
  )
}
