import { useQuery } from "react-query"
import { obtenertelefono} from "../api/api";
export default function Footer() {
  const {data} = useQuery({
    queryKey:'telefonos',
    queryFn:obtenertelefono
   })
  return (
    <>
    <footer className="footer">
    <div className="flexdireccion">
      <div className="informacionescuela">
        <img className="imagenfooter" src="/LogoEsima.png" alt="Imagen Footer" />
      <div className="texto_informacion">
        <p>Escuela Secundaria General #1</p>
        <p>"Ignacio Manuel Altamirano"</p>
        <p>Clave: 10DES0002V</p>
      </div>
      </div>
      <div className="">
      <div className="flex">
        <a  href="https://www.facebook.com/ESIMAof" target="_blank"><img className="iconos facebookicono" src="/facebook.svg" alt="facebook" /></a>
        <a  href="https://www.instagram.com/esima.of?igsh=MTVxazA1Nm9nNjg2Mg%3D%3D&utm_source=qr" target="_blank"><img className="iconos instagram_icono" src="/instagram.svg" alt="" /></a>
        <a  href="https://twitter.com/ESIMADurango" target="_blank"><img className="iconos twitter_icono" src="/x-twitter.svg" alt="" /></a>
      </div>
      {data?.map((telefono)=>(
      <p className=" numero_contacto">{telefono.telefono}</p>
      ))}


      </div>
      </div>
    <p className="texto-izquierda">C. Cap. Francisco de Ibarra 1907, Nueva Vizcaya, 34080 Durango, Dgo.</p>
    </footer>
    </>
  )
}
