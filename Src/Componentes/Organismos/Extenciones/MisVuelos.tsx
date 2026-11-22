import type { DatosPasaje, VueloGuardado } from '../../../Datos/Vuelo'
import { CargarVuelos, QuitarVuelo } from '../../../Datos/Vuelo'
import { useEffect, useState } from 'react'
import '../../../Css/Vuelos/Guardado.css'
import Pasaje from '../../Atomos/Pasajes'

function MisVuelos() {

    const [Vuelos, setVuelos] = useState <VueloGuardado[]> ([])
    const [Cargando, setCargando] = useState <boolean> (true)
    const [Error, setError] = useState <String> ()

    useEffect (() => {
        CargarVuelos()
            .then((Lista) => setVuelos(Lista))
            .catch((e : Error) => setError(e.message))
            .finally(() => setCargando(false))
    }, [])

    const Quitar = async (Datos : DatosPasaje) => {
        try {
            await QuitarVuelo(Datos._ID)
            setVuelos((Lista) => Lista.filter((V) => V.Pasaje_ID !== Datos._ID))
        } catch (e) {

            alert((e as Error).message)

        }
    }

    return (

        <section className = 'Mis-Vuelos'>
            <div className = 'Mis-Vuelos-Header'>
                <div>
                    <span className = 'Mis-Vuelos-Kanji'>私の旅</span>
                    <h2> Mis Vuelos </h2>
                    <p className = 'Mis-Vuelos-Sub'>
                        Pasajes que guardaste con el boton Save
                    </p>
                </div>
                <div className = 'Mis-Vuelos-Total'>
                    <span> {Vuelos.length} </span>
                    <p> Guardados </p>
                </div>
            </div>

            {Cargando && (
                <div className = 'Mis-Vuelos-Vacio'> Cargando Tus Vuelos ... </div>
            )}

            {!Cargando && Error && (
                <div className = 'Mis-Vuelos-Vacio'> {Error} </div>
            )}

            {!Cargando && !Error && Vuelos.length === 0 && (
                <div className = 'Mis-Vuelos-Vacio'>
                    Aún No Guardas Vuelos. Ve A Vuelos Y Presiona Save En El Que Te Gusto.
                </div>
            )}

            <div className = 'Mis-Vuelos-Grid'>
                {Vuelos.map((V) => (
                    <div className = 'Mis-Vuelos-Item' key = {V.ID}>
                        <Pasaje 
                        
                            _ID = {V.Pasaje_ID}
                            Ciudad = {V.Ciudad}
                            Kanji = {V.Kanji}
                            Codigo = {V.Codigo}
                            Vuelo = {V.Vuelo}
                            Fecha = {V.Fecha}
                            Hora = {V.Hora}
                            Puerta = {V.Puerta}
                            Asiento = {V.Asiento}
                            Clase = {V.Clase}
                            Precio = {V.Precio}
                            Color = {V.Color}
                            Guardado = {true}
                            onGuardar = {Quitar}
                        
                        />
                    </div>
                ))}
            </div>

        </section>

    )
} export default MisVuelos