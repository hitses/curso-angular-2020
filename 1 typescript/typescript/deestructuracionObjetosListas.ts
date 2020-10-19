(function() {
  const AVENGER = {
    nombre: 'Steve Rogers',
    clave: 'Capitán América',
    poder: 'Superfuerza',
  }

  const {nombre, clave, poder} = AVENGER;

  console.log(nombre);
  console.log(clave);
  console.log(poder);

  const extraer = ({nombre, clave, poder}: any) => {
    
    console.log(`Función:
${nombre}
${clave}
${poder}`);
  }

  extraer(AVENGER);

  const AVENGERS: string[] = ['Strange', 'Ironman', 'Thor', 'Spiderman'];
  
  const [strange, ironman, thor, spiderman] = AVENGERS;

  console.log(strange);
  console.log(ironman);
  console.log(thor);
  console.log(spiderman);

  const extraerArray = ([strange, ironman, thor, spiderman]: string[]) => {
    
    console.log(`Función:
${strange}
${ironman}
${thor}
${spiderman}`);
  }

  extraerArray(AVENGERS);
})();