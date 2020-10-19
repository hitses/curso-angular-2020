(() => {
  interface Xmen {
    nombre: string;
    edad: number;
    poder?: string;
  }

  const enviarMision = (xmen: Xmen) => {
    console.log(`Enviando a ${xmen.nombre} a la misión.`);
  }

  const regresarMision = (xmen: Xmen) => {
    console.log(`Enviando a ${xmen.nombre} al cuartel.`);
  }

  const WOLVERINE: Xmen = {
    nombre: 'Logan',
    edad: 60,
  }

  enviarMision(WOLVERINE);
  regresarMision(WOLVERINE);
})();