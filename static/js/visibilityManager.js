//Put code here that manages
//which kind of input fields are shown
//for which kind of source
//i.e. no url for books, but editor for journals
function magicCloak (source) {
  function disappear(arrayOfUnwantedFields) {
    for (let i=0;i<arrayOfUnwantedFields.length;i++) {
        arrayOfUnwantedFields[i][0].classList.add('invisible');
      }
    }
  switch (source) {
    case "Monografie":
      disappear([document.getElementsByClassName('source--url'),
                document.getElementsByClassName('source--editor'),
                document.getElementsByClassName('source--editor--button'),
                document.getElementsByClassName('source--pages'),
                document.getElementsByClassName('source--title--contribution'),
                document.getElementsByClassName('source--journal'),
                document.getElementsByClassName('source--uni')])
      break;
    case "Beitrag in Sammelwerken":
      disappear([document.getElementsByClassName('source--url'),
                document.getElementsByClassName('source--journal'),
                document.getElementsByClassName('source--uni')])
      break;
    case "Artikel in Fachzeitschriften":
      disappear([document.getElementsByClassName('source--url'),
                document.getElementsByClassName('source--title--sub'),
                document.getElementsByClassName('source--editor'),
                document.getElementsByClassName('source--editor--button'),
                document.getElementsByClassName('source--edition'),
                document.getElementsByClassName('source--uni'),
                document.getElementsByClassName('source--publisher')])
      break;
    case "Onlinequelle":
      disappear([document.getElementsByClassName('source--title'),
                document.getElementsByClassName('source--title--sub'),
                document.getElementsByClassName('source--editor'),
                document.getElementsByClassName('source--editor--button'),
                document.getElementsByClassName('source--publisher'),
                document.getElementsByClassName('source--edition'),
                document.getElementsByClassName('source--journal'),
                document.getElementsByClassName('source--pages'),
                document.getElementsByClassName('source--uni')])
      break;
    case "Hochschulschrift":
    disappear([document.getElementsByClassName('source--title--contribution'),
              document.getElementsByClassName('source--editor'),
              document.getElementsByClassName('source--editor--button'),
              document.getElementsByClassName('source--publisher'),
              document.getElementsByClassName('source--url'),
              document.getElementsByClassName('source--journal')])
      break;
    default:
      break;
  }
};

//gets the kind of source
function checkKindOfSource () {
  let invisElems = document.getElementsByClassName('invisible');
  //let's make all boxes visible
  for (let i=0;i<invisElems.length;i++) {
    invisElems[i].classList.remove('invisible');
  }
};

function sourceChecker () {
  let kindOfSource;
  let options = document.getElementsByName('kind');
  for (let i=0;i<options.length;i++) {
      if (options[i].checked) {
        kindOfSource = options[i].value;
    }
  }
  return kindOfSource;
}

function makesBoxesDisappear() {
  checkKindOfSource()
  let source = sourceChecker();
  magicCloak(source);
}

//this function appends more author inputs in case there are multiple authors
function multipleAuthors () {
  let anotherAuthor = `
    <input type="text" class="author--name--first"> Vorname AutorIn
    <input type="text" class="author--name--last"> Nachname AutorIn
  `
  let container = document.getElementsByClassName("source--author")[0];
  container.innerHTML += anotherAuthor;
}

//this function appends more editor inputs in case there are multiple editors
function multipleEditors () {
  let anotherAuthor = `
    <input type="text" class="editor--name--first"> Vorname HerausgeberIn
    <input type="text" class="editor--name--last"> Nachname HerausgeberIn
  `
  let container = document.getElementsByClassName("source--editor")[0];
  container.innerHTML += anotherAuthor;
}

module.exports = {moreAuthors : multipleAuthors,
                  moreEditors : multipleEditors,
                  sourceKind : makesBoxesDisappear,
                  sourceChecker: sourceChecker};
