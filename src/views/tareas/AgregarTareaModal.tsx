import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { crearTarea } from '../../api/api';
import { toast } from 'react-toastify';
import FormularioTarea from './FormularioTarea';
import { DatosFormularioTarea } from '../../types';

export default function AgregarTareaModal() {
    const [modal, setModal] = useState(false);
    const queryClient = useQueryClient();
    
    const { register, handleSubmit, formState: { errors }, reset  } = useForm<DatosFormularioTarea>({
        defaultValues: {
            nombre: '',
            descripcion: ''
        }
    });

    const { mutate } = useMutation({
        mutationFn: crearTarea,
        onSuccess: () => {
            queryClient.invalidateQueries(['tareas']);
            toast.success('Tarea creada con éxito');
            setModal(false);
            reset();
        },
        onError: (error: any) => {
            toast.error(error.message);
        }
    });

    const handleForm = (formData: DatosFormularioTarea) => {
        mutate(formData);
    };

    const abrirModal = () => {
        setModal(!modal);
    };

    return (
        <>
            <button onClick={abrirModal} className="btn-agregar-tarea">Agregar Tarea</button>
            {modal && (
                <div className="modal-overlay" onClick={abrirModal}>
                    <div className="modal" onClick={e => e.stopPropagation()}>
                        <button className="close-modal" onClick={abrirModal}>X</button>
                        <h2 className="modal-title">Agregar Tarea</h2>
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