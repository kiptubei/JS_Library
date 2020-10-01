let myLibrary = [];

  let table = document.getElementById('di-library');

  myLibrary.forEach(library => {
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

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(myBook) {
  myLibrary.push(myBook);
  console.log(myLibrary);
}

let form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const author = document.querySelector('#author').value;
  const title = document.querySelector('#title').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read').checked;
  let book = new Book(author, title, pages, read);
  console.log(book);
  addBookToLibrary(book);
});
