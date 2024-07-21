import { useQuery } from "react-query";
import { obtenerAdministrativos } from "../../api/api";

interface InformacionCargaProps {
  administrativosRef: React.MutableRefObject<HTMLDivElement[]>;
}

interface AdministrativoInfo {
  _id: string;
  directivo: string;
  cargo: string;
}

export default function InformacionCarga({ administrativosRef }: InformacionCargaProps) {
  const { data, isLoading } = useQuery({
    queryKey: ['Administrativos'],
    queryFn: obtenerAdministrativos
  });

  if (isLoading) return 'Cargando....';

  if (data) return (
    <>
      {data.map((administrativosInformacion: AdministrativoInfo, index: number) => (
        <div 
          className={`section ${index === 0 ? "aparecer" : ""}`} 
          key={administrativosInformacion._id} 
          ref={(el) => el && administrativosRef.current.push(el)}
        >
          <div className="line-container"></div>
          <div className="administrativo">
            <h2 className="h2-admin">{administrativosInformacion.directivo}</h2>
            <p className="p-admin">{administrativosInformacion.cargo}</p>
          </div>
        </div>
      ))}
    </>
  );
}
