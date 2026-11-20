import { API_CONTACTOS, CabeceraToken } from '../../Datos/Servicio';
import '../../Css/Componentes/Historial.css'
import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'

interface Mensajes {

    ID               : number;
    Nombre_Completo  : string;
    Correo           : string;
    Mensaje          : string;
    Respuesta?       : string | null;

}

interface Aviso {

    Texto : string;
    Tipo  : 'Ok' | 'Error';

}

type Filtro = 'Todos' | 'Pendientes' | 'Respondidos'

const API = API_CONTACTOS
const Filtros : Filtro[] = [ 'Todos', 'Pendientes', 'Respondidos' ]

const Colores = [

    '#e63946', '#f472b6', 
    '#f59e0b', '#38bdf8', 
    '#14b8a6', '#8b5cf6',
    '#84cc16', '#fb7185'

]

function Historial() {

    const [Historial, setHistorial] = useState <Mensajes[]> ([])
    const [Cargando,   setCargando] = useState <boolean> (true)
    const [FiltroActual, setFiltro] = useState <Filtro> ('Todos')
    const [Respondiendo, setRespondiendo] = useState <number | null> (null)
    const [Eliminando, setEliminando] = useState <number | null> (null)
    const [Texto, setTexto] = useState <string> ('')
    const [Enviando, setEnviando] = useState <boolean> (false)
    const [AvisoActual, setAviso] = useState <Aviso | null> (null)

    const MostrarAviso = (Texto : string, Tipo : 'Ok'| 'Error') => {
        setAviso({ Texto : Texto, Tipo : Tipo })
        setTimeout(() => setAviso(null), 3000)
    }

    useEffect (() => {
        
        fetch(API, { headers : CabeceraToken() })
        .then((Respuesta) => {
            if (Respuesta.status === 401) {
                throw new Error('Solo El Adminsitrador Puede Ver El Historial')
            } if (!Respuesta.ok) {
                throw new Error('No Se Pudo Cargar El Historial')
            } return Respuesta.json()
        })
        .then((Datos) => setHistorial(Datos))
        .catch((e : Error) => MostrarAviso(e.message, 'Error'))
        .finally(() => setCargando(false))
    
    }, [])

    const Eliminar = (ID : number) => {
        fetch(`${API}/${ID}`, { method : 'DELETE', headers : CabeceraToken() })
        .then((Respuesta) => {
            if (!Respuesta.ok) {
                throw new Error('Error Al Eliminar')
            }
            setHistorial((Lista) => Lista.filter((M) => M.ID !== ID))
            setEliminando(null)
            MostrarAviso('Mensaje Eliminado Exitosamente', 'Ok')
        })
        .catch(() => MostrarAviso('[+] No Se Pudo Eliminar El Mensaje ', 'Error'))
    }

    const Responder = (ID : number) => {
        if (Texto.trim() === '') {
            MostrarAviso('Escribe Una Respuesta Primero : ', 'Error')
            return
        }

        setEnviando(true)

        fetch(`${API}/${ID}/Responder`, {
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json',
                ...CabeceraToken()
            },
            body : JSON.stringify({
                Respuesta : Texto.trim()
            })
        })
        .then((Respuesta) => {
            if (!Respuesta.ok) {
                throw new Error('Error Al Responder')
            }
            setHistorial((Lista) => Lista.map((M) => M.ID === ID ? {
                ...M, Respuesta : Texto.trim(), Estado : 'Respondido'
            } : M ))
            setTexto('')
            setRespondiendo(null)
            MostrarAviso('Respuesta Enviada', 'Ok')
        })
        .catch(() => MostrarAviso('No Se Pudo Enviar La Respuesta', 'Error'))
        .finally(() => setEnviando(false))
    }

    const AbrirRespuesta = (M : Mensajes) => {
        setEliminando(null)
        setRespondiendo(M.ID)
        setTexto(M.Respuesta ? M.Respuesta : '')
    }

    const Iniciales = (Nombre : string) => {
        const Partes = Nombre.trim().split(' ')
        let Letras = Partes[0] ? Partes[0][0] : '?'
        if (Partes.length > 1) {
            Letras += Partes[Partes.length - 1][0]
        }
        return Letras.toUpperCase()
    }

    const Respondidos = Historial.filter((M) => M.Respuesta).length
    const Pendientes  = Historial.length - Respondidos

    let Lista = Historial

    if (FiltroActual === 'Pendientes') {
        Lista = Historial.filter((M) => !M.Respuesta)
    } if (FiltroActual === 'Respondidos') {
        Lista = Historial.filter((M) => M.Respuesta)
    }

    return (

        <section className = 'Historial Content-H'>
            <div className = 'Historial-Header'>
                <div>
                    <span className = 'Historial-Kanji'>受信箱</span>
                    <h2> Historial De Los Mensajes </h2>
                    <p className = 'Historial-Sub'>Mensajes recibidos desde el formulario de contacto</p>
                </div>
                <div className = 'Historial-Stats'>
                    <div className = 'Stat'>
                        <span className = 'Stat-Numero'> {Historial.length} </span>
                        <span className = 'Stat-Texto'> Total </span>
                    </div>
                    <div className = 'Stat Stat-Pendiente'>
                        <span className = 'Stat-Numero'> {Pendientes} </span>
                        <span className = 'Stat-Texto'> Pendientes </span>
                    </div>
                    <div className = 'Stat Stat-Ok'>
                        <span className = 'Stat-Numero'> {Respondidos} </span>
                        <span className = 'Stat-Texto'> Respondidos </span>
                    </div>
                </div>
            </div>

            <div className = 'Historial-Filtros'>
                {Filtros.map((F) => (
                    <button key = {F} className = {F === FiltroActual ? 'Activo' : ''} onClick = {() => setFiltro(F)}>
                        {F}
                    </button>
                ))}
            </div>

            {Cargando && (
                <div className = 'Historial-Vacio'> 
                    Cargando Mensajes ... 
                </div>
            )}

            {!Cargando && Lista.length === 0 && (
                <div className = 'Historial-Vacio'>
                    No Hay Mensajes {FiltroActual !== 'Todos' ? FiltroActual.toLowerCase() : ''}
                </div>
            )}

            <div className = 'Historial-Grid'>
                {Lista.map((M) => {
                    const Respondido = M.Respuesta ? true : false
                    const Estilo = { '--Acento' : Colores[M.ID % Colores.length] } as CSSProperties
                    return (
                        <article className = {Respondido ? 'Mensaje-Card Respondido' : 'Mensaje-Card'} style = {Estilo} key = {M.ID}>
                            <header className = 'Mensaje-Top'>
                                <div className = 'Mensaje-Avatar'>
                                    {Iniciales(M.Nombre_Completo)}
                                </div>
                                <div className = 'Mensaje-Info'>
                                    <h5> {M.Nombre_Completo} </h5>
                                    <a href = {'mailto:' + M.Correo}> {M.Correo} </a>
                                </div>
                                <span className = 'Mensaje-Estado'>
                                    {Respondido ? 'Respondido' : 'Pendiente'}
                                </span>
                            </header>

                            <p className = 'Mensaje-Texto'> {M.Mensaje} </p>

                            {Respondido && Respondiendo !== M.ID && (
                                <div className = 'Mensaje-Respuesta'>
                                    <span>Tu Respuesta</span>
                                    <p> {M.Respuesta} </p>   
                                </div>
                            )}

                            {Respondiendo === M.ID && (
                                <div className = 'Mensaje-Form'>
                                    <textarea 
                                    
                                        value = {Texto}
                                        onChange = {(e) => setTexto(e.target.value)}
                                        placeholder = {'Responder A : ' + M.Nombre_Completo + ' ...'}
                                        rows = {4}
                                        autoFocus

                                    />
                                    <div className = 'Mensaje-Form-Botones'>
                                        <button className = 'Btn-Cancelar' onClick = {
                                            () => setRespondiendo(null)
                                        }>Cancelar</button>
                                        <button className = 'Btn-Enviar' onClick = {() => Responder(M.ID)} disabled = {Enviando}>
                                            {Enviando ? 'Enviando ... ' : 'Enviar'}
                                        </button>
                                    </div>
                                </div>
                            )}

                            {Eliminando === M.ID && (
                                <div className = 'Mensaje-Confirmar'>
                                    <span> ¿Eliminar Este Mensaje? </span>
                                    <div>
                                        <button className = 'Btn-Cancelar' onClick = {() => setEliminando(null)}>No</button>
                                        <button className = 'Btn-Borrar' onClick = {() => Eliminar(M.ID)}>Si, Eliminar Mensaje</button>
                                    </div>
                                </div>
                            )}

                            {Respondiendo !== M.ID && Eliminando !== M.ID && (
                                <div className = 'Mensaje-Acciones'>
                                    <button className = 'Btn-Responder' onClick = {() => AbrirRespuesta(M)}>
                                        {Respondido ? 'Editar Respuesta' : 'Responder'}
                                    </button>
                                    <button className = 'Btn-Eliminar' onClick = {() => {setRespondiendo(null); setEliminando(M.ID)}}>
                                        Eliminar
                                    </button>
                                </div>
                            )}

                        </article>
                    )
                })}

            </div>

            {AvisoActual && (
                <div className = {'Historial-Aviso ' + AvisoActual.Tipo}>
                    {AvisoActual.Texto}
                </div>
            )}

        </section>

    )
} export default Historial