import { useEffect} from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";


export default function Panel() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = (event: Event) => {
      const text = (event.currentTarget as HTMLElement).querySelector('p')?.innerText;
      const routes: { [key: string]: string } = {
        'Información nuevo ingreso': '/panel/nuevoIngreso',
        'Información alumnos a egresar': 'clausura',
        'Actualizar información de contacto': '/panel/informacion',
        'Información directivos': '/panel/administrativos',
        'Usuarios': '/usuarios',
        'Tareas': '/tareas',
      };
      const path = routes[text || ''];
      path ? navigate(path) : alert('No hay una ruta definida para esta opción');
    };

    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.addEventListener('click', handleClick));
    return () => boxes.forEach(box => box.removeEventListener('click', handleClick));
  }, [navigate]);

  return (
    <>
      <NavBar />
      <div className="imagen1 clase1">
        <h1></h1>
        <h3 className="texto-principal">Panel<br />De Administración</h3>
      </div>
      <Outlet />
      <Footer />
    </>
  );
}