import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function TallerCarpinteria() {
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
                        <img src="Carpintería-img.jpg" alt="Carpintero" className="info-image" />
                        <div className="info-text">
                            <h2>Una buena elección</h2>
                            <p>La carpintería es el oficio de trabajar y labrar la madera para
                                crear objetos útiles y agradables al ser humano.</p>
                        </div>
                    </div>
                    <div className="carousel-section">
                        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay swipeable showStatus={false} emulateTouch >
                            <div>
                                <img src="Carpintería-carrousel1.jpg" alt="Herramientas 1" />
                            </div>
                            <div>
                                <img src="Carpintería-carrousel2.jpg" alt="Herramientas 2" />
                            </div>
                            <div>
                                <img src="Carpintería-carrousel3.jpg" alt="Herramientas 3" />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
