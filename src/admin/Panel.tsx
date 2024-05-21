import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Panel() {
  const navigate = useNavigate();

  useEffect(() => {
    const boxes = document.querySelectorAll('.box');

    const handleClick: EventListener = (event: Event) => {
      const box = event.currentTarget as HTMLElement;
      const text = box.querySelector('p')?.innerText;
      if (text === 'Información nuevo ingreso') {
        navigate('/preinscripciones');
      } else if (text === 'Información alumnos a egresar') {
        navigate('/graduaciones');
      } else if (text === 'Noticias relevantes') {
        navigate('/login');
      } else {
        alert('No hay una ruta definida para esta opción');
      }
    };

    boxes.forEach(box => {
      box.addEventListener('click', handleClick);
    });

    return () => {
      boxes.forEach(box => {
        box.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <>
      <div>
        <NavBar />
        <div className="imagen1 clase1">
          <h1></h1>
          <h3 className="texto-principal">Panel<br />De Administración</h3>
        </div>
        <div className="display">
          <div className="container">
            <div className="box">
              <p>Información nuevo ingreso</p>
              <img src="school.svg" alt="Nuevo Ingreso"></img>
            </div>
            <div className="box">
              <p>Información alumnos a egresar</p>
              <img src="graduation.svg" alt="Alumnos a Egresar"></img>
            </div>
            <div className="box">
              <p>Noticias relevantes</p>
              <img src="news.svg" alt="Noticias Relevantes"></img>
            </div>
            <div className="box">
              <p>Usuarios</p>
              <img src="user.svg" alt="Usuarios"></img>
            </div>
            <div className="box">
              <p>Actualizar información de contacto</p>
              <img src="mail-admin.svg" alt="Actualizar Contacto"></img>
            </div>
            <div className="box">
              <p>Información directivos</p>
              <img src="admins.svg" alt="Información Directivos"></img>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}