// add solution here
function theBeatlesPlay(musicians, instruments) {
  let ret = [];
  for (var i = 0; i < musicians.length && i < instruments.length; i++) {
    ret.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return ret
}

function jognLennonFacts(array) {
  let counter = 0;
  while (counter < array.length) {
    array[counter] += `!!!`
  }
  return array;
}
