//

function addOnlyNumbersWithReduce(...args) {
  args[0] = typeof args[0] === 'number' ? args[0] : 0;
  const sum = args.reduce((prevVal, curVal) => typeof curVal === 'number' ? prevVal + curVal : prevVal)
  console.log(`There were ${args.length} arguments, the sum is ${sum}.`)
}

addOnlyNumbersWithReduce('testhaha', 1, 2, 'testing', 'testing', 'testing', 3, 4, 5, 'test')