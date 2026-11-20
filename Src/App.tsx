import Navbar from './Componentes/Organismos/Layouts/Navbar'

import { Routes, Route } from 'react-router-dom'

import '../Src/Css/Global/Html.css'

import Gastronomia from './Japon/Gastronomia'
import Estaciones  from  './Japon/Estaciones'
import Contact     from     './Japon/Contact'
import Galeria     from     './Japon/Galeria'
import Inicio      from      './Japon/Inicio'
import Perfil      from      './Japon/Perfil'
import Vuelo       from       './Japon/Vuelo'

function App() {
    return (
        <>

            <Navbar />

            <Routes>
                <Route 
                
                    path = '/Perfil'
                    element = { <Perfil /> }
                
                />
                <Route 
                
                    path = '/'
                    element = {<Inicio />}
                    
                />
                <Route 
                
                    path = '/Estaciones'
                    element = {<Estaciones />}
                    
                />
                <Route 
                
                    path = '/Galeria'
                    element = {<Galeria />}

                />
                <Route 
                
                    path = '/Gastronomia'
                    element = { <Gastronomia /> }
                
                />
                <Route 
                
                    path = '/Vuelo'
                    element = { <Vuelo /> }
                
                />
                <Route 
                
                    path = '/Contacto'
                    element = { <Contact /> }
                
                />
            </Routes>

        </>
    )
} export default App