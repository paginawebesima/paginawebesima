import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { ForgotPasswordForm } from "../types";
import ErrorMessage from "../components/ErrorMessage";
import { forgotPassword } from "../api/api";
import { toast } from "react-toastify";

export default function ForgotPasswordView() {
    const initialValues: ForgotPasswordForm = {
        email: ''
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues: initialValues });

    const {mutate} = useMutation({
        mutationFn: forgotPassword,
        onError: (error: any) => {
            if (error instanceof Error) {
              toast.error(error.message);
            } else {
              toast.error("An unexpected error occurred");
            }
          },
        onSuccess: (data) => {
            toast.success(data)
            reset()
        }
    })
    const handleForgotPassword = (formData: ForgotPasswordForm) => mutate(formData)

    return (
        <div className="recover-password-view">
            <h1 className="title">Reestablecer Contraseña</h1>
            <p className="subtitle">
                ¿Olvidaste tu contraseña? coloca tu correo {''}
                <span className="highlight"> y reestablece tu contraseña</span>
            </p>

            <form onSubmit={handleSubmit(handleForgotPassword)} className="form">
                <input
                    id="email"
                    type="email"
                    placeholder="Correo"
                    className="input"
                    {...register("email", {
                        required: "El Correo es obligatorio",
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Correo no válido",
                        },
                    })}
                />
                {errors.email && (
                    <ErrorMessage>{errors.email.message}</ErrorMessage>
                )}

                <input
                    type="submit"
                    value='Enviar Código'
                    className="submit-button"
                />
            </form>

            <nav className="navigation">
                <Link to='/login' className="new-code-link">
                    ¿Ya tienes cuenta? Iniciar Sesión
                </Link>
            </nav>
        </div>
    );
}
