import { API_USUARIOS, CabeceraToken, CerrarSesion, GuardarSesion, ObtenerToken, useSesion } from '../Datos/Servicio'
import MisVuelos from '../Componentes/Organismos/Extenciones/MisVuelos'
import Historial from '../Componentes/Moleculas/Historial'
import { Navigate, useNavigate } from 'react-router-dom'
import type { Usuario } from '../Datos/Servicio'
import Live from '../Componentes/Atomos/Live'
import { useEffect, useState } from 'react'
import '../Css/Paginas/Perfil.css'
 
function Perfil() {
 
    const Sesion = useSesion()
    const Navegar = useNavigate()
 
    const [Datos, setDatos] = useState <Usuario | null> (Sesion ? Sesion.Usuario : null)
 
    useEffect (() => {
        if (!Sesion) {
            return
        }
 
        fetch(`${API_USUARIOS}/Perfil`, { headers : CabeceraToken() })
            .then((Respuesta) => {
                if (Respuesta.status === 401) {
                    throw new Error('Sesion Expirada')
                }
                if (!Respuesta.ok) {
                    throw new Error('Error Al Cargar El Perfil')
                }
                return Respuesta.json()
            })
            .then((Usuario : Usuario) => {
                setDatos(Usuario)
                GuardarSesion({ Token : ObtenerToken(), Usuario : Usuario })
            })
            .catch((e : Error) => {
                console.log('Perfil:', e.message)
                if (e.message === 'Sesion Expirada') {
                    CerrarSesion()
                    Navegar('/Account', { state : { Modo : 'Registro' } })
                }
            })
    }, [])
 
    if (!Sesion) {
        return <Navigate to = '/Account' state = {{ Modo : 'Registro' }} replace />
    }
 
    const Salir = () => {
        CerrarSesion()
        Navegar('/Account', { state : { Modo : 'Registro' } })
    }
 
    const Inciales = (Nombre : string) => {
        if (!Nombre) {
            return '?'
        }
        const Partes = Nombre.trim().split(' ')
        let Letras = Partes [0] ? Partes [0][0] : '?'
        if (Partes.length > 1) {
            Letras += Partes [Partes.length - 1][0]
        }
        return Letras.toUpperCase()
    }
 
    const Fecha = (Valor? : string | null) => {
        if (!Valor) {
            return '-'
        }
        return new Date(Valor).toLocaleDateString('es-CL', {
            day : '2-digit',
            month : 'long',
            year : 'numeric'
        })
    }
 
    const U = Datos ? Datos : Sesion.Usuario
    const Admin = U.Rol === 'Admin'
 
    return (
 
        <section className = 'Perfil'>
            <Live Enlace = '../../Src/Assets/Lives/Red_Live.mp4' />
            <div className = 'Perfil-Card'>
                <div className = 'Perfil-Portada'>
                    <span className = 'Perfil-Kanji'>プロフィール</span>
                </div>
                <div className = 'Perfil-Cuerpo'>
                    <div className = {Admin ? 'Perfil-Avatar Admin' : 'Perfil-Avatar'}>
                        {Inciales(U.Nombre_Completo)}
                    </div>
                    <div className = 'Perfil-Info'>
                        <h2> {U.Nombre_Completo} </h2>
                        <p className = 'Perfil-Correo'> {U.Correo} </p>
                        <span className = {Admin ? 'Perfil-Rol Admin' : 'Perfil-Rol'}>
                            {Admin ? 'Administrador' : 'Usuario'}
                        </span>
                    </div>
 
                    <button className = 'Perfil-Salir' onClick = {Salir}>
                        Cerrar Sesión
                    </button>
                </div>
                <div className = 'Perfil-Datos'>
                    <div>
                        <span>ID</span>
                        <p> #{U.ID} </p>
                    </div>
                    <div>
                        <span>Miembro Desde</span>
                        <p> {Fecha(U.Fecha_Registro)} </p>
                    </div>
                    <div>
                        <span>Tipo De Cuenta</span>
                        <p> {Admin ? 'Administrador' : 'Usuario'} </p>
                    </div>
                </div>
            </div>
 
            <MisVuelos />
 
            {Admin && <Historial />}
 
        </section>
 
    )
} export default Perfil