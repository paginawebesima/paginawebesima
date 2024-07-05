import { Outlet, Navigate } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { useAuth } from "../hooks/useAuth"

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
        <ToastContainer
          pauseOnHover={false}
          pauseOnFocusLoss={false}
        />
        <Outlet />
      </div>
    )
}
