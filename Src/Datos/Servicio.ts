import { useEffect, useState } from 'react'

export const API_USUARIOS  = 'http://localhost:8083/Api/Usuarios'
export const API_CONTACTOS = 'http://localhost:8082/Api/Contactos'

export interface Usuario {

    ID                : number;
    Nombre_Completo   : string;
    Correo            : string;
    Rol               : string;

    Fecha_Registro    : string | null;

} export interface Sesion {

    Token    : string;
    Usuario  : Usuario;

} 

const Pwd = 'Odisea_TheBook'

function AvisarCambio() {
    window.dispatchEvent(new Event('Sesion-Cambio'))
} 

export function GuardarSesion(S : Sesion) {
    localStorage.setItem(Pwd, JSON.stringify(S))
    AvisarCambio()
}

export function ObtenerSesion() : Sesion | null {

    try {
        const Texto = localStorage.getItem(Pwd)
        return Texto ? JSON.parse(Texto) : null
    } catch {
        return null
    }

}

export function ObtenerToken() : string {
    const S = ObtenerSesion()
    return S ? S.Token : ''
}

export function EsAdmin() : boolean {
    const S = ObtenerSesion()
    return S !== null && S.Usuario.Rol === 'Admin'
}

export function CerrarSesion() {
    localStorage.removeItem(Pwd)
    AvisarCambio()
}

export function CabeceraToken() : Record <string, string> {
    return {
        'Authorization' : 'Bearer ' + ObtenerToken()
    }
}

export function useSesion() : Sesion | null {
    
    const [Actual, setActual] = useState <Sesion | null> (ObtenerSesion())

    useEffect (() => {
        const Actualizar = () => setActual(ObtenerSesion())
        window.addEventListener('Sesion-Cambio', Actualizar)
        window.addEventListener('storage', Actualizar)
        return () => {
            window.removeEventListener('Sesion-Cambio', Actualizar)
            window.removeEventListener('storage', Actualizar)
        }
    }, [])

    return Actual

}

export async function LeerError(Respuesta : Response, PorDefecto : string) : Promise <string> {
    try {

        const Datos = await Respuesta.json()
        return Datos.Error ? Datos.Error : PorDefecto

    } catch {

        return PorDefecto

    }
}