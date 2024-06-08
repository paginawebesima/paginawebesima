import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PreinscripcionesInformacion from "../components/PreinscripcionesInformacion";
export default function Preinscripciones() {
  
  const date = new Date();
  const year = date.getFullYear()
  const nextyear = date.getFullYear() + 1
  const texto = `${year} - ${nextyear}`
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
        {/* <h2 className="texto_informativo1">Actualmente no contamos con proceso de inscripcion {texto}</h2> */}
        <PreinscripcionesInformacion/>
      </main>
      <Footer />
    </>
  )
}