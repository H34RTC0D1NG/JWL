import Cerezo from '../Componentes/Atomos/Cerezo'
import { render } from '@testing-library/react'
import { test, expect } from 'vitest'

test('[+] El Cerezo Crea 8 Petalos', () => {
    const { container } = render (
        <Cerezo />
    )

    const petalos = container.querySelectorAll('.Petalo')

    expect (petalos.length).toBe(8)

})