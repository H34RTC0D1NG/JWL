interface Fondo {

    Enlace : string;
    Error  : string;

}

function Fondo({ Enlace, Error } : Fondo) {
    return (

            <img 
                
                src = {Enlace} 
                alt = {Error} 
            
            />

    )
} export default Fondo 