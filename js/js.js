const API = './data.json';

async function getData(){

    let res = await fetch (API)
    let data = await res.json();
    console.log(data);
    
    let carrito = [];
    

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
    
    console.log(typeof(btnComprar));
    
    for (const el of btnComprar) {
        let idElemento = parseInt(el.getAttribute("id"));
        el.addEventListener("click", ()=>{
            pushCarrito(data[idElemento], idElemento)
        });
    }
    
    // push carrito
    
    function pushCarrito(num3, numId){
        if (carrito.indexOf(num3) === -1){
        carrito.push(num3);
        carritoContadorDeProductos();
        console.log(carrito);}else if (carrito.indexOf(num3) > -1){
            console.log(carrito);
            let buscarEnCarritoSiExiste= carrito.find(item => item.id == numId);
            console.log(buscarEnCarritoSiExiste)
            let resultado = buscarEnCarritoSiExiste.cantidad = buscarEnCarritoSiExiste.cantidad + 1;
            console.log(resultado);
            carritoContadorDeProductos()
        }
        
    }
    
    function carritoContadorDeProductos(){
        let carritoContador = document.getElementById("carritoContador");let resultado = 0;
        for(let i=0;i<carrito.length;i++){
            resultado = parseInt(resultado + carrito[i].cantidad);
            carritoContador.innerHTML =`
            ${parseInt(resultado)}
            `;
    
        }
    }
    
    
    // mostrar carrito
    
    let carritoIcono = document.getElementById('cart__ico__container');
    let carritoContainer = document.getElementById("carrito");
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
                <li>${carrito[i].cantidad}</li>
                
                
            `;
            carritoRenderPrecio.innerHTML += `
                <li>$ ${finalPrecio + (carrito[i].precio * carrito[i].cantidad)}</li>
            `;
            
            carritoRenderTotal.innerHTML = `
                <span>$ ${priceFinal()}</span>
            `
        }
    };
    
    // precio final
    
    const priceFinal = function obtenerPrecioFinal () {
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
    
    
    // comprar items del carrito
    
    let btn_comprar = document.getElementById("comprarItems");
    
    btn_comprar.addEventListener("click", comprarBtn);
    function comprarBtn(){
        carrito.splice(0, carrito.length);
        cerrarCarrito();
        resetearCantidad();
        let carritoContador = document.getElementById("carritoContador");
        carritoContador.innerHTML="";
        alert("Gracias por tu compra!")
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

getData();

// Gracias por todo profe enseñó muy bien !!!

// __________________________________________________________________________________________________
