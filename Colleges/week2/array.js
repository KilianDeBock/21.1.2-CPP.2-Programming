const courses = [];
const setExample = new Set(['test', 'hallo', 'test']);
const arrayExample = Array.from(setExample);
const spreadExample = [...setExample];

for (const iterator of spreadExample.entries()) {
  console.log(iterator);
  console.log(iterator[0]); // Index
  console.log(iterator[1]); // Value

  // Destructuring
  const [index, value] = iterator;

  // Manueel declareren, zelfde als destructuring
  const idx = iterator[0];
  const val = iterator[1];
}
console.log(arrayExample.entries());
console.log(spreadExample);

console.log('='.repeat(50));

// // alle elementen
// [].every()
// // een element
// [].some()

const isEveryWordTest = arrayExample.every(word => {
  return word === 'test';
});

console.log(isEveryWordTest); // false

const areSomeWordTest = arrayExample.some(word => {
  return word === 'test';
});

console.log(areSomeWordTest); // true


arrayExample.fill('bye');
console.log(arrayExample); // ['bye', 'bye']

const newArray = [1, 2, 3, 4, 5, 6];

newArray.fill('ciao', 1, 5);
console.log(newArray); // [ 1, 'ciao', 'ciao', 'ciao', 'ciao', 6 ]


const deepArray = [1, 2, 3, [1, 2, 3, 4], [1, 2, [3, 4]]];
console.log(deepArray.flat(2)); // Sneller en performanter
console.log(deepArray.flat(Infinity));


const otherDeepArray = [1, 2, 3, [1, 2, 3, 4, 5, 6], 4, 5, 6, 7, 8, 8];
const largerThanFour = otherDeepArray.flatMap(number => {
  return number > 4 ? number : [];
});
// // Shorter
// const largerThanFour = otherDeepArray.flatMap(number => number > 4 ? number : []);

console.log(largerThanFour);
console.log([...new Set(largerThanFour)]); // Removes duplicates

const numbersArray = [1, 2, 3, 4, 5, 6];
const sum = numbersArray.reduce((prev, curr) => {
  return prev + curr;
});
// // Shorter
// const sum = numbersArray.reduce((prev, curr) => prev + curr);

console.log(sum); // 21


const name = ['v', 'e', 'l', 'i'];
const nme = name.reduce((prev, curr) => {
  return prev + curr;
});
// // Shorter
// const sum = numbersArray.reduce((prev, curr) => prev + curr);

console.log(nme); // veli

// // Populair
// numbersArray.filter(); // returns array
// numbersArray.find(); // return first element
// numbersArray.map(); // returns array


