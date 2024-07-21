import { useMutation, useQuery, useQueryClient } from "react-query"
import { eliminarClausura, obtenerClausura } from "../../api/api"
import { toast } from "react-toastify"
import { Link } from "react-router-dom";

export default function EliminarClausura() {
    const queryClient = useQueryClient();
    const {data,isLoading} = useQuery({
        queryKey:['Clausura'],
        queryFn:obtenerClausura
      })
      const{mutate}= useMutation({
        mutationFn:eliminarClausura,
        onError:(error:Error)=>{
            toast.error(error.message)
        },
        onSuccess:(data)=>{
            toast.success(data)
            queryClient.invalidateQueries({queryKey:['Clausura']})
        }

      })
    if(isLoading) return 'Cargando....'
  if(data)return (
    <>
        {data.map((clausuraInformacion:{
            _id:string,
            titulo:string,
            informacion:string
        })=>(
            <div className="clausura_container">
                <div className="clausura_container_children">
                    <h2>{clausuraInformacion.titulo}</h2>
                    <p>{clausuraInformacion.informacion}</p>
                    <button onClick={()=>{mutate(clausuraInformacion._id)}} className="eliminar">Eliminar</button>
                </div>
            </div>
        ))}
        <Link className="boton_regresar enlace_eliminar" to='/panel/clausura'>Regresar</Link>
    </>
  )
}
