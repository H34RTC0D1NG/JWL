import CardGastronomica from '../Componentes/Moleculas/CardGastronomica'
import { FaUtensils } from 'react-icons/fa'
import '../Css/Paginas/Gastronomia.css'

function Gastronomia() {
    return (

        <section id = 'Gastronomia'>
            <div className = 'Wrap'>
                <div className = 'Encabezado'>
                    
                    <p className = 'Etiqueta'>
                        <FaUtensils className = 'Icono' /> Del Mostrador A La Mesa     
                    </p>

                    <h2 className = 'Tt'>Gastronomia</h2>

                    <p className = 'Parrafo'>
                        La cocina japonesa se construye sobre el respeto al ingrediente: Temporada,
                        Textura y Presentación es como masterchef pero sin Ego, aqui importan tanto
                        el sabor. Del Sushi de mostrador al Ramen humeante de un local de barrio,
                        comer en Japón es tambien una forma de conocer el País.
                    </p>

                    <div className = 'contain row g-4'>
                        <div className = 'col-12 col-lg-4'>
                            <CardGastronomica 
                            
                                Enlace = '../../Src/Assets/Food/04.jpg'
                                Error = 'Imagen No Encontrada'
                                Titulo = 'Maki Rolls (巻き寿司)'
                                Descrp = 'El maki es uno de los tipos de sushi más conocidos de Japón. Su nombre viene de maki, que significa “enrollar”. Se prepara con arroz de sushi sazonado con vinagre de arroz, azúcar y sal. El arroz se extiende sobre una lámina de alga nori y encima se ponen rellenos como pescado crudo, pepino, palta o surimi.'
                            
                            />
                        </div>
                    </div>
                    <div className = 'contain row g-4'>
                        <div className = 'col-12 col-lg-4'>
                            <CardGastronomica 
                            
                                Enlace = '../../Src/Assets/Food/02.jpeg'
                                Error = 'Imagen No Encontrada'
                                Titulo = 'Ramen (ラーメン)'
                                Descrp = 'El ramen es una sopa de fideos de trigo servida en un caldo caliente. Llegó desde China a fines del siglo XIX y en Japón se transformó en uno de los platos más populares del país. El caldo es la base de todo y se cocina por horas con huesos de cerdo, pollo, pescado o vegetales. Según cómo se sazona, hay cuatro estilos principales: shoyu (salsa de soya), miso (pasta de soya fermentada), shio (sal) y tonkotsu (caldo espeso de hueso de cerdo).'
                            
                            />
                        </div>
                    </div>
                    <div className = 'contain row g-4'>
                        <div className = 'col-12 col-lg-4'>
                            <CardGastronomica 
                            
                                Enlace = '../../Src/Assets/Food/05.jpg'
                                Error = 'Imagen No Encontrada'
                                Titulo = 'Nigiri De Salmon (サーモン握り)'
                                Descrp = 'El nigiri es una de las formas más tradicionales del sushi. Su nombre viene de nigiru, que significa “apretar con la mano”, porque el arroz se moldea a mano en un bloque pequeño y alargado. Encima se pone una lámina de salmón crudo y, entre el pescado y el arroz, a veces se agrega un toque de wasabi. Se come de un bocado, mojando apenas el pescado en salsa de soya y no el arroz, para que no se desarme. Aunque hoy es de los más pedidos, el salmón crudo se empezó a usar en el sushi japonés recién en los años 80, gracias a la exportación de salmón desde Noruega. En algunos locales se sirve en versión aburi, con el salmón sellado con soplete por encima.'
                            
                            />
                        </div>
                    </div>
                    <div className = 'contain row g-4'>
                        <div className = 'col-12 col-lg-4'>
                            <CardGastronomica 
                            
                                Enlace = '../../Src/Assets/Food/06.jpg'
                                Error = 'Imagen No Encontrada'
                                Titulo = 'Curry Japones (日本のカレー)'
                                Descrp = 'El curry japonés, o kare raisu, es uno de los platos caseros más populares de Japón. Llegó a fines del siglo XIX a través de la marina británica, que a su vez lo había traído de la India. Los japoneses lo adaptaron a su gusto: es más espeso, más dulce y menos picante que el curry indio. Se prepara con una salsa a base de roux con especias, en la que se cocinan carne (cerdo, vacuno o pollo), papa, zanahoria y cebolla, y se sirve junto a arroz blanco. Una versión muy conocida es el katsu kare, que lleva encima una chuleta de cerdo apanada (tonkatsu). En Japón se come en casa, en comedores escolares y en cadenas de restaurantes, y la Fuerza Marítima de Autodefensa mantiene la tradición de comerlo todos los viernes.'
                            
                            />
                        </div>
                    </div>
                    <div className = 'contain row g-4'>
                        <div className = 'col-12 col-lg-4'>
                            <CardGastronomica 
                            
                                Enlace = '../../Src/Assets/Food/07.jpg'
                                Error = 'Imagen No Encontrada'
                                Titulo = 'Tempura (天ぷら)'
                                Descrp = 'La tempura es una técnica de fritura en la que mariscos y verduras se cubren con una masa liviana y se fríen hasta quedar crujientes. La trajeron los misioneros portugueses a Nagasaki en el siglo XVI, y los japoneses la refinaron hasta volverla un plato propio. La masa se hace con harina, huevo y agua muy fría, y se mezcla poco para que quede ligera y no absorba aceite. Los ingredientes más comunes son el camarón (ebi), el zapallo, la berenjena, el camote y la hoja de shiso. Se sirve recién frita con una salsa llamada tentsuyu, con rábano daikon rallado, o solo con un poco de sal. También se come sobre arroz en un bowl llamado tendon, o encima de fideos soba y udon.'
                            
                            />
                        </div>
                    </div>
                    <div className = 'contain row g-4'>
                        <div className = 'col-12 col-lg-4'>
                            <CardGastronomica 
                            
                                Enlace = '../../Src/Assets/Food/08.jpg'
                                Error = 'Imagen No Encontrada'
                                Titulo = 'Tonkatsu (豚カツ)'
                                Descrp = 'El tonkatsu es una chuleta de cerdo apanada y frita, uno de los platos más queridos de la cocina yoshoku, la comida japonesa inspirada en recetas occidentales. Nació a fines del siglo XIX en Tokio, adaptando la chuleta europea al gusto japonés. La carne se pasa por harina, huevo y panko, un pan rallado japonés de migas gruesas que lo deja muy crujiente por fuera y jugoso por dentro. Hay dos cortes principales: rosu, de lomo con algo de grasa, y hire, de filete más magro. Se sirve cortado en tiras con repollo picado bien fino, arroz, sopa de miso y una salsa espesa y dulce llamada salsa tonkatsu. También se come en katsudon, sobre arroz con huevo, o en katsu sando, entre pan de molde. Como katsu suena igual que “ganar” en japonés, muchos estudiantes lo comen antes de un examen para tener suerte.'
                            
                            />
                        </div>
                    </div>
                    <div className = 'contain row g-4'>
                        <div className = 'col-12 col-lg-4'>
                            <CardGastronomica 
                            
                                Enlace = '../../Src/Assets/Food/09.jpg'
                                Error = 'Imagen No Encontrada'
                                Titulo = 'Yakitori (焼き鳥)'
                                Descrp = 'El yakitori son brochetas de pollo asadas a la parrilla. Su nombre significa literalmente “pájaro asado”. Se cocinan sobre carbón, idealmente binchotan, un carbón japonés que da un calor parejo y casi no hace humo. Se sazonan de dos formas: con tare, una salsa dulce de soya, mirin y azúcar que se pincela mientras se asa, o solo con shio (sal). Se aprovecha casi todo el pollo. Algunas de las brochetas más conocidas son el negima (trutro con cebollín), el tsukune (albóndiga de pollo), el kawa (piel crujiente) y el tebasaki (alitas). Es la comida típica de los izakaya y de los puestos callejeros, y en Japón se suele acompañar con una cerveza bien fría después del trabajo.'
                            
                            />
                        </div>
                    </div>
                    <div className = 'contain row g-4'>
                        <div className = 'col-12 col-lg-4'>
                            <CardGastronomica 
                            
                                Enlace = '../../Src/Assets/Food/10.jpg'
                                Error = 'Imagen No Encontrada'
                                Titulo = 'Gyoza (餃子)'
                                Descrp = 'Las gyozas son empanaditas japonesas rellenas, inspiradas en los jiaozi chinos. Se hicieron populares en Japón después de la Segunda Guerra Mundial, cuando los soldados que volvían de Manchuria trajeron la receta. El relleno lleva carne de cerdo molida, repollo, nira (cebollín chino), ajo y jengibre, envuelto en una masa muy delgada que se cierra con pliegues. La forma más típica es la yaki-gyoza: primero se dora por abajo en el sartén y después se tapa con un poco de agua para cocinarla al vapor. Así queda crujiente por la base y suave por arriba. También existen la sui-gyoza (hervida) y la age-gyoza (frita). Se mojan en una salsa de soya con vinagre de arroz y rayu, un aceite de chile. Son el acompañamiento clásico del ramen, y ciudades como Utsunomiya y Hamamatsu compiten cada año por ser la capital de la gyoza en Japón.'
                            
                            />
                        </div>
                    </div>
                    <div className = 'contain row g-4'>
                        <div className = 'col-12 col-lg-4'>
                            <CardGastronomica 
                            
                                Enlace = '../../Src/Assets/Food/11.jpg'
                                Error = 'Imagen No Encontrada'
                                Titulo = 'Onigiri (おにぎり)'
                                Descrp = 'El onigiri es una bola de arroz moldeada a mano, normalmente en forma de triángulo, y envuelta en una tira de alga nori. Es uno de los alimentos más antiguos de Japón: ya se comía hace más de mil años, y los samuráis lo llevaban como ración en sus viajes y batallas porque era fácil de transportar. Por dentro lleva un relleno. Los más clásicos son el umeboshi (ciruela encurtida), el shake (salmón asado), el tuna mayo (atún con mayonesa), el kombu (alga cocida) y el okaka (escamas de bonito con soya). Hoy se encuentra en cualquier konbini (tienda de conveniencia) con un envoltorio especial que separa el nori del arroz para que el alga se mantenga crujiente hasta el momento de comerlo. Es el almuerzo práctico por excelencia y no falta en los bentos, los picnics y las colaciones escolares.'
                            
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
} export default Gastronomia