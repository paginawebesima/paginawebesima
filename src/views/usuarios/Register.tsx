import { useForm } from "react-hook-form";
import { UserRegistrationForm } from "../../types";
import { useMutation } from "react-query";
import ErrorMessage from "../../components/ErrorMessage";
import { createAccount } from "../../api/api";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

export default function Register() {
    const initialValues: UserRegistrationForm = {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        rol: 'Administrador'
    };

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<UserRegistrationForm>({ defaultValues: initialValues });
    const { mutate } = useMutation({
        mutationFn: createAccount,
        onError: (error: any) => {
            if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error("An unexpected error occurred");
            }
        },
        onSuccess: (data) => {
            toast.success(data);
            reset()
        }
    });

    const password = watch('password');

    const handleRegister = (formData: UserRegistrationForm) => mutate(formData);

    return (
        <>
            <div className="div_formulario">
                <div className="formulario">
                    <h1 className="texto_prestamo">Agregar Usuario</h1>
                    <form
                        onSubmit={handleSubmit(handleRegister)}
                        className="formulario_flex"
                        noValidate
                    >
                        <div className="formulario_flex">
                            <label
                                className="enlaces_prestamos"
                                htmlFor="email"
                            >Correo</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Correo"
                                className="formulario_input"
                                {...register("email", {
                                    required: "El correo es obligatorio",
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "Correo no válido",
                                    },
                                })}
                            />
                            {errors.email && (
                                <ErrorMessage>{errors.email.message}</ErrorMessage>
                            )}
                        </div>

                        <div className="formulario_flex">
                            <label
                                className="enlaces_prestamos"
                            >Nombre</label>
                            <input
                                type="text"
                                placeholder="Nombre"
                                className="formulario_input"
                                {...register("name", {
                                    required: "El Nombre de usuario es obligatorio",
                                })}
                            />
                            {errors.name && (
                                <ErrorMessage>{errors.name.message}</ErrorMessage>
                            )}
                        </div>

                        <div className="formulario_flex">
                            <label
                                className="enlaces_prestamos"
                            >Rol</label>
                            <select
                                className="formulario_input"
                                {...register("rol", {
                                    required: "El rol es obligatorio",
                                })}
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
                            <label
                                className="enlaces_prestamos"
                            >Password</label>
                            <input
                                type="password"
                                placeholder="Contraseña"
                                className="formulario_input"
                                {...register("password", {
                                    required: "La contraseña es obligatoria",
                                    minLength: {
                                        value: 8,
                                        message: 'La contraseña debe tener mínimo 8 caracteres'
                                    }
                                })}
                            />
                            {errors.password && (
                                <ErrorMessage>{errors.password.message}</ErrorMessage>
                            )}
                        </div>

                        <div className="formulario_flex">
                            <label
                                className="enlaces_prestamos"
                            >Repetir Contraseña</label>
                            <input
                                id="password_confirmation"
                                type="password"
                                placeholder="Confirmar Contraseña"
                                className="formulario_input"
                                {...register("password_confirmation", {
                                    required: "Confirmar Contraseña es obligatorio",
                                    validate: value => value === password || 'Los Passwords no son iguales'
                                })}
                            />
                            {errors.password_confirmation && (
                                <ErrorMessage>{errors.password_confirmation.message}</ErrorMessage>
                            )}
                        </div>

                        <input
                            type="submit"
                            value='Agregar'
                            className="boton_guardar"
                        />
                    </form>
                </div>
            </div>
            <ToastContainer
                pauseOnHover={false}
                pauseOnFocusLoss={false}
            />
            <Link className="boton_regresar enlace_eliminar" to='/usuarios'>Regresar</Link>
        </>
    );
}
