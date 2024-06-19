import { useQuery } from "react-query";


import 'react-toastify/ReactToastify.css'
import { requerimientosPreinscripciones } from "../../api/api";
import { Link } from "react-router-dom";


export default function ActualizarInformacionNuevoIngreso() {
  const {data} = useQuery({
    queryKey:['preinscripciones'],
    queryFn:requerimientosPreinscripciones
  })
  console.log(data)
  if(data) return (
    <>
      <main>
      <h1>Actualizar Requerimiento de Preinscripcion</h1>
        <div className="informacion_inscripciones">
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

          <div className="informacion margen separacion_arriba">
            <div className="contenido_centrado">
              <img className="Preinscripciones_Iconos" src={`${informacion.icono}`} />
            </div>
            <div className="informacion_contenido">

            <h2 className="papeleria titulo_papeleria">{informacion.titulo}</h2>
            <div className="informacion_contenido_papeleria">
              <p>{informacion.requerimiento1}</p>
              <p>{informacion.requerimiento2}</p>
              <p>{informacion.requerimiento3}</p>
              <p>{informacion.requerimiento4}</p>
              <p>{informacion.requerimiento5}</p>
            </div>
            </div>
            <Link to={`/panel/nuevoIngreso/actualizar/${informacion._id}/editar`}>Editar</Link>
          </div>
          ))}
          
        </div>
      </main>
      
    </>
  )
}
