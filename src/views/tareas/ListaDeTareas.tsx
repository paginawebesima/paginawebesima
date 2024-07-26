import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { Tarea, EstadoTarea } from '../../types'; 
import TarjetaTarea from './TarjetaTarea'; 
import { traduccionesEstado } from './locales/es'; 
import SoltarTarea from './SoltarTarea'; 
import { useMutation, useQueryClient } from 'react-query';
import { actualizarEstado } from '../../api/api'; 
import { toast } from 'react-toastify';

type ListaDeTareasProps = {
    tareas: Tarea[];
    puedeEditar: boolean;
};

type TareasAgrupadas = {
    [key: string]: Tarea[];
};

const grupoEstadosIniciales: TareasAgrupadas = {
    pendiente: [],
    enEspera: [],
    enProceso: [],
    enRevision: [],
    completado: [],
};

const estadoStyles: { [key: string]: string } = {
    pendiente: 'border-top-slate-500',
    enEspera: 'border-top-red-500',
    enProceso: 'border-top-blue-500',
    enRevision: 'border-top-amber-500',
    completado: 'border-top-emerald-500',
};

export default function ListaDeTareas({ tareas, puedeEditar }: ListaDeTareasProps) {
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: actualizarEstado,
        onError: (error: any) => {
            toast.error(error.message);
        },
        onSuccess: (data: any) => {
            toast.success(data);
            queryClient.invalidateQueries(['tareas']);
        }
    });

    if (!Array.isArray(tareas)) {
        return <div>No hay tareas para mostrar</div>;
    }

    const tareasAgrupadas = tareas.reduce((acc, tarea) => {
        let grupoActual = acc[tarea.estado] ? [...acc[tarea.estado]] : [];
        grupoActual = [...grupoActual, tarea];
        return { ...acc, [tarea.estado]: grupoActual };
    }, grupoEstadosIniciales);

    const handleDragEnd = (e: DragEndEvent) => {
        const { over, active } = e;
    
        if (over && over.id) {
            const tareaId = active.id.toString();
            const estado = over.id as EstadoTarea;
            mutate({ tareaId, estado });
    
            queryClient.setQueryData(['tareas'], (prevData) => {
                if (!Array.isArray(prevData)) {
                    return prevData;
                }
                const updatedTasks = prevData.map((task) => {
                    if (task._id === tareaId) {
                        return {
                            ...task,
                            estado,
                        };
                    }
                    return task;
                });
    
                return updatedTasks;
            });
        }
    };

    return (
        <>
            <div className="contenedor-lista-tareas">
                <DndContext onDragEnd={handleDragEnd}>
                    {Object.entries(tareasAgrupadas).map(([estado, tareas]) => (
                        <div key={estado} className="estado-columna">
                            <h3 className={`titulo-estado ${estadoStyles[estado]}`}>
                                {traduccionesEstado[estado]}
                            </h3>

                            <SoltarTarea estado={estado} />

                            <div className="lista-tareas">
                                {tareas.length === 0 ? (
                                    <div className="sin-tareas">No hay tareas</div>
                                ) : (
                                    tareas.map(tarea => <TarjetaTarea key={tarea._id} tarea={tarea} puedeEditar={puedeEditar} />)
                                )}
                            </div>
                        </div>
                    ))}
                </DndContext>
            </div>
        </>
    );
}