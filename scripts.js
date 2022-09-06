function Producto (nombre, precio, stock){
    this.nombre=nombre
    this.precio=precio
    this.stock=stock
}
const ProductoA = new Producto ("Samsung Galaxy A-30",40000,10)
const ProductoB = new Producto ("Samsung Galaxy B-52",50000,15)
const ProductoC = new Producto ("Samsung Galaxy C-72",70000,8)
const ProductoD = new Producto ("Renault Clio",799999,577)
const ProductoE = new Producto ("Fiat Punto",899999,220)
const ProductoF = new Producto ("Ford Fiesta",999999,317)
let listaProductodos = [ProductoD, ProductoE, ProductoF]
let InfoProductodos = []
function listasProductodos(){
    for (const producto of listaProductodos){
        InfoProductodos.push (producto.nombre)
        InfoProductodos.push (producto.precio)
        InfoProductodos.push (producto.stock)
    }
}
listasProductodos()
let listaProducto= [ProductoA, ProductoB, ProductoC]
let InfoProducto = []
function listasProducto (){
    for (const producto of listaProducto){
        InfoProducto.push (producto.nombre)
        InfoProducto.push (producto.precio)
        InfoProducto.push (producto.stock)
    }
} 
listasProducto()
let sendEdad=document.getElementById("sendEdad")
sendEdad.addEventListener("click", separeteCategories)
function separeteCategories(e){
    e.preventDefault()
    divideCategories(itemnumber)
}
let entryEdad=document.getElementById("entryEdad")
function divideCategories(itemnumber){
    if (itemnumber<25){
    for (const producto of listaProducto){
        let card=document.createElement("div")
        card.innerHTML=
                        `<h2> Modelo: ${producto.nombre}</h2>
                        <p>  Precio:$ ${producto.precio}</p>
                        <p> Unidades restantes: ${producto.stock}</p>`
                        document.body.appendChild(card)
    }
} else if(itemnumber<45){
        for (const producto of listaProductodos){
            let card=document.createElement("div")
            card.innerHTML=
                            `<h2> Modelo: ${producto.nombre}</h2>
                            <p>  Precio:$ ${producto.precio}</p>
                            <p> Unidades restantes: ${producto.stock}</p>`
                            document.body.appendChild(card)
}
}
}
let itemnumber=entryEdad.value
let saveButton=document.getElementById("save-button")
saveButton.addEventListener("click",saveThis)
function saveThis(e){
    e.preventDefault()
    sessionStorage.setItem("edadUsuario",JSON.stringify(itemnumber))
    let valor=sessionStorage.getItem("edadUsuario")
    Swal.fire({
        tittle:`Guardaste la info`,
        text: `Haz guardado el boton`,
        icon:`success`,
        confirmButtonText:`Cool`,
        timmer:10000,
    }
    )
}
let grandescuento=document.getElementById("descuento")
grandescuento.addEventListener("click",descuentoProducto)
function descuentoProducto (e){
    e.preventDefault()
                    if (itemnumber<25){
                        Swal.fire({
                            tittle:`Guardaste la info`,
                            text: `Haz ingresado a los mejores precios`,
                            icon:`succes`,
                            confirmButtonText:`Cool`,
                            timmer:10000,
                    }
                    )
                        let promocion=document.createElement("div")
                        promocion.innerHTML=
                        `Usted obtuvo un descuento de 5000$`
                        document.body.appendChild(promocion)
                    }else if (itemnumber<45){
                        Swal.fire({
                            tittle:`Guardaste la info`,
                            text: `Haz ingresado a los mejores precios`,
                            icon:`Succes`,
                            confirmButtonText:`Cool`,
                            timmer:10000,
                    }
                    )
                        let promocion=document.createElement("div")
                        promocion.innerHTML=
                        `Usted obtuvo un descuento de 10000$`
                        document.body.appendChild(promocion)
                    }
}
let listaPosts=[]
let catalogo=document.getElementById("catalogo")
function render(lista){
    for(const producto of lista){
    let card= document.createElement("div")
    card.innerHTML=`<h3>${prducto.nombre}</h3>
                    <p> $ ${producto.precio}</p>`
    catologo.append(card)
}
}
fetch(`data.json`)
    .then((response)=>response.json)
    .then((data)=>render(data))