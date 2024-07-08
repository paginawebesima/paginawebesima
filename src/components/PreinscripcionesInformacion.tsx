import { requerimientosPreinscripciones } from "../api/api";
import { useQuery } from "react-query";

type PreinscripcionesInformacionProps={
  nuevaInformacion:any
}

export default function PreinscripcionesInformacion({nuevaInformacion}:PreinscripcionesInformacionProps) {
    const {data,isLoading} = useQuery({
        queryKey:['preinscripciones'],
        queryFn:requerimientosPreinscripciones
      })
      nuevaInformacion?.map((proceso:{boolean:string})=>{
        if (proceso.boolean === 'true') {
          const imagen = document.getElementById('proceso') as HTMLImageElement | null;
          if (imagen) {
            imagen.style.display = 'none';
          }
        }else if(proceso.boolean === 'false'){
          const imagen = document.getElementById('proceso') as HTMLImageElement | null;
          if (imagen) {
            imagen.style.display = 'grid';
          }
        }
      })
  return (
    <div id="proceso" className="informacion_inscripciones">
          {data.map((informacion:{
            _id:string,
            titulo:string,
            requerimiento1:string,
            requerimiento2:string,
            requerimiento3:string,
            requerimiento4:string,
            requerimiento5:string,
            icono:string
          })=>(

          <div key={informacion._id} className="informacion margen separacion_arriba">
            <div className="contenido_centrado">
              <img className="Preinscripciones_Iconos" src={`${informacion.icono}`} />
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
