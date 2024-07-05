import { useParams } from "react-router-dom";
import EditarPrestamoVespertino from "./EditarPrestamoVespertino";
import { useQuery } from "react-query";
import { obtenerPrestamoTurnoVespertino } from "../../api/api";

export default function ActualizarPrestamoVespertino() {
    const params = useParams();
    const prestamoId = params.prestamoId!
    const {data} = useQuery({
        queryKey:['Prestamos',prestamoId],
        queryFn:()=>obtenerPrestamoTurnoVespertino(prestamoId),
        retry:false
    })
  if(data)return (
    <EditarPrestamoVespertino data={data} prestamoId={prestamoId}/>
  )
}
