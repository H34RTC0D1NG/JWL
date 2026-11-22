import Registro from '../Componentes/Organismos/Formularios/Registro'
import Login from '../Componentes/Organismos/Formularios/Login'
import { useLocation } from 'react-router-dom'
import Live from '../Componentes/Atomos/Live'
import { useState } from 'react'

type Modo = 'Login' | 'Registro'

function Account() {

    const Ruta = useLocation()
    const Estado = Ruta.state as {
        Modo? : Modo
    } | null 

    const [Modo, setModo] = useState <Modo> (Estado && Estado.Modo ? Estado.Modo : 'Login')
    const [CorreoNuevo, setCorreoNuevo] = useState('')

    const IrLogin = (Correo? : string) => {
        setCorreoNuevo(Correo ? Correo : '')
        setModo('Login')
    }

    const IrRegistro = () => {
        setModo('Registro')
    }

    return (

        <>

            <Live Enlace = '../../Src/Assets/Lives/Rain_Live.mp4' />

            {Modo === 'Login'
                ? <Login key = 'Login' CorreoInicial = {CorreoNuevo} IrRegistro = {IrRegistro} />
                : <Registro key = 'Registro' IrLogin = {IrLogin} />
            }
        
        </>
    )
} export default Account 