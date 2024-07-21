import { useMutation, useQuery, useQueryClient } from "react-query"
import { eliminarLibros, obtenerLibros } from "../../../api/api" 
import { Link } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
export default function InventarioLibros() {
    const {data} = useQuery({
        queryKey:['Inventario'],
        queryFn:obtenerLibros
    })
    const QueryClient = useQueryClient();
    const {mutate} = useMutation({
        mutationFn:eliminarLibros,
        onError:(error:Error)=>{
            toast.error(error.message)
        },
        onSuccess:(data)=>{
            toast.success(data)
            QueryClient.invalidateQueries({queryKey:['Inventario']})
        }
    })
    
  if(data)return (

    <div>
            <ToastContainer 
                pauseOnHover={false}
                pauseOnFocusLoss={false}
            />
            <div>
                <h2 className="prestamo_turno">Inventario</h2>
                <div className="prestamos table-container">
                    <table className="tabla_prestamos">
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Autor</th>
                                <th>Género</th>
                                <th>Cantidad Total</th>
                                <th>Cantidad Disponible</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((inventario: {
                                _id: string,
                                titulo: string,
                                autor: string,
                                genero: string,
                                cantidad_total: number,
                                cantidad_disponible: number,
                            }) => (
                                <tr key={inventario._id}>
                                    <th className="elemento_tabla">{inventario.titulo}</th>
                                    <th className="elemento_tabla">{inventario.autor}</th>
                                    <th className="elemento_tabla">{inventario.genero}</th>
                                    <th className="elemento_tabla">{inventario.cantidad_total}</th>
                                    <th className="elemento_tabla">{inventario.cantidad_disponible}</th>
                                    <td className="botones_flex_prestamo">
                                        <button onClick={() => { mutate(inventario._id) }} className="eliminar eliminar_separacion">Eliminar</button>
                                        <Link to={`/actualizarLibros/${inventario._id}/editar`} className="actualizar actualizar_separacion enlace_eliminar">Actualizar</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="enlace_crear">
                    <Link className="enlace_eliminar boton_agregar_prestamo" to='/crearLibros'>Añadir libro</Link>
                </div>
            </div>
            <Link className="boton_regresar enlace_eliminar" to='/prestamos'>Regresar</Link>
        </div>
  )
}
