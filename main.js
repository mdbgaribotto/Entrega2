
const carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
const total = carrito.reduce((acumulador, producto) => acumulador + producto.price, 0);
document.getElementById("cart-total").innerHTML = `${carrito.length}  - $${total}`;


function generarCardsCarrito() {
    carrito.forEach((producto) => {
        document.getElementById("cards-modal").innerHTML += `<div>
            <p>${producto.id}
            - ${producto.title}
            - <img src="${producto.img}" style="width:30px">
            - ${producto.price}
            - <button>Sacar del carrito</button>
            </div>`
    })
    
}

const productos = [
    {
        id:1,
        title:"Cuadro",
        img:"https://i03.hsncdn.com/is/image/HomeShoppingNetwork/rocs1200/aluratek-8-distressed-wood-digital-photo-frame-with-sli-d-2020101516165972~9840347w.jpg",  
        price: 1200
    },
    {
        id:2,
        title:"Foto",
        img:"https://prd-static-default-1.sf-cdn.com/resources/images/store/2022/global/980x470/UK/Prints/xstandard-prints-980x470-220216.jpg.pagespeed.ic.kbDrXBXR4-.jpg",
        price: 600
    },
    {
        id:3,
        title:"Guirnalda",
        img:"https://static4.todobonito.com/m/2014/05/Polaroids-4-Hang-587x391.jpg",
        price: 800
    },
];



productos.forEach((producto) => {
    const idButton = `add-cart${producto.id}` 
    document.getElementById("seccion-card").innerHTML += `<div class="card">
        <div class="precio">
            <p>$${producto.price}</p>
        </div>
        <img src="${producto.img}">
        <h4>${producto.title}</h4>
        <a class="boton" id="${idButton}" data-id="${producto.id}">Añadir Al Carrito</a>
    </div>`;
})

productos.forEach((producto) => {
    const idButton = `add-cart${producto.id}` 
    document.getElementById(idButton).addEventListener('click', () => {
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        const total = carrito.reduce((acumulador, producto) => acumulador + producto.price, 0);
        document.getElementById("cart-total").innerHTML = `${carrito.length} - $${total}`;
        document.getElementById("cart-elements").innerHTML = ""
        function generarCardsCarrito() {
            carrito.forEach((producto) => {
                document.getElementById("cards-modal").innerHTML += `<div>
                    <p>${producto.id}
                    - ${producto.title}
                    - <img src="${producto.img}" style="width:30px">
                    - ${producto.price}
                    - <button>Sacar del carrito</button>
                    </div>`
            })
            
        }
    })
});
