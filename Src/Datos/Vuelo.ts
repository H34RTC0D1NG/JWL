import { CabeceraToken } from './Servicio'

export const API_VUELOS = 'http://localhost:8084/Api/Vuelos'

export interface DatosPasaje {

    _ID     : number;
    Ciudad  : string;
    Kanji   : string;
    Codigo  : string;
    Vuelo   : string;
    Fecha   : string;
    Hora    : string;
    Puerta  : string;
    Asiento : string;
    Clase   : string;
    Precio  : string;
    Color   : string;

} export interface VueloGuardado {

    ID      : number;
    Pasaje_ID :number;
    Ciudad  : string;
    Kanji   : string;
    Codigo  : string;
    Vuelo   : string;
    Fecha   : string;
    Hora    : string;
    Puerta  : string;
    Asiento : string;
    Clase   : string;
    Precio  : string;
    Color   : string;
    Fecha_Guardado : string | null;

} export async function CargarVuelos() : Promise <VueloGuardado[]> {

    const Respuesta = await fetch(API_VUELOS, {
        headers : CabeceraToken()
    })

    if (!Respuesta.ok) {

        const Datos = await Respuesta.json().catch(() => null)
        throw new Error(`${Respuesta.status} : ${Datos?.Error ?? 'No Se Pudieron Cargar Tus Vuelos'}`)

    }

    return Respuesta.json()

} export async function GuardarVuelo(D : DatosPasaje) {

    console.log('Pasaje Que Se Manda :', D)

    const Respuesta = await fetch(API_VUELOS, {
        method  : 'POST',
        headers : {
            'Content-Type' : 'application/json',
            ...CabeceraToken()
        },
        body : JSON.stringify({
            Pasaje_ID : D._ID,
            Ciudad    : D.Ciudad,
            Kanji     : D.Kanji,
            Codigo    : D.Codigo,
            Vuelo     : D.Vuelo,
            Fecha     : D.Fecha,
            Hora      : D.Hora,
            Puerta    : D.Puerta,
            Asiento   : D.Asiento,
            Clase     : D.Clase,
            Precio    : D.Precio,
            Color     : D.Color
        })
    })

    if (!Respuesta.ok) {

        const Datos = await Respuesta.json().catch(() => null)
        throw new Error(`${Respuesta.status} : ${Datos?.Error ?? 'No Se Pudo Guardar El Vuelo'}`)

    }

} export async function QuitarVuelo(PasajeID : number) {

    const Respuesta = await fetch(`${API_VUELOS}/${PasajeID}`, {
        method  : 'DELETE',
        headers : CabeceraToken()
    })

    if (!Respuesta.ok) {

        const Datos = await Respuesta.json().catch(() => null)
        throw new Error(`${Respuesta.status} : ${Datos?.Error ?? 'No Se Pudo Quitar El Vuelo'}`)

    }

}