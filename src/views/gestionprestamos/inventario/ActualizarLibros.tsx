import { useQuery } from "react-query";
import { useParams } from "react-router-dom"
import { obtenerLibrosById } from "../../../api/api"; 
import EditarLibros from "./EditarLibros";

export default function ActualizarLibros() {
    const params = useParams();
    const inventarioId = params.inventarioId!
    const {data} = useQuery({
        queryKey:['Libros',inventarioId],
        queryFn:()=>obtenerLibrosById(inventarioId),
        retry:false
    })
    
  if(data)return (
    <EditarLibros data={data} inventarioId={inventarioId}/>
  )
}