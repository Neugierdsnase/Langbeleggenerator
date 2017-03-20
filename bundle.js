/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(1);

	var model = __webpack_require__(5);
	var visibilityManager = __webpack_require__(7);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "html {\n  margin: 0;\n  padding: 0; }\n\n.container {\n  display: flex;\n  margin-bottom: 1em;\n  margin: auto;\n  flex-direction: column; }\n  .container--main {\n    max-width: 50em; }\n  .container--buttons {\n    flex-direction: row; }\n\n.source--kind {\n  flex-direction: row; }\n\n.button {\n  display: inline-block;\n  background-color: #002d65;\n  padding: 1em;\n  margin: 1em;\n  text-align: center; }\n  .button:hover {\n    cursor: pointer; }\n\ninput {\n  margin-top: 1.5em; }\n\n#generator {\n  flex-grow: 1; }\n\n.solution {\n  padding: 2em; }\n\n#about {\n  display: inline;\n  text-align: right;\n  float: right; }\n\nbody {\n  font-family: Tahoma;\n  font-size: 0.7em;\n  font-color: darkgrey; }\n\n.button {\n  color: white; }\n\n.solution {\n  font-size: 1.6em; }\n\n.invisible {\n  display: none; }\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var model = __webpack_require__(6);
	var visibilityManager = __webpack_require__(7);

	//this adds more author name slots
	var authorAdder = document.getElementById('add-author');
	authorAdder.addEventListener("click", visibilityManager.moreAuthors, false);

	//this adds more editor name slots
	var editorAdder = document.getElementById('add-editor');
	editorAdder.addEventListener("click", visibilityManager.moreEditors, false);

	//this makes fields appear/disappear depending on the kind of source
	var sourceKind = document.getElementsByClassName('source--kind')[0];
	sourceKind.addEventListener("click", visibilityManager.sourceKind, false);

	function generationTrigger() {
	  var kindOfSource = visibilityManager.sourceChecker();
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

	var aboutButton = document.getElementById('about');
	aboutButton.addEventListener("click", function () {
	  aboutButton.innerHTML = '<p>Made with <3 by <a href="https://twitter.com/liche_Ideen" target="_blank">K</a></p>';
	}, false);

	var mainButton = document.getElementById('generator');
	mainButton.addEventListener("click", generationTrigger, false);

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	var solution = void 0,
	    authorsNames = void 0,
	    titleMain = void 0,
	    titleSub = void 0,
	    titleArticle = void 0,
	    publisher = void 0,
	    publisherPlace = void 0,
	    publishingYear = void 0,
	    url = void 0,
	    onlineReleaseDate = void 0,
	    onlineViewDate = void 0,
	    editorsNames = void 0,
	    edition = void 0,
	    articlePages = void 0,
	    articleYear = void 0,
	    articleCount = void 0,
	    uni = void 0,
	    institute = void 0;

	//gathers the data from all the form fields using vanilla js like a baws
	function gatherData() {
	  //TODO: find a better way to do this
	  //this is just nasty ugly
	  authorsNames = authorCreator();
	  editorsNames = editorCreator();
	  try {
	    titleMain = document.getElementsByClassName("title--main")[0].value;
	  } catch (e) {
	    console.log(e);
	  }try {
	    titleSub = document.getElementsByClassName("title--sub")[0].value;
	  } catch (e) {
	    console.log(e);
	  }try {
	    titleArticle = document.getElementsByClassName("title--contribution")[0].value;
	  } catch (e) {
	    console.log(e);
	  }try {
	    publisher = document.getElementsByClassName("publisher--name")[0].value;
	  } catch (e) {
	    console.log(e);
	  }try {
	    publisherPlace = document.getElementsByClassName("publisher--place")[0].value;
	  } catch (e) {
	    console.log(e);
	  }try {
	    publishingYear = document.getElementsByClassName("year")[0].value;
	  } catch (e) {
	    console.log(e);
	  }try {
	    edition = document.getElementsByClassName("edition")[0].value;
	  } catch (e) {
	    console.log(e);
	  }try {
	    articlePages = document.getElementsByClassName("pages")[0].value;
	  } catch (e) {
	    console.log(e);
	  }try {
	    articleYear = document.getElementsByClassName("journal-year")[0].value;
	  } catch (e) {
	    console.log(e);
	  }try {
	    articleCount = document.getElementsByClassName("journal-count")[0].value;
	  } catch (e) {
	    console.log(e);
	  }try {
	    url = document.getElementsByClassName("url")[0].value;
	  } catch (e) {
	    console.log(e);
	  }try {
	    onlineReleaseDate = document.getElementsByClassName("url--date--release")[0].value;
	  } catch (e) {
	    console.log(e);
	  }try {
	    onlineViewDate = document.getElementsByClassName("url--date--watched")[0].value;
	  } catch (e) {
	    console.log(e);
	  }try {
	    uni = document.getElementsByClassName("uni--which")[0].value;
	  } catch (e) {
	    console.log(e);
	  }try {
	    institute = document.getElementsByClassName("uni--institute")[0].value;
	  } catch (e) {
	    console.log(e);
	  }
	}

	//takes care of the different numbers of author inputs there might be (1, 2 or more)
	function authorCreator() {
	  var allAuthorsFirstNamesArray = document.getElementsByClassName("author--name--first");
	  var allAuthorsLastNamesArray = document.getElementsByClassName("author--name--last");
	  if (allAuthorsLastNamesArray.length !== allAuthorsFirstNamesArray.length) {
	    console.error("Uh oh! There is something wrong with your authors, please check your input!");
	  }
	  if (allAuthorsLastNamesArray.length === 1) {
	    return allAuthorsLastNamesArray[0].value + ', ' + allAuthorsFirstNamesArray[0].value;
	  } else if (allAuthorsLastNamesArray.length === 2) {
	    return allAuthorsLastNamesArray[0].value + ', ' + allAuthorsFirstNamesArray[0].value + ' & ' + allAuthorsLastNamesArray[1].value + ', ' + allAuthorsFirstNamesArray[1].value;
	  } else if (allAuthorsLastNamesArray.length >= 2) {
	    var sol = '';
	    var i = 0;
	    while (i < allAuthorsLastNamesArray.length - 2) {
	      sol += allAuthorsLastNamesArray[i].value + ', ' + allAuthorsFirstNamesArray[i].value + '; ';
	      i++;
	    }
	    sol += allAuthorsLastNamesArray[i].value + ', ' + allAuthorsFirstNamesArray[i].value + ' & ';
	    sol += allAuthorsLastNamesArray[i + 1].value + ', ' + allAuthorsFirstNamesArray[i + 1].value;
	    return sol;
	  } else {
	    console.error("No authors found.");
	  }
	}

	//takes care of the different numbers of editor inputs there might be (1, 2 or more)
	function editorCreator() {
	  var allEditorsFirstNamesArray = document.getElementsByClassName("editor--name--first");
	  var allEditorsLastNamesArray = document.getElementsByClassName("editor--name--last");
	  if (allEditorsLastNamesArray.length !== allEditorsFirstNamesArray.length) {
	    console.error("Uh oh! There is something wrong with your editors, please check your input!");
	  }
	  if (allEditorsLastNamesArray.length === 1) {
	    return allEditorsLastNamesArray[0].value + ', ' + allEditorsFirstNamesArray[0].value;
	  } else if (allEditorsLastNamesArray.length === 2) {
	    return allEditorsLastNamesArray[0].value + ', ' + allEditorsFirstNamesArray[0].value + ' & ' + allEditorsLastNamesArray[1].value + ', ' + allEditorsFirstNamesArray[1].value;
	  } else if (allEditorsLastNamesArray.length >= 2) {
	    var sol = '';
	    var i = 0;
	    while (i < allEditorsLastNamesArray.length - 2) {
	      sol += allEditorsLastNamesArray[i].value + ', ' + allEditorsFirstNamesArray[i].value + '; ';
	      i++;
	    }
	    sol += allEditorsLastNamesArray[i].value + ', ' + allEditorsFirstNamesArray[i].value + ' & ';
	    sol += allEditorsLastNamesArray[i + 1].value + ', ' + allEditorsFirstNamesArray[i + 1].value;
	    return sol;
	  } else {
	    console.error("No editors found.");
	  }
	}

	function voluntairyInput(formfield) {
	  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
	  var postfix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

	  if (formfield !== "") {
	    return prefix + formfield + postfix;
	  } else {
	    return "";
	  }
	}

	function generateMonography() {
	  gatherData();
	  solution = "\n    " + authorsNames + " (" + publishingYear + ").\n    " + titleMain + voluntairyInput(titleSub, ": ") + "\n    " + voluntairyInput(edition, " (", ". Aufl.)") + ".\n    " + publisherPlace + ": " + publisher + ".\n  ";
	  document.getElementById('langbeleg').innerHTML = solution;
	};

	function generateContribution() {
	  gatherData();
	  solution = "\n    " + authorsNames + " (" + publishingYear + ").\n    " + titleArticle + ". In " + editorsNames + " (Hrsg.),\n    " + titleMain + voluntairyInput(titleSub, ": ") + "\n    (" + voluntairyInput(edition, "", ". Aufl.") + "\n    S. " + articlePages + "). " + publisherPlace + ": " + publisher + ".\n  ";
	  document.getElementById('langbeleg').innerHTML = solution;
	}

	function generateArticle() {
	  gatherData();
	  solution = "\n    " + authorsNames + " (" + publishingYear + ").\n    " + titleArticle + ". In " + titleMain + ",\n    " + articleYear + " (" + articleCount + "), S. " + articlePages + ".\n    ";
	  document.getElementById('langbeleg').innerHTML = solution;
	}

	function generateOnlineSource() {
	  gatherData();
	  solution = "\n      " + authorsNames + " (" + publishingYear + ").\n      " + titleArticle + voluntairyInput(onlineReleaseDate, " (", ")") + ".\n      Verf\xFCgbar unter " + url + " [" + onlineViewDate + "].\n    ";
	  document.getElementById('langbeleg').innerHTML = solution;
	}

	function generateAcademicSource() {
	  gatherData();
	  solution = "\n    " + authorsNames + " (" + publishingYear + ").\n    Diplomarbeit: " + uni + voluntairyInput(institute, ", ") + ".\n  ";
	  document.getElementById('langbeleg').innerHTML = solution;
	}

	module.exports = { monography: generateMonography,
	  contribution: generateContribution,
	  article: generateArticle,
	  online: generateOnlineSource,
	  academic: generateAcademicSource };

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	var author = '\n<div class="source--author container">\n  <input type="text" class="author--name--first"> Vorname AutorIn\n  <input type="text" class="author--name--last"> Nachname AutorIn\n</div>';

	// const authorButton = `
	// <div class="button" id="add-author">AutorIn hinzufügen</div>`

	var titleContribution = '\n<div class="source--title--contribution container">\n  <input type="text" class="title--contribution"> Titel des Beitrags/Artikels\n</div>';

	var titleMain = '\n<div class="source--title container">\n  <input type="text" class="title--main"> Haupttitel des Buches/der Zeitschrift\n</div>';

	var titleSub = '\n<div class="source--title--sub container">\n  <input type="text" class="title--sub"> Untertitel des Buches\n</div>\n';

	var year = '\n<div class="source--year container">\n  <input type="text" class="year"> Erscheinungsjahr ("o.J." wenn nicht bekannt)\n</div>\n';

	var publisher = '\n<div class="source--publisher container">\n  <input type="text" class="publisher--name"> Verlag\n  <input type="text" class="publisher--place"> Verlagsort (mehrere Verlagsorte durch ; trennen)\n</div>';

	var url = '\n<div class="source--url container">\n  <input type="text" class="url"> Url der Quelle\n  <input type="text" class="url--date--release"> Ver\xF6ffentlichungsdatum\n  <input type="text" class="url--date--watched"> Datum des letzten Zugriffs\n</div>';

	var editor = '\n<div class="source--editor container">\n  <input type="text" class="editor--name--first"> Vorname HerausgeberIn\n  <input type="text" class="editor--name--last">  Nachname HerausgeberIn\n</div>';

	// const editorButton = `
	// <div class="button source--editor--button" id="add-editor">HerausgeberIn hinzufügen</div>`

	var edition = '\n<div class="source--edition container">\n  <input type="text" class="edition"> Auflage\n</div>';

	var journal = '\n<div class="source--journal container">\n  <input type="text" class="journal-year"> Jahrgang ("o. Jg." wenn kein Jahrgang angegeben)\n  <input type="text" class="journal-count"> Heftnummer\n</div>\n';

	var pages = '\n<div class="source--pages container">\n  <input type="text" class="pages"> Seiten\n</div>\n';

	var uni = '\n<div class="source--uni container">\n  <input type="text" class="uni--which"> Universit\xE4t\n  <input type="text" class="uni--institute"> Institut\n</div>';

	// const generator = `
	// <div class="button" id="generator">
	//   <h2>Langbeleg erstellen</h2>
	// </div>`


	function sourceChecker() {
	  var kindOfSource = void 0;
	  var options = document.getElementsByName('kind');
	  for (var i = 0; i < options.length; i++) {
	    if (options[i].checked) {
	      kindOfSource = options[i].value;
	    }
	  }
	  return kindOfSource;
	}

	function makesBoxesAppear() {
	  var parentObject = document.getElementById('input-wrapper');
	  parentObject.innerHTML = '';
	  switch (sourceChecker()) {
	    case "Monografie":
	      parentObject.innerHTML = parentObject.innerHTML + author + titleMain + titleSub + year + publisher + edition;
	      break;
	    case "Beitrag in Sammelwerken":
	      parentObject.innerHTML = parentObject.innerHTML + author + titleContribution + pages + titleMain + titleSub + year + publisher + editor + edition;
	      break;
	    case "Artikel in Fachzeitschriften":
	      parentObject.innerHTML = parentObject.innerHTML + author + titleContribution + year + pages + titleMain + journal;
	      break;
	    case "Onlinequelle":
	      parentObject.innerHTML = parentObject.innerHTML + author + titleContribution + year + url;
	      break;
	    case "Hochschulschrift":
	      parentObject.innerHTML = parentObject.innerHTML + author + titleMain + titleSub + uni;
	      break;
	    default:
	      break;
	  }
	  document.getElementById('buttonbox').classList.remove('invisible');
	}
	//this function appends more author inputs in case there are multiple authors
	function multipleAuthors() {
	  var anotherAuthor = '\n    <input type="text" class="author--name--first"> Vorname AutorIn\n    <input type="text" class="author--name--last"> Nachname AutorIn\n  ';
	  var container = document.getElementsByClassName("source--author")[0];
	  container.innerHTML += anotherAuthor;
	}

	//this function appends more editor inputs in case there are multiple editors
	function multipleEditors() {
	  var anotherEditor = '\n    <input type="text" class="editor--name--first"> Vorname HerausgeberIn\n    <input type="text" class="editor--name--last"> Nachname HerausgeberIn\n  ';
	  var container = document.getElementsByClassName("source--editor")[0];
	  container.innerHTML += anotherEditor;
	}

	module.exports = { moreAuthors: multipleAuthors,
	  moreEditors: multipleEditors,
	  sourceKind: makesBoxesAppear,
	  sourceChecker: sourceChecker };

/***/ }
/******/ ]);