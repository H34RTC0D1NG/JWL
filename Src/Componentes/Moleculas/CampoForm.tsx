import Input from '../Atomos/Input'

type Campo = {

    Etiqueta : string;
    Tipo     : string;
    Nombre   : string;
    Valor    : string;
    Change   : (
        Valor : string
    ) => void;

}

function CampoForm({ Etiqueta, Tipo, Nombre, Valor, Change } : Campo) {
    return (
        <div className = 'mb-3'>
            <label className = 'Form-Label'>
                {Etiqueta}
            </label>

            <Input Tipo = {Tipo} Nombre = {Nombre} Valor = {Valor} Change = {Change} />

        </div>
    )
} export default CampoForm