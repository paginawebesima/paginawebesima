import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
export default function Talleres() {
  return (
    <>
      <div>
        <NavBar />
        <div className="imagen1 clase1">
          <h1></h1>
          <h3 className="texto-principal">Talleres</h3>
        </div>
      </div>
      <div className="display">
        <div className="container1">
          <div className="card">
            <img src="Carpintería.jpg" alt="Carpintería"></img>
            <div className="overlay">
              <h3>Carpintería</h3>
              <a href="/carpinteria"><button>Ver</button></a>
              
            </div>
          </div>
          <div className="card">
            <img src="Ofimática.jpg" alt="Ofimática"></img>
            <div className="overlay">
              <h3>Ofimática</h3>
              <a href="/ofimatica"><button>Ver</button></a>
            </div>
          </div>
          <div className="card">
            <img src="Cocina.jpg" alt="Cocina"></img>
            <div className="overlay">
              <h3>Cocina</h3>
              <a href="/cocina"><button>Ver</button></a>
            </div>
          </div>
          <div className="card">
            <img src="Electrónica.jpg" alt="Electrónica"></img>
            <div className="overlay">
              <h3>Electrónica</h3>
              <a href="/electronica"><button>Ver</button></a>
            </div>
          </div>
          <div className="card">
            <img src="Mecánica.jpg" alt="Mecánica"></img>
            <div className="overlay">
              <h3>Mecánica</h3>
              <a href="/mecanica"><button>Ver</button></a>
            </div>
          </div>
          <div className="card">
            <img src="Automotriz.jpg" alt="Automotriz"></img>
            <div className="overlay">
              <h3>Automotriz</h3>
              <a href="/automotriz"><button>Ver</button></a>
            </div>
          </div>
          <div className="card">
            <img src="Dibujo.jpg" alt="Dibujo"></img>
            <div className="overlay">
              <h3>Dibujo</h3>
              <a href="/dibujo"><button>Ver</button></a>
            </div>
          </div>
          <div className="card">
            <img src="Soldadura.jpg" alt="Soldadura"></img>
            <div className="overlay">
              <h3>Soldadura</h3>
              <a href="/soldadura"><button>Ver</button></a>
            </div>
          </div>
          <div className="card">
            <img src="Electricidad.jpg" alt="Electricidad"></img>
            <div className="overlay">
              <h3>Electricidad</h3>
              <a href="/electricidad"><button>Ver</button></a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}