const productos = [
    { id: 1, nombre: "KIT CANCHA, ARICLLA Y MECHAS", descripcion:"Paquete completo para montar una cancha. Incluye la caja de madera, una cantidad inicial de greda (arcilla) o plastilina industrial, el bocín y un suministro de mechas.", precio: 600000, imagen: "https://res.cloudinary.com/drpc7v6x8/image/upload/v1776273944/assets/kit_cancha_arcilla_mechas_dhcyzl.png" },
    { id: 2, nombre: "KIT MECHAS DE PÓLVORA PACK", descripcion:"Pack de mechas de alta sensibilidad, diseñadas para un estallido sonoro y seco al primer impacto. Fabricadas con pólvora blanca de alta calidad para garantizar el mejor rendimiento en cada lanzamiento. (100 UNIDADES)", precio: 23000, imagen: "https://res.cloudinary.com/drpc7v6x8/image/upload/v1776273945/assets/mechas_polvora_pack_tfjgib.png" },
    { id: 3, nombre: "SET TEJO ACERO PROFESIONAL", descripcion:"Tejos fabricados en acero macizo de alta resistencia, diseñados para soportar el impacto constante sin deformarse. Balance perfecto para un vuelo estable y un golpe seco contra el bocín.", precio: 25000, imagen: "https://res.cloudinary.com/drpc7v6x8/image/upload/v1776273946/assets/tejo_profesional_gvy9zs.png" },
    { id: 4, nombre: "TEJO DE LUJO DORADA", descripcion:"La combinación perfecta entre rendimiento profesional y un diseño exclusivo. Estos tejos cuentan con acabados premium y detalles personalizados, ideales para jugadores que buscan destacar tanto en técnica como en estilo.", precio: 120000, imagen: "https://res.cloudinary.com/drpc7v6x8/image/upload/v1776273945/assets/tejo_lujo_dorado_nwrixm.png" },
    { id: 5, nombre: "TEJO DE LUJO CHAMPAÑA", descripcion:"La combinación perfecta entre rendimiento profesional y un diseño exclusivo. Estos tejos cuentan con acabados premium y detalles personalizados, ideales para jugadores que buscan destacar tanto en técnica como en estilo.", precio: 120000, imagen: "https://res.cloudinary.com/drpc7v6x8/image/upload/v1776273945/assets/tejo_lujo_champa%C3%B1a_lk3ya0.png" },
    { id: 6, nombre: "KIT ESTUCHE CON TEJOS", descripcion:"El complemento ideal para transportar y organizar tus tejos de forma segura. Diseñado con compartimentos acolchados que evitan el roce entre las piezas, manteniendo el brillo y la forma de tus tejos por mucho más tiempo.", precio: 500000, imagen: "https://res.cloudinary.com/drpc7v6x8/image/upload/v1776273944/assets/estuche_tejo_ikm6rw.png" },
    { id: 7, nombre: "FUNDA TEJO EN CUERO", descripcion:"Protege y transporta tus fichas de tejo con estilo gracias a esta elegante funda elaborada en cuero genuino. Su diseño compacto y resistente está pensado para acompañarte en cada partida, manteniendo tus elementos seguros y organizados.", precio: 60000, imagen: "https://res.cloudinary.com/drpc7v6x8/image/upload/v1776273945/assets/funda_tejo_vwamki.png" },
    { id: 8, nombre: "GREDA INDUSTRIAL 10 KILOS", descripcion:"Optimiza el rendimiento de tu cancha con esta greda industrial de alta calidad, especialmente diseñada para la práctica del tejo. Su textura homogénea y maleable permite una correcta absorción de impactos, facilitando la fijación de las mechas y mejorando la experiencia de juego. (10 KILOS)", precio: 140000, imagen: "https://res.cloudinary.com/drpc7v6x8/image/upload/v1776273944/assets/greda_industrial_cnums3.png" },
    { id: 9, nombre: "BOCÍN METALICO", descripcion:"Bocín metálico está diseñado para ofrecer precisión, resistencia y una experiencia de juego auténtica. Fabricado en metal de alta calidad, garantiza una larga vida útil y un rendimiento constante incluso en condiciones de uso intensivo.", precio: 35000, imagen: "https://res.cloudinary.com/drpc7v6x8/image/upload/v1776273944/assets/bosin_metalico_phsjtx.png" },
    { id: 10, nombre: "PALUSTRE O PISTÓN", descripcion:"Este palustre o pistón está diseñado para trabajar la greda de forma eficiente, permitiendo nivelar, compactar y dar la forma adecuada a la superficie de juego para un rendimiento óptimo.", precio: 20000, imagen: "https://res.cloudinary.com/drpc7v6x8/image/upload/v1776273945/assets/palustre-piston_shasuc.png" },
    { id: 11, nombre: "KIT DE LIMPIEZA", descripcion:"Incluye elementos como un trapo o toalla rústica (tipo costal de fique) para limpiar el exceso de arcilla de las manos y el tejo.", precio: 90000, imagen: "https://res.cloudinary.com/drpc7v6x8/image/upload/v1776273944/assets/kit_limpieza_us5y4l.png" },
    { id: 12, nombre: "CAMISETA PROFESIONAL TRICOLOR", descripcion:"Lleva tu juego al siguiente nivel con esta camiseta profesional diseñada especialmente para jugadores de tejo. Confeccionada con materiales de alto rendimiento, ofrece comodidad, frescura y libertad de movimiento durante cada lanzamiento.", precio: 150000, imagen: "https://res.cloudinary.com/drpc7v6x8/image/upload/v1776273944/assets/camiseta-profesional-tricolor_xpkeap.png" },
    { id: 13, nombre: "GORRA TÍPICA TEJO UNIDAD", descripcion:"Complementa tu estilo con esta gorra inspirada en la cultura del tejo, perfecta para quienes disfrutan del juego y el buen ambiente. Su diseño moderno combina comodidad y personalidad, destacando un llamativo bordado que representa la esencia de compartir entre amigos.", precio: 75000, imagen: "https://res.cloudinary.com/drpc7v6x8/image/upload/v1776273945/assets/gorras-equipo_gc07uc.png" } 
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const contenedor = document.getElementById("contenedor-productos");
const carritoContenedor = document.getElementById("carrito-contenedor");
const totalElemento = document.getElementById("total");


// RENDER PRODUCTOS
function renderProductos()
{
    contenedor.innerHTML = "";

    productos.forEach(p =>
        {
        contenedor.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card-ecommerce position-relative">

                ${p.badge ? `<span class="badge-top">${p.badge}</span>` : ""}

                <div class="card-img-container">
                    <img src="${p.imagen}">
                </div>

                <div class="card-body-custom">
                    <h6 class="title">${p.nombre.toUpperCase()}</h6>
                    <p class="description">${p.descripcion}</p>
                    <p class="price">$${p.precio}</p>
                    <p class="desc">Ingeniería colombiana para el deporte nacional.</p>

                    <button class="btn-cart w-100" onclick="agregarAlCarrito(${p.id})">
                        AGREGAR AL CARRITO
                    </button>
                </div>

            </div>
        </div>
        `;
    });
}


// AGREGAR
function agregarAlCarrito(id)
{
    const alerta = document.getElementById('alerta-carrito');
    const producto = productos.find(p => p.id === id);

    const existe = carrito.find(p => p.id === id);

    if (existe) {
        existe.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }
    
    alerta.classList.remove('d-none');
    setTimeout(() => {
        alerta.classList.add('d-none');
    }, 2000);

    guardarCarrito();
    renderCarrito();
}


// ELIMINAR
function eliminarProducto(id)
{
    carrito = carrito.filter(p => p.id !== id);
    guardarCarrito();
    renderCarrito();
}


// GUARDAR
function guardarCarrito()
{
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


// RENDER CARRITO
function renderCarrito()
{
    carritoContenedor.innerHTML = "";
    let total = 0;

    carrito.forEach(p => {
        total += p.precio * p.cantidad;

        carritoContenedor.innerHTML += `
        <div class="d-flex justify-content-between mb-2">
            <div>
                <p>${p.nombre}</p>
                <small>Cant: ${p.cantidad}</small>
            </div>
            <div>
                <p>$${p.precio}</p>
                <button onclick="eliminarProducto(${p.id})">❌</button>
            </div>
        </div>
        `;
    });

    totalElemento.textContent = total;
}


// INIT
renderProductos();
renderCarrito();