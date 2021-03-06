export function shuffle(array) {
  if (Array.isArray(array) === true) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  } else {
    return array;
  }
}

export function calculateResults(data) {
  let result = 0;
  if (Array.isArray(data) === true) {
    data.forEach(item => {
      if (item.correct_answer === item.user_answer) {
        result = result + 1;
      }
    });
    return result;
  } else {
    return result;
  }
}
