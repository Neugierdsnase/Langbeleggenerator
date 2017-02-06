const model = require('./model.js');
const visibilityManager = require('./visibilityManager.js');

//this adds more author name slots
let authorAdder = document.getElementById('add-author');
authorAdder.addEventListener("click", visibilityManager.moreAuthors, false);

//this adds more editor name slots
let editorAdder = document.getElementById('add-editor');
editorAdder.addEventListener("click", visibilityManager.moreEditors, false);

//this makes fields appear/disappear depending on the kind of source
let sourceKind = document.getElementsByClassName('source--kind')[0];
sourceKind.addEventListener("click", visibilityManager.sourceKind, false);

function generationTrigger () {
  let kindOfSource = visibilityManager.sourceChecker();
  switch (kindOfSource) {
    case "Monografie":
      model.monography();
      break;
    case "Beitrag in Sammelwerken":
      model.contribution();
      break;
    case "Artikel in Fachzeitschriften":
      model.article();
      break;
    case "Onlinequelle":
      model.online();
      break;
    case "Hochschulschrift":
      model.academic();
      break;
    default:
      break;
  }
}



let aboutButton = document.getElementById('about');
aboutButton.addEventListener("click", function() {aboutButton.innerHTML = '<p>Made with <3 by <a href="https://twitter.com/liche_Ideen" target="_blank">K</a></p>'}, false);

let mainButton = document.getElementById('generator');
mainButton.addEventListener("click", generationTrigger, false);
