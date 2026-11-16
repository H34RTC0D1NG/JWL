// Importamos Los Iconos De React Icons Ya Que Los Links De Fontawesome o Ioicons No Funcionan En React

import { RiContactsBook2Fill } from 'react-icons/ri'
import { MdTipsAndUpdates } from 'react-icons/md'
import { BsCaretRightFill } from 'react-icons/bs'
import { PiBowlFoodFill } from 'react-icons/pi'
import { FaPaperPlane } from 'react-icons/fa6'
import { AiFillPicture } from 'react-icons/ai'
import { IoLogOut } from 'react-icons/io5'
import { IoMdHome } from 'react-icons/io'
import { FaCloud } from 'react-icons/fa'

// Importamos Los Iconos Que Darán a Luz Nuestro Light-Mode y Dark-Mode

import { FaSun } from 'react-icons/fa6'
import { GiMoon } from 'react-icons/gi'

// Importamos El Link Proveniente De Bootstrap Para Manejar Los Path

import { Link } from 'react-router-dom'

// Importamos El Complemento Del Logo Para Que Se Vea

import Logo from '../../Atomos/Logo'

// Importamos El Css Para Que Funcione

import '../../../Css/Layout/Navbar.css'

import { useEffect, useState } from 'react'

function Navbar() {

    const [Cerrado, setCerrado] = useState(true)
    const [Oscuro,   setOscuro] = useState(false)

    useEffect (() => {
            
        if (Oscuro) {
            document.body.classList.add('Dark')
        } else {
            document.body.classList.remove('Dark')
        }

    }, [Oscuro] )

    return (

        <>

            <div className = {Cerrado ? 'Overlay' : 'Overlay Activo'} onClick = {() => setCerrado(true)} />

            <nav className = {Cerrado ? 'Sidebar Close' : 'Sidebar'}>
                <header className = 'Header'>
                    <div className = 'Img-Text'>
                        <div className = 'Image'>
                            <Logo 
                            
                                Enlace = '../../../../Public/Logo/01.png' 
                                Error = 'Imagen No Encontrada' 
                        
                            />   
                        </div>      
                    
                        <div className = 'Text Header-Text'>
                            <span className = 'Name'>Japón</span>
                            <span className = 'City'>Tokyo</span>
                        </div>
                    </div>

                    <div className = 'Toggle' onClick = {() => setCerrado(!Cerrado)}>
                        <BsCaretRightFill className = 'Svg' />
                    </div>

                </header>

                <div className = 'Menu-Bar'>
                    <div className = 'Menu'>
                        <ul className = 'Menu-Links'>
                            <li className = 'Nav-Link'>
                                <Link to = '/' className = 'Link-A'>
                                    <IoMdHome className = 'Icon' />
                                    <span className = 'Text Nav-Text'>Inicio</span>
                                </Link>
                            </li>
                            <li className = 'Nav-Link'>
                                <Link to = '/Estaciones' className = 'Link-A'>
                                    <FaCloud className = 'Icon' />
                                    <span className = 'Text Nav-Text'>Estaciones</span>
                                </Link>
                            </li>
                            <li className = 'Nav-Link'>
                                <Link to = '/Galeria' className = 'Link-A'>
                                    <AiFillPicture className = 'Icon' />
                                    <span className = 'Text Nav-Text'>Galeria</span>
                                </Link>
                            </li>
                            <li className = 'Nav-Link'>
                                <Link to = '/Gastronomia' className = 'Link-A'>
                                    <PiBowlFoodFill className = 'Icon' />
                                    <span className = 'Text Nav-Text'>Gastronomia</span>
                                </Link>
                            </li>
                            <li className = 'Nav-Link'>
                                <Link to = '/Datos' className = 'Link-A'>
                                    <MdTipsAndUpdates className = 'Icon' />
                                    <span className = 'Text Nav-Text'>Antes De Viajar</span>
                                </Link>
                            </li>
                            <li className = 'Nav-Link'>
                                <Link to = '/Vuelo' className = 'Link-A'>
                                    <FaPaperPlane className = 'Icon' />
                                    <span className = 'Text Nav-Text'>Vuelos</span>
                                </Link>
                            </li>
                            <li className = 'Nav-Link'>
                                <Link to = '/Contacto' className = 'Link-A'>
                                    <RiContactsBook2Fill className = 'Icon' />
                                    <span className = 'Text Nav-Text'>Contacto</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className = 'Bottom-Content'>
                        
                        <li className = 'Nav-Link'>
                            <Link to = '/' className = 'Link-A'>
                                <IoLogOut className = 'Icon' />
                                <span className = 'Text Nav-Text'>Desloguearse</span>
                            </Link>
                        </li>

                        <li className = 'Nav-Link Mode'>

                            <div className = 'Moon-Sun'>
                                <FaSun className = 'Icon Sun' />
                                <GiMoon className = 'Icon Moon' />
                            </div>

                            <span className = 'Mode-Text Text'> {Oscuro ? 'Light Mode' : 'Dark Mode'} </span>

                            <div className = 'Toggle-Switch' onClick = {() => setOscuro(!Oscuro)}>
                                <span className = 'Switch'></span>
                            </div>

                        </li>
                    </div>

                </div>
            </nav>
        
        </>

    )
} export default Navbar