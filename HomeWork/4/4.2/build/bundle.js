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
/*!*************************************!*\
  !*** ./HomeWork/4/4.2/jsx/main.jsx ***!
  \*************************************/
/***/ function(module, exports) {

	"use strict";
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Person = function () {
	    function Person() {
	        var firstName = arguments.length <= 0 || arguments[0] === undefined ? "John" : arguments[0];
	        var lastName = arguments.length <= 1 || arguments[1] === undefined ? "Doe" : arguments[1];
	        var age = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	        var gender = arguments.length <= 3 || arguments[3] === undefined ? "Male" : arguments[3];
	
	        _classCallCheck(this, Person);
	
	        this.firstName = firstName;
	        this.lastName = lastName;
	        this.age = age;
	        this.gender = gender;
	    }
	
	    _createClass(Person, [{
	        key: "fullName",
	        value: function fullName() {
	            return this.firstName + " " + this.lastName;
	        }
	    }, {
	        key: "sayHi",
	        value: function sayHi() {
	            alert("Hello, my name is " + this.fullName());
	        }
	    }]);
	
	    return Person;
	}();
	
	var User = function (_Person) {
	    _inherits(User, _Person);
	
	    function User() {
	        _classCallCheck(this, User);
	
	        var _this = _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this, firstName = "John", lastName = "Doe", age = 0, gender = "Male", signUpToDate = "01.01.1970", id = 1));
	
	        _this.signUpToDate = signUpToDate;
	        _this.id = id;
	        return _this;
	    }
	
	    _createClass(User, [{
	        key: "fullName",
	        value: function fullName() {
	            _get(User.prototype.__proto__ || Object.getPrototypeOf(User.prototype), "fullName", this).call(this);
	        }
	    }, {
	        key: "sayHi",
	        value: function sayHi() {
	            _get(User.prototype.__proto__ || Object.getPrototypeOf(User.prototype), "sayHi", this).call(this);
	        }
	    }, {
	        key: "signUpToDate",
	        value: function signUpToDate(date) {}
	    }]);
	
	    return User;
	}(Person);
	
	var user1 = new User("Alastor", "Green", 35, "Male", "10.09.2016", 123);
	var user2 = new User("Name1", "Surnameme", 35, "Male", "11.09.2016", 1234);
	var user3 = new User("Name2", "Green", 35, "Female", "12.09.2016", 12345);
	var user4 = new User("Name3", "Green", 35, "Male", "13.09.2016", 123456);
	var user5 = new User("Name4", "Green", 35, "Female", "14.09.2016", 1234567);
	var users = [user1, user2, user3, user4, user5];

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map