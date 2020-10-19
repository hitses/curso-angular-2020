(function() {
  const MENSAJE = 'Hola';
  const NUMERO = 22;

  if (true) {
    let mensaje = 'Mundo';
    console.log(mensaje);
  }

  let cualquierCosa: string | number;
  let hoy: Date;

  hoy = new Date();

  cualquierCosa = MENSAJE;
  cualquierCosa = NUMERO;
  // cualquierCosa = hoy;

  let spiderman = {
    nombre: 'Peter',
    edad: 22,
  }

  spiderman = {
    nombre: 'Jero',
    edad: 23,
    // poder: 'treparParede',
  }
})();