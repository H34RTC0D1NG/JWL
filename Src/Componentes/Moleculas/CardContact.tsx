import type { ComponentType } from 'react'

interface Contact {

    Icono   : ComponentType;
    Titulo  : string;
    Detalle : string;

}

function CardContact({ Icono, Titulo, Detalle } : Contact) {
    return (

        <div className = 'Tarjeta-Contacto'>
            <span className = 'Tarjeta-Icono'> <Icono /> </span>
            <strong> {Titulo} </strong>
            <small> {Detalle} </small>
        </div>
    
    )
} export default CardContact