var myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}
//capital != null
if (localStorage.token !== null){
  console.log(myLibrary);
  myLibrary = JSON.parse(localStorage.getItem('library'));
  console.log(myLibrary);
  let table = document.getElementById("di-library");
  //let library = myLibrary[myLibrary.length - 1];

  myLibrary.forEach((library) => {
    let tr = document.createElement("tr");

    let values = Object.values(library);
    values.forEach((value) => {
      let td = document.createElement("td");
      td.innerHTML = value;
      tr.appendChild(td);

      if(value === true || value === false){
        let status = document.createElement("input");
        status.setAttribute('type', 'checkbox'); 
        status.setAttribute('name', "status");

        if (value === true){
          status.setAttribute('checked', 'checked');
        }

        status.setAttribute('id', myLibrary.length - 1);
        status.onclick = function () {
          if (value === true){
            value === false;
          }else{
            value === true;
          }
        };
        tr.appendChild(status);
      }

    });

    let del = document.createElement("button");
    del.innerHTML = "Remove";
    del.setAttribute('class','delete');
    del.setAttribute('id', myLibrary.length - 1);
    del.onclick = function () {
      table.removeChild(tr);
    };

    tr.appendChild(del);
    table.appendChild(tr);

  });

}

function addBookToLibrary(myBook) {
  myLibrary.push(myBook);
  let table = document.getElementById("di-library");
  let library = myLibrary[myLibrary.length - 1];
  let tr = document.createElement("tr");
  console.log(myLibrary.length);

  let values = Object.values(library);
  values.forEach((value) => {
    let td = document.createElement("td");
    td.innerHTML = value;
    tr.appendChild(td);

    if(value === true || value === false){
      let status = document.createElement("input");
      status.setAttribute('type', 'checkbox'); 
      status.setAttribute('name', "status");

      if (value === true){
        status.setAttribute('checked', 'checked');
      }

      status.setAttribute('id', myLibrary.length - 1);
      status.onclick = function () {
        if (value === true){
          value === false;
        }else{
          value === true;
        }
      };
      tr.appendChild(status);
    }

  });


  let del = document.createElement("button");
  del.innerHTML = "Remove";
  del.setAttribute('class','delete');
  del.setAttribute('id', myLibrary.length - 1);
  del.onclick = function () {
    table.removeChild(tr);
  };

  tr.appendChild(del);
  table.appendChild(tr);

  localStorage.setItem('library', JSON.stringify(myLibrary));
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
  empty();
});

function empty() {
  document.querySelector("#author").value = '';
  document.querySelector("#title").value = '';
  document.querySelector("#pages").value = '';
  document.querySelector("#read").checked = false;
}
