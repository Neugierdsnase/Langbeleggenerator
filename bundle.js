!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";n(7);n(2),n(1)},function(e,t){"use strict";function n(){for(var e=void 0,t=document.getElementsByName("kind"),n=0;n<t.length;n++)t[n].checked&&(e=t[n].value);return e}function r(){var e=document.getElementById("input-wrapper");switch(e.innerHTML="",n()){case"Monografie":e.innerHTML=e.innerHTML+i+l+c+u+d+v;break;case"Beitrag in Sammelwerken":e.innerHTML=e.innerHTML+i+s+p+l+c+u+d+h+v;break;case"Artikel in Fachzeitschriften":e.innerHTML=e.innerHTML+i+s+u+p+l+f;break;case"Onlinequelle":e.innerHTML=e.innerHTML+i+s+u+m;break;case"Hochschulschrift":e.innerHTML=e.innerHTML+i+l+c+g}document.getElementById("buttonbox").classList.remove("invisible")}function a(){var e='\n    <input type="text" class="author--name--first"> Vorname AutorIn\n    <input type="text" class="author--name--last"> Nachname AutorIn\n  ',t=document.getElementsByClassName("source--author")[0];t.innerHTML+=e}function o(){var e='\n    <input type="text" class="editor--name--first"> Vorname HerausgeberIn\n    <input type="text" class="editor--name--last"> Nachname HerausgeberIn\n  ',t=document.getElementsByClassName("source--editor")[0];t.innerHTML+=e}var i='\n<div class="source--author container">\n  <input type="text" class="author--name--first"> Vorname AutorIn\n  <input type="text" class="author--name--last"> Nachname AutorIn\n</div>',s='\n<div class="source--title--contribution container">\n  <input type="text" class="title--contribution"> Titel des Beitrags/Artikels\n</div>',l='\n<div class="source--title container">\n  <input type="text" class="title--main"> Haupttitel des Buches/der Zeitschrift\n</div>',c='\n<div class="source--title--sub container">\n  <input type="text" class="title--sub"> Untertitel des Buches\n</div>\n',u='\n<div class="source--year container">\n  <input type="text" class="year"> Erscheinungsjahr ("o.J." wenn nicht bekannt)\n</div>\n',d='\n<div class="source--publisher container">\n  <input type="text" class="publisher--name"> Verlag\n  <input type="text" class="publisher--place"> Verlagsort (mehrere Verlagsorte durch ; trennen)\n</div>',m='\n<div class="source--url container">\n  <input type="text" class="url"> Url der Quelle\n  <input type="text" class="url--date--release"> Veröffentlichungsdatum\n  <input type="text" class="url--date--watched"> Datum des letzten Zugriffs\n</div>',h='\n<div class="source--editor container">\n  <input type="text" class="editor--name--first"> Vorname HerausgeberIn\n  <input type="text" class="editor--name--last">  Nachname HerausgeberIn\n</div>',v='\n<div class="source--edition container">\n  <input type="text" class="edition"> Auflage\n</div>',f='\n<div class="source--journal container">\n  <input type="text" class="journal-year"> Jahrgang ("o. Jg." wenn kein Jahrgang angegeben)\n  <input type="text" class="journal-count"> Heftnummer\n</div>\n',p='\n<div class="source--pages container">\n  <input type="text" class="pages"> Seiten\n</div>\n',g='\n<div class="source--uni container">\n  <input type="text" class="uni--which"> Universität\n  <input type="text" class="uni--institute"> Institut\n</div>';e.exports={moreAuthors:a,moreEditors:o,sourceKind:r,sourceChecker:n}},function(e,t,n){"use strict";function r(){var e=o.sourceChecker();switch(e){case"Monografie":a.monography();break;case"Beitrag in Sammelwerken":a.contribution();break;case"Artikel in Fachzeitschriften":a.article();break;case"Onlinequelle":a.online();break;case"Hochschulschrift":a.academic()}}var a=n(3),o=n(1),i=document.getElementById("add-author");i.addEventListener("click",o.moreAuthors,!1);var s=document.getElementById("add-editor");s.addEventListener("click",o.moreEditors,!1);var l=document.getElementsByClassName("source--kind")[0];l.addEventListener("click",o.sourceKind,!1);var c=document.getElementById("about");c.addEventListener("click",function(){c.innerHTML='<p>Made with <3 by <a href="https://twitter.com/liche_Ideen" target="_blank">K</a></p>'},!1);var u=document.getElementById("generator");u.addEventListener("click",r,!1)},function(e,t){"use strict";function n(){m=r(),E=a();try{h=document.getElementsByClassName("title--main")[0].value}catch(e){console.log(e)}try{v=document.getElementsByClassName("title--sub")[0].value}catch(e){console.log(e)}try{f=document.getElementsByClassName("title--contribution")[0].value}catch(e){console.log(e)}try{p=document.getElementsByClassName("publisher--name")[0].value}catch(e){console.log(e)}try{g=document.getElementsByClassName("publisher--place")[0].value}catch(e){console.log(e)}try{y=document.getElementsByClassName("year")[0].value}catch(e){console.log(e)}try{L=document.getElementsByClassName("edition")[0].value}catch(e){console.log(e)}try{k=document.getElementsByClassName("pages")[0].value}catch(e){console.log(e)}try{C=document.getElementsByClassName("journal-year")[0].value}catch(e){console.log(e)}try{N=document.getElementsByClassName("journal-count")[0].value}catch(e){console.log(e)}try{b=document.getElementsByClassName("url")[0].value}catch(e){console.log(e)}try{x=document.getElementsByClassName("url--date--release")[0].value}catch(e){console.log(e)}try{B=document.getElementsByClassName("url--date--watched")[0].value}catch(e){console.log(e)}try{M=document.getElementsByClassName("uni--which")[0].value}catch(e){console.log(e)}try{H=document.getElementsByClassName("uni--institute")[0].value}catch(e){console.log(e)}}function r(){var e=document.getElementsByClassName("author--name--first"),t=document.getElementsByClassName("author--name--last");if(t.length!==e.length&&console.error("Uh oh! There is something wrong with your authors, please check your input!"),1===t.length)return t[0].value+", "+e[0].value;if(2===t.length)return t[0].value+", "+e[0].value+" & "+t[1].value+", "+e[1].value;if(t.length>=2){for(var n="",r=0;r<t.length-2;)n+=t[r].value+", "+e[r].value+"; ",r++;return n+=t[r].value+", "+e[r].value+" & ",n+=t[r+1].value+", "+e[r+1].value}console.error("No authors found.")}function a(){var e=document.getElementsByClassName("editor--name--first"),t=document.getElementsByClassName("editor--name--last");if(t.length!==e.length&&console.error("Uh oh! There is something wrong with your editors, please check your input!"),1===t.length)return t[0].value+", "+e[0].value;if(2===t.length)return t[0].value+", "+e[0].value+" & "+t[1].value+", "+e[1].value;if(t.length>=2){for(var n="",r=0;r<t.length-2;)n+=t[r].value+", "+e[r].value+"; ",r++;return n+=t[r].value+", "+e[r].value+" & ",n+=t[r+1].value+", "+e[r+1].value}console.error("No editors found.")}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return""!==e?t+e+n:""}function i(){n(),d="\n    "+m+" ("+y+").\n    "+h+o(v,": ")+"\n    "+o(L," (",". Aufl.)")+".\n    "+g+": "+p+".\n  ",document.getElementById("langbeleg").innerHTML=d}function s(){n(),d="\n    "+m+" ("+y+").\n    "+f+". In "+E+" (Hrsg.),\n    "+h+o(v,": ")+"\n    ("+o(L,"",". Aufl.")+"\n    S. "+k+"). "+g+": "+p+".\n  ",document.getElementById("langbeleg").innerHTML=d}function l(){n(),d="\n    "+m+" ("+y+").\n    "+f+". In "+h+",\n    "+C+" ("+N+"), S. "+k+".\n    ",document.getElementById("langbeleg").innerHTML=d}function c(){n(),d="\n      "+m+" ("+y+").\n      "+f+o(x," (",")")+".\n      Verfügbar unter "+b+" ["+B+"].\n    ",document.getElementById("langbeleg").innerHTML=d}function u(){n(),d="\n    "+m+" ("+y+").\n    Diplomarbeit: "+M+o(H,", ")+".\n  ",document.getElementById("langbeleg").innerHTML=d}var d=void 0,m=void 0,h=void 0,v=void 0,f=void 0,p=void 0,g=void 0,y=void 0,b=void 0,x=void 0,B=void 0,E=void 0,L=void 0,k=void 0,C=void 0,N=void 0,M=void 0,H=void 0;e.exports={monography:i,contribution:s,article:l,online:c,academic:u}},function(e,t,n){t=e.exports=n(5)(),t.push([e.id,"html{margin:0;padding:0}.container{display:flex;margin-bottom:1em;margin:auto;flex-direction:column}.container--main{max-width:50em}.container--buttons,.source--kind{flex-direction:row}.button{display:inline-block;background-color:#002d65;padding:1em;margin:1em;text-align:center}.button:hover{cursor:pointer}input{margin-top:1.5em}#generator{flex-grow:1}.solution{padding:2em}#about{display:inline;text-align:right;float:right}body{font-family:Tahoma;font-size:.7em;font-color:darkgrey}.button{color:#fff}.solution{font-size:1.6em}.invisible{display:none}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(r[o]=!0)}for(a=0;a<t.length;a++){var i=t[a];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],a=h[r.id];if(a){a.refs++;for(var o=0;o<a.parts.length;o++)a.parts[o](r.parts[o]);for(;o<r.parts.length;o++)a.parts.push(c(r.parts[o],t))}else{for(var i=[],o=0;o<r.parts.length;o++)i.push(c(r.parts[o],t));h[r.id]={id:r.id,refs:1,parts:i}}}}function a(e){for(var t=[],n={},r=0;r<e.length;r++){var a=e[r],o=a[0],i=a[1],s=a[2],l=a[3],c={css:i,media:s,sourceMap:l};n[o]?n[o].parts.push(c):t.push(n[o]={id:o,parts:[c]})}return t}function o(e,t){var n=p(),r=b[b.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",o(e,t),t}function c(e,t){var n,r,a;if(t.singleton){var o=y++;n=g||(g=s(t)),r=u.bind(null,n,o,!1),a=u.bind(null,n,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),r=m.bind(null,n),a=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=d.bind(null,n),a=function(){i(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}function u(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function d(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function m(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([n],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(a),o&&URL.revokeObjectURL(o)}var h={},v=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},f=v(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),p=v(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,y=0,b=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=f()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=a(e);return r(n,t),function(e){for(var o=[],i=0;i<n.length;i++){var s=n[i],l=h[s.id];l.refs--,o.push(l)}if(e){var c=a(e);r(c,t)}for(var i=0;i<o.length;i++){var l=o[i];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete h[l.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.id,r,""]]);n(6)(r,{});r.locals&&(e.exports=r.locals)}]);