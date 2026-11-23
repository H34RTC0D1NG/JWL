import Contacto from '../Componentes/Organismos/Formularios/Contacto'
import { render, fireEvent } from '@testing-library/react'
import { test, expect, vi } from 'vitest'

test('[+] Si El Nombre Esta Vacio Avisa y No Manda Nada', () => {
    const Alerta = vi.fn()
    const Fetch  = vi.fn()
    vi.stubGlobal('alert', Alerta)
    vi.stubGlobal('fetch', Fetch)

    const { container } = render (
        <Contacto />
    )

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)

    expect (Alerta).toHaveBeenCalledWith('Debe Ingresar Su Nombre')
    expect (Fetch).not.toHaveBeenCalled()
})