self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Main.js":
/*!****************************!*\
  !*** ./components/Main.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_NODE_TESTAPP_gnews_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Post */ "./components/Post.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\NODE\\TESTAPP\\gnews\\components\\Main.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_NODE_TESTAPP_gnews_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function Main(_ref) {
  _s();

  var _this = this;

  var data = _ref.data,
      type = _ref.type;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      navToggle = _useState[0],
      setnavToggle = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("main", {
    className: "flex flex-col  overflow-y-hidden overflow-x-hidden",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("header", {
      className: "flex justify-between",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        className: "hidden lg:flex w-6 ml-4 items-center justify-center focus:outline-none mt-4",
        onClick: function onClick() {
          return setnavToggle(!navToggle);
        },
        children: navToggle ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.MenuAlt1Icon, {
          className: "btn"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.MenuAlt3Icon, {
          className: "btn"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), navToggle ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "flex mr-10 mt-2 ",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/",
          className: "nav_option " + (type === "general" ? "active" : ""),
          children: "General"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/technology",
          className: "nav_option " + (type === "technology" ? "active" : ""),
          children: "Technology"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/business",
          className: "nav_option " + (type === "business" ? "active" : ""),
          children: "Business"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/sports",
          className: "nav_option " + (type === "sports" ? "active" : ""),
          children: "Sports"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "w-full  text-center md:text-left md:ml-20 pb-4 text-[#44519E] text-5xl font-bold font-[Roboto] sticky top 0 z-10",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        children: ["Main ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          className: "font-normal",
          children: "news"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 16
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "flex flex-wrap justify-center   md:ml-20  overflow-y-scroll",
      children: data.articles.map(function (article) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Post__WEBPACK_IMPORTED_MODULE_5__.default, _objectSpread({}, article), article.title, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

_s(Main, "wqWFfPzdlCBDYhXKzTLD1ocpmyo=");

_c = Main;
/* harmony default export */ __webpack_exports__["default"] = (Main);

var _c;

$RefreshReg$(_c, "Main");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluLmpzIl0sIm5hbWVzIjpbIk1haW4iLCJkYXRhIiwidHlwZSIsInVzZVN0YXRlIiwibmF2VG9nZ2xlIiwic2V0bmF2VG9nZ2xlIiwiYXJ0aWNsZXMiLCJtYXAiLCJhcnRpY2xlIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBTUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsT0FBOEI7QUFBQTs7QUFBQTs7QUFBQSxNQUFkQyxJQUFjLFFBQWRBLElBQWM7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQUEsa0JBQ01DLCtDQUFRLENBQUMsS0FBRCxDQURkO0FBQUEsTUFDckJDLFNBRHFCO0FBQUEsTUFDVkMsWUFEVTs7QUFFNUIsc0JBQ0U7QUFBTSxhQUFTLEVBQUMsb0RBQWhCO0FBQUEsNEJBQ0U7QUFBUSxlQUFTLEVBQUMsc0JBQWxCO0FBQUEsOEJBQ0U7QUFDRSxpQkFBUyxFQUFDLDZFQURaO0FBRUUsZUFBTyxFQUFFO0FBQUEsaUJBQU1BLFlBQVksQ0FBQyxDQUFDRCxTQUFGLENBQWxCO0FBQUEsU0FGWDtBQUFBLGtCQUlHQSxTQUFTLGdCQUNSLDhEQUFDLGtFQUFEO0FBQWMsbUJBQVMsRUFBQztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURRLGdCQUdSLDhEQUFDLGtFQUFEO0FBQWMsbUJBQVMsRUFBQztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGLEVBWUdBLFNBQVMsZ0JBQ1I7QUFBSyxpQkFBUyxFQUFDLGtCQUFmO0FBQUEsZ0NBQ0UsOERBQUMsa0RBQUQ7QUFDRSxjQUFJLEVBQUMsR0FEUDtBQUVFLG1CQUFTLEVBQUUsaUJBQWlCRixJQUFJLEtBQUssU0FBVCxHQUFxQixRQUFyQixHQUFnQyxFQUFqRCxDQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBT0UsOERBQUMsa0RBQUQ7QUFDRSxjQUFJLEVBQUMsYUFEUDtBQUVFLG1CQUFTLEVBQ1AsaUJBQWlCQSxJQUFJLEtBQUssWUFBVCxHQUF3QixRQUF4QixHQUFtQyxFQUFwRCxDQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGLGVBZUUsOERBQUMsa0RBQUQ7QUFDRSxjQUFJLEVBQUMsV0FEUDtBQUVFLG1CQUFTLEVBQUUsaUJBQWlCQSxJQUFJLEtBQUssVUFBVCxHQUFzQixRQUF0QixHQUFpQyxFQUFsRCxDQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWZGLGVBcUJFLDhEQUFDLGtEQUFEO0FBQ0UsY0FBSSxFQUFDLFNBRFA7QUFFRSxtQkFBUyxFQUFFLGlCQUFpQkEsSUFBSSxLQUFLLFFBQVQsR0FBb0IsUUFBcEIsR0FBK0IsRUFBaEQsQ0FGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRFEsR0E2Qk4sSUF6Q047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUE0Q0U7QUFBSyxlQUFTLEVBQUMsa0hBQWY7QUFBQSw2QkFDRTtBQUFBLHlDQUNPO0FBQU0sbUJBQVMsRUFBQyxhQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBNUNGLGVBaURFO0FBQUssZUFBUyxFQUFDLDZEQUFmO0FBQUEsZ0JBQ0dELElBQUksQ0FBQ0ssUUFBTCxDQUFjQyxHQUFkLENBQWtCLFVBQUNDLE9BQUQ7QUFBQSw0QkFDakIsOERBQUMsMENBQUQsb0JBQThCQSxPQUE5QixHQUFXQSxPQUFPLENBQUNDLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGlCO0FBQUEsT0FBbEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUREOztHQTNEUVQsSTs7S0FBQUEsSTtBQTZEVCwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lM2MyZTcwNTc1MGFlMjI1MTcwNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBTZWFyY2hJY29uLFxyXG4gIE1lbnVBbHQxSWNvbixcclxuICBYLFxyXG4gIE1lbnVBbHQzSWNvbixcclxufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQb3N0IGZyb20gXCIuL1Bvc3RcIjtcclxuXHJcbmZ1bmN0aW9uIE1haW4oeyBkYXRhLCB0eXBlIH0pIHtcclxuICBjb25zdCBbbmF2VG9nZ2xlLCBzZXRuYXZUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sICBvdmVyZmxvdy15LWhpZGRlbiBvdmVyZmxvdy14LWhpZGRlblwiPlxyXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmZsZXggdy02IG1sLTQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZvY3VzOm91dGxpbmUtbm9uZSBtdC00XCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldG5hdlRvZ2dsZSghbmF2VG9nZ2xlKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bmF2VG9nZ2xlID8gKFxyXG4gICAgICAgICAgICA8TWVudUFsdDFJY29uIGNsYXNzTmFtZT1cImJ0blwiIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8TWVudUFsdDNJY29uIGNsYXNzTmFtZT1cImJ0blwiIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAge25hdlRvZ2dsZSA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtci0xMCBtdC0yIFwiPlxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1wibmF2X29wdGlvbiBcIiArICh0eXBlID09PSBcImdlbmVyYWxcIiA/IFwiYWN0aXZlXCIgOiBcIlwiKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEdlbmVyYWxcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIGhyZWY9XCIvdGVjaG5vbG9neVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIFwibmF2X29wdGlvbiBcIiArICh0eXBlID09PSBcInRlY2hub2xvZ3lcIiA/IFwiYWN0aXZlXCIgOiBcIlwiKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFRlY2hub2xvZ3lcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIGhyZWY9XCIvYnVzaW5lc3NcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJuYXZfb3B0aW9uIFwiICsgKHR5cGUgPT09IFwiYnVzaW5lc3NcIiA/IFwiYWN0aXZlXCIgOiBcIlwiKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEJ1c2luZXNzXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBocmVmPVwiL3Nwb3J0c1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcIm5hdl9vcHRpb24gXCIgKyAodHlwZSA9PT0gXCJzcG9ydHNcIiA/IFwiYWN0aXZlXCIgOiBcIlwiKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNwb3J0c1xyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsICB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnQgbWQ6bWwtMjAgcGItNCB0ZXh0LVsjNDQ1MTlFXSB0ZXh0LTV4bCBmb250LWJvbGQgZm9udC1bUm9ib3RvXSBzdGlja3kgdG9wIDAgei0xMFwiPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgTWFpbiA8c3BhbiBjbGFzc05hbWU9XCJmb250LW5vcm1hbFwiPm5ld3M8L3NwYW4+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciAgIG1kOm1sLTIwICBvdmVyZmxvdy15LXNjcm9sbFwiPlxyXG4gICAgICAgIHtkYXRhLmFydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4gKFxyXG4gICAgICAgICAgPFBvc3Qga2V5PXthcnRpY2xlLnRpdGxlfSB7Li4uYXJ0aWNsZX0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==