self["webpackHotUpdate_N_E"]("pages/sports",{

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
          className: "icon "
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyLmpzIl0sIm5hbWVzIjpbIlNpZGViYXIiLCJkYXRhIiwiYXJ0aWNsZXMiLCJtYXAiLCJhcnRpY2xlIiwicHVibGlzaGVkQXQiLCJzcGxpdCIsInNsaWNlIiwidXJsIiwidGl0bGUiLCJhdXRob3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFTQTtBQUNBOztBQUVBLFNBQVNBLE9BQVQsT0FBMkI7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDekIsc0JBQ0U7QUFBUSxhQUFTLEVBQUMsaUJBQWxCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLDhCQUNFO0FBQVEsaUJBQVMsRUFBQyx1REFBbEI7QUFBQSwrQkFDRSw4REFBQyxtRUFBRDtBQUFlLG1CQUFTLEVBQUM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFO0FBQUssaUJBQVMsRUFBQyxzREFBZjtBQUFBLGdDQUNFLDhEQUFDLDhEQUFEO0FBQVUsbUJBQVMsRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBR0UsOERBQUMsZ0VBQUQ7QUFBWSxtQkFBUyxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEYsZUFJRSw4REFBQyxpRUFBRDtBQUFhLG1CQUFTLEVBQUM7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixlQUtFLDhEQUFDLHFFQUFEO0FBQWlCLG1CQUFTLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRixlQU1FLDhEQUFDLHFFQUFEO0FBQWlCLG1CQUFTLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORixlQVFFLDhEQUFDLDJFQUFEO0FBQXVCLG1CQUFTLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQWdCRTtBQUFLLGVBQVMsRUFBQyxnRUFBZjtBQUFBLDhCQUNFO0FBQVEsaUJBQVMsRUFBQyxzRkFBbEI7QUFBQSxnQ0FDRTtBQUFHLG1CQUFTLEVBQUMsb0dBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRSw4REFBQyxnRUFBRDtBQUFjLG1CQUFTLEVBQUM7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQU9FO0FBQUssaUJBQVMsRUFBQywwREFBZjtBQUFBLGtCQUNHQSxJQUFJLENBQUNDLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQixVQUFDQyxPQUFEO0FBQUEsOEJBQ2pCO0FBQXlCLHFCQUFTLEVBQUMsbUJBQW5DO0FBQUEsb0NBQ0U7QUFBRyx1QkFBUyxFQUFDLFlBQWI7QUFBQSx5QkFDR0EsT0FBTyxDQUFDQyxXQUFSLENBQW9CQyxLQUFwQixDQUEwQixHQUExQixFQUErQixDQUEvQixFQUFrQ0MsS0FBbEMsQ0FBd0MsQ0FBeEMsRUFBMkMsQ0FBM0MsQ0FESCxFQUNrRCxHQURsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFJRTtBQUFHLGtCQUFJLEVBQUVILE9BQU8sQ0FBQ0ksR0FBakI7QUFBc0Isb0JBQU0sRUFBQyxRQUE3QjtBQUFzQyx1QkFBUyxFQUFDLGVBQWhEO0FBQUEseUJBQ0csR0FESCxFQUVHSixPQUFPLENBQUNLLEtBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGLEVBUUdMLE9BQU8sQ0FBQ00sTUFBUixnQkFDQztBQUFHLHVCQUFTLEVBQUMsZ0JBQWI7QUFBQSxnQ0FBa0NOLE9BQU8sQ0FBQ00sTUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELEdBRUcsSUFWTjtBQUFBLGFBQVVOLE9BQU8sQ0FBQ0ssS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEaUI7QUFBQSxTQUFsQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyQ0Q7O0tBNUNRVCxPO0FBOENULCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Nwb3J0cy5lZTcxNDA1ZGM4YmUxMmRhZTdhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEFkanVzdG1lbnRzSWNvbixcclxuICBCb29rbWFya0FsdEljb24sXHJcbiAgQ2hldnJvbkRvdWJsZURvd25JY29uLFxyXG4gIEhhc2h0YWdJY29uLFxyXG4gIEhvbWVJY29uLFxyXG4gIE5ld3NwYXBlckljb24sXHJcbiAgU2VhcmNoSWNvbixcclxufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XHJcbmltcG9ydCB7IEJvb2ttYXJrSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L3NvbGlkXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmZ1bmN0aW9uIFNpZGViYXIoeyBkYXRhIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGFzaXNkZSBjbGFzc05hbWU9XCJoaWRkZW4gbGc6ZmxleCBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGUgYmctWyM0NDUxOUVdIHctMjAgaC0yMFwiPlxyXG4gICAgICAgICAgPE5ld3NwYXBlckljb24gY2xhc3NOYW1lPVwidy0xMFwiIC8+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctMjAgaC1mdWxsIGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8SG9tZUljb24gY2xhc3NOYW1lPVwiaWNvbiBcIiAvPlxyXG5cclxuICAgICAgICAgIDxTZWFyY2hJY29uIGNsYXNzTmFtZT1cImljb25cIiAvPlxyXG4gICAgICAgICAgPEhhc2h0YWdJY29uIGNsYXNzTmFtZT1cImljb25cIiAvPlxyXG4gICAgICAgICAgPEJvb2ttYXJrQWx0SWNvbiBjbGFzc05hbWU9XCJpY29uXCIgLz5cclxuICAgICAgICAgIDxBZGp1c3RtZW50c0ljb24gY2xhc3NOYW1lPVwiaWNvblwiIC8+XHJcblxyXG4gICAgICAgICAgPENoZXZyb25Eb3VibGVEb3duSWNvbiBjbGFzc05hbWU9XCJpY29uIGFuaW1hdGUtYm91bmNlXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyNGMUYxRjldIGgtc2NyZWVuIHctZnVsbCBvdmVyZmxvdy1zY3JvbGwgb3ZlcmZsb3cteC1oaWRkZW5cIj5cclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIiBmbGV4IGgtMjAgYmctWyNGMUYxRjldIG1pbi13LVsyMHJlbV0gYm9yZGVyLWItMiBqdXN0aWZ5LWJldHdlZW4gc3RpY2t5IHRvcC0wIHotMTAgIFwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiICB0ZXh0LVsjNDQ1MTlFXSB0ZXh0LWxnIGZvbnQtW1JvYm90b10gZm9udC1zZW1pYm9sZCBmbGV4IGp1c3RpZnktbGVmdCBwbC00IGl0ZW1zLWNlbnRlciBoLWZ1bGwgICBcIj5cclxuICAgICAgICAgICAgUmVjZW50IE5ld3NcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxCb29rbWFya0ljb24gY2xhc3NOYW1lPVwiZmxleCBtci00IHctNiBzZWxmLXN0YXJ0IHRleHQtWyNERUM1QzFdIFwiIC8+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbCBoLWZ1bGwgZGl2aWRlLXktMiBkaXZpZGUtWyNGOUZBRkRdIFwiPlxyXG4gICAgICAgICAge2RhdGEuYXJ0aWNsZXMubWFwKChhcnRpY2xlKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXthcnRpY2xlLnRpdGxlfSBjbGFzc05hbWU9XCJyZWNlbnRfbmV3cyBncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB1Ymxpc2hfYXRcIj5cclxuICAgICAgICAgICAgICAgIHthcnRpY2xlLnB1Ymxpc2hlZEF0LnNwbGl0KFwiVFwiKVsxXS5zbGljZSgwLCA1KX17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9e2FydGljbGUudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJwdWJsaXNoX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICB7YXJ0aWNsZS50aXRsZX1cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAge2FydGljbGUuYXV0aG9yID8gKFxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHVibGlzaF9hdXRob3JcIj5ieSB7YXJ0aWNsZS5hdXRob3J9PC9wPlxyXG4gICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYXNpc2RlPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=