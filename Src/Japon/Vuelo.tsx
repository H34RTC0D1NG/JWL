import Desplazate from '../Componentes/Atomos/Desplazate'
import Separador from '../Componentes/Atomos/Separador'
import Stack from '../Componentes/Moleculas/Stack'
import Live from '../Componentes/Atomos/Live'
import { FaBurst } from 'react-icons/fa6'

import '../Css/Paginas/Vuelo.css'

function Vuelo() {
    return (

        <>

            <Separador />

            <section id = 'Vuelo'>
                <Live Enlace = '../../Src/Assets/Lives/Red_Live.mp4' />
                <div className = 'Contenido-V'>
                    <p className = 'Etiqueta-V'> <FaBurst /> Una Nueva Odisea</p>
                    <h1 className = 'Titulo-V'>¿ Porque Deberias Viajar a Japón ?</h1>
                    <p className = 'Parrafo-V'>
                        ¡Viajar a Japón es una experiencia inolvidable, y planificar tus vuelos con tiempo marca completamente la diferencia! 
                        Para conseguir la mejor tarifa y rutas cómodas, te sugiero buscar vuelos con al menos tres a seis meses de anticipación, 
                        priorizando aerolíneas con excelente servicio a bordo para que las horas de escala se pasen volando. Si buscas comodidad, 
                        las opciones con una sola escala a través de grandes centros de conexión suelen ser la mejor combinación entre precio y descanso. 
                        Además, te recomiendo considerar llegar por Tokio (ya sea al Aeropuerto Internacional de Haneda o Narita) para empezar explorando 
                        la metrópoli, y si tu itinerario lo permite, evaluar regresar desde Osaka para aprovechar al máximo tu tiempo sin tener que desandarte. 
                        ¡Un buen vuelo es solo el comienzo de una aventura increíble en la tierra del sol naciente!
                    </p>
                </div>
                <Desplazate />
            </section>

            <Separador />

            <section id = 'Cards-V'>
                <Live Enlace = '../../Src/Assets/Lives/Rain_Live.mp4' />
                <Stack />
            </section>

        </>

    )
} export default Vuelo