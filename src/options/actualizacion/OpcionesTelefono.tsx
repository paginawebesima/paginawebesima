import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
export default function OpcionesTelefono() {
    const navigate = useNavigate();

  useEffect(() => {
    const boxes = document.querySelectorAll('.box');

    const handleClick: EventListener = (event: Event) => {
      const box = event.currentTarget as HTMLElement;
      const text = box.querySelector('p')?.innerText;
      if (text === 'Publicar Numero de Telefono') {
        navigate('/panel/informacion/telefono');
      } else if (text === 'Actualizar Numero de Telefono') {
        navigate('/graduaciones');
      } else if (text === 'Eliminar Numero de Telefono') {
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
              <p>Publicar Numero de Telefono</p>
                
            </div>
            <div className="box">
              <p>Actualizar Numero de Telefono</p>
            </div>
            <div className="box">
              <p>Eliminar Numero de Telefono</p>
            </div>
            
          </div>
        </div>
        
    </>
  )
}
