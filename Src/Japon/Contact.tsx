import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import Contacto from '../Componentes/Organismos/Formularios/Contacto'
import CardContact from '../Componentes/Moleculas/CardContact'
import Separador from '../Componentes/Atomos/Separador'
import Cerezo from '../Componentes/Atomos/Cerezo'
import Live from '../Componentes/Atomos/Live'
import { MdContacts } from 'react-icons/md'
import '../Css/Paginas/Contacto.css'

function Contact() {
    return (

        <>

            <Separador />

            <section id = 'Contacto'>
                <Cerezo />
                <Live Enlace = '../../Src/Assets/Lives/Lake_Live.mp4' />
                <div className = 'Wrap Contenido-Grid'>
                    <div className = 'Contenido'>
                        <h1 className = 'Titulo-C' style = {{ display : 'inline-block', marginRight : '.25em' }}>
                            <span className = 'Titulo-I'> <MdContacts /> </span> Contacto
                        </h1>
                        <p className = 'Texto-C'>
                            Contactame Enviandome Un Mensaje Diciendo Que Mi Pagina Te Gusto y Mi Resultado Funciono
                        </p>

                        <div className = 'Tarjeta-Contacto'>
                            <CardContact 
                            
                                Icono   = {FaEnvelope}
                                Titulo  = 'Correo'
                                Detalle = 'isa.mejias@duocuc.cl' 
                            
                            />
                            <CardContact 
                            
                                Icono   = {FaPhone}
                                Titulo  = 'Telefono'
                                Detalle = '+56 9 3231 0117' 
                            
                            />
                            <CardContact 
                            
                                Icono   = {FaMapMarkerAlt}
                                Titulo  = 'Ubicación'
                                Detalle = 'Santiago - Quilicura' 
                            
                            />
                            <CardContact 
                            
                                Icono   = {FaClock}
                                Titulo  = 'Horario'
                                Detalle = 'Lunes a Viernes' 
                            
                            />
                        </div>
                    </div>
                    <div className = 'Contacto-Marco'>
                        <Contacto />
                        <span className = 'Contacto-Etiqueta'>
                            Escribeme y Te Respondo Pronto
                        </span>
                    </div>
                </div>
            </section>

        </>
    )
} export default Contact