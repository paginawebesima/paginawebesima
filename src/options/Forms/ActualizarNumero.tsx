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
    <h2 className="prestamo_turno">Actualizar Telefono</h2>
      <div >
      <table className="tabla_telefono">
        <thead>
          <tr>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((telefono)=>(
         <tr>
            <th className="elemento_tabla">{telefono.telefono}</th>
            <div>
            <Link className="enlace_eliminar actualizar_telefono" 
            to={`/panel/informacion/actualizar/${telefono._id}/editar`}>Editar</Link>
            </div>
          </tr>
          ))}
        </tbody>
      </table>
      </div>
    <Link className="boton_regresar enlace_eliminar" to='/panel/informacion'>Regresar</Link>
    </>
  )
}
