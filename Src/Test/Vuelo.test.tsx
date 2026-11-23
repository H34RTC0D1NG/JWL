import { CargarVuelos, GuardarVuelo, QuitarVuelo, API_VUELOS } from '../Datos/Vuelo'
import { test, expect, vi, beforeEach, afterEach } from 'vitest'
import { GuardarSesion } from '../Datos/Servicio'

const Pasaje = {

    _ID     : 3,
    Ciudad  : 'Sapporo',
    Kanji   : '札幌',
    Codigo  : 'CTS',
    Vuelo   : 'JP 512',
    Fecha   : '19 ENE',
    Hora    : '20:30',
    Puerta  : 'C02',
    Asiento : '09B',
    Clase   : 'Business',
    Precio  : '$2.390.000',
    Color   : '#38bdf8'

}

function RespuestaFalsa(Status : number, Cuerpo : unknown) {
    return new Response(JSON.stringify(Cuerpo), { status : Status })
}

beforeEach(() => {
    localStorage.clear()
    GuardarSesion({
        Token   : 'abc123',
        Usuario : { ID : 1, Nombre_Completo : 'Isam Mejias', Correo : 'IsamMejias@correo.cl', Rol : 'Usuario', Fecha_Registro : null }
    })
    vi.spyOn(console, 'log').mockImplementation(() => {})
})

afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
})

test('[+] CargarVuelos Devuelve La Lista y Manda El Token', async () => {
    const Fetch = vi.fn().mockResolvedValue(RespuestaFalsa(200, [ { ID : 1, Pasaje_ID : 3, Ciudad : 'Sapporo' } ]))
    vi.stubGlobal('fetch', Fetch)

    const Lista = await CargarVuelos()

    expect (Lista.length).toBe(1)
    expect (Lista[0].Ciudad).toBe('Sapporo')
    expect (Fetch.mock.calls[0][0]).toBe(API_VUELOS)
    expect (Fetch.mock.calls[0][1].headers.Authorization).toBe('Bearer abc123')
})

test('[+] CargarVuelos Lanza Error Con El Status y El Mensaje Del Servidor', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(RespuestaFalsa(401, { Error : 'Debe Iniciar Sesion' })))

    await expect (CargarVuelos()).rejects.toThrow('401 : Debe Iniciar Sesion')
})

test('[+] GuardarVuelo Hace Un POST Con El Pasaje_ID', async () => {
    const Fetch = vi.fn().mockResolvedValue(RespuestaFalsa(201, {}))
    vi.stubGlobal('fetch', Fetch)

    await GuardarVuelo(Pasaje)

    const Opciones = Fetch.mock.calls[0][1]
    const Body = JSON.parse(Opciones.body)

    expect (Opciones.method).toBe('POST')
    expect (Opciones.headers['Content-Type']).toBe('application/json')
    expect (Body.Pasaje_ID).toBe(3)
    expect (Body.Ciudad).toBe('Sapporo')
})

test('[+] QuitarVuelo Hace Un DELETE A La Ruta Del Pasaje', async () => {
    const Fetch = vi.fn().mockResolvedValue(new Response(null, { status : 204 }))
    vi.stubGlobal('fetch', Fetch)

    await QuitarVuelo(3)

    expect (Fetch.mock.calls[0][0]).toBe(API_VUELOS + '/3')
    expect (Fetch.mock.calls[0][1].method).toBe('DELETE')
})
