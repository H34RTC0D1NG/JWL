import Registro from '../Componentes/Organismos/Formularios/Registro'
import { render, fireEvent } from '@testing-library/react'
import { test, expect, beforeEach } from 'vitest'
import { MemoryRouter } from 'react-router-dom'

function Dibujar(IrLogin = () => {}) {
    return render (

        <MemoryRouter>
            <Registro IrLogin = {IrLogin} />
        </MemoryRouter>

    )
}

function Llenar(container : HTMLElement, Nombre : string, Correo : string, Pass : string, Confirmar : string) {
    const inputs = container.querySelectorAll('input')
    const Valores = [ Nombre, Correo, Pass, Confirmar ]

    for (let i = 0; i < Valores.length; i++) {
        fireEvent.change(inputs[i], {
            target : {
                value : Valores[i]
            }
        })
    }
}

beforeEach(() => {
    localStorage.clear()
})

test('[+] Si La Contrasenia Tiene Menos De 6 Caracteres Muestra Error', () => {
    const { container, getByText } = Dibujar()

    Llenar(container, 'Isam Mejias', 'isam.mejias@gmail.hax', '000', '000')
    fireEvent.submit(container.querySelector('form') as HTMLFormElement)

    expect (getByText('La Contraseña Debe Tener Al Menos 6 Caracteres')).not.toBeNull()
})

test('[+] Si Las Contrasenias No Coinciden Muestra Error', () => {
    const { container, getByText } = Dibujar()

    Llenar(container, 'Isam Mejias', 'isam.mejias@gmail.hax', 'OdiseaJapon', 'Japonmelapela')
    fireEvent.submit(container.querySelector('form') as HTMLFormElement)

    expect (getByText('Las Contraseñas No Coinciden').className).toBe('Auth-Error')
})