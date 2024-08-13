import { useEffect, useRef, useState } from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

export default function TallerTurismo() {
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
                <div className="imagen12 clase1">
                    <h1></h1>
                    <h3 className="texto-principal">Turismo</h3>
                </div>
            </header>
            <div className='display1'>
                <div className="main-content">
                    <div className="info-section">
                        <img ref={infoImageRef} src="Turismo-img.jpg" alt="Turismo" className={`info-image ${showImage ? 'hovered' : ''}`} onMouseEnter={() => setShowImage(true)} />
                        <div ref={infoTextRef} className={`info-text ${showText ? 'hovered' : ''}`} onMouseEnter={() => { setShowText(true); setShowImage(true); }}>
                            <h2 className="h2-taller">Turismo</h2>
                            <p className="p-taller">El turismo es un fenómeno que abarca los desplazamientos temporales de personas a destinos distintos de su entorno habitual, ya sea por motivos personales, profesionales o de negocio. Este fenómeno involucra a viajeros que participan en diversas actividades durante su estancia, influyendo en las economías locales a través del gasto turístico y promoviendo el intercambio cultural y social entre las comunidades visitadas y los visitantes.</p>
                        </div>
                    </div>
                    <div className="carousel-container">
                        <div className="carousel-section">
                            <input type="radio" id="1" name="image-slide" hidden></input>
                            <input type="radio" id="2" name="image-slide" hidden></input>
                            <input type="radio" id="3" name="image-slide" hidden></input>
                            <div className="slide">
                                <div className="item-slide">
                                    <img src="Turismo-carrousel1.jpg" alt="Turismo 1" className="img-taller" />
                                </div>
                                <div className="item-slide">
                                    <img src="Turismo-carrousel2.jpg" alt="Turismo 2" className="img-taller" />
                                </div>
                                <div className="item-slide">
                                    <img src="Turismo-carrousel3.jpg" alt="Turismo 3" className="img-taller" />
                                </div>
                            </div>
                            <div className="pagination">
                                <label className="pagination-item" htmlFor="1">
                                    <img src="Turismo-carrousel1.jpg" className="img-taller"></img>
                                </label>
                                <label className="pagination-item" htmlFor="2">
                                    <img src="Turismo-carrousel2.jpg" className="img-taller"></img>
                                </label>
                                <label className="pagination-item" htmlFor="3">
                                    <img src="Turismo-carrousel3.jpg" className="img-taller"></img>
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
