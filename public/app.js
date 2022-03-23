/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_renderForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/renderForm */ "./src/modules/renderForm.js");
/* harmony import */ var _modules_searchCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/searchCode */ "./src/modules/searchCode.js");


(0,_modules_renderForm__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modules_searchCode__WEBPACK_IMPORTED_MODULE_1__["default"])(); // import students from "./modules/students";
// import { message } from "laravel-mix/src/Log";
// import pvz from "./modules/pvz";
// const $1 = document.querySelectorAll.bind(document);
// students.forEach(e => {
//     console.log(e.name);
//     let li = document.createElement('li');
//     li.innerHTML = e.name;
//     if (e != ''){
//       $1('ul')[0].appendChild(li);
//     }
//   })
// const syHi =()=>{
//     console.log('Hi');
// }
// syHi();
//---------------------- Template literals-----------//
// const name = "jonas";
// const lname = "jonaitis";
// const kiekis = 12;
// const kaina = 14;
// console.log('Labas, mano vardas'+name+', o pavarde'+lname);
// console.log(`Mano vardas ${name},pavarde ${lname}`);
// console.log(`Suma yra:${kiekis*kaina}`);
//_______________ Object destructing_______________//
// //____ Array
// let [kiekis, pavadinimas, kaina] = [12, 'kompiuteris', 123.46];
// kiekis = 14;
// console.log('kiekis:', kiekis);
// console.log('kaina:', kaina);
// //____ Object
// const student = {
//   id: 5,
//   firstName: 'Karolis',
//   lname: 'Petraitis',
//   average: 8
// }
// const {id, firstName:fn, lname:ln} = student;
// console.log(fn)
//____for of, for in
// const items = [1,true, 'Ieva'];
// for(const element in items){
//   console.log(items[element])
// }
// const studentai = [
//   {
//     id:1,
//     firstName:'Jonas',
//     lname: 'Jonaitis',
//     school: 'BIT'
//   },
//   {
//     id:2,
//     firstName:'Petras',
//     lname: 'Petraitis',
//     school: 'BIT'
//   },
//   {
//     id:3,
//     firstName:'Vardenis',
//     lname: 'Pavardenis',
//     school: 'BIT'
//   }
// ]
// for(let student of studentai){
//     for(let studentData in student){
//       console.log(student[studentData])
//     }
// }
// const students= [
//   {
//       id:1,
//       firstName:'Jonas',
//       lname:'Jonaitis',
//       shool:'BIT',
//       subjects:{
//           js:10,
//           react:8,
//           vue:5
//       }
//   },
//   {
//       id:2,
//       firstName:'Petras',
//       lname:'Petraitis',
//       shool:'BIT',
//       subjects:{
//           js:6,
//           react:5,
//           vue:2
//       }
//   },
//   {
//       id:3,
//       firstName:'Vardenis',
//       lname:'Pavardenis',
//       shool:'BIT',
//       subjects:{
//           js:10,
//           react:10,
//           vue:7
//       }
//   }
// ]
// for(let student of students){
//     for(let studentData in student){
//      if(studentData=='subjects'){
//        console.log('Mokomieji dalykai:')
//        for(let subject in student[studentData]){
//         console.log(`${subject}: ${student[studentData][subject]}`)
//        }
//      }else{
//        console.log(student[studentData])
//      }
//     }
//   }
//Spread operator
// function sum(first, second){
//   console.log(first+second)
// }
// sum(12,14)
// function sum(...numbers){
//     let total = numbers.reduce((x,y)=>x+y);
//   console.log(total)
// }
// sum(12,45,78,56,12,78)
// includes
// scopes (galiojimo sritis): Globalus, funkcijos, bloko {}
// let data = ['Tomas', 'Karolis', 'Ieva'];
// if(data.includes('Tomas')){
//   console.log('kontaktas surastas');
// }else{
//   console.log('Kontaktas nerastas');
// }
// (function(){ // sefl invoking function
// })();
// console.log('_____Pardavimai_____')
// const pardavimai = [
//   { preke: 'PS4 Pro',
//     vnt: 3, 
//     originaliKaina: 399.99
//   },
//   { preke: 'Xbox One X',
//     vnt: 1,
//     originaliKaina: 499.99, 
//     nuolaida: 0.2 
//   },
//   { preke: 'Nintendo Switch', 
//     vnt: 4, 
//     originaliKaina: 299.99 
//   },
//   { preke: 'PS2 Console', 
//     vnt: 1, 
//     originaliKaina: 299.99, 
//     nuolaida: 0.8 
//   },
//   { preke: 'Nintendo 64', 
//     vnt: 2, 
//     originaliKaina: 199.99, 
//     nuolaida: 0.65 
//   }
//   ];
//    for(let pardavimas of pardavimai){
//      for(let pardavimasData in pardavimas){
//        console.log(pardavimas[pardavimasData])
//      }
//     }
// ____________________________Callback
// const Demo = ()=>{
// function count(a,b, callback){
//     callback()
//     return a*b;
// }
// const syHello =  function (){console.log('Labas')}
// console.log(count(8,9,syHello));
// const message = ()=>{
//   console.log('Zinute atsiranda po 3 sek')
// }
// setTimeout( message, 3000)
//  }
// export default Demo

/***/ }),

/***/ "./src/modules/ajaxService.js":
/*!************************************!*\
  !*** ./src/modules/ajaxService.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ajaxServise = function ajaxServise(term) {
  var url = "https://api.postit.lt/?term=";
  var key = "UNFYHJYNHGwWmFmG5Go1";
  return fetch("".concat(url).concat(term, "&key=").concat(key)).then(function (response) {
    return response.json();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ajaxServise);

/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var form = function form() {
  return "<div class=\"form-group mb-2\">\n      <input type=\"text\" class=\"form-control term\" placeholder=\"Address\">\n      </div>\n      <div class=\"form-group mx-sm-3 mb-2\">\n      <input type=\"text\" class=\"form-control result\" readonly>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary mb-2\"> Look for code</button>";
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);

/***/ }),

/***/ "./src/modules/renderForm.js":
/*!***********************************!*\
  !*** ./src/modules/renderForm.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./src/modules/form.js");


var renderForm = function renderForm() {
  var formElement = document.createElement('form');
  formElement.className = 'form-inline';
  formElement.innerHTML = (0,_form__WEBPACK_IMPORTED_MODULE_0__["default"])();
  document.querySelector('.card-body').appendChild(formElement);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderForm);

/***/ }),

/***/ "./src/modules/searchCode.js":
/*!***********************************!*\
  !*** ./src/modules/searchCode.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ajaxService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajaxService */ "./src/modules/ajaxService.js");


var searchCode = function searchCode() {
  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // keisti standartine formos elgsena

    var searchTerm = document.querySelector('.term').value;
    console.log(searchTerm);
    var searchResponse;
    (0,_ajaxService__WEBPACK_IMPORTED_MODULE_0__["default"])(searchTerm).then(function (result) {
      return searchResponse = result;
    }).then(function () {
      return console.log('Pasto kodas:', searchResponse.data[0].post_code);
    }).then(function () {
      document.querySelector('.result').value = searchResponse.data[0].post_code;
    })["catch"](function () {
      document.querySelector('.result').value = "Klaida: Toks adresas neegzistuoja";
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchCode);

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/app": 0,
/******/ 			"css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkvanila"] = self["webpackChunkvanila"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/scss/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;