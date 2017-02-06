const author = `
<div class="source--author container">
  <input type="text" class="author--name--first"> Vorname AutorIn
  <input type="text" class="author--name--last"> Nachname AutorIn
</div>`

// const authorButton = `
// <div class="button" id="add-author">AutorIn hinzufügen</div>`

const titleContribution = `
<div class="source--title--contribution container">
  <input type="text" class="title--contribution"> Titel des Beitrags/Artikels
</div>`

const titleMain = `
<div class="source--title container">
  <input type="text" class="title--main"> Haupttitel des Buches/der Zeitschrift
</div>`

const titleSub = `
<div class="source--title--sub container">
  <input type="text" class="title--sub"> Untertitel des Buches
</div>
`

const year = `
<div class="source--year container">
  <input type="text" class="year"> Erscheinungsjahr ("o.J." wenn nicht bekannt)
</div>
`

const publisher = `
<div class="source--publisher container">
  <input type="text" class="publisher--name"> Verlag
  <input type="text" class="publisher--place"> Verlagsort (mehrere Verlagsorte durch ; trennen)
</div>`

const url = `
<div class="source--url container">
  <input type="text" class="url"> Url der Quelle
  <input type="text" class="url--date--release"> Veröffentlichungsdatum
  <input type="text" class="url--date--watched"> Datum des letzten Zugriffs
</div>`

const editor = `
<div class="source--editor container">
  <input type="text" class="editor--name--first"> Vorname HerausgeberIn
  <input type="text" class="editor--name--last">  Nachname HerausgeberIn
</div>`

// const editorButton = `
// <div class="button source--editor--button" id="add-editor">HerausgeberIn hinzufügen</div>`

const edition = `
<div class="source--edition container">
  <input type="text" class="edition"> Auflage
</div>`

const journal = `
<div class="source--journal container">
  <input type="text" class="journal-year"> Jahrgang ("o. Jg." wenn kein Jahrgang angegeben)
  <input type="text" class="journal-count"> Heftnummer
</div>
`

const pages = `
<div class="source--pages container">
  <input type="text" class="pages"> Seiten
</div>
`

const uni = `
<div class="source--uni container">
  <input type="text" class="uni--which"> Universität
  <input type="text" class="uni--institute"> Institut
</div>`

// const generator = `
// <div class="button" id="generator">
//   <h2>Langbeleg erstellen</h2>
// </div>`


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

function makesBoxesAppear () {
  const parentObject = document.getElementById('input-wrapper');
  parentObject.innerHTML = '';
  switch (sourceChecker()) {
    case "Monografie":
        parentObject.innerHTML = parentObject.innerHTML + author
        + titleMain + titleSub + year + publisher + edition;
      break;
    case "Beitrag in Sammelwerken":
        parentObject.innerHTML = parentObject.innerHTML + author
        + titleContribution + pages + titleMain + titleSub + year + publisher + editor
        + edition;
      break;
    case "Artikel in Fachzeitschriften":
    parentObject.innerHTML = parentObject.innerHTML + author
    + titleContribution + pages + titleMain + journal;
      break;
    case "Onlinequelle":
    parentObject.innerHTML = parentObject.innerHTML + author
    + titleContribution + year + url;
      break;
    case "Hochschulschrift":
    parentObject.innerHTML = parentObject.innerHTML + author
    + titleMain + titleSub + uni;
      break;
    default:
      break;
  }
  document.getElementById('buttonbox').classList.remove('invisible');
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
                  sourceKind : makesBoxesAppear,
                  sourceChecker: sourceChecker};
