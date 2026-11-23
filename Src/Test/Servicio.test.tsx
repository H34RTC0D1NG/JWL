import { GuardarSesion, ObtenerSesion, ObtenerToken, EsAdmin, CerrarSesion, CabeceraToken, LeerError, useSesion } from '../Datos/Servicio'
import { renderHook, act } from '@testing-library/react'
import { test, expect, vi, beforeEach } from 'vitest'

const SesionUsuario = {

    Token   : 'token-usuario',
    Usuario : {
        ID              : 1,
        Nombre_Completo : 'Isam Mejias',
        Correo          : 'IsamMejias@correo.cl',
        Rol             : 'Usuario',
        Fecha_Registro  : null
    }

}

const SesionAdmin = {

    Token   : 'token-admin',
    Usuario : {
        ID              : 2,
        Nombre_Completo : 'Administrador',
        Correo          : 'admin@correo.cl',
        Rol             : 'Admin',
        Fecha_Registro  : null
    }

}

beforeEach(() => {
    localStorage.clear()
})

test('[+] Sin Sesion Guardada ObtenerSesion Devuelve null', () => {
    expect (ObtenerSesion()).toBeNull()
    expect (ObtenerToken()).toBe('')
})



test('[+] Si El localStorage Tiene Basura ObtenerSesion Devuelve null', () => {
    localStorage.setItem('Odisea_TheBook', '{esto no es json')

    expect (ObtenerSesion()).toBeNull()
})

test('[+] EsAdmin Es true Cuando El Rol Es Admin', () => {
    GuardarSesion(SesionAdmin)

    expect (EsAdmin()).toBe(true)
})

test('[+] EsAdmin Es false Cuando El Rol Es Usuario', () => {
    GuardarSesion(SesionUsuario)

    expect (EsAdmin()).toBe(false)
})

test('[+] CerrarSesion Borra La Sesion', () => {
    GuardarSesion(SesionUsuario)
    CerrarSesion()

    expect (ObtenerSesion()).toBeNull()
})

test('[+] CabeceraToken Arma El Header Bearer Con El Token', () => {
    GuardarSesion(SesionUsuario)

    expect (CabeceraToken()).toEqual({
        'Authorization' : 'Bearer token-usuario'
    })
})

test('[+] LeerError Devuelve El Error Del Servidor o El Mensaje Por Defecto', async () => {
    const ConError  = new Response(JSON.stringify({ Error : 'Correo Repetido' }), { status : 409 })
    const SinJson   = new Response('no es json', { status : 500 })

    expect (await LeerError(ConError, 'Fallo')).toBe('Correo Repetido')
    expect (await LeerError(SinJson, 'Fallo')).toBe('Fallo')
})

test('[+] useSesion Se Actualiza Cuando Se Inicia y Se Cierra Sesion', () => {
    const Aviso = vi.fn()
    window.addEventListener('Sesion-Cambio', Aviso)

    const { result } = renderHook(() => useSesion())

    expect (result.current).toBeNull()

    act(() => {
        GuardarSesion(SesionUsuario)
    })

    expect (result.current?.Usuario.Nombre_Completo).toBe('Isam Mejias')

    act(() => {
        CerrarSesion()
    })

    expect (result.current).toBeNull()
    expect (Aviso).toHaveBeenCalledTimes(2)

    window.removeEventListener('Sesion-Cambio', Aviso)
})
