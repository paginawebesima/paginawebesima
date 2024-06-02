import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
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
        <div className="informacion_inscripciones">
          <div className="informacion margen separacion_arriba">
            <div className="contenido_centrado">
              <img className="Preinscripciones_Iconos" src="/papeleria.svg" alt="Papeleria" />
            </div>
            <div className="informacion_contenido">

            <h2 className="papeleria titulo_papeleria">Papeleria</h2>
            <div className="informacion_contenido_papeleria">
              <li>Ficha Esima</li>
              <li>Constancia de preinscripcion de la primaria</li>
              <li>Acta de nacimiento copia</li>
              <li>CURP del alumno</li>
              <li>Talla, peso y estatura del alumno a ingresar</li>

            </div>
            </div>
          </div>
          <div className="informacion margen margen_2">
            <div className="contenido_centrado">
              <img className="Preinscripciones_Iconos" src="/horario.svg" alt="Horario Para Preinscribirse" />
            </div>
            <div className="informacion_contenido">
            <h2 className="horario">Horario para prenscribirse</h2>
            <div>

              <li>De 8:00 am - 7:30 pm</li>

            </div>

            </div>
          </div>
          <div className="informacion margen_1">
            <div className="contenido_centrado">
              <img className="Preinscripciones_Iconos" src="/examen.svg" alt="Examen De Diagnostico" />
            </div>
            <div className="informacion_contenido">
            <h2 className="examen">Examen de diagnostico</h2>
            <div>

              <li>Viernes 12 de mayo de 2024</li>
              <li>8:00 am</li>
              <li>Instalaciones de la Esima</li>

            </div>
            </div>
          </div>
          <div className="separacion_abajo informacion margen_1 margen_2">
            <div className="contenido_centrado">
              <img className="Preinscripciones_Iconos" src="/resultados.svg" alt="Publicacion Resultados" />
            </div>
            <div className="informacion_contenido">
            <h2 className="resultados">Publicacion de los resultados</h2>
            <div className="">

              <li>
                Virtual Domingo 25 de junio Pagina de facebook
              </li>
              <li>Presencial Lunes 26 de junio portico esima </li>

            </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}