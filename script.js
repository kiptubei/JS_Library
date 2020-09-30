let myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const myBook = new Book("Chinua Achebe", "Things Fall Apart", 250, false);
  myLibrary.push(myBook);
}

addBookToLibrary();
console.log(myLibrary);

let table = document.getElementById('di-library');
myLibrary.forEach(library => {
    let tr = document.createElement('tr');
    const values = Object.values(library);
    values.forEach(value => {
       let td = document.createElement('td');
       td.innerHTML= value;
       tr.appendChild(td);
    });
    table.appendChild(tr);
});