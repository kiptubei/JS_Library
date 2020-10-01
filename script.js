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

// addBookToLibrary();
// console.log(myLibrary);

// let table = document.getElementById("di-library");
// myLibrary.forEach((library) => {
//   let tr = document.createElement("tr");
//   const values = Object.values(library);
//   values.forEach((value) => {
//     let td = document.createElement("td");
//     td.innerHTML = value;
//     tr.appendChild(td);
//   });
//   table.appendChild(tr);
// });

// let author = document.getElementById("author").value;
// let title = document.getElementByName("title").value;
// let page = document.getElementByName("pages").value;
//
// console.log(author);
// console.log(title);
// console.log(pages);

function myFunction() {
  var x = document.getElementById("myForm");
  var text = "";
  var i;
  for (i = 0; i < x.length; i++) {
    text += x.elements[i].value + "<br>";
  }
  document.getElementById("demo").innerHTML = text;
}

console.log("script.js");
