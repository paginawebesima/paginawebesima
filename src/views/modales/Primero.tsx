import { useState } from "react"
export default function Primero() {
    const [modal,setModal] = useState(false);
    const abrirModal=()=>{
        setModal(!modal)
    }
    if(modal){
        document.body.classList.add('activar-modal')
    }else{
        document.body.classList.remove('activar-modal')
    }
  return (
    <>
        <button onClick={abrirModal}>Ver</button>

        {modal &&(
            <div className="modal_grado">
                <div onClick={abrirModal} className="overlay_grado"></div>
                <div className="modal-content_grado">
                <button className="close-modal_clausura" onClick={abrirModal}>
                X
                </button>
                <h2>Listado de diciplinas a cursar</h2>
                <h3>Primer Grado</h3>
                <div>
                <li>Español</li>
                <li>Inglés</li>
                <li>Artes</li>
                <li>Matemáticas</li>
                <li>Biología</li>
                <li>Geografía</li>
                <li>Historia</li>
                <li>Formacion Civica y Ética</li>
                <li>Tecnología</li>
                <li>Educación Física</li>
                </div>
                </div>
            </div>
        )}
    </>
  )
}
