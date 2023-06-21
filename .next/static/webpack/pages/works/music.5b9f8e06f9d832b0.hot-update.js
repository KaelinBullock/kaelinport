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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Track = (param)=>{\n    let { activeSong  } = param;\n    var _activeSong_images;\n    _s();\n    const [isActive, setIsActive] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        display: \"flex\",\n        alignItems: \"center\",\n        px: 4,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                className: \"block\",\n                onClick: ()=>setIsActive(!isActive),\n                animate: {\n                    rotate: isActive ? 360 : 0\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                    h: 16,\n                    w: 16,\n                    display: {\n                        base: \"none\",\n                        sm: \"block\"\n                    },\n                    borderRadius: \"full\",\n                    src: activeSong === null || activeSong === void 0 ? void 0 : (_activeSong_images = activeSong.images) === null || _activeSong_images === void 0 ? void 0 : _activeSong_images.coverart,\n                    alt: \"cover art\",\n                    className: \"rounded-full\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\MusicPlayer\\\\Track.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 6\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\MusicPlayer\\\\Track.jsx\",\n                lineNumber: 12,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                display: \"flex\",\n                flexDir: \"column\",\n                px: 4,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        overflow: \"ellipsis\",\n                        textOverflow: \"ellipsis\",\n                        whiteSpace: \"nowrap\",\n                        fontWeight: \"bold\",\n                        fontSize: \"1.25rem\",\n                        lineHeight: \"1.75rem\",\n                        color: \"white\",\n                        children: (activeSong === null || activeSong === void 0 ? void 0 : activeSong.title) ? activeSong === null || activeSong === void 0 ? void 0 : activeSong.title : \"No active Song\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\MusicPlayer\\\\Track.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        overflow: \"hidden\",\n                        textOverflow: \"ellipsis\",\n                        whiteSpace: \"nowrap\",\n                        color: \"gray.300\",\n                        className: \"truncate text-gray-300\",\n                        children: (activeSong === null || activeSong === void 0 ? void 0 : activeSong.subtitle) ? activeSong === null || activeSong === void 0 ? void 0 : activeSong.subtitle : \"No active Song\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\MusicPlayer\\\\Track.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\MusicPlayer\\\\Track.jsx\",\n                lineNumber: 21,\n                columnNumber: 6\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\MusicPlayer\\\\Track.jsx\",\n        lineNumber: 11,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Track, \"OFRYOMGmWDzfQ4dzLF00ag1mHo0=\");\n_c = Track;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Track);\nvar _c;\n$RefreshReg$(_c, \"Track\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL211c2ljL011c2ljUGxheWVyL1RyYWNrLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBb0Q7QUFDMUI7QUFDYTtBQUl2QyxNQUFNSyxRQUFRLFNBQW9CO1FBQW5CLEVBQUVDLFdBQVUsRUFBRTtRQVkwREE7O0lBWHJGLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCxxREFBYyxDQUFDLEtBQUs7SUFFcEQscUJBQ0EsOERBQUNILGlEQUFHQTtRQUFDVSxTQUFRO1FBQU9DLFlBQVc7UUFBU0MsSUFBSTs7MEJBQzFDLDhEQUFDUixxREFBVTtnQkFDVFUsV0FBVTtnQkFDVkMsU0FBUyxJQUFNUCxZQUFZLENBQUNEO2dCQUM1QlMsU0FBUztvQkFDUEMsUUFBUVYsV0FBVyxNQUFNLENBQUM7Z0JBQzVCOzBCQUVELDRFQUFDTixtREFBS0E7b0JBQUNpQixHQUFHO29CQUFJQyxHQUFHO29CQUFJVCxTQUFTO3dCQUFDVSxNQUFLO3dCQUFRQyxJQUFHO29CQUFPO29CQUFHQyxjQUFhO29CQUFPQyxLQUFLakIsdUJBQUFBLHdCQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxxQkFBQUEsV0FBWWtCLE1BQU0sY0FBbEJsQixnQ0FBQUEsS0FBQUEsSUFBQUEsbUJBQW9CbUIsUUFBRjtvQkFBWUMsS0FBSTtvQkFBWVosV0FBVTs7Ozs7Ozs7Ozs7MEJBRTFJLDhEQUFDZCxpREFBR0E7Z0JBQUNVLFNBQVE7Z0JBQU9pQixTQUFRO2dCQUFTZixJQUFJOztrQ0FDeEMsOERBQUNWLGtEQUFJQTt3QkFDRDBCLFVBQVM7d0JBQ1RDLGNBQWE7d0JBQ2JDLFlBQVc7d0JBQ1hDLFlBQVc7d0JBQ1hDLFVBQVM7d0JBQ1RDLFlBQVc7d0JBQ1hDLE9BQU07a0NBRUg1QixDQUFBQSx1QkFBQUEsd0JBQUFBLEtBQUFBLElBQUFBLFdBQVk2QixLQUFLLElBQUc3Qix1QkFBQUEsd0JBQUFBLEtBQUFBLElBQUFBLFdBQVk2QixLQUFLLEdBQUcsZ0JBQWdCOzs7Ozs7a0NBRS9ELDhEQUFDakMsa0RBQUlBO3dCQUNEMEIsVUFBUzt3QkFDVEMsY0FBYTt3QkFDYkMsWUFBVzt3QkFDWEksT0FBTTt3QkFBV3BCLFdBQVU7a0NBRTFCUixDQUFBQSx1QkFBQUEsd0JBQUFBLEtBQUFBLElBQUFBLFdBQVk4QixRQUFRLElBQUc5Qix1QkFBQUEsd0JBQUFBLEtBQUFBLElBQUFBLFdBQVk4QixRQUFRLEdBQUcsZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLckU7R0FyQ0UvQjtLQUFBQTtBQXVDTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL211c2ljL011c2ljUGxheWVyL1RyYWNrLmpzeD9lNDRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgSW1hZ2UsIFRleHQgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcblxyXG5cclxuY29uc3QgVHJhY2sgPSAoeyBhY3RpdmVTb25nIH0pID0+IHtcclxuICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICA8Qm94IGRpc3BsYXk9J2ZsZXgnIGFsaWduSXRlbXM9J2NlbnRlcicgcHg9ezR9PlxyXG4gICAgPG1vdGlvbi5kaXZcclxuICAgICAgY2xhc3NOYW1lPVwiYmxvY2tcIlxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0FjdGl2ZSghaXNBY3RpdmUpfVxyXG4gICAgICBhbmltYXRlPXt7XHJcbiAgICAgICAgcm90YXRlOiBpc0FjdGl2ZSA/IDM2MCA6IDBcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICA8SW1hZ2UgaD17MTZ9IHc9ezE2fSBkaXNwbGF5PXt7YmFzZTonbm9uZScsIHNtOidibG9jayd9fSBib3JkZXJSYWRpdXM9J2Z1bGwnIHNyYz17YWN0aXZlU29uZz8uaW1hZ2VzPy5jb3ZlcmFydH0gYWx0PVwiY292ZXIgYXJ0XCIgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCIgLz5cclxuICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgPEJveCBkaXNwbGF5PSdmbGV4JyBmbGV4RGlyPSdjb2x1bW4nIHB4PXs0fT5cclxuICAgICAgPFRleHRcclxuICAgICAgICAgIG92ZXJmbG93PSdlbGxpcHNpcydcclxuICAgICAgICAgIHRleHRPdmVyZmxvdz0nZWxsaXBzaXMnXHJcbiAgICAgICAgICB3aGl0ZVNwYWNlPSdub3dyYXAnXHJcbiAgICAgICAgICBmb250V2VpZ2h0PSdib2xkJ1xyXG4gICAgICAgICAgZm9udFNpemU9JzEuMjVyZW0nXHJcbiAgICAgICAgICBsaW5lSGVpZ2h0PScxLjc1cmVtJ1xyXG4gICAgICAgICAgY29sb3I9J3doaXRlJ1xyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2FjdGl2ZVNvbmc/LnRpdGxlID8gYWN0aXZlU29uZz8udGl0bGUgOiAnTm8gYWN0aXZlIFNvbmcnfVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgPFRleHRcclxuICAgICAgICAgIG92ZXJmbG93PSdoaWRkZW4nXHJcbiAgICAgICAgICB0ZXh0T3ZlcmZsb3c9J2VsbGlwc2lzJ1xyXG4gICAgICAgICAgd2hpdGVTcGFjZT0nbm93cmFwJ1xyXG4gICAgICAgICAgY29sb3I9J2dyYXkuMzAwJyBjbGFzc05hbWU9XCJ0cnVuY2F0ZSB0ZXh0LWdyYXktMzAwXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7YWN0aXZlU29uZz8uc3VidGl0bGUgPyBhY3RpdmVTb25nPy5zdWJ0aXRsZSA6ICdObyBhY3RpdmUgU29uZyd9XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICA8L0JveD5cclxuICA8L0JveD5cclxuICApO1xyXG4gICAgfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyYWNrO1xyXG4iXSwibmFtZXMiOlsiQm94IiwiSW1hZ2UiLCJUZXh0IiwiUmVhY3QiLCJtb3Rpb24iLCJUcmFjayIsImFjdGl2ZVNvbmciLCJpc0FjdGl2ZSIsInNldElzQWN0aXZlIiwidXNlU3RhdGUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsInB4IiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImFuaW1hdGUiLCJyb3RhdGUiLCJoIiwidyIsImJhc2UiLCJzbSIsImJvcmRlclJhZGl1cyIsInNyYyIsImltYWdlcyIsImNvdmVyYXJ0IiwiYWx0IiwiZmxleERpciIsIm92ZXJmbG93IiwidGV4dE92ZXJmbG93Iiwid2hpdGVTcGFjZSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJjb2xvciIsInRpdGxlIiwic3VidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/music/MusicPlayer/Track.jsx\n"));

/***/ })

});