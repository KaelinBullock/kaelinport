"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/works/music",{

/***/ "./components/music/MusicPlayer/Seekbar.jsx":
/*!**************************************************!*\
  !*** ./components/music/MusicPlayer/Seekbar.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst Seekbar = (param)=>{\n    let { value , min , max , onInput , setSeekTime , appTime  } = param;\n    // converts the time to format 0:00\n    const getTime = (time)=>\"\".concat(Math.floor(time / 60), \":\").concat(\"0\".concat(Math.floor(time % 60)).slice(-2));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        display: {\n            base: \"none\",\n            sm: \"flex\"\n        },\n        alignItems: \"center\",\n        className: \"hidden sm:flex flex-row items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                type: \"button\",\n                onClick: ()=>setSeekTime(appTime - 5),\n                display: \"block\",\n                mx: 4,\n                textColor: \"white\",\n                className: \"hidden lg:mr-4 lg:block text-white\",\n                children: \"-\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\MusicPlayer\\\\Seekbar.jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-white\",\n                children: value === 0 ? \"0:00\" : getTime(value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\MusicPlayer\\\\Seekbar.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"range\",\n                step: \"any\",\n                value: value,\n                min: min,\n                max: max,\n                onInput: onInput,\n                className: \"md:block w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\MusicPlayer\\\\Seekbar.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-white\",\n                children: max === 0 ? \"0:00\" : getTime(max)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\MusicPlayer\\\\Seekbar.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                type: \"button\",\n                onClick: ()=>setSeekTime(appTime + 5),\n                display: \"block\",\n                ml: 4,\n                textColor: \"white\",\n                className: \"hidden lg:ml-4 lg:block text-white\",\n                bgColor: \"gray.500\",\n                children: \"+\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\MusicPlayer\\\\Seekbar.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\MusicPlayer\\\\Seekbar.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Seekbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Seekbar);\nvar _c;\n$RefreshReg$(_c, \"Seekbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL211c2ljL011c2ljUGxheWVyL1NlZWtiYXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBK0M7QUFDckI7QUFFMUIsTUFBTUcsVUFBVSxTQUF3RDtRQUF2RCxFQUFFQyxNQUFLLEVBQUVDLElBQUcsRUFBRUMsSUFBRyxFQUFFQyxRQUFPLEVBQUVDLFlBQVcsRUFBRUMsUUFBTyxFQUFFO0lBQ2pFLG1DQUFtQztJQUNuQyxNQUFNQyxVQUFVLENBQUNDLE9BQVMsR0FBNEIsT0FBekJDLEtBQUtDLEtBQUssQ0FBQ0YsT0FBTyxLQUFJLEtBQTJDLE9BQXhDLElBQTJCLE9BQXRCQyxLQUFLQyxLQUFLLENBQUNGLE9BQU8sS0FBT0csS0FBSyxDQUFDLENBQUM7SUFFM0YscUJBQ0UsOERBQUNkLGlEQUFHQTtRQUFDZSxTQUFTO1lBQUNDLE1BQUs7WUFBUUMsSUFBRztRQUFNO1FBQUdDLFlBQVc7UUFBU0MsV0FBVTs7MEJBQ3BFLDhEQUFDbEIsb0RBQU1BO2dCQUFDbUIsTUFBSztnQkFBU0MsU0FBUyxJQUFNYixZQUFZQyxVQUFVO2dCQUN6RE0sU0FBUTtnQkFDUk8sSUFBSTtnQkFDSkMsV0FBVTtnQkFDVkosV0FBVTswQkFBcUM7Ozs7OzswQkFHakQsOERBQUNLO2dCQUFFTCxXQUFVOzBCQUFjZixVQUFVLElBQUksU0FBU00sUUFBUU4sTUFBTTs7Ozs7OzBCQUNoRSw4REFBQ3FCO2dCQUNDTCxNQUFLO2dCQUNMTSxNQUFLO2dCQUNMdEIsT0FBT0E7Z0JBQ1BDLEtBQUtBO2dCQUNMQyxLQUFLQTtnQkFDTEMsU0FBU0E7Z0JBQ1RZLFdBQVU7Ozs7OzswQkFFWiw4REFBQ0s7Z0JBQUVMLFdBQVU7MEJBQWNiLFFBQVEsSUFBSSxTQUFTSSxRQUFRSixJQUFJOzs7Ozs7MEJBQzVELDhEQUFDTCxvREFBTUE7Z0JBQUNtQixNQUFLO2dCQUFTQyxTQUFTLElBQU1iLFlBQVlDLFVBQVU7Z0JBQ3pETSxTQUFRO2dCQUNSWSxJQUFJO2dCQUNKSixXQUFVO2dCQUNWSixXQUFVO2dCQUNWUyxTQUFROzBCQUFXOzs7Ozs7Ozs7Ozs7QUFLM0I7S0FsQ016QjtBQW9DTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL211c2ljL011c2ljUGxheWVyL1NlZWtiYXIuanN4Pzk2MjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBCdXR0b24gfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFNlZWtiYXIgPSAoeyB2YWx1ZSwgbWluLCBtYXgsIG9uSW5wdXQsIHNldFNlZWtUaW1lLCBhcHBUaW1lIH0pID0+IHtcclxuICAvLyBjb252ZXJ0cyB0aGUgdGltZSB0byBmb3JtYXQgMDowMFxyXG4gIGNvbnN0IGdldFRpbWUgPSAodGltZSkgPT4gYCR7TWF0aC5mbG9vcih0aW1lIC8gNjApfTokeyhgMCR7TWF0aC5mbG9vcih0aW1lICUgNjApfWApLnNsaWNlKC0yKX1gO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBkaXNwbGF5PXt7YmFzZTonbm9uZScsIHNtOidmbGV4J319IGFsaWduSXRlbXM9J2NlbnRlcicgY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldFNlZWtUaW1lKGFwcFRpbWUgLSA1KX0gXHJcbiAgICAgICAgZGlzcGxheT0nYmxvY2snXHJcbiAgICAgICAgbXg9ezR9XHJcbiAgICAgICAgdGV4dENvbG9yPSd3aGl0ZSdcclxuICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gbGc6bXItNCBsZzpibG9jayB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgLVxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPnt2YWx1ZSA9PT0gMCA/ICcwOjAwJyA6IGdldFRpbWUodmFsdWUpfTwvcD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInJhbmdlXCJcclxuICAgICAgICBzdGVwPVwiYW55XCJcclxuICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgbWluPXttaW59XHJcbiAgICAgICAgbWF4PXttYXh9XHJcbiAgICAgICAgb25JbnB1dD17b25JbnB1dH1cclxuICAgICAgICBjbGFzc05hbWU9XCJtZDpibG9jayB3LTI0IG1kOnctNTYgMnhsOnctOTYgaC0xIG14LTQgMnhsOm14LTYgcm91bmRlZC1sZ1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj57bWF4ID09PSAwID8gJzA6MDAnIDogZ2V0VGltZShtYXgpfTwvcD5cclxuICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0U2Vla1RpbWUoYXBwVGltZSArIDUpfSBcclxuICAgICAgICBkaXNwbGF5PSdibG9jaydcclxuICAgICAgICBtbD17NH1cclxuICAgICAgICB0ZXh0Q29sb3I9J3doaXRlJ1xyXG4gICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBsZzptbC00IGxnOmJsb2NrIHRleHQtd2hpdGVcIlxyXG4gICAgICAgIGJnQ29sb3I9J2dyYXkuNTAwJz5cclxuICAgICAgICArXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlZWtiYXI7XHJcbiJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJSZWFjdCIsIlNlZWtiYXIiLCJ2YWx1ZSIsIm1pbiIsIm1heCIsIm9uSW5wdXQiLCJzZXRTZWVrVGltZSIsImFwcFRpbWUiLCJnZXRUaW1lIiwidGltZSIsIk1hdGgiLCJmbG9vciIsInNsaWNlIiwiZGlzcGxheSIsImJhc2UiLCJzbSIsImFsaWduSXRlbXMiLCJjbGFzc05hbWUiLCJ0eXBlIiwib25DbGljayIsIm14IiwidGV4dENvbG9yIiwicCIsImlucHV0Iiwic3RlcCIsIm1sIiwiYmdDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/music/MusicPlayer/Seekbar.jsx\n"));

/***/ })

});