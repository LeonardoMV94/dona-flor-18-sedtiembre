// leo - cuanto falta para el 18 de septiembre

function getDiasRestantesPara18() {
  const ahora = new Date();
  const anioActual = ahora.getFullYear();
  let fecha18Sept = new Date(anioActual, 8, 18); // Mes 8 es septiembre (0-indexed)

  // Si ya pasó el 18 de septiembre de este año, calculamos para el próximo año
  if (ahora > fecha18Sept) {
    fecha18Sept.setFullYear(anioActual + 1);
  }

  // Calculamos la diferencia en milisegundos
  const diferencia = fecha18Sept - ahora;

  // Convertimos la diferencia a días, horas y minutos
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor(
    (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

  return { dias, horas, minutos };
}

const dias18 = document.querySelector("#dias-18");

setInterval(() => {
  const { dias, horas, minutos } = getDiasRestantesPara18();
  if (minutos == 0) {
    dias18.innerHTML = `${dias} días y ${horas} hora`;
  } else {
    dias18.innerHTML = `${dias} días, ${horas} horas ${minutos} minutos`;
  }
}, 1000);

// Clase Producto

class Producto {
  constructor(nombre, descripcion, precio, urlImagen, categoria) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.urlImagen = urlImagen;
    this.categoria = categoria;
  }
}

class ListadoProductos {
  productos = [];

  constructor() {}

  addProductos({ nombre, descripcion, precio, urlImagen, categoria }) {
    const newProducto = new Producto(
      nombre,
      descripcion,
      precio,
      urlImagen,
      categoria
    );
    this.productos.push(newProducto);
  }

  generateHtml() {
    const listadoProductos = document.querySelector("#listado-productos");
    let templateProdocto = "";
    for (const producto of this.productos) {
      templateProdocto = `
                        <div class="col">
                            <div class="card h-100">
                            <img src="${producto.urlImagen}" class="card-img-top" alt="${producto.nombre}">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">${producto.descripcion}</p>
                                <p class="card-category">Categoría: ${producto.categoria}</p>
                                <p class="card-price">Precio: ${producto.precio}</p>
                                <a href="#" class="btn btn-primary">Agregar</a>
                            </div>
                            </div>
                        </div>`;
      listadoProductos.innerHTML += templateProdocto;
      templateProdocto = ''
    }
  }
}

class Carrito {
  productos = [];
  constructor(producto, cantidad) {
    this.producto = producto;
    this.cantidad = cantidad;
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }

  // Hay que probar funcionalidad de esto con productos en el arreglo - JR
  quitarProducto(producto) {
    const productos = productos.filter((prod) => prod != producto.nombre);
  }

  // Hay que probar esto con productos en el arreglo - JR
  mostrarProductos() {
    if (this.productos.length === 0) {
      console.log("No hay productos en el carrito");
    } else {
      console.log("Productos en el carrito: ");
      this.productos.forEach((producto, index) => {
        console.log(
          `${index + 1}- ${producto.nombre} - $ ${producto.precio} cantidad: ${
            this.productos.cantidad
          }`
        );
      });
    }
  }

  obtenerTotal() {
    return this.productos.reduce(
      (total, p) => total + p.producto.precio * p.producto.cantidad,
      0
    );
  }
}

//objetos (productos)
// let producto1 = new Producto('Empanada de Pino',2500);
// let producto2 = new Producto('Empanada VeRgana', 10000);
// let producto3 = new Producto('Empanada de Pino sin Pasas', 2200);
// let producto4 = new Producto('Anticucho', 5000)

const productos = [
  //comida
  {
    nombre: "Anticuchos",
    urlImagen: "assets/img/anticucho.jpg",
    descripcion:
      "Brochetas de carne marinada, típicamente corazón de vacuno, asadas a la parrilla.",
    precio: 3000,
    categoria: "Entradas"
  },
  {
    nombre: "Asado",
    urlImagen: "assets/img/asado.jpg",
    descripcion:
      "Carne a la parrilla, frecuentemente de vacuno, cocida lentamente sobre brasas.",
    precio: 3500,
    categoria: "Comidas"
  },
  {
    nombre: "Carbonada",
    urlImagen: "assets/img/carbonada.jpg",
    descripcion:
      "Guiso de carne, zapallo, papas, y verduras en un caldo sabroso.",
    precio: 4000,
    categoria: "Comidas"
  },
  {
    nombre: "Charquican",
    urlImagen: "assets/img/charquican.webp",
    descripcion:
      "Guiso de carne seca desmenuzada, papas, zapallo y verduras, cocido junto con especias.",
    precio: 4000,
    categoria: "Comidas"
  },
  {
    nombre: "Choripan",
    urlImagen: "assets/img/choripan.jpg",
    descripcion:
      "Pan con chorizo a la parrilla, a menudo acompañado de pebre (salsa de tomate y cilantro.",
    precio: 2000,
    categoria: "Entradas"
  },
  {
    nombre: "Cordero asado",
    urlImagen: "assets/img/cordero.jpg",
    descripcion:
      "Carne de cordero cocida a la parrilla o al horno, con un sabor ahumado y jugoso, frecuentemente sazonada con hierbas y especias.",
    precio: 6000,
    categoria: "Comidas"
  },
  {
    nombre: "Empanadas",
    urlImagen: "assets/img/empanadas.png",
    descripcion:
      "Masa rellena con carne, cebolla y huevo, luego horneada o frita.",
    precio: 2500,
    categoria: "Entradas"
  },
  {
    nombre: "Humitas",
    urlImagen: "assets/img/humitas.jpg",
    descripcion:
      "Masa de maíz cocida al vapor, mezclada con cebolla y albahaca, envuelta en hojas demaíz.",
    precio: 1500,
    categoria: "Comidas"
  },
  {
    nombre: "Pastel de Choclo",
    urlImagen: "assets/img/pasteldeChoclo.jpg",
    descripcion:
      "Pastel de carne (vacuno y pollo) cubierto con un puré de maíz dulce, horneado hasta dorarse",
    precio: 4000,
    categoria: "Comidas"
  },
  {
    nombre: "Sopaipillas",
    urlImagen: "assets/img/sopaipillas.jpg",
    descripcion:
      "Masa frita de zapallo, crujiente por fuera y suave por dentro, a menudo servida con pebre o azúcar.",
    precio: 500,
    categoria: "Entradas"
  },
  {
    nombre: "Terremoto",
    urlImagen: "assets/img/terremoto.jpg",
    descripcion:
      "Cóctel chileno hecho con pipeño (vino dulce), helado de piña y un toque de granadina,servido en un vaso grande",
    precio: 7000,
    categoria: "Bebestibles"
  },
  {
    nombre: "Porotos con riendas",
    urlImagen: "assets/img/porotos.jpg",
    descripcion:
      "Porotos con riendas es un plato chileno que mezcla frijoles, zapallo, fideos y longaniza en un guiso reconfortante.",
    precio: 8500,
    categoria: "Comidas"
  },
  //bebestibles
  {
    nombre: "Bebidas",
    urlImagen: "assets/img/bebidas.jpg",
    descripcion: "Bebidas de fantasia diferentes sabores 350ml.",
    precio: 1500,
    categoria: "Bebestibles"
  },
  {
    nombre: "Agua mineral",
    urlImagen: "assets/img/mineral.jpg",
    descripcion: "Agua mineral con gas y sin gas 500ml",
    precio: 1000,
    categoria: "Bebestibles"
  },
  {
    nombre: "Jugos naturales",
    urlImagen: "assets/img/jugosNaturales.jpg",
    descripcion: "Jugos Natural de frutas (piña, frambuesa, frutilla, mango n",
    precio:2000,
    categoria: "Bebestibles"
  },
 {
    nombre: "Terremoto XL",
    urlImagen: "assets/img/terremoto.jpg",
    descripcion: "Pipeño, granadina y helado de piña", 
   precio: 3000 ,
   categoria: "Bebestibles"
 },

 {
  nombre: "Borgoña",
  urlImagen: "assets/img/borgona.jpg",
  descripcion: "Vino tinto con frutilla y azucar flor", 
 precio: 3000 ,
 categoria: "Bebestibles"
},

{
  nombre: "Mote con Huesillos",
  urlImagen: "assets/img/moteHuesillos.jpg",
  descripcion: "mezcla de jugo acaramelado de durazno, con mote de trigo y duraznos deshidratados", 
 precio: 3000 ,
 categoria: "Bebestibles"
},

{
  nombre: "Piscola",
  urlImagen: "assets/img/piscola.jpg",
  descripcion: "Pisco y bebida", 
 precio: 3000 ,
 categoria: "Bebestibles"
},

{
  nombre: "Piso Sour",
  urlImagen: "assets/img/piscoSour.jpg",
  descripcion: "El pisco sour es un cóctel preparado con pisco y zumo de limón.", 
 precio: 3000 ,
 categoria: "Bebestibles"
},

{
  nombre: "Piso Sour",
  urlImagen: "assets/img/piscoSour.jpg",
  descripcion: "El pisco sour es un cóctel preparado con pisco y zumo de limón.", 
 precio: 3000 ,
 categoria: "Bebestibles"
},

{
  nombre: "Melon con Vino",
  urlImagen: "assets/img/melvin.webp",
  descripcion: "Vino Tinto ", 
 precio: 3000 ,
 categoria: "Bebestibles"
},
];

//crear el carrito -> esto se hace en query.js o se refactoriza y se migra a javascript puro


// crear html de Productos
const listadoProductos = new ListadoProductos();
for (const producto of productos) {
  listadoProductos.addProductos(producto);
}

listadoProductos.generateHtml();
