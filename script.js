const productos = [
    { id: 1, nombre: "Tejo Acero Pro", precio: 110000, imagen: "https://via.placeholder.com/200" },
    { id: 2, nombre: "Mechas de pólvora", precio: 62000, imagen: "https://via.placeholder.com/200" },
    { id: 3, nombre: "Set de bocines", precio: 170000, imagen: "https://via.placeholder.com/200" }
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
    const producto = productos.find(p => p.id === id);

    const existe = carrito.find(p => p.id === id);

    if (existe) {
        existe.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

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