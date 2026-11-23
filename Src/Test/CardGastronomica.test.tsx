import CardGastronomica from '../Componentes/Moleculas/CardGastronomica'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { test, expect } from 'vitest'

function Dibujar() {
    return render (

        <MemoryRouter>
            <CardGastronomica

                Enlace = '/Comida/Ramen.jpg'
                Error  = 'Foto Del Ramen'
                Titulo = 'Ramen'
                Descrp = 'Sopa de fideos con caldo'

            />
        </MemoryRouter>

    )
}

test('[+] La Card Gastronomica Muestra El Titulo y La Descripcion', () => {
    const { getByText } = Dibujar()

    expect (getByText('Ramen').tagName).toBe('H2')
    expect (getByText('Sopa de fideos con caldo').tagName).toBe('P')

})