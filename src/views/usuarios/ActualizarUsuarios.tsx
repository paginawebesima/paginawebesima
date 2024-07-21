import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { actualizarUsuarios, obtenerUsuariosById } from '../../api/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorMessage from "../../components/ErrorMessage";
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

type FormValues = {
    name: string;
    email: string;
    rol: "Administrador" | "Gestor de Libros" | "Gestor de Salones";
    password: string;
    password_confirmation: string;
};

export default function ActualizarUsuarios() {
    const { id } = useParams<{ id?: string }>();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormValues>();
    const queryClient = useQueryClient();

    const { mutateAsync } = useMutation(actualizarUsuarios, {
        onSuccess: () => {
            toast.success('Usuario actualizado correctamente');
            queryClient.invalidateQueries('Usuarios');
        },
        onError: (error: unknown) => {
            if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error("An unexpected error occurred");
            }
        },
    });

    useEffect(() => {
        const fetchUsuario = async () => {
            try {
                if (id) {
                    const usuario = await obtenerUsuariosById(id);
                    const { name, email, rol } = usuario;
                    setValue('name', name);
                    setValue('email', email);
                    setValue('rol', rol);
                }
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };
        fetchUsuario();
    }, [id, setValue]);

    const onSubmit = async (formData: FormValues) => {
        try {
            if (id) {
                await mutateAsync({ formData, usuariosId: id });
            }
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <>
            <div className="div_formulario">
                <div className="formulario">
                    <h1 className="texto_prestamo">Actualizar Usuario</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="formulario_flex">
                        <div className="formulario_flex">
                            <label className="enlaces_prestamos">Nombre</label>
                            <input
                                type="text"
                                className="formulario_input"
                                {...register('name', { required: 'El nombre es obligatorio' })}
                            />
                            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                        </div>

                        <div className="formulario_flex">
                            <label className="enlaces_prestamos">Email</label>
                            <input
                                type="email"
                                className="formulario_input"
                                {...register('email', { required: 'El email es obligatorio' })}
                            />
                            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                        </div>

                        <div className="formulario_flex">
                            <label className="enlaces_prestamos">Rol</label>
                            <select
                                className="formulario_input"
                                {...register('rol', { required: 'El rol es obligatorio' })}
                            >
                                <option value="Administrador">Administrador</option>
                                <option value="Gestor de Libros">Gestor de Libros</option>
                                <option value="Gestor de Salones">Gestor de Salones</option>
                            </select>
                            {errors.rol && <ErrorMessage>{errors.rol.message}</ErrorMessage>}
                        </div>

                        <button type="submit" className="boton_guardar">Actualizar Usuario</button>
                    </form>
                </div>
            </div>
            <Link className="boton_regresar enlace_eliminar" to='/usuarios'>Regresar</Link>
        </>
    );
}
