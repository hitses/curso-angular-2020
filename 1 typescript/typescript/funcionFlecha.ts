(function() {
  const FUNCION = function (a:string) {
    return a.toUpperCase();
  }

  const funcionFlecha = (a: string) => a.toUpperCase();

  console.log(FUNCION('normal'));
  console.log(funcionFlecha('flecha'));

  const SUMAR = (a: number, b: number) => a + b;

  console.log(SUMAR(10, 12));

  const HULK = {
    nombre: 'Hulk',
    smash() {
      setTimeout(() => {
        console.log(`¡${this.nombre} aplasta!`);
      }, 1000);
    }
  }

  HULK.smash();
})();