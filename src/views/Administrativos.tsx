import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useQuery } from "react-query";
import { obtenerAdministrativos } from "../api/api";


export default function Administrativos() {
  const { data} = useQuery({
    queryKey: ['administrativos'],
    queryFn: obtenerAdministrativos
  })
 
  return (
    <>
      <header className="">
        <NavBar />
        <div className="imagen3 clase1">
          <h1></h1>
          <h3 className="texto-principal">Administrativos</h3>
        </div>
      </header>
      <div className="container2">
      </div>
      {data?.map((administrativosInformacion: {
        _id: string,
        directivo: string,
        cargo: string
      }) => (
        <div key={administrativosInformacion._id} className="administrativos_container">
          <div className="administrativos_container_children">
            <h2>{administrativosInformacion.directivo}</h2>
            <p>{administrativosInformacion.cargo}</p>
            <div className="administrativo_actualizar">
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </>
  );
}
