import { useQuery } from "react-query"
import { obtenerClausura } from "../../api/api"

export default function InformacionCarga() {
    const {data,isLoading} = useQuery({
        queryKey:['Clausura'],
        queryFn:obtenerClausura
      })
    if(isLoading) return 'Cargando....'
  if(data)return (
    <>
        {data.map((clausuraInformacion:{
            _id:string,
            titulo:string,
            informacion:string
        })=>(
            <div className="clausura_container" key={clausuraInformacion._id}>
                <div className="clausura_container_children">
                    <h2>{clausuraInformacion.titulo}</h2>
                    <p>{clausuraInformacion.informacion}</p>
                </div>
            </div>
        ))}
    </>
  )
}