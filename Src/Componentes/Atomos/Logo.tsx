import '../../Css/Fonts/Logo.css'

interface Logo {

    Enlace : string;
    Error : string;

}

function Logo({ Enlace, Error } : Logo) {
    return (

        <img 
            
            className = 'Logo-Sidebar'
            src = {Enlace} 
            alt = {Error}
            
        />

    )
} export default Logo