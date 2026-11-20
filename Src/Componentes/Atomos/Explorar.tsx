import '../../Css/Botones/Explorar.css'

import { Link } from 'react-router-dom'

function Explorar() {
    return (

        <button className = 'Btn Rojo'>
            <Link to = '/Vuelo'>
                Empezar a Explorar
            </Link>
        </button>

    )
} export default Explorar