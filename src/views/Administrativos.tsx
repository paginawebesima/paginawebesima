import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Administrativos() {
  return (
    <>
      <header className="">
        <NavBar />
        <div className="imagen3 clase1">
          <h1></h1>
          <h3 className="texto-principal">Administrativos</h3>
        </div>
      </header>
      <div className="display">
        <div className="container1">
          <div className="box3">
            <h2 className="h2-admin">Dra. Rita Velia Reyes López</h2>
            <p className="p-admin">Directora Encargada</p>
          </div>
          <div className="box3">
            <h2 className="h2-admin">Mtra. Norma Lylia Martínez Gracia</h2>
            <p className="p-admin">Subdirectora Encargada Turno Matutino</p>
          </div>
          <div className="box3">
            <h2 className="h2-admin">Prof. Sergio Iván Chairez Tremillo</h2>
            <p className="p-admin">Subdirector Turno Vespertino</p>
          </div>
          <div className="box3">
            <h2 className="h2-admin">Mtra. Ma. Olimpia Torres Quiñones</h2>
            <p className="p-admin">Coordinadora Académica Turno Matutino</p>
          </div>
          <div className="box3">
            <h2 className="h2-admin">Profa. Miroslava Margarita Solis Herrera</h2>
            <p className="p-admin">Coordinadora Académica Turno Vespertino</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
