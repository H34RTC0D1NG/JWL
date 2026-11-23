import Separador from '../Componentes/Atomos/Separador'
import { render } from '@testing-library/react'
import { test, expect } from 'vitest'

test('[+] El Separador Es Un Div Con Su Clase', () => {
    const { container } = render (
        <Separador />
    )

    const div = container.firstElementChild as HTMLDivElement

    expect (div.tagName).toBe('DIV')
    expect (div.className).toBe('Separador')

})
