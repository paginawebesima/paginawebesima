import { useEffect, useRef, useState } from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

export default function TallerElectronica() {
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
                <div className="imagen8 clase1">
                    <h1></h1>
                    <h3 className="texto-principal">Electrónica</h3>
                </div>
            </header>
            <div className='display1'>
                <div className="main-content">
                    <div className="info-section">
                        <img ref={infoImageRef} src="Electrónica-img.jpg" alt="Electrónica" className={`info-image ${showImage ? 'hovered' : ''}`} onMouseEnter={() => setShowImage(true)}/>
                        <div ref={infoTextRef} className={`info-text ${showText ? 'hovered' : ''}`} onMouseEnter={() => { setShowText(true); setShowImage(true); }}>
                            <h2 className="h2-taller">Electrónica</h2>
                            <p className="p-taller">La electrónica es el campo de estudio y práctica que se enfoca en el control de los electrones y 
                                su aplicación en la creación, diseño y desarrollo de dispositivos, sistemas y circuitos eléctricos para el procesamiento, 
                                transmisión y almacenamiento de información, así como para el control de sistemas y la automatización de procesos. 
                                Este campo abarca una amplia variedad de áreas, desde la electrónica de potencia hasta la microelectrónica, y ha sido 
                                fundamental en el avance de la tecnología moderna.</p>
                        </div>
                    </div>
                    <div className="carousel-container">
                        <div className="carousel-section">
                            <input type="radio" id="1" name="image-slide" hidden></input>
                            <input type="radio" id="2" name="image-slide" hidden></input>
                            <input type="radio" id="3" name="image-slide" hidden></input>
                            <div className="slide">
                                <div className="item-slide">
                                    <img src="Electrónica-carrousel1.jpg" alt="Electrónica 1" className="img-taller" />
                                </div>
                                <div className="item-slide">
                                    <img src="Electrónica-carrousel2.jpg" alt="Electrónica 2" className="img-taller" />
                                </div>
                                <div className="item-slide">
                                    <img src="Electrónica-carrousel3.jpg" alt="Electrónica 3" className="img-taller" />
                                </div>
                            </div>
                            <div className="pagination">
                                <label className="pagination-item" htmlFor="1">
                                    <img src="Electrónica-carrousel1.jpg" className="img-taller"></img>
                                </label>
                                <label className="pagination-item" htmlFor="2">
                                    <img src="Electrónica-carrousel2.jpg" className="img-taller"></img>
                                </label>
                                <label className="pagination-item" htmlFor="3">
                                    <img src="Electrónica-carrousel3.jpg" className="img-taller"></img>
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
