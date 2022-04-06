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
        },
        {
            id: 1,
            titulo: "Gorra Calabaza",
            subtitulo: "gorra calabaza wireless",
            precio: 500,
            url: "./assets/gorro.jpg",
            descripcion: "Mochila Wireless Control importada.",
        },
        {
            id: 2,
            titulo: "Jean",
            subtitulo: "jean wireless",
            precio: 1000,
            url: "./assets/jean.jpg",
            descripcion: "Mochila Wireless Control importada.",
        },
        {
            id: 3,
            titulo: "Camisa",
            subtitulo: "camisa wireless",
            precio: 800,
            url: "./assets/camisa.jpg",
            descripcion: "Mochila Wireless Control importada.",
        },
        {
            id: 4,
            titulo: "Short",
            subtitulo: "short wireless",
            precio: 400,
            url: "./assets/short.jpg",
            descripcion: "Mochila Wireless Control importada.",
        },
        {
            id: 5,
            titulo: "Buzo",
            subtitulo: "buzo wireless",
            precio: 700,
            url: "./assets/buzo.jpg",
            descripcion: "Mochila Wireless Control importada.",
        },
        {
            id: 6,
            titulo: "Vicera",
            subtitulo: "vicera wireless",
            precio: 250,
            url: "./assets/gorra.jpg",
            descripcion: "Mochila Wireless Control importada.",
        },
        {
            id: 7,
            titulo: "Mochila",
            subtitulo: "Mochila wireless",
            precio: 2000,
            url: "./assets/mochila.jpg",
            descripcion: "Mochila Wireless Control importada.",
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
    constructor (id, titulo, subtitulo, precio, descripcion){
        this.id = id;
        this.titulo = titulo.toUpperCase();
        this.subtitulo = subtitulo;
        this.precio = parseInt(precio);
        this.descripcion = descripcion;
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
                <a data-id="${assets.productos[i].id}" class="btn__comprar btn__infoComprar">
                    <i class="fas fa-shopping-cart"></i>
                    Comprar
                </a>
            </div>
        </div>
    </div>
    `
}

let modalContainer = document.getElementById("modal");
let btnInfoComprar = document.getElementsByClassName("btn__infoComprar");

let btnCancelarModal = document.getElementById("btnCancelarModal");
let btnComprarModal = document.getElementById("btnComprarModal");


for (const el of btnInfoComprar) {
    el.addEventListener("click", (e)=> {
        console.log(`index del producto: ${el.getAttribute("data-id")}`);
        let getId = parseInt(el.getAttribute("data-id"));
        for (let i = 0; i < assets.productos.length; i++) {
            if(getId === assets.productos[i].id){
                mostrarModal(i);
                btnCancelarModal.addEventListener("click", ()=>{
                        cerrarModal(i);
                    }
                )

                btnComprarModal.addEventListener("click", ()=>{
                    cerrarModal(i);
                    pushCarrito(i);
                    // mc();
                    // carritoRenderContainer.innerHTML += `
                    //     <div>${carrito[0].titulo}</div>
                    // `
                    console.log(`producto ${assets.productos[i].titulo} añadido al carrito`);
                    
                })
            }
        }
    })
}

let modalTitle = document.getElementById("modalTitle");
let modalDescription = document.getElementById("modalDescription");
let modalPrecio = document.getElementById("modalPrecio");

function mostrarModal(num){
    modalContainer.style.opacity = "1";
    modalContainer.style.zIndex = "1";
    modalTitle.innerHTML = `${assets.productos[num].titulo}`;
    modalDescription.innerHTML = `${assets.productos[num].descripcion}`;
    modalPrecio.innerHTML = `${assets.productos[num].precio}`;
    console.log(`modal del producto: ${assets.productos[num].titulo}`)
  
};

function cerrarModal (num2){
        modal.style.opacity = "0";
        modal.style.zIndex = "-1";
        console.log(`modal removido`);
}

function pushCarrito(num3){
    carrito.push(new AddCarrito(assets.productos[num3].id, assets.productos[num3].titulo, assets.productos[num3].subtitulo, assets.productos[num3].precio, assets.productos[num3].descripcion))
};


// mostrar carrito

let carritoIcono = document.getElementById('cart__ico__container');

carritoIcono.addEventListener("click", ()=>{
    mostrarCarrito();
    console.log(`carrito presionado`);
    
})

let carritoContainer = document.getElementById("carrito");

function mostrarCarrito(){
    carritoContainer.style.opacity = "1";
    carritoContainer.style.zIndex = "1";
    console.log(`carrito mostrado`);
    mc();
  
};


// renderizar carrito

let carritoRenderContainer = document.getElementById("carrito__render");

function mc(){
    for(let i=0;i<carrito.length;i++){
        carritoRenderContainer.innerHTML += `
        <div>${carrito[i].titulo}</div>
        `
    }
}

// cerrar carrito
let btnCerrarCarrito = document.getElementById("cerrarCarrito");

btnCerrarCarrito.addEventListener("click", cerrarCarrito);

function cerrarCarrito(){
    carritoContainer.style.opacity = "0";
    carritoContainer.style.zIndex = "-1";
    console.log("container carrito cerrado")
}


// carritoRenderContainer.innerHTML += `
//     ${carrito[0]}
// `

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


        // this.id = id;
        // this.titulo = titulo.toUpperCase();
        // this.subtitulo = subtitulo;
        // this.precio = parseInt(precio);
        // this.descripcion = descripcion;

// producto: ${assets.productos[num2].titulo} añadido al carrito y 

// function renderCarrito() {

// };




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

