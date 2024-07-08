/*import { useForm, UseFormRegister } from 'react-hook-form';
import { UserRegistrationForm, userSchema } from '../../types';
import { useMutation } from 'react-query';
import { crearUsuarios } from '../../api/api';
import { toast } from 'react-toastify';
import ErrorMessage from '../../components/ErrorMessage';

type UsuarioProps = {
    register: UseFormRegister<UserRegistrationForm>;
};

export default function Usuario({ register }: UsuarioProps) {
    const initialValues: UserRegistrationForm = {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        rol: 'Administrador',
    };

    const { handleSubmit, watch, reset, formState: { errors } } = useForm<UserRegistrationForm>({ defaultValues: initialValues });

    const { mutate } = useMutation({
        mutationFn: async (formData: UserRegistrationForm) => {
            // Validate using Zod schema before sending data to backend
            const result = userSchema.safeParse(formData);

            if (!result.success) {
                // Handle validation errors
                const errorMessage = result.error.errors[0].message;
                throw new Error(errorMessage);
            }

            // If validation is successful, proceed with API call
            const data = await crearUsuarios(formData);
            return data;
        },
        onError: (error: any) => {
            if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error('Ocurrió un error inesperado');
            }
        },
        onSuccess: (data) => {
            toast.success(data);
            reset();
        },
    });

    const password = watch('password');

    const handleRegister = (formData: UserRegistrationForm) => mutate(formData);

    return (
        <div>
            <h1>Crear Usuario</h1>
            <form onSubmit={handleSubmit(handleRegister)} noValidate>
                <div className="formulario_flex">
                    <label htmlFor="name">Nombre</label>
                    <input
                        className="formulario_input"
                        type="text"
                        id="name"
                        {...register('name', {
                            required: 'El nombre es obligatorio',
                        })}
                    />
                    {errors.name && (
                        <ErrorMessage>{errors.name.message}</ErrorMessage>
                    )}
                </div>

                <div className="formulario_flex">
                    <label htmlFor="email">Correo</label>
                    <input
                        className="formulario_input"
                        type="text"
                        id="email"
                        {...register('email', {
                            required: 'El correo es obligatorio',
                        })}
                    />
                    {errors.email && (
                        <ErrorMessage>{errors.email.message}</ErrorMessage>
                    )}
                </div>

                <div className="formulario_flex">
                    <label htmlFor="rol">Rol</label>
                    <select
                        id="rol"
                        {...register('rol', {
                            required: 'El rol es obligatorio',
                        })}
                        className="formulario_input"
                    >
                        <option value="Administrador">Administrador</option>
                        <option value="Gestor de Libros">Gestor de Libros</option>
                        <option value="Gestor de Salones">Gestor de Salones</option>
                    </select>
                    {errors.rol && (
                        <ErrorMessage>{errors.rol.message}</ErrorMessage>
                    )}
                </div>

                <div className="formulario_flex">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        className="formulario_input"
                        {...register('password', {
                            required: 'La contraseña es obligatoria',
                            minLength: {
                                value: 8,
                                message: 'La contraseña debe tener mínimo 8 caracteres',
                            },
                        })}
                    />
                    {errors.password && (
                        <ErrorMessage>{errors.password.message}</ErrorMessage>
                    )}
                </div>

                <div className="formulario_flex">
                    <label htmlFor="password_confirmation">Repetir Contraseña</label>
                    <input
                        type="password"
                        id="password_confirmation"
                        className="formulario_input"
                        {...register('password_confirmation', {
                            required: 'Confirmar contraseña es obligatorio',
                            validate: value => value === password || 'Las contraseñas no coinciden',
                        })}
                    />
                    {errors.password_confirmation && (
                        <ErrorMessage>{errors.password_confirmation.message}</ErrorMessage>
                    )}
                </div>

                <div className="formulario_flex">
                    <input type="submit" value="Registrar" className="boton_registro" />
                </div>
            </form>
        </div>
    );
}*/
