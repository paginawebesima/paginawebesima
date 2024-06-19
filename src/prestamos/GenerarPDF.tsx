import {jsPDF} from 'jspdf'
export default function GenerarPDF() {
   const prestamo={
    alumno:"Juan Diego Trejo Sandoval",
    grado:"3",
    grupo:"B",
    libro:"Gracias Lopez Obrador",
    fechaprestamo:"16-sep-2024",
    fechadevolucion:"20-oct-2024"
   }
   const generarPDF=()=>{
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
  return (
    <div>
        <p>{prestamo.alumno}</p>
        <p>{prestamo.grado}</p>
        <p>{prestamo.grupo}</p>
        <p>{prestamo.libro}</p>
        <p>{prestamo.fechaprestamo}</p>
        <p>{prestamo.fechadevolucion}</p>
        <button onClick={generarPDF}>Generar PDF</button>
    </div>
  )
}
