import CardContact from '../Componentes/Moleculas/CardContact'
import { render } from '@testing-library/react'
import { test, expect } from 'vitest'

function IconoPrueba() {
    return <svg className = 'Icono-Prueba' />
}

test('[+] La Card De Contacto Muestra El Titulo y El Detalle', () => {
    const { getByText } = render (
        <CardContact Icono = {IconoPrueba} Titulo = 'Correo' Detalle = 'japon@correo.cl' />
    )

    expect (getByText('Correo').tagName).toBe('STRONG')
    expect (getByText('japon@correo.cl').tagName).toBe('SMALL')

})