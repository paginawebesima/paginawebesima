import { toast } from "react-toastify"
import { eliminarTelefono, obtenertelefono } from "../../api/api"
import { useMutation, useQuery } from "react-query"
import { useNavigate } from "react-router-dom"
export default function EliminarNumeroTelefono() {
  const navigate = useNavigate()
    const {data} = useQuery({
        queryKey:'telefonos',
        queryFn:obtenertelefono
       })
       const {mutate} = useMutation({
            mutationFn:eliminarTelefono,
            onError:()=>{

            },
            onSuccess:(data)=>{
                toast.success(data)
                navigate('/panel')
            }
       })
  return (
    <>
        <h2>Eliminar Telefono</h2>
        {data?.map((telefono)=>(
        <div>
            <p className="">{telefono.telefono}</p>
            <button onClick={()=>{mutate(telefono._id)}}>Eliminar</button>
        </div>
      ))}
    </>
  )
}
