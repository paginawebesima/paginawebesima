import { Link } from "react-router-dom";

export default function Gestion() {
  return (
    <div className="display separacion_prestamos">
          <div className="container">
            <div className="box1_clausura">
              <Link className="enlace_eliminar enlaces_prestamos" to='/prestamos/matutino'>Matutino</Link>
            </div>
            <div className="box1_clausura">
              <Link className="enlace_eliminar enlaces_prestamos" to='/prestamos/vespertino'>Vespertino</Link>
            </div>
          </div>
    </div>
  )
}
