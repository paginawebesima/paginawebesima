import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { UserLoginForm } from "../types";
import ErrorMessage from "../components/ErrorMessage";
import { authenticateUser } from "../api/api";
import { toast } from "react-toastify";
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const initialValues: UserLoginForm = {
    email: '',
    password: '',
  };

  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues });
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: authenticateUser,
    onError: (error: any) => {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    },
    onSuccess: (data) => {
      const { rol } = data;
      if (rol === 'Administrador') {
        navigate('/panel');
      } else if (rol === 'Gestor de Libros') {
        navigate('/prestamos');
      } else {
        toast.error("Rol no autorizado");
      }
    }
  });

  const handleLogin = (formData: UserLoginForm) => mutate(formData);

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
          <form onSubmit={handleSubmit(handleLogin)} noValidate>
            <div className="input-group">
              <span className="icon"></span>
              <input
                type="text"
                className="input mail"
                placeholder="Correo"
                autoComplete="off"
                {...register("email", {
                  required: "El correo es obligatorio",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Correo no válido",
                  },
                })}
              />
              {errors.email && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
              )}
              <div className="password-input">
                <input
                  type={passwordVisible ? "text" : "password"}
                  className="input password"
                  placeholder="Contraseña"
                  {...register("password", {
                    required: "La contraseña es obligatoria",
                  })}
                />
                <img
                  src={passwordVisible ? "eye-lock-login.svg" : "eye-login.svg"}
                  alt="Mostrar Contraseña"
                  className="password-toggle-icon"
                  onClick={togglePasswordVisibility}
                />
              </div>
              {errors.password && (
                <ErrorMessage>{errors.password.message}</ErrorMessage>
              )}
            </div>
            <input type="submit" className="button" value='Ingresar' />
            <Link to='/forgot-password' className="forgot-password-link">
              ¿Olvidaste tu contraseña? Reestablecer
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
