import { API_USUARIOS, LeerError, useSesion } from '../../../Datos/Servicio'
import { Navigate } from 'react-router-dom'
import '../../../Css/Formularios/Auth.css'
import type { SubmitEvent } from 'react'
import Input from '../../Atomos/Input'
import { useState } from 'react'

type Props = {

    IrLogin : (
        Correo? : string 
    ) => void;

}

function Registro({ IrLogin } : Props) {

    const Sesion  = useSesion()

    const [Nombre, setNombre] = useState('')
    const [Correo, setCorreo] = useState('')
    const [Pass, setPass] = useState('')
    const [Confirmar, setConfirmar] = useState('')
    const [Ver, setVer] = useState(false)
    const [Enviando, setEnviando] = useState(false)
    const [Error, setError] = useState('')
    const [Exito, setExito] = useState('')

    if (Sesion) {
        return <Navigate to = '/Perfil' replace />
    }

    const Envio = async (e : SubmitEvent <HTMLFormElement>) => {
        e.preventDefault()
        setError('')

        if (Nombre.trim() === '') {
            setError('Debe Ingresar Un Correo Valido')
            return 
        } if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Correo.trim())) {
            setError('Debe Ingresar Un Correo Valida')
            return
        } if (Pass.length < 6) {
            setError('La Contraseña Debe Tener Al Menos 6 Caracteres')
            return 
        } if (Pass !== Confirmar) {
            setError('Las Contraseñas No Coinciden')
            return 
        } 

        setEnviando(true)

        try {

            const Respuesta = await fetch(`${API_USUARIOS}/Registro`, {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    Nombre_Completo : Nombre.trim(),
                    Correo          : Correo.trim(),
                    Pass            : Pass
                })
            })

            if (!Respuesta.ok) {
                setError(await LeerError(Respuesta, 'No Se Pudo Crear La Cuenta'))
                return
            } 

            setExito('¡ Cuenta Creada ! Ahora Inicia Sesion')

            setTimeout(() => {
                IrLogin(Correo.trim())
            }, 1500)

        } catch {

            setError('No Se Pudo Conectar Con El Servidor')
 
        } finally {

            setEnviando(false)

        }

    }

    return (

        <div className = 'Auth'>
            <form className = 'Auth-Card' onSubmit = {Envio} noValidate>
                <span className = 'Auth-Kanji'>登録</span>
                <h2> Crear Cuenta </h2>
                <p className = 'Auth-Sub'> Registrate Para Ver Tu Perfil </p>

                <label className = 'Auth-Campo'>
                    <span> Nombre Completo </span>

                    <Input 
                    
                        Nombre = 'Nombre Completo'
                        Tipo = 'Text'
                        Valor = {Nombre}
                        Change = {setNombre}
                        Base = 'Tu Nombre'
                    
                    />

                </label>

                <label className = 'Auth-Campo'>
                    <span> Correo Electronico </span>

                    <Input 
                    
                        Nombre = 'Correo Electronico'
                        Tipo = 'Email'
                        Valor = {Correo}
                        Change = {setCorreo}
                        Base = 'Tu Correo'
                    
                    />

                </label>

                <label className = 'Auth-Campo'>
                    <span> Contraseña </span>
                    <div className = 'Auth-Clave'>

                        <Input 
                    
                            Nombre = 'Contraseña'
                            Tipo = {Ver ? 'Text' : 'Password'}
                            Valor = {Pass}
                            Change = {setPass}
                            Base = 'Minimo 6 Caracteres'
                    
                        />

                        <button type = 'button' onClick = {() => setVer(!Ver)}>
                            {Ver ? 'No Ver' : 'Ver'}
                        </button>

                    </div>
                </label>

                <label className = 'Auth-Campo'>
                    <span>Confirmar Contraseña</span>

                    <Input 
                    
                        Nombre = 'Contraseña'
                        Tipo = {Ver ? 'Text' : 'Password'}
                        Valor = {Confirmar}
                        Change = {setConfirmar}
                        Base = 'Repite Tu Contraseña'
                    
                    />

                </label>

                {Error && <p className = 'Auth-Error'> {Error} </p> }
                {Exito && <p className = 'Auth-Exito'> {Exito} </p> }

                <button type = 'submit' className = 'Auth-Boton' disabled = {
                    Enviando || Exito !== ''
                }> {Enviando ? 'Creando Cuenta ... ' : 'Registrarse'} </button>

                <p className = 'Auth-Link'>
                    ¿Ya Tienes Una Cuenta? 
                    <button type = 'button' onClick = {() => IrLogin() }>
                        Iniciar Sesion
                    </button>
                </p>

            </form>
        </div>

    )
} export default Registro 