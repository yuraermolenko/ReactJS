/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************************!*\
  !*** ./ClassWork/4/4.2/jsx/main.jsx ***!
  \**************************************/
/***/ function(module, exports) {

	function getImage() {
	
	    return new Promise(function (resolve, reject) {
	
	        let xhr = new XMLHttpRequest();
	        xhr.open("GET", url);
	        xhr.responseType = "blob";
	
	        xhr.onload = () => {
	            if (xhr.status === 200) {
	                let img = document.createElement('img');
	                img.src = window.URL.createObjectURL(xhr.response);
	                resolve(img);
	            } else {
	                reject(new Error('Image load error: ' + xhr.statusText));
	            }
	        };
	
	        xhr.send();
	    });
	};
	getImage('image.jpg').then(img => {
	    document.getElementById('example');
	}, err => {
	    console.log(err);
	    alert(err);
	});

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map