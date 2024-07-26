import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { actualizarTarea, obtenerTareaById } from '../../api/api';
import { toast } from 'react-toastify';
import FormularioTarea from './FormularioTarea';
import { DatosFormularioTarea, Tarea } from '../../types';
import { useNavigate, useLocation } from 'react-router-dom';

type PropsEditarTareaModal = {
    data: Tarea;
    tareaId: Tarea['_id'];
};

export default function EditarTareaModal({ data, tareaId }: PropsEditarTareaModal) {
    const [modal, setModal] = useState(true);
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const location = useLocation();

    const { register, handleSubmit, formState: { errors } } = useForm<DatosFormularioTarea>({
        defaultValues: {
            nombre: data.nombre,
            descripcion: data.descripcion,
            estado: data.estado
        }
    });
    
    const handleForm = (formData: DatosFormularioTarea) => {
        mutate({ tareaId, formularioDatos: { ...formData, estado: data.estado } });
    };

    const { mutate } = useMutation({
        mutationFn: actualizarTarea,
        onError: (error: any) => {
            toast.error(error.message);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries(['tareas']);
            const updatedTask = await obtenerTareaById(tareaId);
            queryClient.setQueryData(['tarea', tareaId], updatedTask);
            toast.success('Tarea actualizada con éxito');
            cerrarModal();
        }
    });

    const cerrarModal = () => {
        setModal(false);
        navigate(location.pathname);
    };

    useEffect(() => {
        if (!modal) {
            navigate(location.pathname);
        }
    }, [modal, navigate, location.pathname]);

    return (
        <>
            {modal && (
                <div className="modal-overlay" onClick={cerrarModal}>
                    <div className="modal" onClick={e => e.stopPropagation()}>
                        <button className="close-modal" onClick={cerrarModal}>X</button>
                        <h2 className="modal-title">Editar Tarea</h2>
                        <form onSubmit={handleSubmit(handleForm)} className="modal-content">
                            <FormularioTarea register={register} errors={errors} />
                            <button type="submit" className="submit-button">Guardar Tarea</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}