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
          <div className="informacion">
            <h2>Papeleria</h2>
            <div>
              <li>Ficha Esima</li>
              <li>Constancia de preinscripcion de la primaria</li>
              <li>Acta de nacimiento copia</li>
              <li>CURP del alumno</li>
              <li>Talla, peso y estatura del alumno a ingresar</li>

            </div>
          </div>
          <div className="informacion">
            <h2>Horario para prenscribirse</h2>
            <div>

              <li>De 8:00 am - 7:30 pm</li>

            </div>
          </div>
          <div className="informacion">
            <h2>Examen de diagnostico</h2>
            <div>

              <li>Viernes 12 de mayo de 2024</li>
              <li>8:00 am</li>
              <li>Instalaciones de la Esima</li>

            </div>
          </div>
          <div className="informacion">
            <h2>Publicacion de los resultados</h2>
            <div>

              <li>
                Virtual <br /> Domingo 25 de junio <br /> Pagina de facebook
              </li>
              <li>Presencial <br /> Lunes 26 de junio <br /> portico esima </li>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}