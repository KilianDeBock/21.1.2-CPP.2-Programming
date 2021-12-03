function Book(title, author, isbnNummer, tags) {
  this.title = title;
  this.author = author;
  this.isbnNummer = isbnNummer;
  this.tags = tags;
}

const harry = new Book('De Steen der Wijzen', 'J.K. Rowling', 123456789, ['Fantasy', 'clasic']);
const lyttle = new Book('About Development.', 'Kilian De Bock', 987654321, ['StoneWard', 'Lyttle Development', 'Lyttle Company']);
const musk = new Book('Musk and his shit.', 'Elon Musk', 546321789, ['SpaceX', 'Tesla']);
console.log(harry);
console.log(lyttle);
console.log(musk);

function getInfo(book) {
  return `${book.title} - ${book.author}`;
}

function listTags(book) {
  return book.tags.map((tag, i) => i === 0 ? `${++i}. ${tag}` : `\n${++i}. ${tag}`).join('');
}

console.log(getInfo(harry));
console.log(listTags(harry));
console.log(getInfo(lyttle));
console.log(listTags(lyttle));
console.log(getInfo(musk));
console.log(listTags(musk));
