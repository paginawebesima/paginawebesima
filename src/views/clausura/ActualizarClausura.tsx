import { useQuery } from "react-query"
import { obtenerClausura } from "../../api/api"
import { Link } from "react-router-dom"

export default function ActualizarClausura() {
    const {data,isLoading} = useQuery({
        queryKey:['Clausura'],
        queryFn:obtenerClausura
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
                    <div className="clausura_actualizar">
                    <Link className="enlace_eliminar boton_actualizar_clausura" to={`${clausuraInformacion._id}/editar`}>Actualizar</Link>

                    </div>
                </div>
            </div>
        ))}
        <Link className="boton_regresar enlace_eliminar" to='/panel/clausura'>Regresar</Link>
    </>
  )
}
