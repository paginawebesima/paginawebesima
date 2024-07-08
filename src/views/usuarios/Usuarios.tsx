import { useMutation, useQuery, useQueryClient } from "react-query"
import { eliminarUsuarios, obtenerUsuarios } from "../../api/api"
import { Link, Outlet } from "react-router-dom"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Footer from "../../components/Footer"
import NavBar from "../../components/NavBar"

export default function Usuarios() {
    const { data } = useQuery({
        queryKey: ['Usuarios'],
        queryFn: obtenerUsuarios
    })
    const QueryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: eliminarUsuarios,
        onError: (error: Error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            toast.success(data)
            QueryClient.invalidateQueries({ queryKey: ['Usuarios'] })
        }
    })

    if (data) return (
        <>
            <NavBar />
            <div className="imagen1 clase1">
                <h1></h1>
                <h3 className="texto-principal">Panel<br />De Administración</h3>
            </div>
            <Outlet />
            <div>
                <div>
                    <h2 className="Usuarios">Usuarios</h2>
                    <div className="Usuarios table-container">

                        <table className="tabla_usuarios">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Correo</th>
                                    <th>Rol</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((usuarios: {
                                    _id: string,
                                    name: string,
                                    email: string,
                                    rol: string
                                }) => (
                                    <tr key={usuarios._id}>
                                        <th className="elemento_tabla">{usuarios.name}</th>
                                        <th className="elemento_tabla">{usuarios.email}</th>
                                        <th className="elemento_tabla">{usuarios.rol}</th>

                                        <th className="botones_flex_usuarios">
                                            <button onClick={() => { mutate(usuarios._id) }} className="eliminar eliminar_separacion">Eliminar</button>
                                            <Link to={`/actualizarUsuarios/${usuarios._id}`} className="actualizar actualizar_separacion enlace_eliminar">Actualizar</Link>
                                        </th>
                                    </tr>

                                ))}

                            </tbody>
                        </table>
                    </div>
                    <div className="enlace_crear">
                        <Link className="enlace_eliminar boton_agregar_usuarios" to='/register'>Añadir usuarios</Link>
                    </div>
                </div>
                <Link className="boton_regresar enlace_eliminar" to='/panel'>Regresar</Link>
            </div>
            <Footer />
        </>
    )
}
