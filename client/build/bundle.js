/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var UI = __webpack_require__(1);

var app = function() {
  console.log("this is the app")
  new UI();
}

window.addEventListener('load', app);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var app = function(){
  var url = 'https://restcountries.eu/rest/v2';
  var request = new XMLHttpRequest();

  request.open('GET', url)
  request.addEventListener('load', function(){
    var jsonString = request.responseText
    var countries = JSON.parse(jsonString)
    createSelector(countries)
  })
  request.send()
}

var createSelector = function(countries){

  var handleSelectChanged = function(event){
    var selectedCountry = countries[this.value]
      var bucketListP = document.createElement('p')
      document.body.appendChild(bucketListP)
      bucketListP.innerText = selectedCountry.name;
  }

  var div = document.getElementById('countries-selector');
  var select = document.createElement('select')
    countries.forEach(function(country, index){
      var option = document.createElement('option')
      option.innerText = country.name;
      option.value = index;
      select.appendChild(option)
  })
  div.appendChild(select)
  select.addEventListener('change', handleSelectChanged)
}



app()


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map