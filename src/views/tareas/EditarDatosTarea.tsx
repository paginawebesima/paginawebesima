import { Navigate, useLocation } from "react-router-dom";
import { useQuery } from "react-query"; 
import { obtenerTareaById } from "../../api/api"; 
import EditarTareaModal from "./EditarTareaModal";

export default function EditarDatosTarea() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const tareaId = queryParams.get('editarTarea')!;

    const { data, isError } = useQuery({
        queryKey: ['tarea', tareaId],
        queryFn: () => obtenerTareaById(tareaId),
        enabled: !!tareaId
    });

    if (isError) return <Navigate to={'/404'} />;

    if (data) return <EditarTareaModal data={data} tareaId={tareaId} />;

    return null;
}
