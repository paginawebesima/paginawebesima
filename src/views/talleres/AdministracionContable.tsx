import { useEffect, useRef, useState } from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

export default function TallerAdministracionContable() {
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
                <div className="imagen6 clase1">
                    <h1></h1>
                    <h3 className="texto-principal">Administración Contable</h3>
                </div>
            </header>
            <div className='display1'>
                <div className="main-content">
                    <div className="info-section">
                        <img ref={infoImageRef} src="Administración-Contable-img.jpg" alt="Administración Contable" className={`info-image ${showImage ? 'hovered' : ''}`} onMouseEnter={() => setShowImage(true)}/>
                        <div ref={infoTextRef} className={`info-text ${showText ? 'hovered' : ''}`} onMouseEnter={() => { setShowText(true); setShowImage(true); }}>
                            <h2 className="h2-taller">Administración Contable</h2>
                            <p className="p-taller">La administración contable es la disciplina que se encarga de la gestión y análisis de los datos financieros internos de una organización. Su objetivo es proporcionar información precisa y relevante que apoye la toma de decisiones estratégicas por parte de la gerencia, permitiendo un control efectivo de los recursos económicos y facilitando el cumplimiento de los objetivos organizacionales.

</p>
                        </div>
                    </div>
                    <div className="carousel-container">
                        <div className="carousel-section">
                            <input type="radio" id="1" name="image-slide" hidden></input>
                            <input type="radio" id="2" name="image-slide" hidden></input>
                            <input type="radio" id="3" name="image-slide" hidden></input>
                            <div className="slide">
                                <div className="item-slide">
                                    <img src="Administración-Contable-carrousel1.jpg" alt="Administración Contable 1" className="img-taller" />
                                </div>
                                <div className="item-slide">
                                    <img src="Administración-Contable-carrousel2.jpg" alt="Administración Contable 2" className="img-taller" />
                                </div>
                                <div className="item-slide">
                                    <img src="Administración-Contable-carrousel3.jpg" alt="Administración Contable 3" className="img-taller" />
                                </div>
                            </div>
                            <div className="pagination">
                                <label className="pagination-item" htmlFor="1">
                                    <img src="Administración-Contable-carrousel1.jpg" className="img-taller"></img>
                                </label>
                                <label className="pagination-item" htmlFor="2">
                                    <img src="Administración-Contable-carrousel2.jpg" className="img-taller"></img>
                                </label>
                                <label className="pagination-item" htmlFor="3">
                                    <img src="Administración-Contable-carrousel3.jpg" className="img-taller"></img>
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
