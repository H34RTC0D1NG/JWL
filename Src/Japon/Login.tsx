import { API_USUARIOS, GuardarSesion, LeerError, useSesion } from '../Datos/Servicio'
import { Link, useNavigate, Navigate, useLocation } from 'react-router-dom'
import CampoForm from '../Componentes/Moleculas/CampoForm'
import type { SubmitEvent } from 'react'
import { useState } from 'react'

function Login() {

    const Sesion  = useSesion()
    const Navegar = useNavigate()
    const Ruta    = useLocation()

    const Estado = Ruta.state as { Correo? : string } | null
    const CorreoInicial = (Estado && Estado.Correo) ? Estado.Correo : ''

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

                <CampoForm 
                
                    Etiqueta = 'Correo Electronico'
                    Tipo = 'Email'
                    Nombre = 'Correo'
                    Valor = {Correo}
                    Change = {setCorreo}
                
                /> 

                <CampoForm 
                
                    Etiqueta = 'Contraseña'
                    Tipo = {Ver ? 'Text' : 'Password'}
                    Nombre = 'Password'
                    Valor = {Pass}
                    Change = {setPass}
                
                />

                <button type = 'button' className = 'Auth-Ver' onClick = {() => setVer(!Ver)}>
                    {Ver ? 'Ocultar Contraseña' : 'Mostrar Contraseña'}
                </button>

                {Error && 
                    <p className = 'Auth-Error'>
                        {Error}
                    </p>
                }

                <button type = 'submit' className = 'Auth-Boton' disabled = {Enviando}>
                    {Enviando ? '[+] Entrando ... ' : '[+] Iniciar Sesión '}
                </button>

                <p className = 'Auth-Link'>
                    ¿No Tienes Cuenta? <Link to = '/Registro'> Regístrarse </Link>
                </p>

            </form>
        </section>

    )
} export default Login