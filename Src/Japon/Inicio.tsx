import Live from '../Componentes/Atomos/Live'

import Gastronomia from '../Componentes/Atomos/Gastronomia'
import Explorar from '../Componentes/Atomos/Explorar'

import '../Css/Paginas/Inicio.css'

function Inicio() {
    return (

        <section className = 'Inicio'>
            
            <Live Enlace = '../../Src/Assets/Lives/Torii_Live.mp4' />
            
            <span className = 'Kanji'>日本</span>
            
            <div className = 'Wrap Contenido'>
                
                <p className = 'Etiqueta'>El Pais De Las Maravillas</p>
                
                <h1 className = 'Titulo'>
                    <span style = {{ display : 'inline-block', marginRight : '.25em' }}>Tokio</span>
                    <span style = {{ display : 'inline-block', marginRight : '.25em' }}>/</span>
                    <span style = {{ display : 'inline-block', marginRight : '.25em' }}>Japón</span>
                </h1>
                
                <p className = 'Sub-Text'>
                    La ciudad que cambia la perspectiva de mucha gente con Su Cultura, Su Comida, Su Arte, 
                    Sus Historias, Sus Paisajes, Su Gente y muchas más como los diferentes lados de Japón.
                </p>

                <div className = 'Acciones'>
                    <Explorar />
                    <Gastronomia />
                </div>
            </div>
        </section>

    )
} export default Inicio 