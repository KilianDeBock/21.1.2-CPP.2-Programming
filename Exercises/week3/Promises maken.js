function job() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('hello world'), 5000);
  });
}

job().then((result) => console.log(result));

function isOddNumber(number) {
  return new Promise((resolve, reject) => {
    if (typeof number !== 'number') {
      reject(`"${number}" is geen getal`);
    } else if (number % 2) {
      setTimeout(() => resolve(`Yes, ${number} getal is oneven!`), 1000);
    } else {
      setTimeout(() => resolve(`${number} is een even getal`), 2000);
    }
  });
}

const numbers = [1, 2, 3, 'test', {lol: 1}];
numbers.forEach(number => isOddNumber(number).then(result => console.log(result)).catch(err => console.log(err)));

