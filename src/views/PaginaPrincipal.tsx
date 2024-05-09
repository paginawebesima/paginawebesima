import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function PaginaPrincipal() {
  return (
    <>
        <header className="">
        <NavBar/>
        <div className="imagen clase1">
            <h1></h1>
            <h3 className="texto-principal">¡Tu esfuerzo vale la pena,<br /> nunca dejes de aprender! </h3>
        </div>
        </header>
        <main>
          <div>
            <h2 className="texto-centrado">Contamos con los siguiente turnos</h2>
            <div className="turnos">
              <div>
              <img src="/TurnoMatutino.jpg" alt="Turno Matutino" />
              </div>
              <div className="horario">
                <h3>Matutino</h3>
                <p>7:30 am - 1:30 pm</p>
                <h3>Receso</h3>
                <p>10:00 am - 10:30 am</p>
              </div>
              
            </div>
            <div className="turnos">
              <div className="imagen-intermedio">
              <img src="/TurnoIntermedio.jpg" alt="Turno Intermedio" />
              </div>
              <div className="horario1">
                <h3>Intermedio</h3>
                <p>10:30 am - 4:30 pm</p>
                <h3>Receso</h3>
                <p>1:00 pm - 1:30 pm</p>
              </div>
              
            </div>
            <div className="turnos">
              <div>
              <img src="/TurnoVespertino.jpg" alt="Turno Vespertino" />
              </div>
              <div className="horario">
                <h3>Vespertino</h3>
                <p>1:30 pm</p>
                <h3>Receso</h3>
                <p>4:30 pm - 5:00 pm</p>
              </div>
              
            </div>
          </div>
        </main>
        <div className="ubicacion">
        <iframe className="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1288.3394683208778!2d-104.64490826279317!3d24.031971486826347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bb7c3822f24bb%3A0x956d86cf60373c18!2sEscuela%20Secundaria%20%22Ignacio%20Manuel%20Altamirano%22!5e0!3m2!1ses-419!2smx!4v1715192596633!5m2!1ses-419!2smx" width="600" height="450"  loading="lazy"></iframe>
        <div className="redsocial">
        <iframe className="" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FESIMAof&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" scrolling="no"  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
        </div>
        <Footer/>
    </>
  )
}
