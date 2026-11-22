import Input from '../Atomos/Input'

type Campo = {

    Etiqueta : string;
    Tipo     : string;
    Nombre   : string;
    Valor    : string;
    Change   : (
        Valor : string
    ) => void;
    Base     : string;

}

function CampoForm({ Etiqueta, Tipo, Nombre, Valor, Change, Base } : Campo) {
    return (
        <div className = 'mb-3'>
            <label className = 'Form-Label'>
                {Etiqueta}
            </label>

            <Input Tipo = {Tipo} Nombre = {Nombre} Valor = {Valor} Change = {Change} Base = {Base} />

        </div>
    )
} export default CampoForm