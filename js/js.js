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
            disponibilidad: 15,
            url: "./assets/remera.jpg",
            descripcion: "Mochila Wireless Control importada.",
        },
        {
            id: 1,
            titulo: "Gorra Calabaza",
            subtitulo: "gorra calabaza wireless",
            precio: 500,
            disponibilidad: 10,
            url: "./assets/gorro.jpg",
            descripcion: "Mochila Wireless Control importada.",
        },
        {
            id: 2,
            titulo: "Jean",
            subtitulo: "jean wireless",
            precio: 1000,
            disponibilidad: 10,
            url: "./assets/jean.jpg",
            descripcion: "Mochila Wireless Control importada.",
        },
        {
            id: 3,
            titulo: "Camisa",
            subtitulo: "camisa wireless",
            precio: 800,
            disponibilidad: 20,
            url: "./assets/camisa.jpg",
            descripcion: "Mochila Wireless Control importada.",
        },
        {
            id: 4,
            titulo: "Short",
            subtitulo: "short wireless",
            precio: 400,
            disponibilidad: 15,
            url: "./assets/short.jpg",
            descripcion: "Mochila Wireless Control importada.",
        },
        {
            id: 5,
            titulo: "Buzo",
            subtitulo: "buzo wireless",
            precio: 700,
            disponibilidad: 5,
            url: "./assets/buzo.jpg",
            descripcion: "Mochila Wireless Control importada.",
        },
        {
            id: 6,
            titulo: "Vicera",
            subtitulo: "vicera wireless",
            precio: 250,
            disponibilidad: 30,
            url: "./assets/gorra.jpg",
            descripcion: "Mochila Wireless Control importada.",
        },
        {
            id: 7,
            titulo: "Mochila",
            subtitulo: "Mochila wireless",
            precio: 2000,
            disponibilidad: 25,
            url: "./assets/mochila.jpg",
            descripcion: "Mochila Wireless Control importada.",
        },
        {
            id: 7,
            titulo: "Mochila",
            subtitulo: "Mochila wireless",
            precio: 2000,
            disponibilidad: 25,
            url: "./assets/mochila.jpg",
            descripcion: "Mochila Wireless Control importada.",
        },
        {
            id: 7,
            titulo: "Mochila",
            subtitulo: "Mochila wireless",
            precio: 2000,
            disponibilidad: 25,
            url: "https://pbs.twimg.com/media/D6uc2kBX4AAv3xV.jpg",
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
}  
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
                <a class="btn__comprar">
                    <i class="fas fa-shopping-cart"></i>
                    Comprar
                </a>
            </div>
        </div>
    </div>
    `
}




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

