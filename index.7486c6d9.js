!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function e(t){return t&&t.__esModule?t.default:t}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,l=c||f||Function("return this")(),s=Object.prototype.toString,p=Math.max,b=Math.min,d=function(){return l.Date.now()};function y(t){var o=void 0===t?"undefined":e(n)(t);return!!t&&("object"==o||"function"==o)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(n)(t))||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(y(t)){var c="function"==typeof t.valueOf?t.valueOf():t;t=y(c)?c+"":c}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var f=a.test(t);return f||i.test(t)?u(t.slice(2),f?2:8):r.test(t)?NaN:+t}function h(t){return fetch("".concat("https://restcountries.com/v3.1/name","/").concat(t,"?fields=name,capital,population,flags,languages")).then((function(t){if(!t.ok)throw Notiflix.Notify.failure("Oops, there is no country with that name");return console.log(t),t.json()}))}var v=document.querySelector("#search-box"),m=(document.querySelector(".country-list"),document.querySelector(".country-info"));function j(t){var e=function(t){var e=t.name,n=t.capital,o=t.population,r=t.flags,a=t.languages;return"<li>\n            <h2><b>Name</b>: ".concat(e,"</h2>\n            <p><b>Capital</b>: ").concat(n,"</p>\n            <p><b>Population</b>: ").concat(o,"</p>\n            <p><b>Flag</b>: ").concat(r,"</p>\n            <p><b>Languages</b>: ").concat(a,"</p>\n          </li>")};m.innerHTML=e(t),console.log(e(t))}function O(t){return console.warn(t),Notiflix.Notify.failure("Oops, there is no country with that name")}v.addEventListener("input",(function(t){if(t.preventDefault(),""===t.currentTarget.value)return;var e=t.target.value.trim();console.log(e),h(e).then(j).catch(O),console.log(h(e))}))}();
//# sourceMappingURL=index.7486c6d9.js.map
