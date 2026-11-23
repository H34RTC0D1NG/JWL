import Fondo from '../Componentes/Atomos/Fondo'
import { render } from '@testing-library/react'
import { test, expect } from 'vitest'

test('[+] El Fondo Muestra La Imagen Con Su Enlace', () => {
    const { container } = render (
        <Fondo Enlace = '/Imagenes/Fondo_1.jpg' Error = 'Fondo De Japon' />
    )

    const img = container.querySelector('img') as HTMLImageElement

    expect (img).not.toBeNull()
    expect (img.getAttribute('src')).toBe('/Imagenes/Fondo_1.jpg')

})