type Input = {

    Tipo   : string;
    Nombre : string;
    Valor  : string;
    Change : (
        Valor : string
    ) => void;

}

function Input({ Tipo, Nombre, Valor, Change } : Input) {
    return (

        <input 
        
            className = 'Form-Control'
            name  = {Nombre}
            type  = {Tipo}

            value = {Valor}

            onChange = {(e) => Change(e.target.value)}
        
        />

    )
} export default Input