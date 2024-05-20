import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
export default function Panel() {
  return (
    <>
      <div>
        <NavBar />
        <div className="imagen1 clase1">
          <h1></h1>
          <h3 className="texto-principal">Panel De Administración</h3>
        </div>
        <div className="container">
        <div className="box">
            <img src="icono-nuevo-ingreso.png" alt="Nuevo Ingreso"></img>
            <p>Información nuevo ingreso</p>
        </div>
        <div className="box">
            <img src="icono-egresar.png" alt="Alumnos a Egresar"></img>
            <p>Información alumnos a egresar</p>
        </div>
        <div className="box">
            <img src="icono-noticias.png" alt="Noticias Relevantes"></img>
            <p>Noticias relevantes</p>
        </div>
        <div className="box">
            <img src="icono-usuarios.png" alt="Usuarios"></img>
            <p>Usuarios</p>
        </div>
        <div className="box">
            <img src="icono-actualizar-contacto.png" alt="Actualizar Contacto"></img>
            <p>Actualizar información de contacto</p>
        </div>
        <div className="box">
            <img src="icono-directivos.png" alt="Información Directivos"></img>
            <p>Información directivos</p>
        </div>
    </div>
      </div>
      <Footer />
    </>
  )
}