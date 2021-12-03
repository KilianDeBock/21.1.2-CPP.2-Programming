const set = new Set(['Jan', 'Piet', 'Joris', 'Corneel']);
console.log(set);


const arrayMethods = Array.from(set);
console.log(arrayMethods);

const arrayDestructuring = [...set];
console.log(arrayDestructuring);


const f1 = ['Hamilton', 'Verstappen', 'Bottas'];

for (const [index, value] of f1.entries()) {
  console.log(`Naam: ${value}, Podiumplaats: ${index}`);
}


function getFirstElementsSlice(array, count) {
  return array.slice(0, count);
}

function getFirstElementsFilter(array, count) {
  return array.filter(index => index <= count);
}

console.log(getFirstElementsSlice([1, 2, 3, 4, 5, 6], 3));
console.log(getFirstElementsFilter([1, 2, 3, 4, 5, 6], 3));


function renderArray(count, infill) {
  return Array(count).fill(infill);
}

console.log(renderArray(4, 11));


function allVaxxed(array) {
  return array.every(person => {
    return person.vaxxed === true;
  }) ? `Het feest kan doorgaan` : `Iedereen moet thuisblijven`;
}

let people = [
  {
    name: 'Adriaan',
    vaxxed: true
  },
  {
    name: 'Kenneth',
    vaxxed: true
  }
];

console.log(allVaxxed(people));


function coronaDetected(array) {
  return array.some(person => {
    return person.covid === true;
  });
}

people = [
  {
    name: 'Jan',
    covid: false
  },
  {
    name: 'Piet',
    covid: false
  },
  {
    name: 'Joris',
    covid: false
  },
  {
    name: 'Corneel',
    covid: false
  }
];
console.log(`Corona detected: ${coronaDetected(people)}`);


const cars = [
  {
    model: 'C2',
    brand: 'Citroën',
    availableColors: ['blue', 'gray', 'black']
  },
  {
    model: 'La Familia',
    brand: 'Ferrari',
    availableColors: ['red', 'yellow']
  },
  {
    model: 'Senna',
    brand: 'McLaren',
    availableColors: ['orange', 'black']
  },
];

function getColors(array) {
  const colors = array.map((item) => {
    return item.availableColors;
  }).flat();

  return [...(new Set(colors))];
}

console.log(getColors(cars));

const numbers = [1, 2, 3, 4, 5];

function calculateAverage(numbers) {
  return (numbers.reduce((prev, cur) => prev + cur)) / numbers.length;
}

console.log(calculateAverage(numbers));