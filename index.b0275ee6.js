!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,i="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,l=i||f||Function("return this")(),s=Object.prototype.toString,p=Math.max,b=Math.min,d=function(){return l.Date.now()};function y(e){var o=void 0===e?"undefined":t(n)(e);return!!e&&("object"==o||"function"==o)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(y(e)){var i="function"==typeof e.valueOf?e.valueOf():e;e=y(i)?i+"":i}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var f=u.test(e);return f||a.test(e)?c(e.slice(2),f?2:8):r.test(e)?NaN:+e}var g={},m=document.querySelector("#search-box"),h=(document.querySelector(".country-list"),document.querySelector(".country-info"));function g(e){return fetch("https://restcountries.com/v3.1/name/".concat(e,"?fields=name,flags,capital,population,languages")).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}function j(e){var t=e.map((function(e){var t=e.name,n=e.capital,o=e.population,r=e.flags,u=e.languages;return"<li>\n            <h2><b>Name</b>: ".concat(t,"</h2>\n            <p><b>Capital</b>: ").concat(n,"</p>\n            <p><b>Population</b>: ").concat(o,"</p>\n            <p><b>Flag</b>: ").concat(r,"</p>\n            <p><b>Languages</b>: ").concat(u,"</p>\n          </li>")})).join("");h.innerHTML=t}function w(e){return console.warn(e),Notiflix.Notify.failure("error")}m.addEventListener("input",(function(e){if(e.preventDefault(),""===e.currentTarget.value)return;var t=e.currentTarget.value.trim();console.log(t),g(t).then(j).catch(w)}))}();
//# sourceMappingURL=index.b0275ee6.js.map
