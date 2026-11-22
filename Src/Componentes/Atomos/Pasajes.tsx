import type { CSSProperties, MouseEvent } from 'react'
import '../../Css/Responsive/Vuelos.css'
import '../../Css/Vuelos/Pasaje.css'

interface Pasaje {

    _ID         : number;
    Ciudad      : string;
    Kanji       : string;
    Codigo      : string;
    Vuelo       : string;
    Fecha       : string;
    Hora        : string;
    Puerta      : string;
    Asiento     : string;
    Clase       : string;
    Precio      : string;
    Color       : string;
    Variante?   : 'Claro' | 'Vidrio';
    Guardado?   : boolean;
    TextoBtn?   : string;
    onGuardar?  : (
        Datos : Pasaje
    ) => void;

}

function Pasaje(props : Pasaje) {

    const Variante = props.Variante ? props.Variante : 'Claro'
    const Estilo = { '--Color' : props.Color } as CSSProperties

    const Click = (e : MouseEvent <HTMLButtonElement> ) => {
        e.stopPropagation()

        if (props.onGuardar) {
            props.onGuardar(props)
        }

    }

    let Texto = props.Guardado ? 'Saved' : 'Save'
    if (props.TextoBtn) {
        Texto = props.TextoBtn
    }

    return (

        <div className = {'Pasaje Pasaje-' + Variante} style = {Estilo}>
            <div className = 'Pasaje-Principal'>
                <div className = 'Pasaje-Header'>
                    <span className = 'Aereolinea'>Mejias Air</span>
                    <span className = 'Tipo'>Boarding Pass</span>
                </div>

                <div className = 'Pasaje-Ruta'>
                    <div className = 'Punto'>
                        <p className = 'Codigo'>SCL</p>
                        <p className = 'Ciudad'>Santiago</p>
                    </div>

                    <div className = 'Linea' />

                    <div className = 'Punto Derecha'>
                        <p className = 'Codigo'> {props.Codigo} </p>
                        <p className = 'Ciudad'> {props.Ciudad} </p>
                    </div>
                </div>

                <div className = 'Pasaje-Datos'>
                    <div>
                        <p className = 'Etiqueta-V'>Vuelo</p>
                        <p className = 'Valor'> {props.Vuelo} </p>   
                    </div>
                    <div>
                        <p className = 'Etiqueta-V'>Fecha</p>
                        <p className = 'Valor'> {props.Fecha} </p>
                    </div>
                    <div>
                        <p className = 'Etiqueta-V'>Hora</p>
                        <p className = 'Valor'> {props.Hora} </p>
                    </div>
                    <div>
                        <p className = 'Etiqueta-V'>Puerta</p>
                        <p className = 'Valor'> {props.Puerta} </p>
                    </div>
                    <div>
                        <p className = 'Etiqueta-V'>Asiento</p>
                        <p className = 'Valor'> {props.Asiento} </p>
                    </div>
                </div>
            </div>
            <div className = 'Pasaje-Talon'>
                <p className = 'Kanji'> {props.Kanji} </p>
                <p className = 'Clase'> {props.Clase} </p>
                <p className = 'Precio'> {props.Precio} </p>
                <div className = 'Codigo-Barras' />

                {props.onGuardar && (
                    <button className = {props.Guardado ? 'Btn-Pasaje Activo' : 'Btn-Pasaje'} onClick = {Click}>
                        {Texto}
                    </button>
                )}

            </div>
        </div>

    )
} export default Pasaje 