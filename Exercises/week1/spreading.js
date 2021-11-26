function add(...args) {
  console.log(args.reduce((prev, curr) => prev + curr, 0));
}

add(1, 1, 1, 1);
add(1, 1);
add(1, 2, 3, 4);
add(1, 2);

function addOnlyNumbers(...args) {
  args[0] = typeof args[0] === 'number' ? args[0] : 0;
  const sum = args.reduce((prevVal, curVal) => typeof curVal === 'number' ? prevVal + curVal : prevVal);
  console.log(`There were ${args.length} arguments, the sum is ${sum}.`);
  // console.log(`Er waren ${args.length} argumenten, de som van de getallen is ${sum}`)
}

addOnlyNumbers('testhaha', 1, 2, 'testing', 'testing', 'testing', 3, 4, 5, 'test');


function combineArrays(...arrays) {
  console.log(...arrays.flat());
}

let array1 = ['H', 'e', 'l', 'l', 'o'];
let array2 = ['Z', 'o', 'i', 'e', 't', 's'];
let array3 = ['H', 'é', 'h', 'é'];

combineArrays(array1, array2);
combineArrays(array1, array2, array3);


function onlyUniques(...args) {
  console.log(args);
  const set = new Set(args);
  const unique = [...set];
  console.log(unique);
}

onlyUniques(1, 1, 2, 'heye', 'lol', 'heye')
;


function combineAllArrays() {

}

combineAllArrays();