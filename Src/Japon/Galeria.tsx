import { FaPersonHiking } from 'react-icons/fa6'
import Fondo from '../Componentes/Atomos/Fondo'
import Live from '../Componentes/Atomos/Live'
import '../Css/Paginas/Galeria.css'

function Galeria() {
    return (

        <section id = 'Galeria'>
            <Live Enlace = '../../Src/Assets/Lives/Snow_Live.mp4' />
            <div className = 'Wrap'>
                <div className = 'Encabezado'>

                    <p className = 'Etiqueta'>
                        <FaPersonHiking /> De La Costa A La Montaña
                    </p>

                    <h2 className = 'Titulo'>Galeria</h2>

                    <p className = 'Texto'>
                        Si estás pensando en viajar a Japón, te recomiendo empezar por Tokio. De noche, sus rascacielos iluminados se ven infinitos, 
                        y la Torre de Tokio, con su estructura roja y blanca, es casi obligatoria para la foto. En primavera, el río Meguro se cubre 
                        con un túnel de cerezos en flor que se refleja en el agua cuando cae la noche. Si buscas calma, el bosque de bambú de Arashiyama, 
                        en Kioto, te envuelve en un silencio verde difícil de olvidar, y sus senderos con cercas de bambú parecen sacados de otra época. 
                        Tampoco puedes perderte el monte Fuji al atardecer, cuando su cima se tiñe de rosa sobre un mar de montañas azules, ni el castillo 
                        de Matsumoto iluminado de noche, reflejado en el agua de su foso como un espejo. Y para conocer el Japón más tranquilo, vale la pena 
                        salir de las grandes ciudades: costas con rocas en forma de arco frente al mar, puentes gigantes como el Akashi Kaikyō, y pueblos pequeños 
                        con calles angostas, cables cruzando el cielo y cerros de fondo, donde se siente la vida cotidiana. Japón mezcla como pocos lugares la ciudad 
                        moderna, la naturaleza y la tradición.
                    </p>
                </div>
                <div className = 'Galeria'>
                    <div className = 'Item'>
                        <Fondo 
                        
                            Enlace = '../../Public/Imagenes/Fondo_1.jpg'
                            Error = 'Imagen No Encontrada'
                        
                        />
                    </div>
                    <div className = 'Item'>
                        <Fondo 
                        
                            Enlace = '../../Public/Imagenes/Fondo_28.jpeg'
                            Error = 'Imagen No Encontrada'
                        
                        />
                    </div>
                    <div className = 'Item'>
                        <Fondo 
                        
                            Enlace = '../../Public/Imagenes/Fondo_9.jpeg'
                            Error = 'Imagen No Encontrada'
                        
                        />
                    </div>
                    <div className = 'Item'>
                        <Fondo 
                        
                            Enlace = '../../Public/Imagenes/Fondo_15.jpg'
                            Error = 'Imagen No Encontrada'
                        
                        />
                    </div>
                    <div className = 'Item'>
                        <Fondo 
                        
                            Enlace = '../../Public/Imagenes/Fondo_18.jpg'
                            Error = 'Imagen No Encontrada'
                        
                        />
                    </div>
                    <div className = 'Item'>
                        <Fondo 
                        
                            Enlace = '../../Public/Imagenes/Fondo_19.jpg'
                            Error = 'Imagen No Encontrada'
                        
                        />
                    </div>
                    <div className = 'Item'>
                        <Fondo 
                        
                            Enlace = '../../Public/Imagenes/Fondo_21.jpg'
                            Error = 'Imagen No Encontrada'
                        
                        />
                    </div>
                    <div className = 'Item'>
                        <Fondo 
                        
                            Enlace = '../../Public/Imagenes/Fondo_22.jpg'
                            Error = 'Imagen No Encontrada'
                        
                        />
                    </div>
                    <div className = 'Item'>
                        <Fondo 
                        
                            Enlace = '../../Public/Imagenes/Fondo_23.jpg'
                            Error = 'Imagen No Encontrada'
                        
                        />
                    </div>
                    <div className = 'Item'>
                        <Fondo 
                        
                            Enlace = '../../Public/Imagenes/Fondo_24.jpg'
                            Error = 'Imagen No Encontrada'
                        
                        />
                    </div>
                    <div className = 'Item'>
                        <Fondo 
                        
                            Enlace = '../../Public/Imagenes/Fondo_26.jpeg'
                            Error = 'Imagen No Encontrada'
                        
                        />
                    </div>
                    <div className = 'Item'>
                        <Fondo 
                        
                            Enlace = '../../Public/Imagenes/Fondo_20.jpg'
                            Error = 'Imagen No Encontrada'
                        
                        />
                    </div>
                </div>
            </div>
        </section>

    )
} export default Galeria