import { useEffect } from 'react';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Outlet } from 'react-router-dom';
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
      } else if(text==='Actualizar información de contacto'){
        navigate('/panel/informacion')
      } 
      else {
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
        <Outlet/>
      </div>
      <Footer />
      <ToastContainer
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        />
    </>
  );
}