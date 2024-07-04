
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import InformacionCarga from "./clausura/InformacionCarga";

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

      <InformacionCarga/>

      <Footer />
    </>
  )
}
