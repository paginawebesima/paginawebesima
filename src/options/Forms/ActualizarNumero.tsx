import { Link } from "react-router-dom"
import { obtenertelefono } from "../../api/api"
import { useQuery } from "react-query"
export default function ActualizarNumero() {
    const {data} = useQuery({
        queryKey:'telefonos',
        queryFn:obtenertelefono
       })
  return (
    <>
    <h2>Actualizar Telefono</h2>
    {data?.map((telefono)=>(
        <div>
            <p className="">{telefono.telefono}</p>
            <Link to={`/panel/informacion/actualizar/${telefono._id}/editar`}>Editar</Link>
        </div>
      ))}

    </>
  )
}
