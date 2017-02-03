let solution,
    //authorFirstName,
    //authorLastName,
    authorsNames,
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
  //authorFirstName = document.getElementsByClassName("author--name--first")[0].value;
  //authorLastName = document.getElementsByClassName("author--name--last")[0].value;
  authorsNames = authorCreator();
  titleMain = document.getElementsByClassName("title--main")[0].value;
  titleSub = document.getElementsByClassName("title--sub")[0].value;
  publisher = document.getElementsByClassName("publisher--name")[0].value;
  publisherPlace = document.getElementsByClassName("publisher--place")[0].value;
  publishingYear = document.getElementsByClassName("title--year")[0].value;
}

//takes care of the different numbers of author inputs there might be (1, 2 or more)
function authorCreator() {
  let allAuthorsFirstNamesArray = document.getElementsByClassName("author--name--first");
  let allAuthorsLastNamesArray = document.getElementsByClassName("author--name--last");
  if (allAuthorsLastNamesArray.length !== allAuthorsFirstNamesArray.length) {
    console.error("Uh oh! There is something wrong with your authors, please check your input!");
  }
  if (allAuthorsLastNamesArray.length === 1) {
    return(allAuthorsLastNamesArray[0].value + ', ' + allAuthorsFirstNamesArray[0].value);
  } else if (allAuthorsLastNamesArray.length === 2) {
    return(allAuthorsLastNamesArray[0].value + ', ' + allAuthorsFirstNamesArray.value[0] + ' & ' + allAuthorsLastNamesArray[1].value + ', ' + allAuthorsFirstNamesArray[1].value);
  } else if (allAuthorsLastNamesArray.length >= 2) {
    let sol = '';
    let i = 0;
    while (i < allAuthorsLastNamesArray.length - 2) {
      sol += allAuthorsLastNamesArray[i].value + ', ' + allAuthorsFirstNamesArray[i].value + '; ';
      i++;
    }
    sol += allAuthorsLastNamesArray[i].value + ', ' + allAuthorsFirstNamesArray[i].value + ' & ';
    sol += allAuthorsLastNamesArray[i+1].value + ', ' + allAuthorsFirstNamesArray[i+1].value;
    return sol;
  } else {
    console.error("No authors found.");
  }
}

function generateMonography() {
  gatherData();
  solution = `
    ${authorsNames} (${publishingYear}). ${titleMain}: ${titleSub}. ${publisherPlace}: ${publisher}.
  `
  document.getElementById('langbeleg').innerHTML = solution;
};

module.exports = {monography: generateMonography};
