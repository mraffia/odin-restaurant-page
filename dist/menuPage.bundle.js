/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/gathering-swarm.png":
/*!****************************************!*\
  !*** ./src/images/gathering-swarm.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b7179c8458d6eb100b8c.png";

/***/ }),

/***/ "./src/images/nailmasters-glory.png":
/*!******************************************!*\
  !*** ./src/images/nailmasters-glory.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ba8bd89254d83ed6be9c.png";

/***/ }),

/***/ "./src/images/shamanstone.png":
/*!************************************!*\
  !*** ./src/images/shamanstone.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "41a13fee069f94e134f9.png";

/***/ }),

/***/ "./src/images/soulcatcher.png":
/*!************************************!*\
  !*** ./src/images/soulcatcher.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3ea1e50ee32c66695438.png";

/***/ }),

/***/ "./src/images/stalwart-shell.png":
/*!***************************************!*\
  !*** ./src/images/stalwart-shell.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "614bbd5a1e34f2f39322.png";

/***/ }),

/***/ "./src/images/waywardcompass.png":
/*!***************************************!*\
  !*** ./src/images/waywardcompass.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d73eea4ca16dac9e4e9a.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateMenuPage)
/* harmony export */ });
/* harmony import */ var _images_nailmasters_glory_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/nailmasters-glory.png */ "./src/images/nailmasters-glory.png");
/* harmony import */ var _images_gathering_swarm_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/gathering-swarm.png */ "./src/images/gathering-swarm.png");
/* harmony import */ var _images_stalwart_shell_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/stalwart-shell.png */ "./src/images/stalwart-shell.png");
/* harmony import */ var _images_waywardcompass_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/waywardcompass.png */ "./src/images/waywardcompass.png");
/* harmony import */ var _images_soulcatcher_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/soulcatcher.png */ "./src/images/soulcatcher.png");
/* harmony import */ var _images_shamanstone_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/shamanstone.png */ "./src/images/shamanstone.png");







function generateMenuPage() {
    let menus = [
        {
            name: "Nailmaster's Glory",
            image: _images_nailmasters_glory_png__WEBPACK_IMPORTED_MODULE_0__,
            description: "Reduces the time needed to charge Nail Arts."
        },
        {
            name: "Gathering Swarm",
            image: _images_gathering_swarm_png__WEBPACK_IMPORTED_MODULE_1__,
            description: "Spawns a swarm that collects dropped Geo."
        },
        {
            name: "Stalwart Shell",
            image: _images_stalwart_shell_png__WEBPACK_IMPORTED_MODULE_2__,
            description: "Increases invincibility frames and reduces hit recoil."
        },
        {
            name: "Wayward Compass",
            image: _images_waywardcompass_png__WEBPACK_IMPORTED_MODULE_3__,
            description: "Shows the location of the Knight on the Map."
        },
        {
            name: "Soul Catcher",
            image: _images_soulcatcher_png__WEBPACK_IMPORTED_MODULE_4__,
            description: "Increases the amount of SOUL gained when hitting enemies with the Nail."
        },
        {
            name: "Shaman Stone",
            image: _images_shamanstone_png__WEBPACK_IMPORTED_MODULE_5__,
            description: "Increases the damage of Spells and the size of Vengeful Spirit/Shade Soul."
        },
    ]

    const menuGrid = document.createElement('div');
    const menuPageContent = document.createElement('div');

    menuGrid.classList.add('menu-grid');
    menuPageContent.classList.add('menu-page');

    for (let i = 0; i < menus.length; i++) {
        const menu = document.createElement('div');
        const menuImage = document.createElement('img');
        const menuName = document.createElement('h3');
        const menuDesc = document.createElement('p');

        menu.classList.add('menu-block');
        menuImage.classList.add('menu-image');
        menuName.classList.add('menu-name');
        menuDesc.classList.add('menu-desc');

        menuImage.src = menus[i].image;
        menuName.textContent = menus[i].name;
        menuDesc.textContent = menus[i].description;

        menu.appendChild(menuImage);
        menu.appendChild(menuName);
        menu.appendChild(menuDesc);

        menuGrid.appendChild(menu);
    }

    menuPageContent.appendChild(menuGrid);

    return menuPageContent;
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudVBhZ2UuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Y2RDtBQUNKO0FBQ0Y7QUFDQztBQUNOO0FBQ0E7O0FBRW5DO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDBEQUFnQjtBQUNuQztBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsbUJBQW1CLHdEQUFjO0FBQ2pDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxtQkFBbUIsdURBQWE7QUFDaEM7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLG1CQUFtQix1REFBYztBQUNqQztBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsbUJBQW1CLG9EQUFXO0FBQzlCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxtQkFBbUIsb0RBQVc7QUFDOUI7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51UGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgTmFpbG1hc3RlcnNHbG9yeSBmcm9tICcuL2ltYWdlcy9uYWlsbWFzdGVycy1nbG9yeS5wbmcnXG5pbXBvcnQgR2F0aGVyaW5nU3dhcm0gZnJvbSAnLi9pbWFnZXMvZ2F0aGVyaW5nLXN3YXJtLnBuZydcbmltcG9ydCBTdGFsd2FydFNoZWxsIGZyb20gJy4vaW1hZ2VzL3N0YWx3YXJ0LXNoZWxsLnBuZydcbmltcG9ydCBXYXl3YXJkQ29tcGFzcyBmcm9tICcuL2ltYWdlcy93YXl3YXJkY29tcGFzcy5wbmcnXG5pbXBvcnQgU291bENhdGNoZXIgZnJvbSAnLi9pbWFnZXMvc291bGNhdGNoZXIucG5nJ1xuaW1wb3J0IFNoYW1hblN0b25lIGZyb20gJy4vaW1hZ2VzL3NoYW1hbnN0b25lLnBuZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVNZW51UGFnZSgpIHtcbiAgICBsZXQgbWVudXMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiTmFpbG1hc3RlcidzIEdsb3J5XCIsXG4gICAgICAgICAgICBpbWFnZTogTmFpbG1hc3RlcnNHbG9yeSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlJlZHVjZXMgdGhlIHRpbWUgbmVlZGVkIHRvIGNoYXJnZSBOYWlsIEFydHMuXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJHYXRoZXJpbmcgU3dhcm1cIixcbiAgICAgICAgICAgIGltYWdlOiBHYXRoZXJpbmdTd2FybSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlNwYXducyBhIHN3YXJtIHRoYXQgY29sbGVjdHMgZHJvcHBlZCBHZW8uXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJTdGFsd2FydCBTaGVsbFwiLFxuICAgICAgICAgICAgaW1hZ2U6IFN0YWx3YXJ0U2hlbGwsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJJbmNyZWFzZXMgaW52aW5jaWJpbGl0eSBmcmFtZXMgYW5kIHJlZHVjZXMgaGl0IHJlY29pbC5cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIldheXdhcmQgQ29tcGFzc1wiLFxuICAgICAgICAgICAgaW1hZ2U6IFdheXdhcmRDb21wYXNzLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU2hvd3MgdGhlIGxvY2F0aW9uIG9mIHRoZSBLbmlnaHQgb24gdGhlIE1hcC5cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIlNvdWwgQ2F0Y2hlclwiLFxuICAgICAgICAgICAgaW1hZ2U6IFNvdWxDYXRjaGVyLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiSW5jcmVhc2VzIHRoZSBhbW91bnQgb2YgU09VTCBnYWluZWQgd2hlbiBoaXR0aW5nIGVuZW1pZXMgd2l0aCB0aGUgTmFpbC5cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIlNoYW1hbiBTdG9uZVwiLFxuICAgICAgICAgICAgaW1hZ2U6IFNoYW1hblN0b25lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiSW5jcmVhc2VzIHRoZSBkYW1hZ2Ugb2YgU3BlbGxzIGFuZCB0aGUgc2l6ZSBvZiBWZW5nZWZ1bCBTcGlyaXQvU2hhZGUgU291bC5cIlxuICAgICAgICB9LFxuICAgIF1cblxuICAgIGNvbnN0IG1lbnVHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWVudVBhZ2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBtZW51R3JpZC5jbGFzc0xpc3QuYWRkKCdtZW51LWdyaWQnKTtcbiAgICBtZW51UGFnZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWVudS1wYWdlJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgbWVudUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNvbnN0IG1lbnVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgY29uc3QgbWVudURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51LWJsb2NrJyk7XG4gICAgICAgIG1lbnVJbWFnZS5jbGFzc0xpc3QuYWRkKCdtZW51LWltYWdlJyk7XG4gICAgICAgIG1lbnVOYW1lLmNsYXNzTGlzdC5hZGQoJ21lbnUtbmFtZScpO1xuICAgICAgICBtZW51RGVzYy5jbGFzc0xpc3QuYWRkKCdtZW51LWRlc2MnKTtcblxuICAgICAgICBtZW51SW1hZ2Uuc3JjID0gbWVudXNbaV0uaW1hZ2U7XG4gICAgICAgIG1lbnVOYW1lLnRleHRDb250ZW50ID0gbWVudXNbaV0ubmFtZTtcbiAgICAgICAgbWVudURlc2MudGV4dENvbnRlbnQgPSBtZW51c1tpXS5kZXNjcmlwdGlvbjtcblxuICAgICAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVJbWFnZSk7XG4gICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudU5hbWUpO1xuICAgICAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVEZXNjKTtcblxuICAgICAgICBtZW51R3JpZC5hcHBlbmRDaGlsZChtZW51KTtcbiAgICB9XG5cbiAgICBtZW51UGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUdyaWQpO1xuXG4gICAgcmV0dXJuIG1lbnVQYWdlQ29udGVudDtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=