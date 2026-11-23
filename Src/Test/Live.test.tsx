import Live from '../Componentes/Atomos/Live'
import { render } from '@testing-library/react'
import { test, expect } from 'vitest'

test('[+] El Live Carga El Video Con Su Enlace y Tipo mp4', () => {
    const { container } = render (
        <Live Enlace = '/Lives/Rain_Live.mp4' />
    )

    const source = container.querySelector('source') as HTMLSourceElement

    expect (source.getAttribute('src')).toBe('/Lives/Rain_Live.mp4')
    expect (source.getAttribute('type')).toBe('video/mp4')

})

test('[+] El Video Esta En Loop, Autoplay y Con Su Clase', () => {
    const { container } = render (
        <Live Enlace = '/Lives/Rain_Live.mp4' />
    )

    const video = container.querySelector('video') as HTMLVideoElement

    expect (video.className).toBe('Live-Font')
    expect (video.loop).toBe(true)
    expect (video.autoplay).toBe(true)

})
