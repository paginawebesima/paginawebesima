import { useQuery } from "react-query";
import { obtenerProceso } from "../api/api";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PreinscripcionesInformacion from "../components/PreinscripcionesInformacion";
export default function Preinscripciones() {
  
  const date = new Date();
  const year = date.getFullYear()
  const nextyear = date.getFullYear() + 1
  const texto = `${year} - ${nextyear}`
  const {data} = useQuery({
    queryKey:['Procesos'],
    queryFn:obtenerProceso
  })

  const nuevaInformacion = data

  data?.map((proceso:{boolean:string})=>{
    if (proceso.boolean === 'true') {
      const imagen = document.getElementById('proceso1') as HTMLImageElement | null;
      if (imagen) {
        imagen.style.display = 'grid';
      }
    }else if(proceso.boolean === 'false'){
      const imagen = document.getElementById('proceso1') as HTMLImageElement | null;
      if (imagen) {
        imagen.style.display = 'none';
      }
    }
  })
  return (
    <>
      
      <header className="">
        <NavBar />
        <div className="imagen3 clase1">
          <h1></h1>
          <h3 className="texto-principal">Preinscripciones {texto}</h3>
        </div>
      </header>
      <main>
        <h2 id="proceso1" className="texto_informativo1">Actualmente no contamos con proceso de inscripcion {texto}</h2>
        <PreinscripcionesInformacion nuevaInformacion={nuevaInformacion}/>
      </main>
      <Footer />
    </>
  )
}