// // Import with package manager:
// import data from test.json;

const data = {
  'name': 'app',
  'description': 'Dit is een discription',
  'number': 150,
  'boolean': true,
  'prop': null,
  'person': {
    'name': 'Kilian',
    'lastName': 'De Bock'
  },
  'people': [
    {
      'name': 'Emma',
      'lastName': 'Van Der Haegen'
    },
    {
      'name': 'Veli',
      'lastName': 'Duran Duran'
    }
  ]
};

console.log(data); // Json data
console.log(JSON.stringify(data)); // Json to string


// Imported string for json
const strData = '{"name":"app","description":"Dit is een discription","number":150,"boolean":true,"prop":null,"person":{"name":"Kilian","lastName":"De Bock"},"people":[{"name":"Emma","lastName":"Van Der Haegen"},{"name":"Veli","lastName":"Duran Duran"}]}';
// Make it json parsed.
console.log(JSON.parse(strData));
