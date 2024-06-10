import { useMutation, useQuery } from "react-query";


import 'react-toastify/ReactToastify.css'
import { eliminarRequerimiento, requerimientosPreinscripciones } from "../api/api";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export default function EliminarRequerimiento() {
    const navigate = useNavigate();
  const {data} = useQuery({
    queryKey:['preinscripciones'],
    queryFn:requerimientosPreinscripciones
  })
  const {mutate} = useMutation({
    mutationFn:eliminarRequerimiento,
    onError:()=>{

    },
    onSuccess:(data)=>{
        toast.success(data)
        navigate('/panel')
    }
  })
  if(data) return (
    <>
      <main>
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

          <div className="informacion margen separacion_arriba">
            <div className="contenido_centrado">
              <img className="Preinscripciones_Iconos" src='/examen.svg' alt="Papeleria" />
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
            <button onClick={()=>{mutate(informacion._id)}}>Eliminar</button>
          </div>
          ))}
          
        </div>
      </main>
      
    </>
  )
}
