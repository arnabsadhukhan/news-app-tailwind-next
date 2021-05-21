self["webpackHotUpdate_N_E"]("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyLmpzIl0sIm5hbWVzIjpbIlNpZGViYXIiLCJkYXRhIiwiYXJ0aWNsZXMiLCJtYXAiLCJhcnRpY2xlIiwicHVibGlzaGVkQXQiLCJzcGxpdCIsInNsaWNlIiwidXJsIiwidGl0bGUiLCJhdXRob3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFTQTtBQUNBOztBQUVBLFNBQVNBLE9BQVQsT0FBMkI7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDekIsc0JBQ0U7QUFBUSxhQUFTLEVBQUMsaUJBQWxCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLDhCQUNFO0FBQVEsaUJBQVMsRUFBQyx1REFBbEI7QUFBQSwrQkFDRSw4REFBQyxtRUFBRDtBQUFlLG1CQUFTLEVBQUM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFO0FBQUssaUJBQVMsRUFBQyxzREFBZjtBQUFBLGdDQUNFLDhEQUFDLDhEQUFEO0FBQVUsbUJBQVMsRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBR0UsOERBQUMsZ0VBQUQ7QUFBWSxtQkFBUyxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEYsZUFJRSw4REFBQyxpRUFBRDtBQUFhLG1CQUFTLEVBQUM7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixlQUtFLDhEQUFDLHFFQUFEO0FBQWlCLG1CQUFTLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRixlQU1FLDhEQUFDLHFFQUFEO0FBQWlCLG1CQUFTLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORixlQVFFLDhEQUFDLDJFQUFEO0FBQXVCLG1CQUFTLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQWdCRTtBQUFLLGVBQVMsRUFBQyxnRUFBZjtBQUFBLDhCQUNFO0FBQVEsaUJBQVMsRUFBQyxzRkFBbEI7QUFBQSxnQ0FDRTtBQUFHLG1CQUFTLEVBQUMsb0dBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRSw4REFBQyxnRUFBRDtBQUFjLG1CQUFTLEVBQUM7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQU9FO0FBQUssaUJBQVMsRUFBQywwREFBZjtBQUFBLGtCQUNHQSxJQUFJLENBQUNDLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQixVQUFDQyxPQUFEO0FBQUEsOEJBQ2pCO0FBQXlCLHFCQUFTLEVBQUMsbUJBQW5DO0FBQUEsb0NBQ0U7QUFBRyx1QkFBUyxFQUFDLFlBQWI7QUFBQSx5QkFDR0EsT0FBTyxDQUFDQyxXQUFSLENBQW9CQyxLQUFwQixDQUEwQixHQUExQixFQUErQixDQUEvQixFQUFrQ0MsS0FBbEMsQ0FBd0MsQ0FBeEMsRUFBMkMsQ0FBM0MsQ0FESCxFQUNrRCxHQURsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFJRTtBQUFHLGtCQUFJLEVBQUVILE9BQU8sQ0FBQ0ksR0FBakI7QUFBc0Isb0JBQU0sRUFBQyxRQUE3QjtBQUFzQyx1QkFBUyxFQUFDLGVBQWhEO0FBQUEseUJBQ0csR0FESCxFQUVHSixPQUFPLENBQUNLLEtBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGLEVBUUdMLE9BQU8sQ0FBQ00sTUFBUixnQkFDQztBQUFHLHVCQUFTLEVBQUMsZ0JBQWI7QUFBQSxnQ0FBa0NOLE9BQU8sQ0FBQ00sTUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELEdBRUcsSUFWTjtBQUFBLGFBQVVOLE9BQU8sQ0FBQ0ssS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEaUI7QUFBQSxTQUFsQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyQ0Q7O0tBNUNRVCxPO0FBOENULCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVlNzE0MDVkYzhiZTEyZGFlN2ExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQWRqdXN0bWVudHNJY29uLFxyXG4gIEJvb2ttYXJrQWx0SWNvbixcclxuICBDaGV2cm9uRG91YmxlRG93bkljb24sXHJcbiAgSGFzaHRhZ0ljb24sXHJcbiAgSG9tZUljb24sXHJcbiAgTmV3c3BhcGVySWNvbixcclxuICBTZWFyY2hJY29uLFxyXG59IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcclxuaW1wb3J0IHsgQm9va21hcmtJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZnVuY3Rpb24gU2lkZWJhcih7IGRhdGEgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YXNpc2RlIGNsYXNzTmFtZT1cImhpZGRlbiBsZzpmbGV4IFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZSBiZy1bIzQ0NTE5RV0gdy0yMCBoLTIwXCI+XHJcbiAgICAgICAgICA8TmV3c3BhcGVySWNvbiBjbGFzc05hbWU9XCJ3LTEwXCIgLz5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy0yMCBoLWZ1bGwganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxIb21lSWNvbiBjbGFzc05hbWU9XCJpY29uIFwiIC8+XHJcblxyXG4gICAgICAgICAgPFNlYXJjaEljb24gY2xhc3NOYW1lPVwiaWNvblwiIC8+XHJcbiAgICAgICAgICA8SGFzaHRhZ0ljb24gY2xhc3NOYW1lPVwiaWNvblwiIC8+XHJcbiAgICAgICAgICA8Qm9va21hcmtBbHRJY29uIGNsYXNzTmFtZT1cImljb25cIiAvPlxyXG4gICAgICAgICAgPEFkanVzdG1lbnRzSWNvbiBjbGFzc05hbWU9XCJpY29uXCIgLz5cclxuXHJcbiAgICAgICAgICA8Q2hldnJvbkRvdWJsZURvd25JY29uIGNsYXNzTmFtZT1cImljb24gYW5pbWF0ZS1ib3VuY2VcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bI0YxRjFGOV0gaC1zY3JlZW4gdy1mdWxsIG92ZXJmbG93LXNjcm9sbCBvdmVyZmxvdy14LWhpZGRlblwiPlxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiIGZsZXggaC0yMCBiZy1bI0YxRjFGOV0gbWluLXctWzIwcmVtXSBib3JkZXItYi0yIGp1c3RpZnktYmV0d2VlbiBzdGlja3kgdG9wLTAgei0xMCAgXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgIHRleHQtWyM0NDUxOUVdIHRleHQtbGcgZm9udC1bUm9ib3RvXSBmb250LXNlbWlib2xkIGZsZXgganVzdGlmeS1sZWZ0IHBsLTQgaXRlbXMtY2VudGVyIGgtZnVsbCAgIFwiPlxyXG4gICAgICAgICAgICBSZWNlbnQgTmV3c1xyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPEJvb2ttYXJrSWNvbiBjbGFzc05hbWU9XCJmbGV4IG1yLTQgdy02IHNlbGYtc3RhcnQgdGV4dC1bI0RFQzVDMV0gXCIgLz5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIGgtZnVsbCBkaXZpZGUteS0yIGRpdmlkZS1bI0Y5RkFGRF0gXCI+XHJcbiAgICAgICAgICB7ZGF0YS5hcnRpY2xlcy5tYXAoKGFydGljbGUpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2FydGljbGUudGl0bGV9IGNsYXNzTmFtZT1cInJlY2VudF9uZXdzIGdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHVibGlzaF9hdFwiPlxyXG4gICAgICAgICAgICAgICAge2FydGljbGUucHVibGlzaGVkQXQuc3BsaXQoXCJUXCIpWzFdLnNsaWNlKDAsIDUpfXtcIiBcIn1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj17YXJ0aWNsZS51cmx9IHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cInB1Ymxpc2hfdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIHthcnRpY2xlLnRpdGxlfVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICB7YXJ0aWNsZS5hdXRob3IgPyAoXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwdWJsaXNoX2F1dGhvclwiPmJ5IHthcnRpY2xlLmF1dGhvcn08L3A+XHJcbiAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hc2lzZGU+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==