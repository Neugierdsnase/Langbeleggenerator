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

let button = document.getElementById('generator');
button.addEventListener("click", model.monography, false);
