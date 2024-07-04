import { toast } from "react-toastify"
import { eliminarTelefono, obtenertelefono } from "../../api/api"
import { useMutation, useQuery } from "react-query"
import { Link, useNavigate } from "react-router-dom"
export default function EliminarNumeroTelefono() {
  const navigate = useNavigate()
    const {data} = useQuery({
        queryKey:'telefonos',
        queryFn:obtenertelefono
       })
       const {mutate} = useMutation({
            mutationFn:eliminarTelefono,
            onError:(error:Error)=>{
              toast.error(error.message)
            },
            onSuccess:(data)=>{
                toast.success(data)
                navigate('/panel/informacion')
            }
       })
  return (
    <>
        <h2 className="texto_prestamo">Eliminar Telefono</h2>
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
            <button className="boton_telefono" onClick={()=>{mutate(telefono._id)}}>Eliminar</button>
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
