(() => {
  class Avenger {
    nombre: string;
    equipo: string;
    nombreReal: string;
    puedePelear: boolean;
    peleasGanadas: number;
    
    constructor(
      nombre: string,
      equipo: string,
      nombreReal: string,
      puedePelear: boolean,
      peleasGanadas: number,
    ) {
      this.nombre = nombre;
      this.equipo = equipo;
      this.nombreReal = nombreReal;
      this.puedePelear = puedePelear;
      this.peleasGanadas = peleasGanadas;
    }
  }

  const antman = new Avenger(
    'Antman',
    'Vengadores',
    'Scott',
    true,
    2,
  );

  console.log(antman);

  class Avengers {    
    constructor(
      public nombre: string,
      public equipo: string,
      public nombreReal: string,
      public puedePelear: boolean,
      public peleasGanadas: number = 0,
    ) {}
  }

  const spiderman = new Avengers(
    'Spiderman',
    'Vengadores',
    'Peter',
    true,
  );

  console.log(spiderman);
})();