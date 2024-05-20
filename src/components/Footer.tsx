
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-1">
              <ul className="footer-list">
                <li className="footer-item">
                  <a href="#">
                    <span className="footer-icon"><img src="location.svg" alt="location icon" /></span>
                    16°48'10, C. Cap. Francisco de Ibarra 1907 OTE-95°05'57, Nueva Vizcaya, 34080 Durango, Dgo.
                  </a>
                </li>
                <li className="footer-item">
                  <span className="footer-icon"><img src="phone.svg" alt="phone icon" /></span>
                  618 530 3345
                </li>
                <li className="footer-item">
                  <span className="footer-icon"><img src="mail.svg" alt="mail icon" /></span>
                  direccionesima@hotmail.com
                </li>
                <li className="footer-item">
                  <a href="https://www.facebook.com/ESIMAof/">
                    <span className="footer-icon"><img src="facebook.svg" alt="facebook icon" /></span>
                    https://www.facebook.com/ESIMAof/
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2024 ESIMA. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  )
}