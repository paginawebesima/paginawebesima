import { requerimientosPreinscripciones } from "../api/api";
import { useQuery } from "react-query";
export default function PreinscripcionesInformacion() {
    const {data,isLoading} = useQuery({
        queryKey:['preinscripciones'],
        queryFn:requerimientosPreinscripciones
      })
      if(isLoading)return 'Cargando ....'
      console.log(data)
  return (
    <div className="informacion_inscripciones">
          {data.map((informacion:{
            _id:string,
            titulo:string,
            requerimiento1:string,
            requerimiento2:string,
            requerimiento3:string,
            requerimiento4:string,
            requerimiento5:string
          })=>(

          <div  className="informacion margen separacion_arriba">
            <div className="contenido_centrado">
              <img className="Preinscripciones_Iconos" src='/examen.svg' alt="Papeleria" />
            </div>
            <div key={informacion._id} className="informacion_contenido">

            <h2 className="papeleria titulo_papeleria">{informacion.titulo}</h2>
            <div  className="informacion_contenido_papeleria">
              <p>{informacion.requerimiento1}</p>
              <p>{informacion.requerimiento2}</p>
              <p>{informacion.requerimiento3}</p>
              <p>{informacion.requerimiento4}</p>
              <p>{informacion.requerimiento5}</p>
            </div>
            </div>
          </div>
          ))} 
          
    </div>
  )
}
