# JWL

Projecto de Fullstack II - React y Microservicios.

```Json

{
    "Proyecto" : {
        "Nombre" : "Japon_R4",
        "Descripcion" : "Sitio web sobre Japon hecho en React + TypeScript. Tiene paginas de inicio, estaciones, galeria, gastronomia, vuelos con pasajes que se pueden guardar,                                     contacto y cuentas de usuario (login, registro y perfil).",
        "Tecnologias_App" : ["React 19", "TypeScript", "Vite", "React Router DOM 7", "React Icons"],
        "Estructura" : "Atomic Design (Atomos, Moleculas, Organismos)",
        "Paginas" : ["/", "/Estaciones", "/Galeria", "/Gastronomia", "/Vuelo", "/Contacto", "/Account", "/Perfil"],
        "Microservicios_Que_Consume" : [
            { "Nombre" : "Usuarios (Auth)", "URL" : "http://localhost:8083/Api/Usuarios" },
            { "Nombre" : "Mensajeria", "URL" : "http://localhost:8082/Api/Contactos" },
            { "Nombre" : "Vuelos", "URL" : "http://localhost:8084/Api/Vuelos" }
        ]
    },

    "Pruebas" : {
        "Total_Pruebas" : 50,
        "Total_Archivos" : 19,
        "Carpeta" : "Src/Test",
        "Comando" : "npm test",
        "Tecnologias" : [
            { "Nombre" : "Vitest", "Uso" : "Corre las pruebas (test, expect, vi para mocks)" },
            { "Nombre" : "React Testing Library", "Uso" : "Renderiza los componentes y simula eventos (render, fireEvent, waitFor, renderHook)" },
            { "Nombre" : "jsdom", "Uso" : "Simula el navegador (document, localStorage, eventos)" },
            { "Nombre" : "MemoryRouter", "Uso" : "Envuelve los componentes que usan Link o useNavigate" }
        ],
        "Mocks_Usados" : [
            "vi.fn() para funciones como onGuardar, Change, IrLogin",
            "vi.stubGlobal('fetch') para simular los microservicios sin levantarlos",
            "vi.stubGlobal('alert') para capturar los avisos del formulario",
            "localStorage.clear() antes de cada prueba de sesion"
        ]
    },

    "Archivos" : [
        {
            "Archivo" : "Input.test.tsx",
            "Tipo" : "Atomo",
            "Componente" : "Input",
            "Cantidad" : 1,
            "Pruebas" : [
                "El Input avisa lo que escribe el usuario"
            ]
        },
        {
            "Archivo" : "Pass.test.tsx",
            "Tipo" : "Atomo",
            "Componente" : "Input",
            "Cantidad" : 1,
            "Pruebas" : [
                "El Input recibe bien el tipo, el nombre y el valor"
            ]
        },
        {
            "Archivo" : "Form.test.tsx",
            "Tipo" : "Molecula",
            "Componente" : "CampoForm",
            "Cantidad" : 1,
            "Pruebas" : [
                "El CampoForm muestra la etiqueta y el input"
            ]
        },
        {
            "Archivo" : "Explorar.test.tsx",
            "Tipo" : "Atomo",
            "Componente" : "Explorar",
            "Cantidad" : 1,
            "Pruebas" : [
                "El boton Explorar tiene su texto y su link a /Vuelo"
            ]
        },
        {
            "Archivo" : "Gastronomia.test.tsx",
            "Tipo" : "Atomo",
            "Componente" : "Gastronomia",
            "Cantidad" : 2,
            "Pruebas" : [
                "El boton lleva a la ruta /Gastronomia",
                "El boton tiene la clase Borde"
            ]
        },
        {
            "Archivo" : "Fondo.test.tsx",
            "Tipo" : "Atomo",
            "Componente" : "Fondo",
            "Cantidad" : 2,
            "Pruebas" : [
                "Muestra la imagen con su enlace",
                "Usa el texto de error como alt"
            ]
        },
        {
            "Archivo" : "Logo.test.tsx",
            "Tipo" : "Atomo",
            "Componente" : "Logo",
            "Cantidad" : 2,
            "Pruebas" : [
                "Tiene la clase Logo-Sidebar",
                "Recibe bien el src y el alt"
            ]
        },
        {
            "Archivo" : "Live.test.tsx",
            "Tipo" : "Atomo",
            "Componente" : "Live",
            "Cantidad" : 2,
            "Pruebas" : [
                "Carga el video con su enlace y tipo mp4",
                "El video esta en loop, autoplay y con su clase"
            ]
        },
        {
            "Archivo" : "Separador.test.tsx",
            "Tipo" : "Atomo",
            "Componente" : "Separador",
            "Cantidad" : 1,
            "Pruebas" : [
                "Es un div con la clase Separador"
            ]
        },
        {
            "Archivo" : "Desplazate.test.tsx",
            "Tipo" : "Atomo",
            "Componente" : "Desplazate",
            "Cantidad" : 1,
            "Pruebas" : [
                "El texto Desplazate aparece con su clase"
            ]
        },
        {
            "Archivo" : "Cerezo.test.tsx",
            "Tipo" : "Atomo",
            "Componente" : "Cerezo",
            "Cantidad" : 2,
            "Pruebas" : [
                "Crea 8 petalos",
                "Cada petalo tiene su posicion y tamanio"
            ]
        },
        {
            "Archivo" : "Pasaje.test.tsx",
            "Tipo" : "Atomo",
            "Componente" : "Pasajes",
            "Cantidad" : 6,
            "Pruebas" : [
                "Muestra la ciudad, el codigo y el kanji",
                "Usa la variante Claro por defecto",
                "Cambia a la variante Vidrio",
                "Sin onGuardar no aparece el boton Save",
                "Dice Saved y tiene clase Activo si ya esta guardado",
                "Al hacer click en Save manda los datos del pasaje"
            ]
        },
        {
            "Archivo" : "CardContact.test.tsx",
            "Tipo" : "Molecula",
            "Componente" : "CardContact",
            "Cantidad" : 2,
            "Pruebas" : [
                "Muestra el titulo y el detalle",
                "Dibuja el icono dentro de su span"
            ]
        },
        {
            "Archivo" : "CardGastronomica.test.tsx",
            "Tipo" : "Molecula",
            "Componente" : "CardGastronomica",
            "Cantidad" : 3,
            "Pruebas" : [
                "Muestra el titulo y la descripcion",
                "Tiene la imagen del plato",
                "Tiene el link Ver Plato"
            ]
        },
        {
            "Archivo" : "Servicio.test.tsx",
            "Tipo" : "Datos / Sesion",
            "Componente" : "Servicio.ts",
            "Cantidad" : 9,
            "Pruebas" : [
                "Sin sesion guardada ObtenerSesion devuelve null",
                "GuardarSesion guarda la sesion y se puede leer",
                "Si el localStorage tiene basura devuelve null",
                "EsAdmin es true con rol Admin",
                "EsAdmin es false con rol Usuario",
                "CerrarSesion borra la sesion",
                "CabeceraToken arma el header Bearer",
                "LeerError devuelve el error del servidor o el mensaje por defecto",
                "useSesion se actualiza al iniciar y cerrar sesion"
            ]
        },
        {
            "Archivo" : "Vuelo.test.tsx",
            "Tipo" : "Datos / API",
            "Componente" : "Vuelo.ts",
            "Cantidad" : 4,
            "Pruebas" : [
                "CargarVuelos devuelve la lista y manda el token",
                "CargarVuelos lanza error con el status y el mensaje",
                "GuardarVuelo hace un POST con el Pasaje_ID",
                "QuitarVuelo hace un DELETE a la ruta del pasaje"
            ]
        },
        {
            "Archivo" : "Contacto.test.tsx",
            "Tipo" : "Organismo",
            "Componente" : "Contacto",
            "Cantidad" : 3,
            "Pruebas" : [
                "Si el nombre esta vacio avisa y no manda nada",
                "Si el correo no es valido avisa al usuario",
                "Con todo bien manda el POST y limpia el formulario"
            ]
        },
        {
            "Archivo" : "Login.test.tsx",
            "Tipo" : "Organismo",
            "Componente" : "Login",
            "Cantidad" : 4,
            "Pruebas" : [
                "Muestra el correo inicial en el input",
                "Si faltan datos muestra el error",
                "El boton ver muestra la contrasenia",
                "Con login correcto se guarda la sesion"
            ]
        },
        {
            "Archivo" : "Registro.test.tsx",
            "Tipo" : "Organismo",
            "Componente" : "Registro",
            "Cantidad" : 3,
            "Pruebas" : [
                "Si la contrasenia tiene menos de 6 caracteres muestra error",
                "Si las contrasenias no coinciden muestra error",
                "El boton Iniciar Sesion vuelve al login"
            ]
        }
    ],

    "Resumen_Por_Tipo" : {
        "Atomos" : 21,
        "Moleculas" : 6,
        "Organismos" : 10,
        "Datos" : 13
    }
}

```

Cada cosa que agregue la ire implementando ejem ejem [>_<]
