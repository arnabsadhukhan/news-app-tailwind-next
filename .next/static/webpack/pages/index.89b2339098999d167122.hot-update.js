self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Post.js":
/*!****************************!*\
  !*** ./components/Post.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\NODE\\TESTAPP\\gnews\\components\\Post.js";



function Post(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: " p-4 w-80 shadow-lg flex flex-col justify-around",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      loading: "lazy",
      src: props.urlToImage ? props.urlToImage : "https://librarianresources.taylorandfrancis.com/wp-content/uploads/2018/02/Abstract-blue-background.jpg",
      className: "rounded-xl m-2",
      alt: "image not found"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "post_title",
      children: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "publish_at",
      children: ["Published At ", props.publishedAt]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "publish_author",
      children: ["by ", props.author]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      className: "btn w-full",
      href: props.url,
      target: "_blank",
      children: "Read"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

_c = Post;
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c;

$RefreshReg$(_c, "Post");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0LmpzIl0sIm5hbWVzIjpbIlBvc3QiLCJwcm9wcyIsInVybFRvSW1hZ2UiLCJ0aXRsZSIsInB1Ymxpc2hlZEF0IiwiYXV0aG9yIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFDbkIsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsa0RBQWY7QUFBQSw0QkFDRTtBQUNFLGFBQU8sRUFBQyxNQURWO0FBRUUsU0FBRyxFQUNEQSxLQUFLLENBQUNDLFVBQU4sR0FDSUQsS0FBSyxDQUFDQyxVQURWLEdBRUkseUdBTFI7QUFPRSxlQUFTLEVBQUMsZ0JBUFo7QUFRRSxTQUFHLEVBQUM7QUFSTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFZRTtBQUFHLGVBQVMsRUFBQyxZQUFiO0FBQUEsZ0JBQTJCRCxLQUFLLENBQUNFO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaRixlQWNFO0FBQUcsZUFBUyxFQUFDLFlBQWI7QUFBQSxrQ0FBd0NGLEtBQUssQ0FBQ0csV0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEYsZUFlRTtBQUFHLGVBQVMsRUFBQyxnQkFBYjtBQUFBLHdCQUFrQ0gsS0FBSyxDQUFDSSxNQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmRixlQWdCRTtBQUFHLGVBQVMsRUFBQyxZQUFiO0FBQTBCLFVBQUksRUFBRUosS0FBSyxDQUFDSyxHQUF0QztBQUEyQyxZQUFNLEVBQUMsUUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzQkQ7O0tBdkJRTixJO0FBeUJULCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg5YjIzMzkwOTg5OTlkMTY3MTIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuZnVuY3Rpb24gUG9zdChwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBwLTQgdy04MCBzaGFkb3ctbGcgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWFyb3VuZFwiPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgbG9hZGluZz1cImxhenlcIlxyXG4gICAgICAgIHNyYz17XHJcbiAgICAgICAgICBwcm9wcy51cmxUb0ltYWdlXHJcbiAgICAgICAgICAgID8gcHJvcHMudXJsVG9JbWFnZVxyXG4gICAgICAgICAgICA6IFwiaHR0cHM6Ly9saWJyYXJpYW5yZXNvdXJjZXMudGF5bG9yYW5kZnJhbmNpcy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDIvQWJzdHJhY3QtYmx1ZS1iYWNrZ3JvdW5kLmpwZ1wiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQteGwgbS0yXCJcclxuICAgICAgICBhbHQ9XCJpbWFnZSBub3QgZm91bmRcIlxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicG9zdF90aXRsZVwiPntwcm9wcy50aXRsZX08L3A+XHJcblxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJwdWJsaXNoX2F0XCI+UHVibGlzaGVkIEF0IHtwcm9wcy5wdWJsaXNoZWRBdH08L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInB1Ymxpc2hfYXV0aG9yXCI+Ynkge3Byb3BzLmF1dGhvcn08L3A+XHJcbiAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biB3LWZ1bGxcIiBocmVmPXtwcm9wcy51cmx9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgIFJlYWRcclxuICAgICAgPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==