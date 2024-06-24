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
                <h2>Listado de diciplinas a cursar</h2>
                <h3>Primer Grado</h3>
                <h2>Prueba</h2>
                <button className="close-modal_grado" onClick={abrirModal}>
                Cerrar
            </button>
                </div>
            </div>
        )}
    </>
  )
}
