import Logo from '../Componentes/Atomos/Logo'
import { render } from '@testing-library/react'
import { test, expect } from 'vitest'

test('[+] El Logo Tiene La Clase Del Sidebar', () => {
    const { container } = render (
        <Logo Enlace = '/Logo/01.png' Error = 'Logo' />
    )

    const img = container.querySelector('img') as HTMLImageElement

    expect (img.className).toBe('Logo-Sidebar')

})

test('[+] El Logo Recibe Bien El Src y El Alt', () => {
    const { container } = render (
        <Logo Enlace = '/Logo/02.png' Error = 'Logo Japon' />
    )

    const img = container.querySelector('img') as HTMLImageElement

    expect (img.getAttribute('src')).toBe('/Logo/02.png')
    expect (img.getAttribute('alt')).toBe('Logo Japon')

})
