(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ./fonts/Roboto/roboto-v19-latin-regular.woff2 */ "./src/fonts/Roboto/roboto-v19-latin-regular.woff2"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ./fonts/Roboto/roboto-v19-latin-regular.woff */ "./src/fonts/Roboto/roboto-v19-latin-regular.woff"));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ./icon.png */ "./src/icon.png"));

// Module
exports.push([module.i, "@font-face {\r\n  font-family: 'Roboto';\r\n  src:  url(" + ___CSS_LOADER_URL___0___ + ") format('woff2'),\r\n        url(" + ___CSS_LOADER_URL___1___ + ") format('woff');\r\n  font-weight: 600;\r\n  font-style: normal;\r\n}\r\n\r\n.hello {\r\n  color: red;\r\n  background: url(" + ___CSS_LOADER_URL___2___ + ");\r\n  font-family: 'Roboto';\r\n}", ""]);



/***/ }),

/***/ "./src/data.xml":
/*!**********************!*\
  !*** ./src/data.xml ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"note":{"to":["Mary"],"from":["John"],"heading":["Reminder"],"body":["Call Cindy on Tuesday"]}}

/***/ }),

/***/ "./src/fonts/Roboto/roboto-v19-latin-regular.woff":
/*!********************************************************!*\
  !*** ./src/fonts/Roboto/roboto-v19-latin-regular.woff ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "60fa3c0614b8fb2f394fa29944c21540.woff";

/***/ }),

/***/ "./src/fonts/Roboto/roboto-v19-latin-regular.woff2":
/*!*********************************************************!*\
  !*** ./src/fonts/Roboto/roboto-v19-latin-regular.woff2 ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "479970ffb74f2117317f9d24d9e317fe.woff2";

/***/ }),

/***/ "./src/icon.png":
/*!**********************!*\
  !*** ./src/icon.png ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e2974015f7f25a794bce630a1894efc9.png";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon.png */ "./src/icon.png");
/* harmony import */ var _icon_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_icon_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_xml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.xml */ "./src/data.xml");
/* harmony import */ var _data_xml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_xml__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./print.js */ "./src/print.js");








function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work
  
  element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = _print_js__WEBPACK_IMPORTED_MODULE_4__["default"];

  const myIcon = new Image();
  myIcon.src = _icon_png__WEBPACK_IMPORTED_MODULE_2___default.a;

  element.appendChild(myIcon);
  element.appendChild(btn);

  console.log(_data_xml__WEBPACK_IMPORTED_MODULE_3___default.a);

  return element;
}

document.body.appendChild(component());


/**
 * code demo for dynamic imports
 */
// function getComponent() {
//   return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
//     const element = document.createElement('div');

//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    
//     return element;
//   }).catch(error => 'An error occurred while loading the component');
// }

// getComponent().then(component => {
//   document.body.appendChild(component);
// });

/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return printMe; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


console.log(
  lodash__WEBPACK_IMPORTED_MODULE_0___default.a.join(['Another', 'module', 'loaded!'], ' ')
);

function printMe() {
  console.log('I get called from print.js! Hello, My name is Vo Van Duyet');
}


// function printComponent() {
//   console.log(
//     _.join(['Another', 'module', 'loaded!'], ' ')
//   );
// }

// printComponent().then(component => {
//   document.body.appendChild(component);
// });

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

},[["./src/index.js","runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLnhtbCIsIndlYnBhY2s6Ly8vLi9zcmMvZm9udHMvUm9ib3RvL3JvYm90by12MTktbGF0aW4tcmVndWxhci53b2ZmIiwid2VicGFjazovLy8uL3NyYy9mb250cy9Sb2JvdG8vcm9ib3RvLXYxOS1sYXRpbi1yZWd1bGFyLndvZmYyIiwid2VicGFjazovLy8uL3NyYy9pY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ByaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/OGYzNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDbkY7QUFDQSxnQkFBZ0IsbUJBQU8sQ0FBQyxtSEFBdUQ7QUFDL0UseUNBQXlDLG1CQUFPLENBQUMsd0dBQStDO0FBQ2hHLHlDQUF5QyxtQkFBTyxDQUFDLHNHQUE4QztBQUMvRix5Q0FBeUMsbUJBQU8sQ0FBQyxrQ0FBWTs7QUFFN0Q7QUFDQSxjQUFjLFFBQVMsZUFBZSw0QkFBNEIsbUlBQW1JLHVCQUF1Qix5QkFBeUIsS0FBSyxnQkFBZ0IsaUJBQWlCLHdEQUF3RCw0QkFBNEIsS0FBSzs7Ozs7Ozs7Ozs7OztBQ1JwWCxrQkFBa0IsUUFBUSx1Rjs7Ozs7Ozs7Ozs7QUNBMUIsaUJBQWlCLHFCQUF1QiwyQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1Qiw0Qzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVCOztBQUVGO0FBQ1M7QUFDQTs7QUFFRzs7QUFFakM7QUFDQTtBQUNBOztBQUVBOztBQUVBLHNCQUFzQiw2Q0FBQztBQUN2Qjs7QUFFQTtBQUNBLGdCQUFnQixpREFBTzs7QUFFdkI7QUFDQSxlQUFlLGdEQUFJOztBQUVuQjtBQUNBOztBQUVBLGNBQWMsZ0RBQUk7O0FBRWxCO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLGFBQWE7QUFDbEY7O0FBRUE7O0FBRUE7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBLElBQUksRTs7Ozs7Ozs7Ozs7O0FDakRKO0FBQUE7QUFBQTtBQUFBO0FBQXVCOztBQUV2QjtBQUNBLEVBQUUsNkNBQUM7QUFDSDs7QUFFZTtBQUNmO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksRTs7Ozs7Ozs7Ozs7O0FDbEJKLGNBQWMsbUJBQU8sQ0FBQyxrSEFBc0Q7O0FBRTVFLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxtR0FBZ0Q7O0FBRXJFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBJbXBvcnRzXG52YXIgdXJsRXNjYXBlID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS91cmwtZXNjYXBlLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyA9IHVybEVzY2FwZShyZXF1aXJlKFwiLi9mb250cy9Sb2JvdG8vcm9ib3RvLXYxOS1sYXRpbi1yZWd1bGFyLndvZmYyXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzFfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4vZm9udHMvUm9ib3RvL3JvYm90by12MTktbGF0aW4tcmVndWxhci53b2ZmXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzJfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4vaWNvbi5wbmdcIikpO1xuXG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgc3JjOiAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18wX19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXHJcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMV9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi5oZWxsbyB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18yX19fICsgXCIpO1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbn1cIiwgXCJcIl0pO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcIm5vdGVcIjp7XCJ0b1wiOltcIk1hcnlcIl0sXCJmcm9tXCI6W1wiSm9oblwiXSxcImhlYWRpbmdcIjpbXCJSZW1pbmRlclwiXSxcImJvZHlcIjpbXCJDYWxsIENpbmR5IG9uIFR1ZXNkYXlcIl19fSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjYwZmEzYzA2MTRiOGZiMmYzOTRmYTI5OTQ0YzIxNTQwLndvZmZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0Nzk5NzBmZmI3NGYyMTE3MzE3ZjlkMjRkOWUzMTdmZS53b2ZmMlwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImUyOTc0MDE1ZjdmMjVhNzk0YmNlNjMwYTE4OTRlZmM5LnBuZ1wiOyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IEljb24gZnJvbSAnLi9pY29uLnBuZyc7XHJcbmltcG9ydCBEYXRhIGZyb20gJy4vZGF0YS54bWwnO1xyXG5cclxuaW1wb3J0IHByaW50TWUgZnJvbSAnLi9wcmludC5qcyc7XHJcblxyXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuICAvLyBMb2Rhc2gsIGN1cnJlbnRseSBpbmNsdWRlZCB2aWEgYSBzY3JpcHQsIGlzIHJlcXVpcmVkIGZvciB0aGlzIGxpbmUgdG8gd29ya1xyXG4gIFxyXG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsnSGVsbG8nLCAnd2VicGFjayddLCAnICcpO1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGVsbG8nKTtcclxuXHJcbiAgYnRuLmlubmVySFRNTCA9ICdDbGljayBtZSBhbmQgY2hlY2sgdGhlIGNvbnNvbGUhJztcclxuICBidG4ub25jbGljayA9IHByaW50TWU7XHJcblxyXG4gIGNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gIG15SWNvbi5zcmMgPSBJY29uO1xyXG5cclxuICBlbGVtZW50LmFwcGVuZENoaWxkKG15SWNvbik7XHJcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChidG4pO1xyXG5cclxuICBjb25zb2xlLmxvZyhEYXRhKTtcclxuXHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBjb2RlIGRlbW8gZm9yIGR5bmFtaWMgaW1wb3J0c1xyXG4gKi9cclxuLy8gZnVuY3Rpb24gZ2V0Q29tcG9uZW50KCkge1xyXG4vLyAgIHJldHVybiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJsb2Rhc2hcIiAqLyAnbG9kYXNoJykudGhlbigoeyBkZWZhdWx0OiBfIH0pID0+IHtcclxuLy8gICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbi8vICAgICBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbJ0hlbGxvJywgJ3dlYnBhY2snXSwgJyAnKTtcclxuICAgIFxyXG4vLyAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbi8vICAgfSkuY2F0Y2goZXJyb3IgPT4gJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGxvYWRpbmcgdGhlIGNvbXBvbmVudCcpO1xyXG4vLyB9XHJcblxyXG4vLyBnZXRDb21wb25lbnQoKS50aGVuKGNvbXBvbmVudCA9PiB7XHJcbi8vICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQpO1xyXG4vLyB9KTsiLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuY29uc29sZS5sb2coXHJcbiAgXy5qb2luKFsnQW5vdGhlcicsICdtb2R1bGUnLCAnbG9hZGVkISddLCAnICcpXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludE1lKCkge1xyXG4gIGNvbnNvbGUubG9nKCdJIGdldCBjYWxsZWQgZnJvbSBwcmludC5qcyEgSGVsbG8sIE15IG5hbWUgaXMgVm8gVmFuIER1eWV0Jyk7XHJcbn1cclxuXHJcblxyXG4vLyBmdW5jdGlvbiBwcmludENvbXBvbmVudCgpIHtcclxuLy8gICBjb25zb2xlLmxvZyhcclxuLy8gICAgIF8uam9pbihbJ0Fub3RoZXInLCAnbW9kdWxlJywgJ2xvYWRlZCEnXSwgJyAnKVxyXG4vLyAgICk7XHJcbi8vIH1cclxuXHJcbi8vIHByaW50Q29tcG9uZW50KCkudGhlbihjb21wb25lbnQgPT4ge1xyXG4vLyAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KTtcclxuLy8gfSk7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==