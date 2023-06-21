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

/***/ "./components/music/MusicPlayer/Track.jsx":
/*!************************************************!*\
  !*** ./components/music/MusicPlayer/Track.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Track = (param)=>{\n    let { activeSong  } = param;\n    var _activeSong_images;\n    _s();\n    const [isActive, setIsActive] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        display: \"flex\",\n        alignItems: \"center\",\n        px: 4,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                className: \"block\",\n                onClick: ()=>setIsActive(!isActive),\n                animate: {\n                    rotate: isActive\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                    h: 16,\n                    w: 16,\n                    display: {\n                        base: \"none\",\n                        sm: \"block\"\n                    },\n                    borderRadius: \"full\",\n                    src: activeSong === null || activeSong === void 0 ? void 0 : (_activeSong_images = activeSong.images) === null || _activeSong_images === void 0 ? void 0 : _activeSong_images.coverart,\n                    alt: \"cover art\",\n                    className: \"rounded-full\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\MusicPlayer\\\\Track.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 6\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\MusicPlayer\\\\Track.jsx\",\n                lineNumber: 12,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                display: \"flex\",\n                flexDir: \"column\",\n                px: 4,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        overflow: \"ellipsis\",\n                        textOverflow: \"ellipsis\",\n                        whiteSpace: \"nowrap\",\n                        fontWeight: \"bold\",\n                        fontSize: \"1.25rem\",\n                        lineHeight: \"1.75rem\",\n                        color: \"white\",\n                        children: (activeSong === null || activeSong === void 0 ? void 0 : activeSong.title) ? activeSong === null || activeSong === void 0 ? void 0 : activeSong.title : \"No active Song\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\MusicPlayer\\\\Track.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        overflow: \"hidden\",\n                        textOverflow: \"ellipsis\",\n                        whiteSpace: \"nowrap\",\n                        color: \"gray.300\",\n                        className: \"truncate text-gray-300\",\n                        children: (activeSong === null || activeSong === void 0 ? void 0 : activeSong.subtitle) ? activeSong === null || activeSong === void 0 ? void 0 : activeSong.subtitle : \"No active Song\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\MusicPlayer\\\\Track.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\MusicPlayer\\\\Track.jsx\",\n                lineNumber: 21,\n                columnNumber: 6\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\MusicPlayer\\\\Track.jsx\",\n        lineNumber: 11,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Track, \"OFRYOMGmWDzfQ4dzLF00ag1mHo0=\");\n_c = Track;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Track);\nvar _c;\n$RefreshReg$(_c, \"Track\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL211c2ljL011c2ljUGxheWVyL1RyYWNrLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBb0Q7QUFDMUI7QUFDYTtBQUl2QyxNQUFNSyxRQUFRLFNBQW9CO1FBQW5CLEVBQUVDLFdBQVUsRUFBRTtRQVkwREE7O0lBWHJGLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCxxREFBYyxDQUFDLEtBQUs7SUFFcEQscUJBQ0EsOERBQUNILGlEQUFHQTtRQUFDVSxTQUFRO1FBQU9DLFlBQVc7UUFBU0MsSUFBSTs7MEJBQzFDLDhEQUFDUixxREFBVTtnQkFDVFUsV0FBVTtnQkFDVkMsU0FBUyxJQUFNUCxZQUFZLENBQUNEO2dCQUM1QlMsU0FBUztvQkFDUEMsUUFBUVY7Z0JBQ1Y7MEJBRUQsNEVBQUNOLG1EQUFLQTtvQkFBQ2lCLEdBQUc7b0JBQUlDLEdBQUc7b0JBQUlULFNBQVM7d0JBQUNVLE1BQUs7d0JBQVFDLElBQUc7b0JBQU87b0JBQUdDLGNBQWE7b0JBQU9DLEtBQUtqQix1QkFBQUEsd0JBQUFBLEtBQUFBLElBQUFBLENBQUFBLHFCQUFBQSxXQUFZa0IsTUFBTSxjQUFsQmxCLGdDQUFBQSxLQUFBQSxJQUFBQSxtQkFBb0JtQixRQUFGO29CQUFZQyxLQUFJO29CQUFZWixXQUFVOzs7Ozs7Ozs7OzswQkFFMUksOERBQUNkLGlEQUFHQTtnQkFBQ1UsU0FBUTtnQkFBT2lCLFNBQVE7Z0JBQVNmLElBQUk7O2tDQUN4Qyw4REFBQ1Ysa0RBQUlBO3dCQUNEMEIsVUFBUzt3QkFDVEMsY0FBYTt3QkFDYkMsWUFBVzt3QkFDWEMsWUFBVzt3QkFDWEMsVUFBUzt3QkFDVEMsWUFBVzt3QkFDWEMsT0FBTTtrQ0FFSDVCLENBQUFBLHVCQUFBQSx3QkFBQUEsS0FBQUEsSUFBQUEsV0FBWTZCLEtBQUssSUFBRzdCLHVCQUFBQSx3QkFBQUEsS0FBQUEsSUFBQUEsV0FBWTZCLEtBQUssR0FBRyxnQkFBZ0I7Ozs7OztrQ0FFL0QsOERBQUNqQyxrREFBSUE7d0JBQ0QwQixVQUFTO3dCQUNUQyxjQUFhO3dCQUNiQyxZQUFXO3dCQUNYSSxPQUFNO3dCQUFXcEIsV0FBVTtrQ0FFMUJSLENBQUFBLHVCQUFBQSx3QkFBQUEsS0FBQUEsSUFBQUEsV0FBWThCLFFBQVEsSUFBRzlCLHVCQUFBQSx3QkFBQUEsS0FBQUEsSUFBQUEsV0FBWThCLFFBQVEsR0FBRyxnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtyRTtHQXJDRS9CO0tBQUFBO0FBdUNOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbXVzaWMvTXVzaWNQbGF5ZXIvVHJhY2suanN4P2U0NGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBJbWFnZSwgVGV4dCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBUcmFjayA9ICh7IGFjdGl2ZVNvbmcgfSkgPT4ge1xyXG4gIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gIDxCb3ggZGlzcGxheT0nZmxleCcgYWxpZ25JdGVtcz0nY2VudGVyJyBweD17NH0+XHJcbiAgICA8bW90aW9uLmRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJibG9ja1wiXHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzQWN0aXZlKCFpc0FjdGl2ZSl9XHJcbiAgICAgIGFuaW1hdGU9e3tcclxuICAgICAgICByb3RhdGU6IGlzQWN0aXZlIFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgIDxJbWFnZSBoPXsxNn0gdz17MTZ9IGRpc3BsYXk9e3tiYXNlOidub25lJywgc206J2Jsb2NrJ319IGJvcmRlclJhZGl1cz0nZnVsbCcgc3JjPXthY3RpdmVTb25nPy5pbWFnZXM/LmNvdmVyYXJ0fSBhbHQ9XCJjb3ZlciBhcnRcIiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIiAvPlxyXG4gICAgIDwvbW90aW9uLmRpdj5cclxuICAgICA8Qm94IGRpc3BsYXk9J2ZsZXgnIGZsZXhEaXI9J2NvbHVtbicgcHg9ezR9PlxyXG4gICAgICA8VGV4dFxyXG4gICAgICAgICAgb3ZlcmZsb3c9J2VsbGlwc2lzJ1xyXG4gICAgICAgICAgdGV4dE92ZXJmbG93PSdlbGxpcHNpcydcclxuICAgICAgICAgIHdoaXRlU3BhY2U9J25vd3JhcCdcclxuICAgICAgICAgIGZvbnRXZWlnaHQ9J2JvbGQnXHJcbiAgICAgICAgICBmb250U2l6ZT0nMS4yNXJlbSdcclxuICAgICAgICAgIGxpbmVIZWlnaHQ9JzEuNzVyZW0nXHJcbiAgICAgICAgICBjb2xvcj0nd2hpdGUnXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7YWN0aXZlU29uZz8udGl0bGUgPyBhY3RpdmVTb25nPy50aXRsZSA6ICdObyBhY3RpdmUgU29uZyd9XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICA8VGV4dFxyXG4gICAgICAgICAgb3ZlcmZsb3c9J2hpZGRlbidcclxuICAgICAgICAgIHRleHRPdmVyZmxvdz0nZWxsaXBzaXMnXHJcbiAgICAgICAgICB3aGl0ZVNwYWNlPSdub3dyYXAnXHJcbiAgICAgICAgICBjb2xvcj0nZ3JheS4zMDAnIGNsYXNzTmFtZT1cInRydW5jYXRlIHRleHQtZ3JheS0zMDBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHthY3RpdmVTb25nPy5zdWJ0aXRsZSA/IGFjdGl2ZVNvbmc/LnN1YnRpdGxlIDogJ05vIGFjdGl2ZSBTb25nJ31cclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgIDwvQm94PlxyXG4gIDwvQm94PlxyXG4gICk7XHJcbiAgICB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJhY2s7XHJcbiJdLCJuYW1lcyI6WyJCb3giLCJJbWFnZSIsIlRleHQiLCJSZWFjdCIsIm1vdGlvbiIsIlRyYWNrIiwiYWN0aXZlU29uZyIsImlzQWN0aXZlIiwic2V0SXNBY3RpdmUiLCJ1c2VTdGF0ZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwicHgiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiYW5pbWF0ZSIsInJvdGF0ZSIsImgiLCJ3IiwiYmFzZSIsInNtIiwiYm9yZGVyUmFkaXVzIiwic3JjIiwiaW1hZ2VzIiwiY292ZXJhcnQiLCJhbHQiLCJmbGV4RGlyIiwib3ZlcmZsb3ciLCJ0ZXh0T3ZlcmZsb3ciLCJ3aGl0ZVNwYWNlIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImNvbG9yIiwidGl0bGUiLCJzdWJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/music/MusicPlayer/Track.jsx\n"));

/***/ })

});