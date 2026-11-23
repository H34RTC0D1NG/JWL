import Desplazate from '../Componentes/Atomos/Desplazate'
import { render } from '@testing-library/react'
import { test, expect } from 'vitest'

test('[+] El Texto Desplazate Aparece Con Su Clase', () => {
    const { getByText } = render (
        <Desplazate />
    )

    const span = getByText('Desplázate')

    expect (span.tagName).toBe('SPAN')
    expect (span.className).toBe('Desplazate')

})
