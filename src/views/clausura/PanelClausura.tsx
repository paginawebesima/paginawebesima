import { Link } from "react-router-dom";
import InsertarClausura from "./modalClausura/InsertarClausura";

export default function PanelClausura() {
  return (
    <>
        <div className="display">
          <div className="container">
              <InsertarClausura/>
            <div className="box1_clausura">
              <Link className="enlace_eliminar enlace_clausura" to='actualizar'>Actualizar clausura</Link>
            </div>
            <div className="box1_clausura">
              <Link className="enlace_eliminar enlace_clausura" to='eliminar'>Eliminar clausura</Link>
            </div>
          </div>
        </div>
        <Link className="boton_regresar enlace_eliminar" to='/panel'>Regresar</Link>
    </>
  )
}
