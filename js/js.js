

// __________________________________________________________________________________________________

async function getData(){
    let res = await fetch ('./data.json')
    let data = await res.json();
    console.log(data);

    

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
    
    let carrito = [];
    
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

    for(let i=0; i<data.length; i++){
        renderContainer.innerHTML += `
        <div class="productos__item">
            <div class="img__cont">
                <img id="item__img" src="${data[i].url}" alt="${data[i].titulo}">
            </div>
            <div class="item__descripcion">
                <h3 class="item__descripcion--title">${data[i].titulo}</h3>
                <p class="item__descripcion--descripcion">
                    ${data[i].descripcion}
                </p>
                <span class="span__precio">${data[i].precio}$</span>
                <div class="button__container">
                    <a class="btn__info">
                        <i class="fas fa-info-circle"></i>
                        Info
                    </a>
                    <a id="${data[i].id}" class="btn__comprar">
                        <i class="fas fa-shopping-cart"></i>
                        Comprar
                    </a>
                </div>
            </div>
        </div>
        `
    };
    
    
    // btn comprar / añadir al carrito
    let btnComprar = document.getElementsByClassName("btn__comprar");
    let assetsProductos = data;
    let carritoProductos = carrito;
    
    console.log(typeof(btnComprar));
    
    for (const el of btnComprar) {
        let idElemento = parseInt(el.getAttribute("id"));
        el.addEventListener("click", ()=>{
            pushCarrito(data[idElemento], idElemento)
        })
        ;
        
    }
    
    // push carrito
    
    function pushCarrito(num3, numId){
        if (carrito.indexOf(num3) === -1){
        carrito.push(num3);
        carritoContadorDeProductos();
        // alert(`se ha añadido al carrito el producto ${assets.productos[numId].titulo}`);
        }else if (carrito.indexOf(num3) > -1){
            console.log("asdadsasddsasda");
            let buscarEnCarritoSiExiste= carrito.find(item => item.id == numId);
            console.log(buscarEnCarritoSiExiste)
            let resultado = buscarEnCarritoSiExiste.cantidad = buscarEnCarritoSiExiste.cantidad + 1;
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
                <h3 id="modalTitle">${data[num].titulo}</h3>
                <p id="modalDescription">${data[num].descripcion}</p>
                <p id="modalPrecio" class="modal__precio">$ ${data[num].precio}</p>
                <button class="btnComprarModal" data-id="${num}-data">Añadir al carrito</button>
                <button id="btnCancelarModal">cancelar</button>
            </div>
        `
        console.log(`${data[num].id}`);
        
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
        return console.log(`modal del producto: ${data[num].titulo}`)
      
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
            console.log(`modal ${data[num2].titulo} removido`);
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
        console.log(priceFinal());
        
    
        carritoContainer.style.opacity = "1";
        carritoContainer.style.zIndex = "1";
        console.log(`carrito mostrado`);
        for(let i=0;i<carrito.length;i++){
            carritoRenderNombre.innerHTML += `
                <li>${carrito[i].titulo}</li>
            `;
            carritoRenderCantidad.innerHTML += `
                <li>${carrito[i].cantidad}<span class="addSpan" data-id="${carrito[i].id}">+</span>
                <span class="delSpan" data-id="${carrito[i].id}">-</span></li>
                
            `;
            carritoRenderPrecio.innerHTML += `
                <li>${finalPrecio + (carrito[i].precio * carrito[i].cantidad)}</li>
            `;
    
            
            
            carritoRenderTotal.innerHTML = `
                ${priceFinal()}
            `
            addModal()
            // <div>${carrito[i].titulo}</div>
        }
    };
    
    // añadir y eliminar elementos del carrito
    
    function addModal() {
        let addSpan = document.getElementsByClassName(`addSpan`);
        for (const el of addSpan) {
            let dataId = el.getAttribute("data-id");
            el.addEventListener("click", ()=>{
                // console.log(dataId);
                for (let i = 0; i < carrito.length; i++) {
                    // console.log(carrito[i]);
                    let prod = carrito[i];
                    // let objet = carrito[i].cantidad;
                    // console.log(objet);
                    
                    if(prod.id == dataId){
                        // objet = objet + 1;
                        console.log(carrito[i].cantidad);
                        carrito[i].cantidad = carrito[i].cantidad + 1;
                        console.log(carrito[i].cantidad);
                        // carritoRenderCantidad.innerHTML =`<li>${carrito[i].cantidad}<span class="addSpan" data-id="${carrito[i].id}">+</span>
                        // <span class="delSpan" data-id="${carrito[i].id}">-</span></li>`
                    }
                }
            })
        }
    }
    
    // let btnComprar = document.getElementsByClassName("btn__comprar");
    // let assetsProductos = assets.productos;
    // let carritoProductos = carrito;
    
    // console.log(typeof(btnComprar));
    
    // for (const el of btnComprar) {
    //     let idElemento = parseInt(el.getAttribute("id"));
    //     el.addEventListener("click", ()=>{
    //         pushCarrito(assets.productos[idElemento], idElemento)
    //     })
    //     ;
        
    // }
    
    // precio final
    
    const priceFinal =function obtenerPrecioFinal () {
        let resultado = 0;
        for (let i = 0; i < carrito.length; i++) {
            resultado += carrito[i].precio * carrito[i].cantidad
        }
        return resultado
    }
    
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
    
    
    // comprar items del carrito (ULTIMOOOO COMMIT/ARREGLO)
    
    let btn_comprar = document.getElementById("comprarItems");
    
    btn_comprar.addEventListener("click", comprarBtn);
    function comprarBtn(){
        carrito.splice(0, carrito.length);
        cerrarCarrito();
        resetearCantidad();
        let carritoContador = document.getElementById("carritoContador");
        carritoContador.innerHTML="";
        // alert("Gracias por tu compra!")
    }
    
    
    // resetear cantidad
    
    function resetearCantidad(){
        for (let i = 0; i < data.length; i++) {
            data[i].cantidad = 1;
        }
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
    
    
    
    
    
    
    
    
    
    
}

getData()

// function getData(){
//     fetch('../data.json')
//         .then(res => res.json())
//         .then(respuesta => {
//             console.log(respuesta)
//         })
// }
// getData();

// __________________________________________________________________________________________________

