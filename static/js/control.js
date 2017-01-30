const model = require('./model.js');
const visibilityManager = require('./visibilityManager');

//this adds more author name slots
let adder = document.getElementById('add-author');
adder.addEventListener("click", visibilityManager.moreAuthors, false);


let button = document.getElementById('generator');
button.addEventListener("click", model.monography, false);
