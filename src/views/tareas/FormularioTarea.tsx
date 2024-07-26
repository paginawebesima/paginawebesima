import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { DatosFormularioTarea } from '../../types';

type PropsFormularioTarea = {
    register: UseFormRegister<DatosFormularioTarea>;
    errors: FieldErrors<DatosFormularioTarea>;
};

export default function FormularioTarea({ register, errors }: PropsFormularioTarea) {
    return (
        <div className="modal-content">
            <div className="form-group">
                <label className="form-label">Nombre de la tarea</label>
                <input
                    className={`form-input ${errors.nombre ? 'error' : ''}`}
                    {...register('nombre', { required: true })}
                />
                {errors.nombre && <span className="error-message">Este campo es obligatorio</span>}
            </div>
            <div className="form-group">
                <label className="form-label">Descripción de la tarea</label>
                <textarea
                    className={`form-textarea ${errors.descripcion ? 'error' : ''}`}
                    {...register('descripcion', { required: true })}
                ></textarea>
                {errors.descripcion && <span className="error-message">Este campo es obligatorio</span>}
            </div>
        </div>
    );
}