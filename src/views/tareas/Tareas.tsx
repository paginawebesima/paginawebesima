import { useQuery } from 'react-query';
import { obtenerTareas } from '../../api/api';
import AgregarTareaModal from './AgregarTareaModal';
import ListaDeTareas from './ListaDeTareas';
import EditarDatosTarea from './EditarDatosTarea';
import DetallesModalTarea from './DetallesModalTarea';
import { useAuth } from '../../hooks/useAuth';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

export default function Tareas() {
    const { data: user, isLoading: authLoading } = useAuth();

    const { data, isLoading, isError } = useQuery({
        queryKey: ['tareas'],
        queryFn: obtenerTareas,
        retry: false
    });

    const puedeEditar = useMemo(() => user && user.rol === 'Administrador', [user]) ?? false;

    if (isLoading || authLoading) return 'Cargando...';
    if (isError) return <div>Error al cargar las tareas</div>;

    return (
        <>
            <NavBar />
            <div className="imagen1 clase1">
                <h1></h1>
                <h3 className="texto-principal">Panel<br />De Administración</h3>
            </div>
            <div>
                <h1 className="titulo-tareas">Tareas</h1>
                <AgregarTareaModal />
                <ListaDeTareas
                    tareas={Array.isArray(data) ? data : []}
                    puedeEditar={puedeEditar}
                />
                <EditarDatosTarea />
                <DetallesModalTarea />
                <Link className="boton_regresar_tareas enlace_eliminar" to='/panel'>Regresar</Link>
            </div>
            <Footer />
        </>
    );
}