import { useQuery } from "react-query";
import { useParams } from "react-router-dom"
import { obtenerAdministrativosId } from "../../api/api";
import InformacionActualizacion from "./InformacionActualizacion";


export default function ActualizacionAdministrativos() {
    const params = useParams();
    const administrativosId = params.administrativosId!
    const { data} = useQuery({
        queryKey:['Administrativos',administrativosId],
        queryFn:()=>obtenerAdministrativosId(administrativosId),
        retry:false
    })
  if(data)return (
    <InformacionActualizacion data={data} administrativosId={administrativosId}/>
  )
}
