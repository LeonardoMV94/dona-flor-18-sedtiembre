//Practica de programación orientada a objetos

/* class Persona {
    #edad;
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.#edad = edad;
    }

    obtenerEdad() {  //metodo
        return this.#edad;
    }

}

const persona1 = new Persona('Hector', 35);
console.log(persona1.nombre);
console.log(persona1.obtenerEdad());
console.log(persona1.nombre = 'ana');
/* console.log(persona1.edad); */

//carrito de compras

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

}

class Carrito {
    constructor() {
        this.productos = [];
    }
    
    //agregar producto
agregarProducto(producto) {
    this.productos.push(producto);
    console.log(`El ${producto.nombre} ha sido agregado correctamente`)
}

    mostrarProducto() {
    if(this.productos.length === 0) {
        console.log('No hay productos en el carrito');
    }else {
        console.log('Productos en el carrito: ')
        this.productos.forEach((producto, index) => {
            console.log(`${index + 1}- ${producto.nombre} - $ ${producto.precio}`)
          })

    }
    }

    calcularTotal(){
        let total = 0;
        this.productos.forEach(producto => {
            total+= producto.precio
    })

    console.log(`Total a pagar: ${total}`);

}

}

//objetos (productos)
let producto1 = new Producto('Empanada de Pino',2500);
let producto2 = new Producto('Empanada Vegana', 10000);
let producto3 = new Producto('Empanada de Pino sin Pasas', 2200);
let producto4 = new Producto('Anticucho', 5000)

//crear el carrito

let carrito = new Carrito();

//agregar productos al carrito
carrito.agregarProducto(producto1);
carrito.agregarProducto(producto2);
carrito.agregarProducto(producto3);
carrito.agregarProducto(producto4);

//mostrar productos

carrito.mostrarProducto();

//sumar productos

carrito.calcularTotal();


