import '../../Css/Cards/CardGastronomica.css'
import { Link } from 'react-router-dom'

interface Card {

    Enlace : string;
    Error  : string;
    Titulo : string;
    Descrp : string;

}

function CardGastronomica({ Enlace, Error, Titulo, Descrp } : Card) {
    return (
        
        <div className = 'Wrapper'>
            <div className = 'Container'>
                <div className = 'Font'>
                    <img 
                        
                        className = 'Fondo_Card'
                        src = {Enlace} 
                        alt = {Error}
                        
                    />
                </div>
                <div className = 'Apartado'>
                    <h2> {Titulo} </h2>
                    <p> {Descrp} </p>
                    <Link to = '/' className = 'Gas'>
                        Ver Plato
                    </Link>   
                </div>
                <svg className = 'Foo' xmlns = 'http://www.w3.org/2000/svg' viewBox = '0 0 1440 320'>
                    <path fill = '#d53369' fillOpacity = '1' d = 'M0,128 C240,192 480,256 720,208 C840,184 900,96 1008,96 C1140,96 1200,224 1320,224 C1380,224 1410,216 1440,208 L1440,320 L0,320 Z' />
                </svg>
            </div>
        </div>

    )
} export default CardGastronomica