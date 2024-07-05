import { useMutation, useQuery, useQueryClient } from "react-query"
import { eliminarAdministrativos, obtenerAdministrativos } from "../../api/api"
import { toast } from "react-toastify"
import { Link } from "react-router-dom";

export default function EliminarAdministrativos() {
    const queryClient = useQueryClient();
    const {data,isLoading} = useQuery({
        queryKey:['Administrativos'],
        queryFn:obtenerAdministrativos
      })
      const{mutate}= useMutation({
        mutationFn:eliminarAdministrativos,
        onError:(error:Error)=>{
            toast.error(error.message)
        },
        onSuccess:(data)=>{
            toast.success(data)
            queryClient.invalidateQueries({queryKey:['Administrativos']})
        }

      })
    if(isLoading) return 'Cargando....'
  if(data)return (
    <>
        {data.map((administrativosInformacion:{
            _id:string,
            directivo:string,
            cargo:string
        })=>(
            <div className="administrativos_container">
                <div className="administrativos_container_children">
                    <h2>{administrativosInformacion.directivo}</h2>
                    <p>{administrativosInformacion.cargo}</p>
                    <button onClick={()=>{mutate(administrativosInformacion._id)}} className="eliminar">Eliminar</button>
                </div>
            </div>
        ))}
        <Link className="boton_regresar enlace_eliminar" to='/panel/administrativos'>Regresar</Link>
    </>
  )
}
