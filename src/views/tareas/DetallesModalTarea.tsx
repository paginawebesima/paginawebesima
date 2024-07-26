import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { obtenerTareaById, actualizarEstado } from '../../api/api';
import { formatDate } from './utils/utils';
import { EstadoTarea } from '../../types';
import { traduccionesEstado } from './locales/es';

export default function DetallesModalTarea() {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const tareaId = queryParams.get('verTarea');

    useEffect(() => {
        if (!tareaId) {
            navigate('/tareas');
        }
    }, [tareaId, navigate]);

    const { data, isError, error } = useQuery(
        ['tarea', tareaId],
        () => obtenerTareaById(tareaId!),
        { enabled: !!tareaId, retry: false }
    );

    const queryClient = useQueryClient();
    const mutation = useMutation(actualizarEstado, {
        onError: (error: any) => {
            toast.error(error.message);
        },
        onSuccess: (data, variables) => {
            toast.success('Estado actualizado con éxito');
            queryClient.invalidateQueries(['tareas']);
            queryClient.setQueryData(['tarea', tareaId], (oldData: any) => {
                return {
                    ...oldData,
                    estado: variables.estado,
                    historialCambios: [...oldData.historialCambios, { estado: variables.estado, fecha: new Date() }]
                };
            });
        }
    });

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (tareaId) {
            const estado = e.target.value as EstadoTarea;
            mutation.mutate({ tareaId, estado });
        }
    };

    useEffect(() => {
        if (isError) {
            toast.error((error as Error).message);
            navigate('/tareas');
        }
    }, [isError, error, navigate]);

    if (!data) return null;

    return (
        <>
            <div className="modal-ver-tarea-overlay" onClick={() => navigate(location.pathname, { replace: true })}></div>
            <div className="modal-ver-tarea">
                <div className="modal-ver-tarea-content">
                    <button className="close-modal" onClick={() => navigate(location.pathname, { replace: true })}>X</button>
                    <p className="modal-subtext1">Agregada el: {formatDate(data.createdAt)}</p>
                    <p className="modal-subtext2">Última actualización: {formatDate(data.updatedAt)}</p>
                    <h3 className="modal-ver-tarea-title">{data.nombre}</h3>
                    <p className="modal-ver-tarea-description">Descripción: {data.descripcion}</p>
                    {data.historialCambios.length > 0 && (
                        <>
                            <p className="modal-history-title">Historial de Cambios</p>
                            <ul className="modal-history-list">
                                {data.historialCambios.map((cambio: any, index: number) => (
                                    <li key={index}>
                                        <span className="modal-history-item">
                                            {traduccionesEstado[cambio.estado]}
                                        </span>{' '}
                                        el: <span className="modal-history-date">{formatDate(cambio.fecha)}</span>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                    <div className="modal-ver-tarea-status-container">
                        <label className="modal-ver-tarea-status-label">Estado Actual:</label>
                        <select
                            className="modal-ver-tarea-status-select"
                            defaultValue={data.estado}
                            onChange={handleChange}
                        >
                            {Object.entries(traduccionesEstado).map(([key, value]) => (
                                <option key={key} value={key}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
}