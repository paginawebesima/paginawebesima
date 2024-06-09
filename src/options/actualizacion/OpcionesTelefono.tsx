import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function OpcionesTelefono() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = (event: Event) => {
      const text = (event.currentTarget as HTMLElement).querySelector('p')?.innerText;
      const routes: { [key: string]: string } = {
        'Publicar número de Teléfono': '/panel/informacion/telefono',
        'Actualizar Número de Teléfono': '',
        'Eliminar Número de Teléfono': '',
      };
      const path = routes[text || ''];
      path ? navigate(path) : alert('No hay una ruta definida para esta opción');
    };

    const boxes1 = document.querySelectorAll('.box1');
    boxes1.forEach(box1 => box1.addEventListener('click', handleClick));
    return () => boxes1.forEach(box1 => box1.removeEventListener('click', handleClick));
  }, [navigate]);

  return (
    <>
      <div className="display">
        <div className="container">
          <div className="box1">
            <p>Publicar Número de Teléfono</p>
          </div>
          <div className="box1">
            <p>Actualizar Número de Teléfono</p>
          </div>
          <div className="box1">
            <p>Eliminar Número de Teléfono</p>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}