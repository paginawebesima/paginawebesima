import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import ActivarProceso from './mostrar/ActivarProceso';
import DesactivarProceso from './mostrar/DesactivarProceso';

export default function OpcionesNuevoIngreso() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = (event: Event) => {
      const text = (event.currentTarget as HTMLElement).querySelector('p')?.innerText;
      const routes: { [key: string]: string } = {
        'Añadir Información': '/panel/nuevoIngreso/añadir',
        'Actualizar Información': '/panel/nuevoIngreso/actualizar',
        'Eliminar Información': '/panel/nuevoIngreso/eliminar',
      };
      const path = routes[text || ''];
      path ? navigate(path) : alert('No hay una ruta definida para esta opción');
    };

    const boxes2 = document.querySelectorAll('.box2');
    boxes2.forEach(box2 => box2.addEventListener('click', handleClick));
    return () => boxes2.forEach(box2 => box2.removeEventListener('click', handleClick));
  }, [navigate]);
  
  return (
    <>
      <div className="display">
        <div className="container">
          <div className="box2">
            <p>Añadir Información</p>
          </div>
          <div className="box2">
            <p>Actualizar Información</p>
          </div>
          <div className="box2">
            <p>Eliminar Información</p>
          </div>
          <DesactivarProceso/>
          <ActivarProceso/>
        </div>
      </div>
      <Link className='boton_regresar enlace_eliminar' to='/panel'>Regresar</Link>
      <Outlet />
      <ToastContainer
                pauseOnHover={false}
                pauseOnFocusLoss={false}
            />
    </>
  );
}