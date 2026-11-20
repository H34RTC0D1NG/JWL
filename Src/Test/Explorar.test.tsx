import Explorar from '../Componentes/Atomos/Explorar'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { test, expect } from 'vitest'

test('[+] El Boton Explorar Tiene Su Texto y Su Link', () => {
    const { getByText } = render (

        <MemoryRouter>
            <Explorar />
        </MemoryRouter>

    )

    const link = getByText('Empezar a Explorar')

    expect (link.tagName).toBe('A')
    expect (link.getAttribute('href')).toBe('/Vuelo')
    expect (link.parentElement?.className).toBe('Btn Rojo')

})