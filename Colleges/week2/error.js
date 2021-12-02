// // Return error:
// throw 'Er ging iets mis';
// throw 400;

// // old:
// function Exception(message) {
//   this.message = message;
// }

class UserException {
  constructor(message) {
    this.message = message;
    this.name = 'UserException';
  }

  toString() {
    return `${this.name}: Er ging iets mis - ${this.message}`;
  }
}

// const err = new UserException('Foutmelding');
// console.log(err.toString());

// // Short:
// throw new UserException('Foutmelding').toString();
// throw new Error('URL Not valid');

const drivers = ['Hamilton', 'Verstappen'];

function getDriver(index) {
  if (drivers[index]) {
    return drivers[index];
  }
  throw new Error('Driver does not exist');
}

try {
  console.log(getDriver(0));
  console.log(getDriver(5));
} catch (e) {
  console.log('Drivers not found');
} finally {
  console.log('Gedaan!');
}

// throw new Error();
// throw new ReferenceError(); // Bestaat niet
// throw new SyntaxError(); // Niet goed afgesloten
// throw new TypeError(); // Verkeerd type data
// throw new RangeError(); // Niet berijkbaar

class QuoteError extends Error {
  constructor(params) {
    super(params);

    this.name = 'QuoteError'
    this.quote = "If you don't love me at my best, you don't deserve me at my worst."
  }
}

throw new QuoteError()