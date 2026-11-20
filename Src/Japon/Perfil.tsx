import Historial from '../Componentes/Moleculas/Historial'
import Live from '../Componentes/Atomos/Live'

function Perfil() {
    return (

        <section id = 'Perfil'>
            <Live Enlace = '../../Src/Assets/Lives/Rain_Live.mp4' />
            <Historial />
        </section>

    )
} export default Perfil