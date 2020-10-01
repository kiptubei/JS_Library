let myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(myBook) {
  let book = new Book("author", "title", 300, true);
  myLibrary.push(myBook);
  console.log(myLibrary.length);
}

const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const author = document.querySelector('#author').value;
  const title = document.querySelector('#title').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read').checked;
  const book = new Book(author, title, pages, read);
  console.log(book);
  addBookToLibrary(book);
});

let table = document.getElementById('di-library');

myLibrary.forEach(library => {
  console.log("present");
    let tr = document.createElement('tr');
    console.log(myLibrary.length);
    let values = Object.values(library);
    values.forEach(value => {
       let td = document.createElement('td');
       td.innerHTML= value;
       tr.appendChild(td);
    });
    table.appendChild(tr);
});
