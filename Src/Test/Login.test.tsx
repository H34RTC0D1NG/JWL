import Login from '../Componentes/Organismos/Formularios/Login'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { test, expect, vi, beforeEach, afterEach } from 'vitest'
import { ObtenerSesion } from '../Datos/Servicio'
import { MemoryRouter } from 'react-router-dom'

function Dibujar(Correo : string, IrRegistro = () => {}) {
    return render (

        <MemoryRouter>
            <Login CorreoInicial = {Correo} IrRegistro = {IrRegistro} />
        </MemoryRouter>

    )
}

beforeEach(() => {
    localStorage.clear()
})

afterEach(() => {
    vi.unstubAllGlobals()
})

test('[+] El Login Muestra El Correo Inicial En El Input', () => {
    const { getByText, container } = Dibujar('isam.mejias@gmail.hax')

    const correo = container.querySelector('input[type = "Email"]') as HTMLInputElement

    expect (getByText('Iniciar Sesión').tagName).toBe('H2')
    expect (correo.value).toBe('isam.mejias@gmail.hax')
})

test('[+] Si Faltan Datos Muestra El Error', () => {
    const { container, getByText } = Dibujar('')

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)

    expect (getByText('Debe Ingresar Un Correo y Una Contraseña').className).toBe('Auth-Error')
})

test('[+] Con Login Correcto Se Guarda La Sesion', async () => {
    const Fetch = vi.fn().mockResolvedValue(new Response(JSON.stringify({
        Token   : 'token-login',
        Usuario : { ID : 1, Nombre_Completo : 'Isam', Correo : 'isam.mejias@gmail.hax', Rol : 'Admin', Fecha_Registro : null }
    }), { status : 200 }))
    vi.stubGlobal('fetch', Fetch)

    const { container } = Dibujar('isam.mejias@gmail.hax')

    const clave = container.querySelector('input[type = "password"]') as HTMLInputElement
    fireEvent.change(clave, {
        target : {
            value : 'OdiseaJapon'
        }
    })

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)

    await waitFor(() => {
        expect (ObtenerSesion()?.Token).toBe('token-login')
    })

    const Body = JSON.parse(Fetch.mock.calls[0][1].body)
    expect (Body.Pass).toBe('OdiseaJapon')
})
