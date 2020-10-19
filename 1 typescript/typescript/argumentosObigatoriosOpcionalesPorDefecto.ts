(function() {
  function activar(
    quien: string,
    momento?: string,
    objeto: string = 'Batseñal',
  ) {
    if (momento) {
      console.log(`${quien} ha activado la ${objeto} ${momento}.`);
    } else {
      console.log(`${quien} ha activado la ${objeto}.`);
    }
  }
  activar('Jero', 'ahora', 'batidora');
})();