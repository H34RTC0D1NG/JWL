import Fondo from '../Componentes/Atomos/Fondo'
import { FaCloudSun } from 'react-icons/fa6'
import '../Css/Paginas/Estaciones.css'

import Live from '../Componentes/Atomos/Live'

function Estaciones() {
    return (

        <section id = 'Estacion'>
            <Live Enlace = '../../Src/Assets/Lives/Spring_Live.mp4' />
            <div className = 'Wrap Inverso'>
                <div className = 'Texto'>

                    <h2 className = 'Titulo'>
                        <FaCloudSun />
                        Las Cuatro Estaciones
                    </h2>

                    <p>
                        Japón vive con una intensidad distinta cada estación, y buena parte
                        de viajar ahi es elegir cual se quiere ver. La primavera enciende de
                        rosa los parques con la floracion del bioma de Sakura, el verano tras
                        festivales, fuegos artificiales y un calor humedo que se combate con
                        hielo raspado.
                    </p>

                    <p>
                        El otoño pinta de rojo y ambar los bosques de arce -El Momiji-, y el
                        invierno cubre de nieve el norte mientras templos como los de Kioto 
                        ganan un silencio distinto. No hay una temporada equivocada para ir
                        hay una temporada para cada version del pais.
                    </p>

                    <div className = 'Chips'>
                        <div className = 'Chip'>
                            <span className = 'Emoji'>🌸</span>
                            <strong>Primavera</strong>
                            <small>Sakura</small>
                        </div>
                        <div className = 'Chip'>
                            <span className = 'Emoji'>🎆</span>
                            <strong>Verano</strong>
                            <small>Festivales</small>
                        </div>
                        <div className = 'Chip'>
                            <span className = 'Emoji'>🍁</span>
                            <strong>Otoño</strong>
                            <small>Momiji</small>
                        </div>
                        <div className = 'Chip'>
                            <span className = 'Emoji'>❄️</span>
                            <strong>Invierno</strong>
                            <small>Nieve</small>
                        </div>
                    </div>
                </div>
                <div className = 'Media'>
                    <Fondo 
                    
                        Enlace = '../../Public/Imagenes/Fondo_2.jpeg'
                        Error = 'Imagen No Encontrada'
                    
                    />
                    <span className = 'Etiqueta-Marco'>Momiji - El Otoño Japonés</span>
                </div>
            </div>
        </section>

    )
} export default Estaciones 