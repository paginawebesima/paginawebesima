import { useForm } from "react-hook-form";
import { UserRegistrationForm } from "../types";
import { useMutation } from "react-query";
import ErrorMessage from "../components/ErrorMessage";
import { createAccount } from "../api/api";
import { toast } from "react-toastify";

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
            <h1 className="">Crear Cuenta</h1>
            <p className="">
                Llena el formulario para {''}
                <span className=""> crear tu cuenta</span>
            </p>

            <form
                onSubmit={handleSubmit(handleRegister)}
                className=""
                noValidate
            >
                <div className="">
                    <label
                        className=""
                        htmlFor="email"
                    >Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email de Registro"
                        className=""
                        {...register("email", {
                            required: "El Email de registro es obligatorio",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "E-mail no válido",
                            },
                        })}
                    />
                    {errors.email && (
                        <ErrorMessage>{errors.email.message}</ErrorMessage>
                    )}
                </div>

                <div className="">
                    <label
                        className=""
                    >Nombre</label>
                    <input
                        type="text"
                        placeholder="Nombre de Registro"
                        className=""
                        {...register("name", {
                            required: "El Nombre de usuario es obligatorio",
                        })}
                    />
                    {errors.name && (
                        <ErrorMessage>{errors.name.message}</ErrorMessage>
                    )}
                </div>

                <div className="">
                    <label
                        className=""
                    >Rol</label>
                    <select
                        className=""
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

                <div className="">
                    <label
                        className=""
                    >Password</label>
                    <input
                        type="password"
                        placeholder="Contraseña"
                        className=""
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

                <div className="">
                    <label
                        className=""
                    >Repetir Contraseña</label>
                    <input
                        id="password_confirmation"
                        type="password"
                        placeholder="Confirmar Contraseña"
                        className=""
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
                    value='Registrarme'
                    className=""
                />
            </form>
        </>
    );
}
