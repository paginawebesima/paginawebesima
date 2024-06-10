import { useEffect, useRef, useState } from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

export default function TallerCarpinteria() {
    const [showImage, setShowImage] = useState(false);
    const [showText, setShowText] = useState(false);
    const infoImageRef = useRef<HTMLImageElement>(null);
    const infoTextRef = useRef<HTMLDivElement>(null);
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

            if (!infoImageRef.current || !infoTextRef.current) return;

            const topImage = infoImageRef.current.getBoundingClientRect().top;
            const topText = infoTextRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (topImage < windowHeight * 0.6 && scrollDirection === "down" && !showImage) {
                setShowImage(true);
            }

            if (topText < windowHeight * 0.6 && scrollDirection === "down" && !showText) {
                setShowText(true);
            }
        };

        if (window.innerWidth <= 768) {
            window.addEventListener("scroll", handleScroll);
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollDirection, showImage, showText]);

    useEffect(() => {
        const infoSection = document.querySelector('.info-section');
        if (infoSection) {
            infoSection.classList.add('active');
        }
    }, []);

    return (
        <>
            <header className="">
                <NavBar />
                <div className="imagen5 clase1">
                    <h1></h1>
                    <h3 className="texto-principal">Carpintería</h3>
                </div>
            </header>
            <div className='display1'>
                <div className="main-content">
                    <div className="info-section">
                        <img ref={infoImageRef} src="Carpintería-img.jpg" alt="Carpintería" className={`info-image ${showImage ? 'hovered' : ''}`} onMouseEnter={() => setShowImage(true)}/>
                        <div ref={infoTextRef} className={`info-text ${showText ? 'hovered' : ''}`} onMouseEnter={() => { setShowText(true); setShowImage(true); }}>
                            <h2 className="h2-taller">Carpintería</h2>
                            <p className="p-taller">La carpintería es el oficio de trabajar y labrar la madera para crear objetos útiles 
                            y agradables al ser humano. Este arte ha sido practicado desde tiempos inmemoriales, y su evolución ha dado 
                            lugar a una amplia gama de técnicas y herramientas que permiten a los carpinteros transformar la madera en 
                            piezas funcionales y decorativas.</p>
                        </div>
                    </div>
                    <div className="carousel-container">
                        <div className="carousel-section">
                            <input type="radio" id="1" name="image-slide" hidden></input>
                            <input type="radio" id="2" name="image-slide" hidden></input>
                            <input type="radio" id="3" name="image-slide" hidden></input>
                            <div className="slide">
                                <div className="item-slide">
                                    <img src="Carpintería-carrousel1.jpg" alt="Herramientas 1" className="img-carpinteria" />
                                </div>
                                <div className="item-slide">
                                    <img src="Carpintería-carrousel2.jpg" alt="Herramientas 2" className="img-carpinteria" />
                                </div>
                                <div className="item-slide">
                                    <img src="Carpintería-carrousel3.jpg" alt="Herramientas 3" className="img-carpinteria" />
                                </div>
                            </div>
                            <div className="pagination">
                                <label className="pagination-item" htmlFor="1">
                                    <img src="Carpintería-carrousel1.jpg" className="img-carpinteria"></img>
                                </label>
                                <label className="pagination-item" htmlFor="2">
                                    <img src="Carpintería-carrousel2.jpg" className="img-carpinteria"></img>
                                </label>
                                <label className="pagination-item" htmlFor="3">
                                    <img src="Carpintería-carrousel3.jpg" className="img-carpinteria"></img>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
