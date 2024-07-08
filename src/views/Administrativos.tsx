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

      administrativosRef.current.forEach((administrativo, index) => {
        if (!administrativo) return;
        if (index === 0) return; // Skip the first element

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
      </div>
      <Footer />
    </>
  );
}
