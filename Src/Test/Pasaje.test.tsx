import { render, fireEvent } from '@testing-library/react'
import Pasaje from '../Componentes/Atomos/Pasajes'
import { test, expect, vi } from 'vitest'

const Datos = {

    _ID     : 0,
    Ciudad  : 'Tokio',
    Kanji   : '東京',
    Codigo  : 'NRT',
    Vuelo   : 'JP 801',
    Fecha   : '12 MAR',
    Hora    : '23:40',
    Puerta  : 'A12',
    Asiento : '24A',
    Clase   : 'Economica',
    Precio  : '$1.290.000',
    Color   : '#e63946'

}

test('[+] El Pasaje Muestra La Ciudad, El Codigo y El Kanji', () => {
    const { getByText } = render (
        <Pasaje {...Datos} />
    )

    expect (getByText('Tokio')).not.toBeNull()
    expect (getByText('NRT')).not.toBeNull()
    expect (getByText('東京')).not.toBeNull()
    expect (getByText('Mejias Air')).not.toBeNull()

})

test('[+] El Pasaje Usa La Variante Claro Si No Se Le Pasa Ninguna', () => {
    const { container } = render (
        <Pasaje {...Datos} />
    )

    const div = container.firstElementChild as HTMLDivElement

    expect (div.className).toBe('Pasaje Pasaje-Claro')

})

test('[+] El Pasaje Cambia A La Variante Vidrio', () => {
    const { container } = render (
        <Pasaje {...Datos} Variante = 'Vidrio' />
    )

    const div = container.firstElementChild as HTMLDivElement

    expect (div.className).toBe('Pasaje Pasaje-Vidrio')

})

test('[+] Sin onGuardar No Aparece El Boton Save', () => {
    const { container } = render (
        <Pasaje {...Datos} />
    )

    expect (container.querySelector('button')).toBeNull()

})

test('[+] El Boton Dice Saved y Tiene Clase Activo Si Ya Esta Guardado', () => {
    const { getByText } = render (
        <Pasaje {...Datos} Guardado = {true} onGuardar = {() => {}} />
    )

    const boton = getByText('Saved')

    expect (boton.className).toBe('Btn-Pasaje Activo')

})

test('[+] Al Hacer Click En Save Se Mandan Los Datos Del Pasaje', () => {
    const Guardar = vi.fn()
    const { getByText } = render (
        <Pasaje {...Datos} onGuardar = {Guardar} />
    )

    fireEvent.click(getByText('Save'))

    expect (Guardar).toHaveBeenCalledTimes(1)
    expect (Guardar.mock.calls[0][0].Ciudad).toBe('Tokio')
    expect (Guardar.mock.calls[0][0]._ID).toBe(0)

})
