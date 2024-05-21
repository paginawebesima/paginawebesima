import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState } from 'react';

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <>
      <header className="">
        <NavBar />
        <div className="imagen2 clase1">
          <h1></h1>
          <h3 className="texto-principal">¡Bienvenido!<br />Inicia Sesión para continuar</h3>
        </div>
      </header>
      <div className="login-container">
        <div className="image-container">
          <img src="EsimaLogo.png" alt="Logo ESIMA" className="logo-image" />
        </div>
        <div className="form-container">
          <form action="">
            <input type="text" className="input mail" placeholder="Correo" />
            <div className="password-input">
              <input
                type={passwordVisible ? "text" : "password"}
                className="input password"
                placeholder="Contraseña"
              />
              <img
                src={passwordVisible ? "eye-lock-login.svg" : "eye-login.svg"}
                alt="Mostrar Contraseña"
                className="password-toggle-icon"
                onClick={togglePasswordVisibility}
              />
            </div>
            <input type="submit" className="button" value='Ingresar' />
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}