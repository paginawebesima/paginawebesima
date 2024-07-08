import { Outlet, Navigate } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { useAuth } from "../hooks/useAuth"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export default function BookLayout() {

  const { data, isError, isLoading } = useAuth()

  if (isLoading) return 'Cargando...'
  if (isError) {
    return <Navigate to='/login' />
  }
  const isValidUser = data && data.rol === 'Gestor de Libros';
  if (!isValidUser) {
    return <Navigate to='/panel' />;
  }
  if (data)
    return (
      <div>
        <header className="">
        <NavBar/>
        <div className="imagen4 clase1">
          <h1></h1>
          <h3 className="texto-principal">Prestamos</h3>
        </div>
      </header>
        <ToastContainer
          pauseOnHover={false}
          pauseOnFocusLoss={false}
        />
        <Outlet />
        <Footer/>
      </div>
    )
}
