type Input = {

    Tipo   : string;
    Nombre : string;
    Valor  : string;
    Change : (
        Valor : string
    ) => void;
    Base   : string;

}

function Input({ Tipo, Nombre, Valor, Change, Base } : Input) {
    return (

        <input 
        
            className = 'Form-Control'
            name  = {Nombre}
            type  = {Tipo}

            value = {Valor}

            onChange = {(e) => Change(e.target.value)}

            placeholder = {Base}
        
        />

    )
} export default Input