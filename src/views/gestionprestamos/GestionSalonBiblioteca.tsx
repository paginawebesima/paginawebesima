import { useMutation, useQuery, useQueryClient } from "react-query"
import { eliminarAdministracion, obtenerAdministracion } from "../../api/administracion"
import { Link } from "react-router-dom"
import { convertirFecha } from "../../prestamos/date/date"
import { toast } from "react-toastify"

export default function GestionSalonBiblioteca() {
    const {data} = useQuery({
        queryKey:['Administracion'],
        queryFn:obtenerAdministracion
    })
    const queryClient = useQueryClient();
    const{mutate} = useMutation({
      mutationFn:eliminarAdministracion,
      onError:(error:Error)=>{
        toast.error(error.message)
      },
      onSuccess:(data)=>{
        toast.success(data)
        queryClient.invalidateQueries({queryKey:['Administracion']})
      }
    })

  if(data)return (
    <div>
      <h2 className="prestamo_turno">Registros</h2>
      {data.map((administracionPrestamo: {
        _id: string,
        persona: string,
        grupo: string,
        fecha:string,
        hora_inicio:string,
        hora_final:string,
        motivo:string
      }) => (
        <div key={administracionPrestamo._id} className="administracion_container">
          <div className="administracion_container_children">
            <div className="administracion_informacion">
            <h2 className="administracion_persona">Persona</h2>
            <p className="administracion_persona_children">{administracionPrestamo.persona}</p>
            </div>
            <div className="administracion_informacion">
              <div className="administracion_informacion">
            <h2>Fecha</h2>
            <p>{convertirFecha(administracionPrestamo.fecha)}</p>
            <h2>Grupo</h2>
            <p>{administracionPrestamo.grupo}</p>
              </div>
              <div className="administracion_informacion">
            <h2>Hora inicio</h2>
            <p>{administracionPrestamo.hora_inicio}</p>
            <h2>Hora final</h2>
            <p>{administracionPrestamo.hora_final}</p>
              </div>
            </div>
            <h2>Motivo</h2>
            <p>{administracionPrestamo.motivo}</p>
            <div className="administrativo_actualizar">
            </div>
          <div className="div_botones_administracion">
                <Link className="boton_actualizar_administracion" to={`/prestamos/${administracionPrestamo._id}/editar`}>Actualizar</Link>
                <button onClick={()=>mutate(administracionPrestamo._id)} className="boton_eliminar_administracion">Eliminar</button>
          </div>
          </div>
          <div>
          </div>
        </div>
      ))}
      <div className="enlace_crear">
        <Link className="enlace_eliminar boton_agregar_prestamo" to='/prestamos/crearAdministracion'>Añadir prestamo</Link>
      </div>
      <Link className="boton_regresar enlace_eliminar" to='/prestamos'>Regresar</Link>
    </div>
  )
}
