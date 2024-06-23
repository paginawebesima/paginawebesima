import { Link } from "react-router-dom";
import { PinInput, PinInputField } from "@chakra-ui/pin-input";
import "../../sass/layout/_request-code.scss"
import { useMutation } from "react-query";
import { ConfirmToken } from "../../types";
import { validateToken } from "../../api/api";
import { toast } from "react-toastify";

type NewPasswordTokenProps = {
  token: ConfirmToken['token']
  setToken: React.Dispatch<React.SetStateAction<string>>
  setIsValidToken: React.Dispatch<React.SetStateAction<boolean>>
}

export default function NewPasswordToken({token, setToken, setIsValidToken}: NewPasswordTokenProps) {

    const {mutate} = useMutation({
        mutationFn: validateToken,
        onError: (error: any) => {
            if (error instanceof Error) {
              toast.error(error.message);
            } else {
              toast.error("An unexpected error occurred");
            }
          },
        onSuccess: (data) => {
            toast.success(data)
            setIsValidToken(true)
        }
    })

    const handleChange = (token: ConfirmToken['token']) => {
       setToken(token)
    }
    const handleComplete = (token: ConfirmToken['token']) => mutate({token})

  return (
    <div className="recover-password-view">
      <h1 className="title">Reestablecer Contraseña</h1>
      <p className="subtitle">
        Ingresa el código que recibiste por
        <span className="highlight"> correo</span>
      </p>
      <form className="form">
        <label className="label">Código de 6 dígitos</label>
        <div className="input-container">
          <PinInput value={token} onChange={handleChange} onComplete={handleComplete}>
            <PinInputField className="input" />
            <PinInputField className="input" />
            <PinInputField className="input" />
            <PinInputField className="input" />
            <PinInputField className="input" />
            <PinInputField className="input" />
          </PinInput>
        </div>
      </form>
      <nav className="navigation">
        <Link to="/request-code" className="new-code-link">
          Solicitar un nuevo Código
        </Link>
      </nav>
    </div>
  );
}