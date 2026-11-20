import { render, fireEvent } from '@testing-library/react'
import Input from '../Componentes/Atomos/Input'
import { test, expect, vi } from 'vitest'

test('[+] El Input Avisa Lo Que Escribe El Usuario', () => {
    const Cambio = vi.fn()
    const { container } = render (
        <Input 
        
            Nombre = 'Isam'
            Tipo = 'Text'
            Valor = ''
            Change = {Cambio}
        
        />
    )

    const input = container.querySelector('input') as HTMLInputElement
    fireEvent.change(input, {
        target : {
            value : 'Isam'
        }
    })

    expect(Cambio).toHaveBeenCalledWith('Isam')

})