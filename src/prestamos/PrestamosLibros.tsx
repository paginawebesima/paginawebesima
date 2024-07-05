import { useMutation, useQuery, useQueryClient } from "react-query"
import {jsPDF} from 'jspdf'
import { eliminarPrestamo, obtenerPrestamos } from "../api/api"
import { Link } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
export default function PrestamosLibros() {
    const {data} = useQuery({
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
    const generarPDF=(id:string)=>{
        {data.map((prestamo:{
            _id:string,
            alumno:string,
            grado:string,
            grupo:string,
            libro:string,
            fechaprestamo:string,
            fechadevolucion:string,
            personaAutorizacion:string
        })=>{
            if(id===prestamo._id){
                const doc = new jsPDF();

    // Establecer título
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.text('Prestamo', doc.internal.pageSize.getWidth() / 2, 20, { align: 'center' });

    // Información del préstamo
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');

    // Crear una línea divisoria
    doc.setDrawColor(0, 0, 0);  // color negro
    doc.line(10, 30, 200, 30);  // coordenadas (x1, y1, x2, y2)

    // Datos del alumno
    doc.setTextColor(0, 0, 255);  // color azul
    doc.text(`Alumno:`, 10, 40);
    doc.setTextColor(0, 0, 0);  // color negro
    doc.text(prestamo.alumno, 50, 40);

    // Datos del alumno
    doc.setTextColor(0, 0, 255);  // color azul
    doc.text(`Persona Autorizacion`, 100, 200);
    doc.setTextColor(0, 0, 0);  // color negro
    doc.text(prestamo.personaAutorizacion, 150, 250);

    doc.setTextColor(0, 0, 255);  // color azul
    doc.text(`Grado:`, 10, 50);
    doc.setTextColor(0, 0, 0);  // color negro
    doc.text(prestamo.grado, 50, 50);

    doc.setTextColor(0, 0, 255);  // color azul
    doc.text(`Grupo:`, 10, 60);
    doc.setTextColor(0, 0, 0);  // color negro
    doc.text(prestamo.grupo, 50, 60);

    // Información del libro
    doc.setTextColor(0, 0, 255);  // color azul
    doc.text(`Libro:`, 10, 80);
    doc.setTextColor(0, 0, 0);  // color negro
    doc.text(prestamo.libro, 50, 80);

    // Fechas
    doc.setTextColor(0, 0, 255);  // color azul
    doc.text(`Fecha de Préstamo:`, 10, 100);
    doc.setTextColor(0, 0, 0);  // color negro
    doc.text(prestamo.fechaprestamo, 90, 100);

    doc.setTextColor(0, 0, 255);  // color azul
    doc.text(`Fecha de Devolución:`, 10, 110);
    doc.setTextColor(0, 0, 0);  // color negro
    doc.text(prestamo.fechadevolucion, 90, 110);

    doc.save(`${prestamo.alumno}_${prestamo.grado}_${prestamo.grupo}.pdf`);
            }
        })}
    }
  if(data)return (

    <div>
        <ToastContainer 
         pauseOnHover={false}
            pauseOnFocusLoss={false}
        />
        <div>
            <h2 className="prestamo_turno">Turno Matutino</h2>
        <div className="prestamos table-container">

        <table className="tabla_prestamos">
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
                        <th className="elemento_tabla">{prestamo.alumno}</th>
                        <th className="elemento_tabla">{prestamo.grado}</th>
                        <th className="elemento_tabla">{prestamo.grupo}</th>
                        <th className="elemento_tabla">{prestamo.libro}</th>
                        <th className="elemento_tabla">{prestamo.fechaprestamo}</th>
                        <th className="elemento_tabla">{prestamo.fechadevolucion}</th>
                        <div className="botones_flex_prestamo">
                            <button onClick={()=>{mutate(prestamo._id)}} className="eliminar eliminar_separacion">Eliminar</button>
                            <Link to={`/actualizarPrestamo/${prestamo._id}/editar`} className="actualizar actualizar_separacion enlace_eliminar">Actualizar</Link>
                            <button className="generarPDF" onClick={()=>{generarPDF(prestamo._id)}}>Generar PDF</button>
                        </div>
                    </tr>
                    
                    ))}
                
            </tbody>
        </table>
        </div>
        <div className="enlace_crear">
        <Link className="enlace_eliminar boton_agregar_prestamo" to='/crearPrestamo'>Añadir prestamo</Link>
        </div>
        </div>
        <Link className="boton_regresar enlace_eliminar" to='/prestamos'>Regresar</Link>
    </div>
  )
}
