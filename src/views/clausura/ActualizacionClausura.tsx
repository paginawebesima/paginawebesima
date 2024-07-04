import { useQuery } from "react-query";
import { useParams } from "react-router-dom"
import { obtenerClausuraId } from "../../api/api";
import InformacionActualizacion from "./InformacionActualizacion";


export default function ActualizacionClausura() {
    const params = useParams();
    const clausuraId = params.clausuraId!
    const { data,isLoading,isError} = useQuery({
        queryKey:['Clausura',clausuraId],
        queryFn:()=>obtenerClausuraId(clausuraId),
        retry:false
    })
  if(data)return (
    <InformacionActualizacion data={data} clausuraId={clausuraId}/>
  )
}
