import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Graduaciones() {
  return (
    <>
      <header className="">
        <NavBar />
        <div className="imagen4 clase1">
          <h1></h1>
          <h3 className="texto-principal">Clausura</h3>
        </div>
      </header>

      <div className="clausura">
        <div className="contenido_clausura">
          <h2 className="texto_clausura">Centro Cultural y de Convenciones Bicentenario</h2>
          <p className="informacion_clausura">Colonia Obrera, Silvestre Dorador, 34070 Durango, Dgo.</p>
        </div>
        <div className="contenido_clausura">
          <h2 className="texto_clausura">Fecha</h2>
          <p className="informacion_clausura">9-julio-2024</p>
        </div>
        <div className="contenido_clausura">
          <h2 className="texto_clausura">
            Hora
          </h2>
          <p className="">9:00 am</p>
        </div>
      </div>

      <Footer />
    </>
  )
}
