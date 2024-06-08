import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
export default function OpcionesNuevoIngreso() {
    const navigate = useNavigate();

  useEffect(() => {
    const boxes = document.querySelectorAll('.box');

    const handleClick: EventListener = (event: Event) => {
      const box = event.currentTarget as HTMLElement;
      const text = box.querySelector('p')?.innerText;
      if (text === 'Añadir Informacion') {
        navigate('');
      } else if (text === 'Actualizar Informacion') {
        navigate('/panel/nuevoIngreso/actualizar');
      } else if (text === 'Eliminar Informacion') {
        navigate('/login');
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
        <div className="display">
          <div className="container">
            <div className="box">
              <p>Añadir Informacion</p>
            </div>
            <div className="box">
              <p>Actualizar Informacion</p>
            </div>
            <div className="box">
              <p>Eliminar Informacion</p>
            </div>
            
          </div>
        </div>
    </>
  )
}
