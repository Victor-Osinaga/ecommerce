const assets = {
    metodos: {
        buscar: (id) => {
            return assets.productos.find(producto => producto.id === id)
        },
        remover: (productos) => {
            productos.forEach(producto => {
                const item = assets.metodos.find(producto.id);
                item.disponibilidad = item.disponibilidad - item.disponibilidad;
            });

            console.log(assets);
        },
    },
    productos: [
        {
            id: 0,
            titulo: "Remera",
            subtitulo: "remera wireless",
            precio: 500,
            url: "./assets/remera.jpg",
            descripcion: "Mochila Wireless Control importada.",
            cantidad: 1,
        },
        {
            id: 1,
            titulo: "Gorra Calabaza",
            subtitulo: "gorra calabaza wireless",
            precio: 500,
            url: "./assets/gorro.jpg",
            descripcion: "Mochila Wireless Control importada.",
            cantidad: 1,
        },
        {
            id: 2,
            titulo: "Jean",
            subtitulo: "jean wireless",
            precio: 1000,
            url: "./assets/jean.jpg",
            descripcion: "Mochila Wireless Control importada.",
            cantidad: 1,
        },
        {
            id: 3,
            titulo: "Camisa",
            subtitulo: "camisa wireless",
            precio: 800,
            url: "./assets/camisa.jpg",
            descripcion: "Mochila Wireless Control importada.",
            cantidad: 1,
        },
        {
            id: 4,
            titulo: "Short",
            subtitulo: "short wireless",
            precio: 400,
            url: "./assets/short.jpg",
            descripcion: "Mochila Wireless Control importada.",
            cantidad: 1,
        },
        {
            id: 5,
            titulo: "Buzo",
            subtitulo: "buzo wireless",
            precio: 700,
            url: "./assets/buzo.jpg",
            descripcion: "Mochila Wireless Control importada.",
            cantidad: 1,
        },
        {
            id: 6,
            titulo: "Vicera",
            subtitulo: "vicera wireless",
            precio: 250,
            url: "./assets/gorra.jpg",
            descripcion: "Mochila Wireless Control importada.",
            cantidad: 1,
        },
        {
            id: 7,
            titulo: "Mochila",
            subtitulo: "Mochila wireless",
            precio: 2000,
            url: "./assets/mochila.jpg",
            descripcion: "Mochila Wireless Control importada.",
            cantidad: 1,
        },
    ]
};

class Producto {
    constructor (id, titulo, subtitulo, precio, disponibilidad, url, descripcion){
        this.id = id;
        this.titulo = titulo.toUpperCase();
        this.subtitulo = subtitulo;
        this.precio = parseInt(precio);
        this.disponibilidad = disponibilidad;
        this.url = url;
        this.descripcion = descripcion;
    }
};

let carrito = [

];

class AddCarrito{
    constructor (id, titulo, subtitulo, precio, descripcion, cantidad){
        this.id = id;
        this.titulo = titulo.toUpperCase();
        this.subtitulo = subtitulo;
        this.precio = parseInt(precio);
        this.descripcion = descripcion;
        this.cantidad = cantidad;
    }
};

// let btn = document.getElementById("btn");
let renderContainer = document.getElementById("productos__grid");


for(let i=0; i<assets.productos.length; i++){
    renderContainer.innerHTML += `
    <div class="productos__item">
        <div class="img__cont">
            <img id="item__img" src="${assets.productos[i].url}" alt="${assets.productos[i].titulo}">
        </div>
        <div class="item__descripcion">
            <h3 class="item__descripcion--title">${assets.productos[i].titulo}</h3>
            <p class="item__descripcion--descripcion">
                ${assets.productos[i].descripcion}
            </p>
            <span class="span__precio">${assets.productos[i].precio}$</span>
            <div class="button__container">
                <a class="btn__info">
                    <i class="fas fa-info-circle"></i>
                    Info
                </a>
                <a id="${assets.productos[i].id}" class="btn__comprar">
                    <i class="fas fa-shopping-cart"></i>
                    Comprar
                </a>
            </div>
        </div>
    </div>
    `
};



let btnComprar = document.getElementsByClassName("btn__comprar");
let assetsProductos = assets.productos;
let carritoProductos = carrito;

console.log(typeof(btnComprar));

for (const el of btnComprar) {
    let idElemento = parseInt(el.getAttribute("id"));
    el.addEventListener("click", ()=>{
        pushCarrito(assets.productos[idElemento], idElemento)
    });
    
}

// push carrito

function pushCarrito(num3, numId){
    if (carrito.indexOf(num3) === -1){
    carrito.push(num3);
    carritoContadorDeProductos();
    alert(`se ha añadido al carrito el producto ${assets.productos[numId].titulo}`);
    }else if (carrito.indexOf(num3) > -1){
        console.log("asdadsasddsasda");
        const buscarEnCarritoSiExiste= carrito.find(item => item.id == numId);
        console.log(buscarEnCarritoSiExiste)
        const resultado = buscarEnCarritoSiExiste.cantidad = buscarEnCarritoSiExiste.cantidad + 1;
        console.log(resultado);
        carritoContadorDeProductos()
    }
    // carrito.push(new AddCarrito(assets.productos[num3].id, assets.productos[num3].titulo, assets.productos[num3].subtitulo, assets.productos[num3].precio, assets.productos[num3].descripcion, "1"));
    // carritoContadorDeProductos();
    // alert(`se ha añadido al carrito el producto ${assets.productos[num3].titulo}`);
}


let modalContainer = document.getElementById("modal");

function renderModal(num) {
    modalContainer.innerHTML = `
        <div class="modal__container">
            <h3 id="modalTitle">${assets.productos[num].titulo}</h3>
            <p id="modalDescription">${assets.productos[num].descripcion}</p>
            <p id="modalPrecio" class="modal__precio">$ ${assets.productos[num].precio}</p>
            <button class="btnComprarModal" data-id="${num}-data">Añadir al carrito</button>
            <button id="btnCancelarModal">cancelar</button>
        </div>
    `
    console.log(`${assets.productos[num].id}`);
    
    mostrarModal(num);
}


let btnCancelarModal = document.getElementById("btnCancelarModal");




// for (const el of btnInfoComprar) {
//     el.addEventListener("click", (e)=> {
//         console.log(`index del producto: ${el.getAttribute("data-id")}`);
//         let getId = parseInt(el.getAttribute("data-id"));
//         for (let i = 0; i < assets.productos.length; i++) {
//             if(getId === assets.productos[i].id){
//                 mostrarModal(i);
//                 btnCancelarModal.addEventListener("click", ()=>{
//                         cerrarModal(i);
//                     }
//                 )

//                 btnComprarModal.addEventListener("click", ()=>{
//                     cerrarModal(i);
//                     pushCarrito(i);
//                     // mc();
//                     // carritoRenderContainer.innerHTML += `
//                     //     <div>${carrito[0].titulo}</div>
//                     // `
//                     console.log(`producto ${assets.productos[i].titulo} añadido al carrito`);
                    
//                 })
//             }
//         }
//     })
// }

let modalTitle = document.getElementById("modalTitle");
let modalDescription = document.getElementById("modalDescription");
let modalPrecio = document.getElementById("modalPrecio");

function mostrarModal(num){
    modalContainer.style.opacity = "1";
    modalContainer.style.zIndex = "1";
    return console.log(`modal del producto: ${assets.productos[num].titulo}`)
  
};

// function mostrarModal(num){
//     modalContainer.style.opacity = "1";
//     modalContainer.style.zIndex = "1";
//     modalTitle.innerHTML = `${assets.productos[num].titulo}`;
//     modalDescription.innerHTML = `${assets.productos[num].descripcion}`;
//     modalPrecio.innerHTML = `${assets.productos[num].precio}`;
//     return console.log(`modal del producto: ${assets.productos[num].titulo}`)
  
// };

function cerrarModal (num2){
        modal.style.opacity = "0";
        modal.style.zIndex = "-1";
        console.log(`modal ${assets.productos[num2].titulo} removido`);
}



function carritoContadorDeProductos(){
    let carritoContador = document.getElementById("carritoContador");
    let carritoProductos = carrito.length;
    // let result = 0;
    // for (let i = 0; i <= carrito.length; i++) {
    //     result = ressult + carrito[i].cantidad
    // }
    let resultado = 0;
    for(let i=0;i<carrito.length;i++){
        resultado = parseInt(resultado + carrito[i].cantidad);
        carritoContador.innerHTML =`
        ${parseInt(resultado)}
        `;

    }

    // carritoContador.innerHTML = carritoProductos;
    
}


// mostrar carrito

let carritoIcono = document.getElementById('cart__ico__container');
let carritoContainer = document.getElementById("carrito");
// let carritoRenderContainer = document.getElementById("carrito__render");
let carritoRenderNombre = document.getElementById("productosNombre");
let carritoRenderCantidad = document.getElementById("productosCantidad");
let carritoRenderPrecio = document.getElementById("productosPrecio");
let carritoRenderTotal = document.getElementById("spanTotal");


carritoIcono.addEventListener("click", ()=>{
    mostrarCarrito();
    console.log(`carrito presionado`);
    
})



function mostrarCarrito(){

    let finalPrecio=0;
    console.log(finalPrecio);

    carritoContainer.style.opacity = "1";
    carritoContainer.style.zIndex = "1";
    console.log(`carrito mostrado`);
    for(let i=0;i<carrito.length;i++){
        carritoRenderNombre.innerHTML += `
            <li>${carrito[i].titulo}</li>
        `;
        carritoRenderCantidad.innerHTML += `
            <li>${carrito[i].cantidad}</li>
        `;
        carritoRenderPrecio.innerHTML += `
            <li>${finalPrecio + (carrito[i].precio * carrito[i].cantidad)}</li>
        `;

        
        
        carritoRenderTotal.innerHTML = `
            ${finalPrecio = (finalPrecio + carrito[i].precio * carrito[i].cantidad)}
        `
        // <div>${carrito[i].titulo}</div>
    }
};

// cerrar carrito
let btnCerrarCarrito = document.getElementById("cerrarCarrito");

btnCerrarCarrito.addEventListener("click", cerrarCarrito);

function cerrarCarrito(){
    carritoContainer.style.opacity = "0";
    carritoContainer.style.zIndex = "-1";
    console.log("container carrito cerrado");
    carritoRenderNombre.innerHTML = "";
    carritoRenderCantidad.innerHTML = "";
    carritoRenderPrecio.innerHTML = "";
    carritoRenderTotal.innerHTML = "";
}


// comprar items del carrito

let btn_comprar = document.getElementById("comprarItems");

btn_comprar.addEventListener("click", comprarBtn);
function comprarBtn(){
    carrito = [];
    cerrarCarrito();
    let carritoContador = document.getElementById("carritoContador");
    carritoContador.innerHTML="";
    alert("Gracias por tu compra!")
}

// LIBRERIA TAGCLOUD
const Texts = [
    'DEBITO', 'ECOMMERCE','ENVIOS INTERNACIONALES', 'SEGURIDAD', 'MODA', 'CUOTAS FIJAS', 'EFECTIVO', 'COMPRA PROTEGIDA', 'ONLINE', 'COMODIDAD', 'TODAS LAS TARJETAS', 'ENVIOS NACIONALES'
  ]
  
  var tagCloud = TagCloud('.Sphere', Texts, {
   radius: 140,
   maxSpeed: 'fast',
   initSpeed: 'fast',
   direction: 240,
   keep: true,
   useContainerInlineStyles: true
  });
  
  var color = '#404040';
  document.querySelector('.Sphere').style.color = color;






// AGREGAR PRODUCTOS AL CATALOGO
// btn.addEventListener("click", agregarNuevoProd);

// function agregarNuevoProd(){
//     let cantidad = prompt("ingresela cantidad de productos que quiere comprar ")
//     for (let i=1; i <= cantidad; i++) {
//         let id = prompt(`ingrese el ID ${i}`);
//         let titulo = prompt(`ingrese el TITULO ${i}`);
//         let subtitulo = prompt(`ingrese el SUBTITULO ${i}`);
//         let precio = parseInt(prompt(`ingrese el precio ${i}`));
//         let disponibilidad = prompt(`ingrese la DISPONIBILIDAD ${i}`);
//         let url = prompt(`ingrese la URL ${i}`);
//         let descripcion = prompt(`ingrese la DESCRIPCION ${i}`);

       
//             assets.productos.push(new Producto(id, titulo, subtitulo, precio, disponibilidad, url, descripcion));
//         /*else{
//             nombre = prompt(`ingrese de nuevo el NOMBRE del producto ${i}`);
//             precio = parseInt(prompt(`ingrese de nuevo el PRECIO del producto ${i}`));
//         }*/
//     }
// }

