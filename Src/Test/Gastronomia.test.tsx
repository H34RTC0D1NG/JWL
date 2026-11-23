import Gastronomia from '../Componentes/Atomos/Gastronomia'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { test, expect } from 'vitest'

test('[+] El Boton Gastronomia Lleva A La Ruta /Gastronomia', () => {
    const { getByText } = render (

        <MemoryRouter>
            <Gastronomia />
        </MemoryRouter>

    )

    const link = getByText('Ver Gastronomia')

    expect (link.tagName).toBe('A')
    expect (link.getAttribute('href')).toBe('/Gastronomia')

})

test('[+] El Boton Gastronomia Tiene La Clase Borde', () => {
    const { container } = render (

        <MemoryRouter>
            <Gastronomia />
        </MemoryRouter>

    )

    const boton = container.querySelector('button') as HTMLButtonElement

    expect (boton).not.toBeNull()
    expect (boton.className).toBe('Borde')

})
