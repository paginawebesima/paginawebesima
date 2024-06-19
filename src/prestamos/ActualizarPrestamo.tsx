import { useQuery } from "react-query";
import { useParams } from "react-router-dom"
import { obtenerPrestamoById } from "../api/api";
import EditarPrestamo from "./EditarPrestamo";

export default function ActualizarPrestamo() {
    const params = useParams();
    const prestamoId = params.prestamoId!
    const {data} = useQuery({
        queryKey:['Prestamos',prestamoId],
        queryFn:()=>obtenerPrestamoById(prestamoId),
        retry:false
    })
    
  if(data)return (
    <EditarPrestamo data={data} prestamoId={prestamoId}/>
  )
}
