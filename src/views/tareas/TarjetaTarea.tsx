import { Fragment } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { Tarea } from '../../types';
import { eliminarTarea } from '../../api/api';
import { toast } from 'react-toastify';
import { useDraggable } from '@dnd-kit/core';

type TarjetaTareaProps = {
    tarea: Tarea;
    puedeEditar: boolean;
};

export default function TarjetaTarea({ tarea, puedeEditar }: TarjetaTareaProps) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: tarea._id
    });
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: eliminarTarea,
        onError: (error: any) => {
            toast.error(error.message);
        },
        onSuccess: (data: any) => {
            toast.success(data);
            queryClient.invalidateQueries(['tareas']);
        }
    });

    const estilo = transform
        ? {
            transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
            padding: '1.25rem',
            backgroundColor: '#FFF',
            width: '300px',
            display: 'flex',
            borderWidth: '1px',
            borderColor: 'rgb(203 213 225 / var(--tw-border-opacity))',
        }
        : undefined;

    return (
        <li className="tarjeta-tarea">
            <div
                {...listeners}
                {...attributes}
                ref={setNodeRef}
                style={estilo}
                className="contenido-tarjeta"
            >
                <p className="nombre-tarea">{tarea.nombre}</p>
                <p className="descripcion-tarea">{tarea.descripcion}</p>
            </div>

            <div className="opciones-tarea">
                <Menu as="div" className="menu-opciones">
                    <MenuButton className="boton-menu">
                        <EllipsisVerticalIcon className="icono-menu" aria-hidden="true" />
                    </MenuButton>
                    <Transition
                        as={Fragment}
                        enter="transicion-menu"
                        enterFrom="transicion-menu-inicio"
                        enterTo="transicion-menu-fin"
                        leave="transicion-menu"
                        leaveFrom="transicion-menu-fin"
                        leaveTo="transicion-menu-inicio"
                    >
                        <MenuItems className="items-menu">
                            <MenuItem>
                                <button
                                    type="button"
                                    className="boton-item-menu"
                                    onClick={() => navigate(location.pathname + `?verTarea=${tarea._id}`)}
                                >
                                    Ver Tarea
                                </button>
                            </MenuItem>

                            {puedeEditar && (
                                <>
                                    <MenuItem>
                                        <button
                                            type="button"
                                            className="boton-item-menu"
                                            onClick={() => navigate(location.pathname + `?editarTarea=${tarea._id}`)}
                                        >
                                            Editar Tarea
                                        </button>
                                    </MenuItem>

                                    <MenuItem>
                                        <button
                                            type="button"
                                            className="boton-item-menu boton-eliminar"
                                            onClick={() => mutate(tarea._id)}
                                        >
                                            Eliminar Tarea
                                        </button>
                                    </MenuItem>
                                </>
                            )}
                        </MenuItems>
                    </Transition>
                </Menu>
            </div>
        </li>
    );
}