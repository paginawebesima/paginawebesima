import { useState } from "react";
import { Link } from "react-router-dom";
import { PinInput, PinInputField } from "@chakra-ui/pin-input";
import "../sass/layout/_tokenview.scss";
import { useMutation } from "react-query";
import { RecoverPassword } from "../types";
import { recoverPassword } from "../api/api";
import { toast } from "react-toastify";

export default function RecoverPasswordView() {
    const [token, setToken] = useState<RecoverPassword['token']>('')

    const {mutate} = useMutation({
        mutationFn: recoverPassword,
        onError: (error: any) => {
            if (error instanceof Error) {
              toast.error(error.message);
            } else {
              toast.error("An unexpected error occurred");
            }
          },
        onSuccess: (data) => {
            toast.success(data)
        }
    })

    const handleChange = (token: RecoverPassword['token']) => {
        setToken(token)
    }
    const handleComplete = (token: RecoverPassword['token']) => mutate({token})
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
        <button type="submit" className="submit-button">Recuperar</button>
      </form>
      <nav className="navigation">
        <Link to="/request-code" className="new-code-link">
          Solicitar un nuevo Código
        </Link>
      </nav>
    </div>
  );
}