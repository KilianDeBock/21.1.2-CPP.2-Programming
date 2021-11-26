function Book(title, author, isbnNummer, tags) {
  this.title = title;
  this.author = author;
  this.isbnNummer = isbnNummer;
  this.tags = tags;
}

const harry = new Book('Harry Potter', 'Kilian', 123456789, 'Fantasy, clasic.')
