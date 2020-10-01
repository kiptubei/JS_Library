let myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(myBook) {
  myLibrary.push(myBook);
  let table = document.getElementById("di-library");
  myLibrary.forEach((library) => {
    let tr = document.createElement("tr");
    console.log(myLibrary.length);
    let values = Object.values(library);
    values.forEach((value) => {
      let td = document.createElement("td");
      td.innerHTML = value;
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });
}

let form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const author = document.querySelector("#author").value;
  const title = document.querySelector("#title").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").checked;
  const book = new Book(author, title, pages, read);
  addBookToLibrary(book);
});
