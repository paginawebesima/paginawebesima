import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { UserRequestCodeForm } from "../types";
import ErrorMessage from "../components/ErrorMessage";
import "../sass/layout/_request-code.scss";
import { userRequestCode } from "../api/api";
import { toast } from "react-toastify";

export default function RecoverPasswordView() {
    const initialValues: UserRequestCodeForm = {
        email: ''
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues: initialValues });

    const {mutate} = useMutation({
        mutationFn: userRequestCode,
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
    const handleRequestCode = (formData: UserRequestCodeForm) => mutate(formData)

    return (
        <div className="recover-password-view">
            <h1 className="title">Solicitar Código de Confirmación</h1>
            <p className="subtitle">
                Coloca tu correo para recibir
                <span className="highlight"> un nuevo código</span>
            </p>

            <form onSubmit={handleSubmit(handleRequestCode)} className="form">
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
                <Link to='/forgot-password' className="new-code-link">
                    ¿Olvidaste tu contraseña? Reestablecer
                </Link>
            </nav>
        </div>
    );
}
