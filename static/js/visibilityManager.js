//Put code here that manages
//which kind of input fields are shown
//for which kind of source
//i.e. no url for books, but editor for journals




//this function appends more author inputs in case there are multiple authors
function multipleAuthors () {
  let anotherAuthor = `
    <input type="text" class="author--name--first"> Vorname AutorIn
    <input type="text" class="author--name--last"> Nachname AutorIn
  `
  let container = document.getElementsByClassName("source--author")[0];
  container.innerHTML += anotherAuthor;
}

module.exports = {moreAuthors : multipleAuthors};
