let solution,
    authorFirstName,
    authorLastName,
    titleMain,
    titleSub,
    publisher,
    publisherPlace,
    publishingYear,
    url,
    editorFirstName,
    editorLastName,
    edition,
    articlePages;

//gathers the data from all the form fields using vanilla js like a baws
function gatherData() {
  //TODO: What to do if multiple authors?
  authorFirstName = document.getElementsByClassName("author--name--first")[0].value;
  authorLastName = document.getElementsByClassName("author--name--last")[0].value;

  titleMain = document.getElementsByClassName("title--main")[0].value;
  titleSub = document.getElementsByClassName("title--sub")[0].value;
  publisher = document.getElementsByClassName("publisher--name")[0].value;
  publisherPlace = document.getElementsByClassName("publisher--place")[0].value;
  publishingYear = document.getElementsByClassName("title--year")[0].value;
}

//takes care of the different types of author inputs there might be (1, 2 or more)
function authorCreator() {
  
}

function generateMonography() {
  gatherData();
  solution = `
    ${authorLastName}, ${authorFirstName} (${publishingYear}). ${titleMain}: ${titleSub}. ${publisherPlace}: ${publisher}.
  `
  document.getElementById('langbeleg').innerHTML = solution;
};

module.exports = {monography: generateMonography};
