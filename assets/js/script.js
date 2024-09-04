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
  if(minutos == 0){
    dias18.innerHTML = `${dias} días y ${horas} hora`;
  } else{
    dias18.innerHTML = `${dias} días, ${horas} horas ${minutos} minutos`;
  }
  
}, 1000);

// Clase Producto

class Producto {
  constructor(nombre, descripcion, precio, urlImagen) {
    this.nombre = nombre;
    this.descripcion = nombre;
    this.precio = nombre;
    this.urlImagen = nombre;
  }
}

class Carrito {
  constructor(producto, cantidad) {
    this.producto = producto;
    this.cantidad = cantidad;
  }
}
