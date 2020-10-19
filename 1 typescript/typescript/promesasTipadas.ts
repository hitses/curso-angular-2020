(() => {
  const retirarDinero = (cantidad: number): Promise<number> => {
    let dineroActual = 1000;

    return new Promise((resolve, reject) => {
      if (cantidad > dineroActual) {
        reject('No hay suficientes fondos.');
      } else {
        dineroActual -= cantidad;
        resolve(dineroActual);
      }
    });
  }

  retirarDinero(100)
    .then((dineroActual: number) => console.log(`Quedan ${dineroActual}€.`))
    .catch(console.warn);
})();