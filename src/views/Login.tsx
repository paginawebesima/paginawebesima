import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Login() {
  return (
    <>
        <header className="">
        <NavBar/>
        <div className="imagen2 clase1">
            <h1></h1>
            <h3 className="texto-principal">Bienvenido<br /> Inicia Sesion para continuar</h3>
        </div>
        </header>
        <div>
            <form action="">
                <h1>Iniciar Sesion</h1>
                <input type="text" placeholder="usuario"/>
                <input type="password" placeholder="contraseña" />
                <a href="/panel">Aceptar</a>
            </form>
        </div>
        <Footer/>
    </>
  )
}
