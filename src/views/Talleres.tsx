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
            <img src="Diseño-Técnico.jpg" alt="Diseño Técnico"></img>
            <div className="overlay">
              <h2>Diseño Técnico</h2>
              <a href="/diseño-tecnico"><button>Ver</button></a>
            </div>
          </div>
          <div className="card">
            <img src="Administración-Contable.jpg" alt="Ofimática"></img>
            <div className="overlay">
              <h2>Administración Contable</h2>
              <a href="/administracion-contable"><button>Ver</button></a>
            </div>
          </div>
          <div className="card">
            <img src="Cocina.jpg" alt="Cocina"></img>
            <div className="overlay">
              <h2>Cocina</h2>
              <a href="/cocina"><button>Ver</button></a>
            </div>
          </div>
          <div className="card">
            <img src="Corte-Y-Confección.jpg" alt="Corte Y Confección"></img>
            <div className="overlay">
              <h2>Corte Y Confección</h2>
              <a href="/corte-y-confeccion"><button>Ver</button></a>
            </div>
          </div>
          <div className="card">
            <img src="Carpintería.jpg" alt="Carpintería"></img>
            <div className="overlay">
              <h2>Carpintería</h2>
              <a href="/carpinteria"><button>Ver</button></a>
            </div>
          </div>
          <div className="card">
            <img src="Electricidad.jpg" alt="Electricidad"></img>
            <div className="overlay">
              <h2>Electricidad</h2>
              <a href="/electricidad"><button>Ver</button></a>
            </div>
          </div>
          <div className="card">
            <img src="Turismo.jpg" alt="Turismo"></img>
            <div className="overlay">
              <h2>Turismo</h2>
              <a href="/turismo"><button>Ver</button></a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}