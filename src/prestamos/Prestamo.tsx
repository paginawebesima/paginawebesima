import { FieldErrors, UseFormRegister } from "react-hook-form";
import { PrestamosFormData } from "../types";
import ErrorMessage from "../components/ErrorMessage";
import { useQuery } from "react-query";
import { obtenerLibrosDisponibles } from "../api/api"; // Asegúrate de importar esta función

type PrestamoProps = {
    register: UseFormRegister<PrestamosFormData>;
    errors: FieldErrors<PrestamosFormData>;
};

export default function Prestamo({ register, errors }: PrestamoProps) {
    const { data: librosDisponibles } = useQuery({
        queryKey: ['LibrosDisponibles'],
        queryFn: obtenerLibrosDisponibles
    });

    return (
        <>
            <div className="formulario_flex">
                <label htmlFor="alumno">Alumno</label>
                <input
                    className="formulario_input"
                    type="text"
                    id="alumno"
                    {...register('alumno', {
                        required: "El nombre es obligatorio"
                    })}
                />
                {errors.alumno && (
                    <ErrorMessage>{errors.alumno.message}</ErrorMessage>
                )}
            </div>
            <div className="formulario_grado">
                <div className="formulario_flex">
                    <label htmlFor="grado">Grado</label>
                    <select
                        id="grado"
                        {...register('grado', {
                            required: "El grado es obligatorio"
                        })}
                        className="formulario_input"
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    {errors.grado && (
                        <ErrorMessage>{errors.grado.message}</ErrorMessage>
                    )}
                </div>
                <div className="formulario_flex">
                    <label htmlFor="grupo">Grupo</label>
                    <select
                        id="grupo"
                        {...register('grupo', {
                            required: "El grupo es obligatorio"
                        })}
                        className="formulario_input"
                    >
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                        <option value="G">G</option>
                        <option value="H">H</option>
                        <option value="I">I</option>
                    </select>
                    {errors.grupo && (
                        <ErrorMessage>{errors.grupo.message}</ErrorMessage>
                    )}
                </div>
            </div>
            <div className="formulario_flex">
                <label htmlFor="libro">Libro</label>
                <select
                    id="libro"
                    {...register('libro', {
                        required: "El libro es obligatorio"
                    })}
                    className="formulario_input"
                >
                    {librosDisponibles?.map((libro: { _id: string, titulo: string }) => (
                        <option key={libro._id} value={libro.titulo}>
                            {libro.titulo}
                        </option>
                    ))}
                </select>
                {errors.libro && (
                    <ErrorMessage>{errors.libro.message}</ErrorMessage>
                )}
            </div>
            <div className="formulario_flex">
                <label htmlFor="fechaprestamo">Fecha préstamo</label>
                <input
                    type="date"
                    id="fechaprestamo"
                    {...register('fechaprestamo', {
                        required: "La fecha de prestamo es obligatoria"
                    })}
                    className="formulario_input"
                />
                {errors.fechaprestamo && (
                    <ErrorMessage>{errors.fechaprestamo.message}</ErrorMessage>
                )}
            </div>
            <div className="formulario_flex">
                <label htmlFor="fechadevolucion">Fecha devolución</label>
                <input
                    type="date"
                    id="fechadevolucion"
                    {...register('fechadevolucion', {
                        required: "La fecha de devolucion es obligatoria"
                    })}
                    className="formulario_input"
                />
                {errors.fechadevolucion && (
                    <ErrorMessage>{errors.fechadevolucion.message}</ErrorMessage>
                )}
            </div>
        </>
    );
}