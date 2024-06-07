import { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Administrativos() {
  const administrativosRef = useRef<HTMLDivElement[]>([]);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const previousScroll = useRef<number>(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < previousScroll.current) {
        setScrollDirection("up");
      } else {
        setScrollDirection("down");
      }
      
      previousScroll.current = currentScroll;

      administrativosRef.current.forEach((administrativo) => {
        if (!administrativo) return;
        const top = administrativo.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.8 && scrollDirection === "down") {
          administrativo.classList.add("aparecer");
        } else if (top >= windowHeight * 0.8 && scrollDirection === "up") {
          administrativo.classList.remove("aparecer");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollDirection]);
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
        <div className="section-main">
          <div className="line-container"></div>
          <div className="administrativo">
            <h2 className="h2-admin">Dra. Rita Velia Reyes López</h2>
            <p className="p-admin">Directora Encargada</p>
          </div>
        </div>
        <div className="section" ref={(el) => el && administrativosRef.current.push(el)}>
          <div className="line-container"></div>
          <div className="administrativo">
            <h2 className="h2-admin">Mtra. Norma Lylia Martínez Gracia</h2>
            <p className="p-admin">Subdirectora Encargada Turno Matutino</p>
          </div>
        </div>
        <div className="section" ref={(el) => el && administrativosRef.current.push(el)}>
          <div className="line-container"></div>
          <div className="administrativo">
            <h2 className="h2-admin">Prof. Sergio Iván Chairez Tremillo</h2>
            <p className="p-admin">Subdirector Turno Vespertino</p>
          </div>
        </div>
        <div className="section" ref={(el) => el && administrativosRef.current.push(el)}>
          <div className="line-container"></div>
          <div className="administrativo">
            <h2 className="h2-admin">Mtra. Ma. Olimpia Torres Quiñones</h2>
            <p className="p-admin">Coordinadora Académica Turno Matutino</p>
          </div>
        </div>
        <div className="section" ref={(el) => el && administrativosRef.current.push(el)}>
          <div className="line-container"></div>
          <div className="administrativo">
            <h2 className="h2-admin">Profa. Miroslava Margarita Solis Herrera</h2>
            <p className="p-admin">Coordinadora Académica Turno Vespertino</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}