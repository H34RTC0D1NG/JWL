import { API_USUARIOS, GuardarSesion, LeerError, useSesion } from '../../../Datos/Servicio'
import { useNavigate, Navigate } from 'react-router-dom'
import '../../../Css/Formularios/Auth.css'
import type { SubmitEvent } from 'react'
import Input from '../../Atomos/Input'
import { useState } from 'react'

type Props = {

    CorreoInicial : string;
    IrRegistro    : () => void;

}

function Login({ CorreoInicial, IrRegistro } : Props) {

    const Sesion  = useSesion()
    const Navegar = useNavigate()

    const [Correo, setCorreo] = useState(CorreoInicial)
    const [Pass,     setPass] = useState('')
    const [Ver,       setVer] = useState(false)
    const [Enviando, setEnviando] = useState(false)
    const [Error, setError] = useState('')

    if (Sesion) {
        return <Navigate to = '/Perfil' replace />
    }

    const Envio = async (e : SubmitEvent <HTMLFormElement> ) => {
        e.preventDefault()
        setError('')

        if (Correo.trim() === '' || Pass === '') {
            setError('Debe Ingresar Un Correo y Una Contraseña')
            return 
        }

        setEnviando(true)

        try {

            const Respuesta = await fetch(`${API_USUARIOS}/Login`, {
                method  : 'POST',
                headers : {
                    'Content-Type' : 'application/json' 
                },
                body : JSON.stringify({
                    Correo : Correo.trim(),
                    Pass   : Pass
                })
            })

            if (!Respuesta.ok) {
                setError(await LeerError(Respuesta, 'Correo o Contraseña Invalidos'))
                return 
            }

            const Datos = await Respuesta.json()

            GuardarSesion({ Token : Datos.Token, Usuario : Datos.Usuario })
            Navegar('/Perfil')

        } catch {
            
            setError('[+] No Se Pudo Conectar Con El Servidor ')
        
        } finally {

            setEnviando(false)

        }

    }

    return (

        <section className = 'Auth'>
            <form className = 'Auth-Card' onSubmit = {Envio} noValidate>
                <span className = 'Auth-Kanji'>ログイン</span>
                <h2>Iniciar Sesión</h2>
                <p className = 'Auth-Sub'>Entra Para Ver Tu Perfil</p>

                <label className = 'Auth-Campo'>
                    <span> Correo Electronico </span>
                    
                    <Input 

                        Nombre = 'Correo Electronico'
                        Tipo   = 'Email'
                        Valor  = {Correo}
                        Change = {setCorreo}
                        Base   = 'Tu Correo'
                    
                    />
                
                </label>

                <label className = 'Auth-Campo'>
                    <span> Contraseña </span>

                    <div className = 'Auth-Clave'>

                        <Input 

                            Nombre = 'Contraseña'
                            Tipo   = {Ver ? 'text' : 'password'}
                            Valor  = {Pass}
                            Change = {setPass}
                            Base   = 'Tu Contraseña'
                        
                        />

                        <button type = 'button' className = 'Auth-Ver' onClick = {() => setVer(!Ver)}>
                            {Ver ? '[-]' : '[0]'}
                        </button>

                    </div>

                </label>

                {Error && 
                    <p className = 'Auth-Error'>
                        {Error}
                    </p>
                }

                <button type = 'submit' className = 'Auth-Boton' disabled = {Enviando}>
                    {Enviando ? '[+] Entrando ... ' : '[+] Iniciar Sesión '}
                </button>

                <p className = 'Auth-Link'>
                    ¿No Tienes Cuenta? <button type = 'button' onClick = {IrRegistro}>
                        Registrarse
                    </button>
                </p>

            </form>
        </section>

    )
} export default Login