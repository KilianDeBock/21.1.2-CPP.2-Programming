// // Mogelijkheid van url maken:
// `${url}/${query}`

// De echte manier:
const url = new URL('https://www.pgm.gent/pgm-2/consuming-data/api.html?search=test#url');
console.log(url);
console.log(url.hostname);
console.log(url.pathname);

url.pathname = '/pgm-2/consuming-data/internet.html';
console.log(url);
console.log(url.pathname);

console.log(url.searchParams);

console.log(url.searchParams.get('search'));

url.searchParams.append('language', 'en');
console.log(url.searchParams.toString());


// Dit kan ook, maar liever niet...
const urlEmpty = new URL('https://www.pgm.gent/pgm-2/consuming-data/api.html?search=test#url');

const searchP = new URLSearchParams('search=test');
urlEmpty.search = searchP;
console.log(urlEmpty);

// REST - CRUD - Create Read Update Delete
'https://www.blog.be/post'; // Get
'https://www.blog.be/post'; // Post
'https://www.blog.be/post?id=1'; // Get
'https://www.blog.be/post?id=1'; // Put
'https://www.blog.be/post?id=1'; // Patch
'https://www.blog.be/post?id=1'; // Delete

// // Stack overflow
// function foo() {
//   foo();
// }
//
// foo();

function getUser() {
  // _ kan gewoon in een nummer om zo makkelijker te tellen.
  let n = 1_000_000_000;

  while (n > 0) {
    n--;
  }

  console.log('N is 0!');
}

console.log('Voor de functie!');
// getUser();
setTimeout(() => {
  getUser();
}, 1000);
console.log('Andere app data al ingeladen.');