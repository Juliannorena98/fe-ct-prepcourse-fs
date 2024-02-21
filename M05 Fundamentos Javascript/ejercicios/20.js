function esVocal(letra) {
  if (letra.length !== 1) {
    return "Dato incorrecto";
  } else {
    if (letra === 'a') {
      return "Es vocal";
    } else if (letra === 'e') {
      return "Es vocal"; 
    } else if (letra === 'i') {
      return "Es vocal"; 
    } else if (letra === 'o') {
      return "Es vocal"; 
    } else if (letra === 'u') {
      return "Es vocal";
    } else {
      return "Dato incorrecto";
    }
  }
}

module.exports = esVocal;


