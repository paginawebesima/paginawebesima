import { useQuery } from "react-query";
import { Navigate, useParams } from "react-router-dom"
import { obtenerTelefonoById } from "../../api/api";
import ActualizacionNuevoIngreso from "./ActualizacionNuevoIngreso";



export default function EditarNumeroDeTelefono() {
    const params = useParams();
    const telefonoId = params.telefonoId!
    const {isError,isLoading,data} = useQuery({
        queryKey:['telefonos',telefonoId],
        queryFn:()=>obtenerTelefonoById(telefonoId),        
        retry:false
    })
    if(isLoading) return 'Cargando ...'
    if(isError) return <Navigate to='/404'/>
  return (
    <div>
      <ActualizacionNuevoIngreso data={data} telefonoId={telefonoId}/>
      
    </div>
  )
}
