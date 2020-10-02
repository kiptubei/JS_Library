let myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

if (localStorage.getItem('library') !== null) {
  myLibrary = JSON.parse(localStorage.getItem('library'));

  const table = document.getElementById('di-library');

  myLibrary.forEach((library) => {
    const tr = document.createElement('tr');

    const values = Object.values(library);
    values.forEach((value) => {
      const td = document.createElement('td');
      td.innerHTML = value;
      tr.appendChild(td);

      if (value === true || value === false) {
        const status = document.createElement('input');
        status.setAttribute('type', 'checkbox');
        status.setAttribute('name', 'status');

        if (value === true) {
          status.setAttribute('checked', 'checked');
        } else {
          status.removeAttribute('checked');
        }

        status.setAttribute('id', myLibrary.length - 1);

        status.addEventListener('change', () => {
          if (library.read === true) {
            value = false;
            library.read = false;
          } else {
            value = true;
            library.read = true;
          }
          td.innerHTML = value;
        });

        tr.appendChild(status);
      }
    });

    const del = document.createElement('button');
    del.innerHTML = 'Remove';
    del.setAttribute('class', 'delete');
    del.setAttribute('id', library.title);


    del.onclick = () => {
      table.removeChild(tr);
      myLibrary = $.grep(myLibrary, (e) => e.title !== library.title);
      localStorage.setItem('library', JSON.stringify(myLibrary));
    };

    tr.appendChild(del);
    table.appendChild(tr);
    localStorage.setItem('library', JSON.stringify(myLibrary));
  });
}

function addBookToLibrary(myBook) {
  myLibrary.push(myBook);
  const table = document.getElementById('di-library');
  const library = myLibrary[myLibrary.length - 1];
  const tr = document.createElement('tr');

  const values = Object.values(library);
  values.forEach((value) => {
    const td = document.createElement('td');
    td.innerHTML = value;
    tr.appendChild(td);

    if (value === true || value === false) {
      const status = document.createElement('input');
      status.setAttribute('type', 'checkbox');
      status.setAttribute('name', 'status');

      if (value === true) {
        status.setAttribute('checked', 'checked');
      }

      status.setAttribute('id', myLibrary.length - 1);
      status.onclick = () => {
        if (value === true) {
          value = false;
        } else {
          value = true;
        }
      };
      tr.appendChild(status);
    }
  });

  function reloadPage() {
    // The last "domLoading" Time //
    const currentDocumentTimestamp = new Date(
      performance.timing.domLoading,
    ).getTime();
    // Current Time //
    const now = Date.now();
    // Ten Seconds //
    const tenSec = 10 * 1000;
    // Plus Ten Seconds //
    const plusTenSec = currentDocumentTimestamp + tenSec;
    if (now > plusTenSec) {
      window.location.reload();
    }
  }

  const del = document.createElement('button');
  del.innerHTML = 'Remove';
  del.setAttribute('class', 'delete');
  del.setAttribute('id', myLibrary.length - 1);
  del.onclick = () => {
    table.removeChild(tr);
  };

  tr.appendChild(del);
  table.appendChild(tr);

  localStorage.setItem('library', JSON.stringify(myLibrary));
  reloadPage();
}

function empty() {
  document.querySelector('#author').value = '';
  document.querySelector('#title').value = '';
  document.querySelector('#pages').value = '';
  document.querySelector('#read').checked = false;
}

const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const author = document.querySelector('#author').value;
  const title = document.querySelector('#title').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read').checked;
  const book = new Book(author, title, pages, read);
  addBookToLibrary(book);
  empty();
});
