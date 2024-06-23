import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../ErrorMessage';
import "../../sass/layout/_newpasswordform.scss"
import type { ConfirmToken, NewPasswordForm } from '../../types';
import { useMutation } from 'react-query';
import { updatePasswordWithToken } from '../../api/api';
import { toast } from 'react-toastify';

type NewPasswordFormProps = {
    token: ConfirmToken['token']
}

export default function NewPasswordForm({token} : NewPasswordFormProps) {
    const navigate = useNavigate();
    const initialValues: NewPasswordForm = {
        password: '',
        password_confirmation: '',
    };

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({ defaultValues: initialValues });

    const { mutate } = useMutation({
        mutationFn: updatePasswordWithToken,
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
            navigate('/login')
        }
    })

    const handleNewPassword = (formData: NewPasswordForm) => {
        const data = {
            formData,
            token
        }
        mutate(data)
    };

    const password = watch('password');

    return (
        <div className="new-password-view">
            <h1 className="new-password-title">Reestablecer Contraseña</h1>
            <p className="new-password-subtitle">
                Ingresa la nueva contraseña y confirma.
            </p>
            <form
                onSubmit={handleSubmit(handleNewPassword)}
                className="new-password-form"
                noValidate
            >
                <div className="form-container">
                    <input
                        type="password"
                        placeholder="Contraseña"
                        className="new-password-input"
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

                    <input
                        id="password_confirmation"
                        type="password"
                        placeholder="Confirmar Contraseña"
                        className="new-password-input"
                        {...register("password_confirmation", {
                            required: "Confirmar contraseña es obligatorio",
                            validate: value => value === password || 'Las contraseñas no son iguales'
                        })}
                    />
                    {errors.password_confirmation && (
                        <ErrorMessage>{errors.password_confirmation.message}</ErrorMessage>
                    )}
                </div>

                <button type="submit" className="new-password-submit-button">Establecer Contraseña</button>
            </form>
        </div>
    );
}
