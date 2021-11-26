function displayName({first, last}) {
  console.log(`${first} ${last}`);
}

const person = {
  first: 'Elon',
  last: 'Musk',
  twitter: '@elonmusk',
  company: 'Space X'
};

displayName(person);


function calculateSalesTotals(sales) {
  // let price = 0, sale = 0;
  return sales.map(sale => {
    const {item, sold, original, discount = 0} = sale;
    sale['totalDiscount'] = original - (original * discount);
    sale['totalPaid'] = sold * sale.totalDiscount;
    return sale;
  });
  // for (let i in array) {
  //   const a = array[i];
  // }
  // return `Total price: ${price}\nTotal sale: ${sale}`;
}

const sales = [
  {item: 'PS4 Pro', sold: 3, original: 399.99},
  {item: 'Xbox One X', sold: 1, original: 499.99, discount: 0.1},
  {item: 'Nintendo Switch', sold: 4, original: 299.99},
  {item: 'PS2 Console', sold: 1, original: 299.99, discount: 0.8},
  {item: 'Nintendo 64', sold: 2, original: 199.99, discount: 0.65}
];

console.log(calculateSalesTotals(sales));