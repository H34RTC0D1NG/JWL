import CampoForm from '../../Moleculas/CampoForm'
import type { SubmitEvent } from 'react'
import { useState } from 'react'

function Contacto() {

    const [Nombre,   setNombre] = useState('')
    const [Correo,   setCorreo] = useState('')
    const [Mensaje, setMensaje] = useState('')
    const [Enviado, setEnviado] = useState(false)

    const Envio = async (
        e : SubmitEvent <HTMLFormElement>
    ) => {
        e.preventDefault()

        if (Enviado) {
            return 
        } if (Nombre.trim() === '') {
            alert('Debe Ingresar Su Nombre')
            return
        } if (Correo.trim() === '') {
            alert('Debe Ingresar un Correo No Lo Deje Blanco')
            return 
        } if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Correo)) {
            alert('Debe Ingresar Un Correo Valido')
            return 
        } if (Mensaje.trim() === '') {
            alert('Escribe tu Duda o Mensaje que Quieras Dejar Al Menos')
            return 
        } 

        setEnviado(true)

        try {

            const Respuesta = await fetch(
                "http://localhost:8082/Api/Contactos", {
                    
                    method  : 'POST',
                    headers : {
                        'Content-Type' : 'application/json'
                    },

                    body : JSON.stringify({
                        Nombre_Completo : Nombre.trim(),
                        Correo : Correo.trim(),
                        Mensaje : Mensaje.trim()
                    }),
                }
            )

            if (!Respuesta.ok) {
                throw new Error(`Error HTTP ${Respuesta.status}`)
            } alert('Mensaje Enviado Exitosamente')

            setNombre('')
            setCorreo('')
            setMensaje('')

        } catch (error) {

            console.error('Error al Enviar El Contacto : ', error)
            alert('No Se Pudo Enviar El Mensaje. Intente Otra Vez')
 
        } finally {

            setEnviado(false)

        }

    }

    return (

        <form onSubmit = {Envio} noValidate>
            
            <CampoForm 
            
                Etiqueta = 'Nombre Completo'
                Tipo     = 'Text'
                Nombre   = 'Nombre'
                Valor    = {Nombre}
                Change   = {setNombre}
                Base     = 'Nombre'
            
            />

            <CampoForm 
            
                Etiqueta = 'Correo Electronico'
                Tipo     = 'Email'
                Nombre   = 'Correo'
                Valor    = {Correo}
                Change   = {setCorreo}
                Base     = 'Correo'
            
            />

            <CampoForm 
            
                Etiqueta = 'Mensaje'
                Tipo     = 'Text'
                Nombre   = 'Mensaje'
                Valor    = {Mensaje}
                Change   = {setMensaje}
                Base     = 'Mensaje'
            
            />

            <button type = 'submit' className = 'btn btn-primary' disabled = {Enviado}>
                {Enviado ? 'Enviando ... ' : 'Enviar Mensaje'}
            </button>

        </form>

    )
} export default Contacto