import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function TallerCarpinteria() {
    const [isHovered, setIsHovered] = useState(false);
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
                    <div className="info-section" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        <img src="Carpintería-img.jpg" alt="Carpintero" className={`info-image ${isHovered ? 'hovered' : ''}`}/>
                        <div className={`info-text ${isHovered ? 'visible' : ''}`}>
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
