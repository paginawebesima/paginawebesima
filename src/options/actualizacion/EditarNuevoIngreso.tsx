import { useQuery } from "react-query";
import { Navigate, useParams } from "react-router-dom"
import { obtenerRequerimientoPorID } from "../../api/api";
import ActualizarNuevoIngreso from "../Forms/ActualizarNuevoIngreso";
export default function EditarNuevoIngreso() {
    const params= useParams();
    const preinscripcionesId=params.preinscripcionesId!
    const {data,isError,isLoading} = useQuery({
        queryKey:['preinscripciones',preinscripcionesId],
        queryFn:()=>obtenerRequerimientoPorID(preinscripcionesId),
        retry:false
    })
   if(isLoading) return 'Cargando .. ..' 
   if(isError) return <Navigate to='/404'/>
  return (
    <div>
      <ActualizarNuevoIngreso data={data} preinscripcionesId={preinscripcionesId}/>
    </div>
  )
}
