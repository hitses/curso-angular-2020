(function() {
  function getEdad() {
    return 200 + 20 + 2;
  }
  const NOMBRE = 'Jero';
  const APELLIDO = 'Gascón'
  const EDAD = 200;

  const SALIDA = `${NOMBRE} ${APELLIDO} (Edad: ${getEdad() - EDAD})`;

  console.log(SALIDA);
})();