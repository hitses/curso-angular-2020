(() => {
  const sumar = (a: number, b: number): number => a + b;

  console.log(sumar(10, 12));

  const nombre = (): string => 'Hola Jero.';
  console.log(nombre());

  const obtenerSalario = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      resolve('Jero');
    })
  };

  obtenerSalario().then(a => console.log(a.toUpperCase()));
})();