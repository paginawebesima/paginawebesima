import { QueryClient, useMutation, useQuery, useQueryClient } from "react-query"
import { eliminarPrestamo, obtenerPrestamos } from "../api/api"
import { Link } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
export default function PrestamosLibros() {
    const {data,isLoading} = useQuery({
        queryKey:['Prestamos'],
        queryFn:obtenerPrestamos
    })
    const QueryClient = useQueryClient();
    const {mutate} = useMutation({
        mutationFn:eliminarPrestamo,
        onError:(error:Error)=>{
            toast.error(error.message)
        },
        onSuccess:(data)=>{
            toast.success(data)
            QueryClient.invalidateQueries({queryKey:['Prestamos']})
        }
    })

  if(data)return (

    <div>
        <ToastContainer 
         pauseOnHover={false}
            pauseOnFocusLoss={false}
        />
        <div>

        <table>
            <caption>Alumnos con prestamos</caption>
            <thead>
                <tr>
                    <th>Alumno</th>
                    <th>Grado</th>
                    <th>Grupo</th>
                    <th>Libro</th>
                    <th>Fecha Prestamo</th>
                    <th>Fecha Devolucion</th>
                </tr>
            </thead>
            <tbody>
                    {data.map((prestamo:{
                        _id:string,
                        alumno:string,
                        grado:string,
                        grupo:string,
                        libro:string,
                        fechaprestamo:string,
                        fechadevolucion:string
                    })=>(
                    <tr>
                        <th>{prestamo.alumno}</th>
                        <th>{prestamo.grado}</th>
                        <th>{prestamo.grupo}</th>
                        <th>{prestamo.libro}</th>
                        <th>{prestamo.fechaprestamo}</th>
                        <th>{prestamo.fechadevolucion}</th>
                        <div>
                            <button onClick={()=>{mutate(prestamo._id)}} className="eliminar">Eliminar</button>
                            <Link to={`/actualizarPrestamo/${prestamo._id}/editar`} className="actualizar">Actualizar</Link>
                        </div>
                    </tr>
                    
                    ))}
                
            </tbody>
        </table>
        <Link to='/crearPrestamo'>Añadir prestamo</Link>
        </div>
        
    </div>
  )
}
