import '../../Css/Fonts/Live.css'

interface Live {

    Enlace : string;

}

function Live({ Enlace } : Live) {
    return (

        <video muted loop autoPlay className = 'Live-Font'>
            <source src = {Enlace} type = 'video/mp4' />
        </video>

    )
} export default Live 