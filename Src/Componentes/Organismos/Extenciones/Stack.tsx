import { CargarVuelos, GuardarVuelo, QuitarVuelo } from '../../../Datos/Vuelo'
import type { CSSProperties, PointerEvent } from 'react'
import type { DatosPasaje } from '../../../Datos/Vuelo'
import { useEffect, useRef, useState } from 'react'
import { useSesion } from '../../../Datos/Servicio'
import { useNavigate } from 'react-router-dom'
import '../../../Css/Responsive/Vuelos.css'
import Pasaje from '../../Atomos/Pasajes'
import '../../../Css/Vuelos/Stack.css'

const Total = 8

function Stack() {

    const [Actual, setActual] = useState <number> (0)
    const [Guardados, setGuardado] = useState <number[]> ([])

    const stackRef = useRef <HTMLDivElement> (null)
    const Blocked  = useRef <boolean> (false)
    const Inicio   = useRef ({ x : 0, y : 0, Activo : false})

    const Sesion = useSesion()
    const Navegar = useNavigate()

    const T = Total

    const Next = () => setActual ((a) => (a + 1) % T)
    const Back = () => setActual ((a) => (a - 1 % T) % T)

    useEffect(() => {
        
        const Teclas = (e : KeyboardEvent) => {
            if (e.key === 'ArrowRight') {
                Next()
            } if (e.key === 'ArrowLeft') {
                Back()
            }
        }

        window.addEventListener('keydown', Teclas)
        return () => window.removeEventListener('keydown', Teclas)

    }, [])

    useEffect (() => {

        const Div = stackRef.current
        
        if (!Div) { 
            return 
        }

        const Rueda = (e : WheelEvent) => {

            e.preventDefault()
            
            if (Blocked.current) return
            Blocked.current = true

            if (e.deltaY > 0) {
                Next()
            } else {
                Back()
            }

            setTimeout(() => (Blocked.current = false), 400)

        }

        Div.addEventListener('wheel', Rueda, { passive : false })
        return () => Div.removeEventListener('wheel', Rueda)

    }, [])

    useEffect (() => {
        if (!Sesion) {
            setGuardado([])
            return
        }

        CargarVuelos()
            .then((Lista) => setGuardado(Lista.map((V) => V.Pasaje_ID)))
            .catch(() => setGuardado([]))

    }, [Sesion])

    const Empezar = (e : PointerEvent <HTMLDivElement>) => {
        Inicio.current = { x : e.clientX, y : e.clientY, Activo : true }
    }

    const Terminar = (e : PointerEvent <HTMLDivElement>) => {
        if (!Inicio.current.Activo) {
            return
        } 
        
        Inicio.current.Activo = false
        
        const dx = e.clientX - Inicio.current.x
        const dy = e.clientY - Inicio.current.y
        const Delta = Math.abs(dy) > Math.abs(dx) ? dy : dx

        if (Math.abs(Delta) > 40) {
            if (Delta < 0) {
                Next()
            } else {
                Back()
            }
        }

    }

    const Guardar = async (Datos : DatosPasaje) => {
        if (!Sesion) {
            Navegar('/Account')
            return
        }
        const YaGuardado = Guardados.includes(Datos._ID)
        try {
            if (YaGuardado) {
                await QuitarVuelo(Datos._ID)
                setGuardado((Lista) => Lista.filter((g) => g !== Datos._ID))
            } else {
                await GuardarVuelo(Datos)
                setGuardado((Lista) => [... Lista, Datos._ID])
            }
        } catch (e) {
            alert((e as Error).message)
        }
    }

    const CalcularStyle = (i : number) : CSSProperties => {

        let rel = i - Actual

        if (rel > T /  2) { rel -= T } 
        if (rel < -T / 2) { rel += T }

        return {

            transform : `translateX(${rel * 105}%) scale(${rel === 0 ? 1.05 : .85})`,
            opacity : rel === 0 ? 1 : .3,
            zIndex : T - Math.abs(rel)

        }

    }

    return (

        <div className = 'Panel-Stack Oscuro'>
            <h2 className = 'Panel-Titulo'>
                Pasajes a Japón <span>日本</span>
            </h2>

            <div className = 'Zona-Stack' ref = {stackRef} onPointerDown = {Empezar} onPointerUp = {Terminar} onPointerLeave = {Terminar}>
                <div className = 'Item-Stack' style = {CalcularStyle(0)} onClick = {() => setActual(0)}>
                    <Pasaje 
                    
                        _ID       = {0}
                        Ciudad    = 'Tokio'
                        Kanji     = '東京'
                        Codigo    = 'NRT'
                        Vuelo     = 'JP 801'
                        Fecha     = '12 MAR'
                        Hora      = '23:40'
                        Puerta    = 'A12'
                        Asiento   = '24A'
                        Clase     = 'Económica'
                        Precio    = '$1.290.000'
                        Color     = '#e63946'
                        Guardado  = {Guardados.includes(0)}
                        onGuardar = {Guardar}

                    />
                </div>
                <div className = 'Item-Stack' style = {CalcularStyle(1)} onClick = {() => setActual(1)}>
                    <Pasaje 
                    
                        _ID       = {1}
                        Ciudad    = 'Kioto'
                        Kanji     = '京都'
                        Codigo    = 'KIX'
                        Vuelo     = 'JP 215'
                        Fecha     = '28 MAR'
                        Hora      = '21:15'
                        Puerta    = 'B04'
                        Asiento   = '18C'
                        Clase     = 'Premiun'
                        Precio    = '$1.490.000'
                        Color     = '#f472b6'
                        Guardado  = {Guardados.includes(1)}
                        onGuardar = {Guardar}

                    />
                </div>
                <div className = 'Item-Stack' style = {CalcularStyle(2)} onClick = {() => setActual(2)}>
                    <Pasaje 
                    
                        _ID       = {2}
                        Ciudad    = 'Osaka'
                        Kanji     = '大阪'
                        Codigo    = 'ITM'
                        Vuelo     = 'JP 330'
                        Fecha     = '05 MAR'
                        Hora      = '22:05'
                        Puerta    = 'A07'
                        Asiento   = '31F'
                        Clase     = 'Economica'
                        Precio    = '$1.250.000'
                        Color     = '#f59e0b'
                        Guardado  = {Guardados.includes(2)}
                        onGuardar = {Guardar}

                    />
                </div>
                <div className = 'Item-Stack' style = {CalcularStyle(3)} onClick = {() => setActual(3)}>
                    <Pasaje 
                    
                        _ID       = {3}
                        Ciudad    = 'Sapporo'
                        Kanji     = '札幌'
                        Codigo    = 'CTS'
                        Vuelo     = 'JP 512'
                        Fecha     = '19 ENE'
                        Hora      = '20:30'
                        Puerta    = 'C02'
                        Asiento   = '09B'
                        Clase     = 'Business'
                        Precio    = '$2.390.000'
                        Color     = '#38bdf8'
                        Guardado  = {Guardados.includes(3)}
                        onGuardar = {Guardar}

                    />
                </div>
                <div className = 'Item-Stack' style = {CalcularStyle(4)} onClick = {() => setActual(4)}>
                    <Pasaje 
                    
                        _ID       = {4}
                        Ciudad    = 'Okinawa'
                        Kanji     = '沖縄'
                        Codigo    = 'OKA'
                        Vuelo     = 'JP 616'
                        Fecha     = '10 JUL'
                        Hora      = '23:55'
                        Puerta    = 'B12'
                        Asiento   = '27D'
                        Clase     = 'Económica'
                        Precio    = '$1.390.000'
                        Color     = '#14b8a6'
                        Guardado  = {Guardados.includes(4)}
                        onGuardar = {Guardar}

                    />
                </div>
                <div className = 'Item-Stack' style = {CalcularStyle(5)} onClick = {() => setActual(5)}>
                    <Pasaje 
                    
                        _ID       = {5}
                        Ciudad    = 'Hiroshima'
                        Kanji     = '広島'
                        Codigo    = 'HIJ'
                        Vuelo     = 'JP 448'
                        Fecha     = '02 NOV'
                        Hora      = '21:50'
                        Puerta    = 'A03'
                        Asiento   = '17A'
                        Clase     = 'Premiun'
                        Precio    = '$1.550.000'
                        Color     = '#8b5cf6'
                        Guardado  = {Guardados.includes(5)}
                        onGuardar = {Guardar}

                    />
                </div>
                <div className = 'Item-Stack' style = {CalcularStyle(6)} onClick = {() => setActual(6)}>
                    <Pasaje 
                    
                        _ID       = {6}
                        Ciudad    = 'Nara'
                        Kanji     = '奈良'
                        Codigo    = 'KIX'
                        Vuelo     = 'JP 219'
                        Fecha     = '14 MAY'
                        Hora      = '22:20'
                        Puerta    = 'B06'
                        Asiento   = '22E'
                        Clase     = 'Económica'
                        Precio    = '$1.270.000'
                        Color     = '#84cc16'
                        Guardado  = {Guardados.includes(6)}
                        onGuardar = {Guardar}

                    />
                </div>
                <div className = 'Item-Stack' style = {CalcularStyle(7)} onClick = {() => setActual(7)}>
                    <Pasaje 
                    
                        _ID       = {7}
                        Ciudad    = 'Fukouka'
                        Kanji     = '福岡'
                        Codigo    = 'FUK'
                        Vuelo     = 'JP 905'
                        Fecha     = '08 SEP'
                        Hora      = '20:10'
                        Puerta    = 'C09'
                        Asiento   = '11C'
                        Clase     = 'Business'
                        Precio    = '$2.190.000'
                        Color     = '#fb7185'
                        Guardado  = {Guardados.includes(7)}
                        onGuardar = {Guardar}

                    />
                </div>
            </div>
            <p className = 'Navegador'> {Actual + 1} / {Total} </p>

            {!Sesion && (
                <p className = 'Navegador'> Inicia Sesion Para Guardar Tus Vuelos </p>
            )}

        </div>

    )
} export default Stack