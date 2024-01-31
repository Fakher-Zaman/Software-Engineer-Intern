/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./enums.ts":
/*!******************!*\
  !*** ./enums.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LoyaltyUser: () => (/* binding */ LoyaltyUser),\n/* harmony export */   Permissions: () => (/* binding */ Permissions)\n/* harmony export */ });\nvar Permissions;\n(function (Permissions) {\n    Permissions[\"ADMIN\"] = \"ADMIN\";\n    Permissions[\"READ_ONLY\"] = \"READ_ONLY\";\n})(Permissions || (Permissions = {}));\nvar LoyaltyUser;\n(function (LoyaltyUser) {\n    LoyaltyUser[\"GOLD_USER\"] = \"GOLD_USER\";\n    LoyaltyUser[\"SILVER_USER\"] = \"SILVER_USER\";\n    LoyaltyUser[\"BRONZE_USER\"] = \"BRONZE_USER\";\n})(LoyaltyUser || (LoyaltyUser = {}));\n\n\n//# sourceURL=webpack://project/./enums.ts?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./utils.ts\");\n/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums */ \"./enums.ts\");\n// Any Type\n// 1. Add a description property to Omars review, and give it a value. \n// 2. Next try addressing what TypeScript does not like.\n// 3. Now, imagine we DON'T know what kind of review object we are going to \n// get next.\n\n\nconst propertyContainer = document.querySelector('.properties');\nconst footer = document.querySelector('.footer');\nlet isOpen;\n// Reviews\nconst reviews = [\n    {\n        name: 'Sheia',\n        stars: 5,\n        loyaltyUser: _enums__WEBPACK_IMPORTED_MODULE_1__.LoyaltyUser.GOLD_USER,\n        date: '01-04-2021'\n    },\n    {\n        name: 'Andrzej',\n        stars: 3,\n        loyaltyUser: _enums__WEBPACK_IMPORTED_MODULE_1__.LoyaltyUser.BRONZE_USER,\n        date: '28-03-2021'\n    },\n    {\n        name: 'Omar',\n        stars: 4,\n        loyaltyUser: _enums__WEBPACK_IMPORTED_MODULE_1__.LoyaltyUser.SILVER_USER,\n        date: '27-03-2021',\n        description: 'Great hosts, location was a bit further than said',\n    },\n];\n// User\nconst you = {\n    firstName: 'Bobby',\n    lastName: 'Brown',\n    permissions: _enums__WEBPACK_IMPORTED_MODULE_1__.Permissions.ADMIN,\n    isReturning: true,\n    age: 35,\n    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']\n};\n// Array of Properties\nconst properties = [\n    {\n        image: 'images/colombia-property.jpg',\n        title: 'Colombian Shack',\n        price: 45,\n        location: {\n            firstLine: 'shack 37',\n            city: 'Bogota',\n            code: 45632,\n            country: 'Colombia'\n        },\n        contact: [+112343823978921, 'marywinkle@gmail.com'],\n        isAvailable: true\n    },\n    {\n        image: 'images/poland-property.jpg',\n        title: 'Polish Cottage',\n        price: 34,\n        location: {\n            firstLine: 'no 23',\n            city: 'Gdansk',\n            code: 343903,\n            country: 'Poland'\n        },\n        contact: [+1298239028490830, 'garydavis@hotmail.com'],\n        isAvailable: false\n    },\n    {\n        image: 'images/london-property.jpg',\n        title: 'London Flat',\n        price: 23,\n        location: {\n            firstLine: 'flat 15',\n            city: 'London',\n            code: 35433,\n            country: 'United Kingdom',\n        },\n        contact: [+34829374892553, 'andyluger@aol.com'],\n        isAvailable: true\n    }\n];\n// Functions\n(0,_utils__WEBPACK_IMPORTED_MODULE_0__.showReviewTotal)(reviews.length, reviews[0].name, reviews[0].loyaltyUser);\n(0,_utils__WEBPACK_IMPORTED_MODULE_0__.populateUser)(you.isReturning, you.firstName);\n// Add the properties\nfor (let i = 0; i < properties.length; i++) {\n    const card = document.createElement('div');\n    card.classList.add('card');\n    card.innerHTML = properties[i].title;\n    const image = document.createElement('img');\n    image.setAttribute('src', properties[i].image);\n    card.appendChild(image);\n    if (propertyContainer)\n        propertyContainer.appendChild(card);\n}\nlet currentLocation = ['London', '11.03', 17];\nif (footer)\n    footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°';\n\n\n//# sourceURL=webpack://project/./index.ts?");

/***/ }),

/***/ "./utils.ts":
/*!******************!*\
  !*** ./utils.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   populateUser: () => (/* binding */ populateUser),\n/* harmony export */   showReviewTotal: () => (/* binding */ showReviewTotal)\n/* harmony export */ });\n/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums */ \"./enums.ts\");\nconst reviewTotalDisplay = document.querySelector('#reviews');\nconst returningUserDisplay = document.querySelector('#returning-user');\nconst userNameDisplay = document.querySelector('#user');\n\nfunction showReviewTotal(value, reviewer, isLoyalty) {\n    const iconDisplay = _enums__WEBPACK_IMPORTED_MODULE_0__.LoyaltyUser.GOLD_USER ? '⭐' : '';\n    if (reviewTotalDisplay)\n        reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay;\n}\nfunction populateUser(isReturning, userName) {\n    if (isReturning == true) {\n        if (returningUserDisplay)\n            returningUserDisplay.innerHTML = 'back';\n    }\n    if (userNameDisplay)\n        userNameDisplay.innerHTML = userName;\n}\n\n\n//# sourceURL=webpack://project/./utils.ts?");

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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;