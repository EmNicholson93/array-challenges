function multiplesOfN(num) {
  let multiples = [];

  for(let i = 1; i <= 100; i++) {
    if(i % num === 0) {
      multiples.push(i);
    }
  }
  return multiples;
}

function uniqueValues(arr) {
  let unique = [...new Set(arr)];
  return unique;
}
module.exports = { multiplesOfN, uniqueValues };
