self["webpackHotUpdate_N_E"]("pages/technology",{

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\NODE\\TESTAPP\\gnews\\components\\Sidebar.js";





function Sidebar(_ref) {
  var _this = this;

  var data = _ref.data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("asisde", {
    className: "hidden lg:flex ",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex flex-col",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
        className: "flex justify-center text-white bg-[#44519E] w-20 h-20",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.NewspaperIcon, {
          className: "w-10"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-col w-20 h-full justify-start items-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.HomeIcon, {
          className: "icon active"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.SearchIcon, {
          className: "icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.HashtagIcon, {
          className: "icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.BookmarkAltIcon, {
          className: "icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.AdjustmentsIcon, {
          className: "icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.ChevronDoubleDownIcon, {
          className: "icon animate-bounce"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "bg-[#F1F1F9] h-screen w-full overflow-scroll overflow-x-hidden",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
        className: " flex h-20 bg-[#F1F1F9] min-w-[20rem] border-b-2 justify-between sticky top-0 z-10  ",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "  text-[#44519E] text-lg font-[Roboto] font-semibold flex justify-left pl-4 items-center h-full   ",
          children: "Recent News"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.BookmarkIcon, {
          className: "flex mr-4 w-6 self-start text-[#DEC5C1] "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-col w-full h-full divide-y-2 divide-[#F9FAFD] ",
        children: data.articles.map(function (article) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "recent_news group",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "publish_at",
              children: [article.publishedAt.split("T")[1].slice(0, 5), " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: article.url,
              target: "_blank",
              className: "publish_title",
              children: [" ", article.title]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 15
            }, _this), article.author ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "publish_author",
              children: ["by ", article.author]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 17
            }, _this) : null]
          }, article.title, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

_c = Sidebar;
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

var _c;

$RefreshReg$(_c, "Sidebar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyLmpzIl0sIm5hbWVzIjpbIlNpZGViYXIiLCJkYXRhIiwiYXJ0aWNsZXMiLCJtYXAiLCJhcnRpY2xlIiwicHVibGlzaGVkQXQiLCJzcGxpdCIsInNsaWNlIiwidXJsIiwidGl0bGUiLCJhdXRob3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFTQTtBQUNBOztBQUVBLFNBQVNBLE9BQVQsT0FBMkI7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDekIsc0JBQ0U7QUFBUSxhQUFTLEVBQUMsaUJBQWxCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLDhCQUNFO0FBQVEsaUJBQVMsRUFBQyx1REFBbEI7QUFBQSwrQkFDRSw4REFBQyxtRUFBRDtBQUFlLG1CQUFTLEVBQUM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFO0FBQUssaUJBQVMsRUFBQyxzREFBZjtBQUFBLGdDQUNFLDhEQUFDLDhEQUFEO0FBQVUsbUJBQVMsRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBR0UsOERBQUMsZ0VBQUQ7QUFBWSxtQkFBUyxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEYsZUFJRSw4REFBQyxpRUFBRDtBQUFhLG1CQUFTLEVBQUM7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixlQUtFLDhEQUFDLHFFQUFEO0FBQWlCLG1CQUFTLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRixlQU1FLDhEQUFDLHFFQUFEO0FBQWlCLG1CQUFTLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORixlQVFFLDhEQUFDLDJFQUFEO0FBQXVCLG1CQUFTLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQWdCRTtBQUFLLGVBQVMsRUFBQyxnRUFBZjtBQUFBLDhCQUNFO0FBQVEsaUJBQVMsRUFBQyxzRkFBbEI7QUFBQSxnQ0FDRTtBQUFHLG1CQUFTLEVBQUMsb0dBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRSw4REFBQyxnRUFBRDtBQUFjLG1CQUFTLEVBQUM7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQU9FO0FBQUssaUJBQVMsRUFBQywwREFBZjtBQUFBLGtCQUNHQSxJQUFJLENBQUNDLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQixVQUFDQyxPQUFEO0FBQUEsOEJBQ2pCO0FBQXlCLHFCQUFTLEVBQUMsbUJBQW5DO0FBQUEsb0NBQ0U7QUFBRyx1QkFBUyxFQUFDLFlBQWI7QUFBQSx5QkFDR0EsT0FBTyxDQUFDQyxXQUFSLENBQW9CQyxLQUFwQixDQUEwQixHQUExQixFQUErQixDQUEvQixFQUFrQ0MsS0FBbEMsQ0FBd0MsQ0FBeEMsRUFBMkMsQ0FBM0MsQ0FESCxFQUNrRCxHQURsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFJRTtBQUFHLGtCQUFJLEVBQUVILE9BQU8sQ0FBQ0ksR0FBakI7QUFBc0Isb0JBQU0sRUFBQyxRQUE3QjtBQUFzQyx1QkFBUyxFQUFDLGVBQWhEO0FBQUEseUJBQ0csR0FESCxFQUVHSixPQUFPLENBQUNLLEtBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGLEVBUUdMLE9BQU8sQ0FBQ00sTUFBUixnQkFDQztBQUFHLHVCQUFTLEVBQUMsZ0JBQWI7QUFBQSxnQ0FBa0NOLE9BQU8sQ0FBQ00sTUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELEdBRUcsSUFWTjtBQUFBLGFBQVVOLE9BQU8sQ0FBQ0ssS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEaUI7QUFBQSxTQUFsQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyQ0Q7O0tBNUNRVCxPO0FBOENULCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RlY2hub2xvZ3kuODIyZTM2ZWJhZTk1NWJkNDdlMTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBBZGp1c3RtZW50c0ljb24sXHJcbiAgQm9va21hcmtBbHRJY29uLFxyXG4gIENoZXZyb25Eb3VibGVEb3duSWNvbixcclxuICBIYXNodGFnSWNvbixcclxuICBIb21lSWNvbixcclxuICBOZXdzcGFwZXJJY29uLFxyXG4gIFNlYXJjaEljb24sXHJcbn0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xyXG5pbXBvcnQgeyBCb29rbWFya0ljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5mdW5jdGlvbiBTaWRlYmFyKHsgZGF0YSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxhc2lzZGUgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmZsZXggXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB0ZXh0LXdoaXRlIGJnLVsjNDQ1MTlFXSB3LTIwIGgtMjBcIj5cclxuICAgICAgICAgIDxOZXdzcGFwZXJJY29uIGNsYXNzTmFtZT1cInctMTBcIiAvPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LTIwIGgtZnVsbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPEhvbWVJY29uIGNsYXNzTmFtZT1cImljb24gYWN0aXZlXCIgLz5cclxuXHJcbiAgICAgICAgICA8U2VhcmNoSWNvbiBjbGFzc05hbWU9XCJpY29uXCIgLz5cclxuICAgICAgICAgIDxIYXNodGFnSWNvbiBjbGFzc05hbWU9XCJpY29uXCIgLz5cclxuICAgICAgICAgIDxCb29rbWFya0FsdEljb24gY2xhc3NOYW1lPVwiaWNvblwiIC8+XHJcbiAgICAgICAgICA8QWRqdXN0bWVudHNJY29uIGNsYXNzTmFtZT1cImljb25cIiAvPlxyXG5cclxuICAgICAgICAgIDxDaGV2cm9uRG91YmxlRG93bkljb24gY2xhc3NOYW1lPVwiaWNvbiBhbmltYXRlLWJvdW5jZVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjRjFGMUY5XSBoLXNjcmVlbiB3LWZ1bGwgb3ZlcmZsb3ctc2Nyb2xsIG92ZXJmbG93LXgtaGlkZGVuXCI+XHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCIgZmxleCBoLTIwIGJnLVsjRjFGMUY5XSBtaW4tdy1bMjByZW1dIGJvcmRlci1iLTIganVzdGlmeS1iZXR3ZWVuIHN0aWNreSB0b3AtMCB6LTEwICBcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIiAgdGV4dC1bIzQ0NTE5RV0gdGV4dC1sZyBmb250LVtSb2JvdG9dIGZvbnQtc2VtaWJvbGQgZmxleCBqdXN0aWZ5LWxlZnQgcGwtNCBpdGVtcy1jZW50ZXIgaC1mdWxsICAgXCI+XHJcbiAgICAgICAgICAgIFJlY2VudCBOZXdzXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8Qm9va21hcmtJY29uIGNsYXNzTmFtZT1cImZsZXggbXItNCB3LTYgc2VsZi1zdGFydCB0ZXh0LVsjREVDNUMxXSBcIiAvPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgaC1mdWxsIGRpdmlkZS15LTIgZGl2aWRlLVsjRjlGQUZEXSBcIj5cclxuICAgICAgICAgIHtkYXRhLmFydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17YXJ0aWNsZS50aXRsZX0gY2xhc3NOYW1lPVwicmVjZW50X25ld3MgZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwdWJsaXNoX2F0XCI+XHJcbiAgICAgICAgICAgICAgICB7YXJ0aWNsZS5wdWJsaXNoZWRBdC5zcGxpdChcIlRcIilbMV0uc2xpY2UoMCwgNSl9e1wiIFwifVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8YSBocmVmPXthcnRpY2xlLnVybH0gdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwicHVibGlzaF90aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAge2FydGljbGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIHthcnRpY2xlLmF1dGhvciA/IChcclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB1Ymxpc2hfYXV0aG9yXCI+Ynkge2FydGljbGUuYXV0aG9yfTwvcD5cclxuICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2FzaXNkZT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9