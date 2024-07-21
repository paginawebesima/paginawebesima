import { Outlet, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useAuth } from "../hooks/useAuth";

export default function AuthLayout() {

    const { data, isError, isLoading } = useAuth()

    if (isLoading) return 'Cargando...'
    if (isError) {
        return <Navigate to='/login' />
    }
    const isValidUser = data && data.rol === 'Administrador';
    if (!isValidUser) {
        return <Navigate to='/prestamos' />;
    }
    if (data) return (
        <>
            <div>
                <div>
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>

            <ToastContainer
                pauseOnHover={false}
                pauseOnFocusLoss={false}
            />
        </>
    );
}