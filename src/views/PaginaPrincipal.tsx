import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Primero from "./modales/Primero";
import Segundo from "./modales/Segundo";
import Tercero from "./modales/Tercero";
import { useQuery } from "react-query";
import { obtenerProceso } from "../api/api";


export default function PaginaPrincipal() {
  const fecha = new Date()
  const year = fecha.getFullYear()
  const {data} = useQuery({
    queryKey:['Procesos'],
    queryFn:obtenerProceso
  })
  data?.map((proceso:{boolean:string})=>{
    if (proceso.boolean === 'true') {
      const imagen = document.getElementById('proceso') as HTMLImageElement | null;
      if (imagen) {
        imagen.style.display = 'none';
      }
    }else if(proceso.boolean === 'false'){
      const imagen = document.getElementById('proceso') as HTMLImageElement | null;
      if (imagen) {
        imagen.style.display = 'flex';
      }
    }
  })
  return (
    <>

      <header className="">
        <NavBar />
        <div className="imagen clase1">
          <h1></h1>
          <h3 className="texto-principal">¡Tu esfuerzo vale la pena,<br /> nunca dejes de aprender! </h3>
        </div>
      </header>








      <div className="contenido_principal">
        <div>
          <h2>Mision</h2>
          <div>
            <p className="texto_mision">Somos una INSTITUCIÓN PÚBLICA DE CALIDAD, con alto compromiso social, que imparte estudios de educación superior; comprometida con la formación integral de profesionistas con valores, liderazgo y visión emprendedora; mediante un modelo educativo de vanguardia basado en competencias y orientado a contribuir al desarrollo regional sustentable.</p>
          </div>
        </div>
        <div className="contenido_principal_vision">
          <h2>Vision</h2>
          <div>
            <p className="texto_vision">Ser una INSTITUCIÓN PÚBLICA RECONOCIDA en el ámbito nacional e internacional, con programas académicos acreditados y procesos de gestión certificados; profesores con alto perfil académico y profesional, cuerpos académicos consolidados y proyectos de investigación aplicados en áreas estratégicas que satisfagan las necesidades sociales.</p>
          </div>
        </div>
      </div>
      <div id="proceso" className="Preinscripcion_Activo clase3">
          <h2>Proceso de seleccion {year} activo</h2>
          <div>
          <Link className="clase4" to='/preinscripciones'>Ver informacion</Link>

          </div>
      </div>
      <main className="centrar-contenido">
        <div>
          <h2 className="texto-centrado">Contamos con los siguiente turnos</h2>
          <div className="turnos">
            <div>
              <picture>
                <source srcSet="/TurnoMatutino.webp" type="image/webp" />
                <source srcSet="/TurnoMatutino.jpg" type="image/jpeg"/>
                <img className="imagen_principal border-elements-image" src="/TurnoMatutino.jpg"
                 alt="Turno Matutino" loading="lazy"/>
              </picture>
            </div>
            <div className="horario2 border-elements">
              <div>
              <h3>Matutino</h3>
              <p className="margin-textos">7:30 am - 1:30 pm</p>
              <h3 className="margin-textos_h3">Receso</h3>
              <p>10:00 am - 10:30 am</p>
              </div>
            </div>
          </div>
          <div className="turnos">
            <div className="imagen-intermedio">
              <picture>
                <source srcSet="/TurnoIntermedio.webp" type="image/webp" />
                <source srcSet="/TurnoIntermedio.jpg" type="image/jpeg"/>
                <img src="/TurnoIntermedio.jpg" alt="Turno Intermedio"
                 className="border-elements-image2" loading="lazy" />
              </picture>
            </div>
            <div className="horario1 border-elements1">
              <div>
              <h3>Intermedio</h3>
              <p className="margin-textos">10:30 am - 4:30 pm</p>
              <h3 className="margin-textos_h3">Receso</h3>
              <p>1:00 pm - 1:30 pm</p>
              </div>
            </div>
          </div>
          <div className="turnos">
            <div>
              <picture>
                <source srcSet="/TurnoVespertino.webp" type="image/webp" />
                <source srcSet="/TurnoVespertino.jpg" type="image/jpeg"/>
                <img src="/TurnoVespertino.jpg" alt="Turno Vespertino" className="border-elements-image" 
                loading="lazy"/>
              </picture>
            </div>
            <div className="horario2 border-elements">
              <div>
              <h3>Vespertino</h3>
              <p className="margin-textos">1:30 pm</p>
              <h3 className="margin-textos_h3">Receso</h3>
              <p>4:30 pm - 5:00 pm</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="disciplinas_grados">
        <div>
        <h2 className="titulo_disciplinas">Diciplinas a cursar</h2>
        </div>
        <div className="disciplinas">
        <div className="grado">
          <h3>1° de secundaria</h3>
          <Primero/>  
        </div>
        <div className="grado segundosecundaria">
          <h3>2° de secundaria</h3>
          <Segundo/>
        </div>
        <div className="grado">
          <h3>3° de secundaria</h3>
          <Tercero/>
        </div>
      </div>
      </div>
      <div className="centrar-biblioteca">  
      <div className="biblioteca">
        <div className="separacion_biblioteca">
          <img src="/biblioteca.jpg" alt="Biblioteca Escolar" />
        </div>
        <div className="biblioteca_texto border-elements">
          <h3>Contamos con una biblioteca adecuada para ti</h3>
          <Link className="enlace_biblioteca" to='/biblioteca'>Ver</Link>
        </div>
      </div>
      </div>
      <div>
      <h2 className="ubicacion_mapa">Ubicación</h2>
      </div>
      <div className="ubicacion">
        <iframe className="mapa" 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1288.3394683208778!2d-104.64490826279317!3d24.031971486826347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bb7c3822f24bb%3A0x956d86cf60373c18!2sEscuela%20Secundaria%20%22Ignacio%20Manuel%20Altamirano%22!5e0!3m2!1ses-419!2smx!4v1715192596633!5m2!1ses-419!2smx"
        loading="lazy"></iframe>
        <div className="redsocial">
          <iframe className="facebook" 
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FESIMAof&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
          scrolling="no" 
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
      </div>
      <div className="centrar_contenido_calendario">
      <div className="contenido_calendario">
        <h2 className="ciclo_escolar">Calendario escolar 2024 - 2025</h2>
          <picture>
            <source srcSet="/Calendario_Escolar.webp" type="image/webp" />
            <source srcSet="/Calendario_Escolar.jpeg" type="image/jpeg"/>
            <img className="calendarioescolar" src="/Calendario_Escolar.jpeg" alt="Calendario Escolar"
             loading="lazy"/>
          </picture>
      </div>
      </div>
      <Footer />
    </>
  )
}