let solution,
    authorsNames,
    titleMain,
    titleSub,
    titleArticle,
    publisher,
    publisherPlace,
    publishingYear,
    url,
    onlineReleaseDate,
    onlineViewDate,
    editorsNames,
    edition,
    articlePages,
    articleYear,
    articleCount,
    uni,
    institute;

//gathers the data from all the form fields using vanilla js like a baws
function gatherData() {
  authorsNames = authorCreator();
  editorsNames = editorCreator();
  titleMain = document.getElementsByClassName("title--main")[0].value;
  titleSub = document.getElementsByClassName("title--sub")[0].value;
  titleArticle = document.getElementsByClassName("title--contribution")[0].value;
  publisher = document.getElementsByClassName("publisher--name")[0].value;
  publisherPlace = document.getElementsByClassName("publisher--place")[0].value;
  publishingYear = document.getElementsByClassName("year")[0].value;
  edition = document.getElementsByClassName("edition")[0].value,
  articlePages = document.getElementsByClassName("pages")[0].value;
  articleYear = document.getElementsByClassName("journal-year")[0].value;
  articleCount = document.getElementsByClassName("journal-count")[0].value;
  url = document.getElementsByClassName("url")[0].value;
  onlineReleaseDate = document.getElementsByClassName("url--date--release")[0].value;
  onlineViewDate = document.getElementsByClassName("url--date--watched")[0].value;
  uni = document.getElementsByClassName("uni--which")[0].value;
  institute = document.getElementsByClassName("uni--institute")[0].value;
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

//takes care of the different numbers of editor inputs there might be (1, 2 or more)
function editorCreator() {
  let allEditorsFirstNamesArray = document.getElementsByClassName("editor--name--first");
  let allEditorsLastNamesArray = document.getElementsByClassName("editor--name--last");
  if (allEditorsLastNamesArray.length !== allEditorsFirstNamesArray.length) {
    console.error("Uh oh! There is something wrong with your editors, please check your input!");
  }
  if (allEditorsLastNamesArray.length === 1) {
    return(allEditorsLastNamesArray[0].value + ', ' + allEditorsFirstNamesArray[0].value);
  } else if (allEditorsLastNamesArray.length === 2) {
    return(allEditorsLastNamesArray[0].value + ', ' + allEditorsFirstNamesArray.value[0] + ' & ' + allAuthorsLastNamesArray[1].value + ', ' + allAuthorsFirstNamesArray[1].value);
  } else if (allEditorsLastNamesArray.length >= 2) {
    let sol = '';
    let i = 0;
    while (i < allEditorsorsLastNamesArray.length - 2) {
      sol += allEditorsLastNamesArray[i].value + ', ' + allEditorsFirstNamesArray[i].value + '; ';
      i++;
    }
    sol += allEditorsLastNamesArray[i].value + ', ' + allEditorsFirstNamesArray[i].value + ' & ';
    sol += allEditorsLastNamesArray[i+1].value + ', ' + allEditorsFirstNamesArray[i+1].value;
    return sol;
  } else {
    console.error("No editors found.");
  }
}

function voluntairyInput (formfield, prefix="", postfix="") {
  if (formfield !== "") {
    return prefix + formfield + postfix;
  } else {
    return "";
  }
}

function generateMonography() {
  gatherData();
  solution = `
    ${authorsNames} (${publishingYear}).
    ${titleMain}${voluntairyInput(titleSub, ": ")}
    ${voluntairyInput(edition, " (", ". Aufl.)")}.
    ${publisherPlace}: ${publisher}.
  `
  document.getElementById('langbeleg').innerHTML = solution;
};

function generateContribution() {
  gatherData();
  solution = `
    ${authorsNames} (${publishingYear}).
    ${titleArticle}. In ${editorsNames} (Hrsg.),
    ${titleMain}${voluntairyInput(titleSub, ": ")}
    (${voluntairyInput(edition, "", ". Aufl.")}
    S. ${articlePages}). ${publisherPlace}: ${publisher}.
  `
  document.getElementById('langbeleg').innerHTML = solution;
}

function generateArticle() {
  gatherData();
  solution = `
    ${authorsNames} (${publishingYear}).
    ${titleArticle}. In ${titleMain},
    ${articleYear} (${articleCount}), S. ${articlePages}.
    `
  document.getElementById('langbeleg').innerHTML = solution;
}

function generateOnlineSource() {
  gatherData();
  solution = `
      ${authorsNames} (${publishingYear}).
      ${titleArticle}${voluntairyInput(onlineReleaseDate, " (", ")")}.
      Verfügbar unter ${url} [${onlineViewDate}].
    `
  document.getElementById('langbeleg').innerHTML = solution;
}

function generateAcademicSource() {
  gatherData();
  solution = `
    ${authorsNames} (${publishingYear}).
    Diplomarbeit: ${uni}${voluntairyInput(institute, ", ")}.
  `
  document.getElementById('langbeleg').innerHTML = solution;
}

module.exports = {monography: generateMonography,
                  contribution: generateContribution,
                  article: generateArticle,
                  online: generateOnlineSource,
                  academic: generateAcademicSource};
