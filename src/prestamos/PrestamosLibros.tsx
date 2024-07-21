import { useMutation, useQuery, useQueryClient } from "react-query"
import { jsPDF } from 'jspdf'
import logo from '/EsimaLogo.png';
import { eliminarPrestamo, obtenerPrestamos } from "../api/api"
import { Link } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
export default function PrestamosLibros() {
    const { data } = useQuery({
        queryKey: ['Prestamos'],
        queryFn: obtenerPrestamos
    })
    const QueryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: eliminarPrestamo,
        onError: (error: Error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            toast.success(data)
            QueryClient.invalidateQueries({ queryKey: ['Prestamos'] })
        }
    })
    const generarPDF = (id: string) => {
        {
            data.map((prestamo: {
                _id: string,
                alumno: string,
                grado: string,
                grupo: string,
                libro: { titulo: string },
                fechaprestamo: string,
                fechadevolucion: string,
                personaAutorizacion: string
            }) => {
                if (id === prestamo._id) {
                    const doc = new jsPDF();

                    // Establecer título y encabezado
                    const fechaActual = new Date().toLocaleDateString();
                    doc.setFont('helvetica', 'bold');
                    doc.setFontSize(18);
                    doc.text('Escuela Secundaria Ignacio Manuel Altamirano', doc.internal.pageSize.getWidth() / 2, 20, { align: 'center' });
                    doc.setFontSize(14);
                    doc.text(`Sistema de Préstamos de Libros - ${fechaActual}`, doc.internal.pageSize.getWidth() / 2, 30, { align: 'center' });

                    // Línea divisoria
                    doc.setLineWidth(0.5);
                    doc.line(20, 35, doc.internal.pageSize.getWidth() - 20, 35);

                    // Datos del préstamo
                    doc.setFontSize(12);
                    doc.setFont('helvetica', 'normal');

                    // Datos de alumno 
                    doc.setFont('helvetica', 'bold');
                    doc.text(`Alumno:`, 20, 50);
                    doc.setFont('helvetica', 'normal');
                    doc.text(`${prestamo.alumno}`, 40, 50);

                    // Datos de grado y grupo
                    doc.setFont('helvetica', 'bold');
                    doc.text(`Grado:`, 20, 60);
                    doc.setFont('helvetica', 'normal');
                    doc.text(`${prestamo.grado}`, 38, 60);

                    doc.setFont('helvetica', 'bold');
                    doc.text(`Grupo:`, 20, 70);
                    doc.setFont('helvetica', 'normal');
                    doc.text(`${prestamo.grupo}`, 38, 70);

                    // Información del libro
                    doc.setFont('helvetica', 'bold');
                    doc.text(`Libro:`, 20, 80);
                    doc.setFont('helvetica', 'normal');
                    doc.text(`${prestamo.libro.titulo}`, 35, 80);

                    // Fechas
                    doc.setFont('helvetica', 'bold');
                    doc.text(`Fecha de Préstamo:`, 20, 90);
                    doc.setFont('helvetica', 'normal');
                    doc.text(`${prestamo.fechaprestamo}`, 63, 90);

                    doc.setFont('helvetica', 'bold');
                    doc.text(`Fecha de Devolución:`, 20, 100);
                    doc.setFont('helvetica', 'normal');
                    doc.text(`${prestamo.fechadevolucion}`, 67, 100);

                    // Persona de Autorización
                    doc.setFont('helvetica', 'bold');
                    doc.text(`Persona de Autorización:`, 20, 110);
                    doc.setFont('helvetica', 'normal');
                    doc.text(`${prestamo.personaAutorizacion}`, 73, 110);

                    // Agregar logo de la escuela
                    const logoWidth = 120; 
                    const logoHeight = 100;
                    const logoX = (doc.internal.pageSize.getWidth() / 2) - (logoWidth / 2); // Centrar el logo horizontalmente
                    doc.addImage(logo, 'JPEG', logoX, 103, logoWidth, logoHeight);

                    doc.save(`${prestamo.alumno}_${prestamo.grado}_${prestamo.grupo}_Prestamo.pdf`);
                }
            })
        }
    }
    if (data) return (

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
                                <th>Fecha Devolución</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((prestamo: {
                                _id: string,
                                alumno: string,
                                grado: string,
                                grupo: string,
                                libro: { titulo: string },
                                fechaprestamo: string,
                                fechadevolucion: string
                            }) => (
                                <tr>
                                    <th className="elemento_tabla">{prestamo.alumno}</th>
                                    <th className="elemento_tabla">{prestamo.grado}</th>
                                    <th className="elemento_tabla">{prestamo.grupo}</th>
                                    <td className="elemento_tabla">{prestamo.libro.titulo}</td>
                                    <th className="elemento_tabla">{prestamo.fechaprestamo}</th>
                                    <th className="elemento_tabla">{prestamo.fechadevolucion}</th>
                                    <td className="botones_flex_prestamo">
                                        <button onClick={() => { mutate(prestamo._id) }} className="eliminar eliminar_separacion">Eliminar</button>
                                        <Link to={`/actualizarPrestamo/${prestamo._id}/editar`} className="actualizar actualizar_separacion enlace_eliminar">Actualizar</Link>
                                        <button className="generarPDF" onClick={() => { generarPDF(prestamo._id) }}>Generar PDF</button>
                                    </td>
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
