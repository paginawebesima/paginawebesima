import { useQuery } from "react-query";
import { useParams } from "react-router-dom"
import { obtenerAdministracionById } from "../../api/administracion";
import ActualizarAdministracionInformacion from "./ActualizarAdministracionInformacion";

export default function ActualizarAdministracionData() {
    const params = useParams();
    const prestamoSalonId = params.prestamoSalonId!
    const{data} = useQuery({
        queryKey:['AdministracionSalon',prestamoSalonId],
        queryFn:()=>obtenerAdministracionById(prestamoSalonId),
        retry:false
    })
  if(data)return (
    <ActualizarAdministracionInformacion data={data} prestamoSalonId={prestamoSalonId}/>
  )
}
