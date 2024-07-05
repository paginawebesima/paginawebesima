import { useQuery } from "react-query"
import { obtenerAdministrativos } from "../../api/api"
import { Link } from "react-router-dom"

export default function ActualizarAdministrativos() {
    const {data,isLoading} = useQuery({
        queryKey:['administrativos'],
        queryFn:obtenerAdministrativos
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
                    <div className="administrativo_actualizar">
                    <Link className="enlace_eliminar boton_actualizar_administrativos" to={`${administrativosInformacion._id}/editar`}>Actualizar</Link>

                    </div>
                </div>
            </div>
        ))}
        <Link className="boton_regresar enlace_eliminar" to='/panel/administrativos'>Regresar</Link>
    </>
  )
}
