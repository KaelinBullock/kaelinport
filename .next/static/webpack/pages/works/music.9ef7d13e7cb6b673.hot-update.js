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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst loadVariants = {\n    animateOne: {\n        x: [\n            -10,\n            10\n        ],\n        y: [\n            0,\n            -10\n        ],\n        transition: {\n            x: {\n                yoyo: Infinity,\n                duration: 0.25\n            },\n            y: {\n                yoyo: Infinity,\n                duration: 0.25,\n                ease: \"easeOut\"\n            }\n        }\n    }\n};\nconst Track = (param)=>{\n    let { activeSong  } = param;\n    var _activeSong_images;\n    _s();\n    const [isActive, setIsActive] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        display: \"flex\",\n        alignItems: \"center\",\n        px: 4,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                animate: {\n                    rotate: [\n                        0,\n                        360\n                    ]\n                },\n                transition: {\n                    duration: 5,\n                    repeat: Infinity,\n                    repeatType: \"loop\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                    h: 16,\n                    w: 16,\n                    display: {\n                        base: \"none\",\n                        sm: \"block\"\n                    },\n                    borderRadius: \"full\",\n                    src: activeSong === null || activeSong === void 0 ? void 0 : (_activeSong_images = activeSong.images) === null || _activeSong_images === void 0 ? void 0 : _activeSong_images.coverart,\n                    alt: \"cover art\",\n                    className: \"rounded-full\",\n                    style: {\n                        zIndex: \"3\"\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\MusicPlayer\\\\Track.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\MusicPlayer\\\\Track.jsx\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                display: \"flex\",\n                flexDir: \"column\",\n                px: 4,\n                maxW: \"90%\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                        animate: {\n                            x: [\n                                0,\n                                -360\n                            ]\n                        },\n                        transition: {\n                            duration: 7,\n                            repeat: Infinity,\n                            repeatType: \"loop\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                            overflow: \"ellipsis\",\n                            textOverflow: \"ellipsis\",\n                            whiteSpace: \"nowrap\",\n                            fontWeight: \"bold\",\n                            fontSize: \"1.25rem\",\n                            lineHeight: \"1.75rem\",\n                            color: \"white\",\n                            zIndex: -20,\n                            children: (activeSong === null || activeSong === void 0 ? void 0 : activeSong.title) ? activeSong === null || activeSong === void 0 ? void 0 : activeSong.title : \"No active Song\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\MusicPlayer\\\\Track.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\MusicPlayer\\\\Track.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        overflow: \"hidden\",\n                        textOverflow: \"ellipsis\",\n                        whiteSpace: \"nowrap\",\n                        color: \"gray.300\",\n                        className: \"truncate text-gray-300\",\n                        children: (activeSong === null || activeSong === void 0 ? void 0 : activeSong.subtitle) ? activeSong === null || activeSong === void 0 ? void 0 : activeSong.subtitle : \"No active Song\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\MusicPlayer\\\\Track.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\MusicPlayer\\\\Track.jsx\",\n                lineNumber: 40,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\MusicPlayer\\\\Track.jsx\",\n        lineNumber: 27,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Track, \"OFRYOMGmWDzfQ4dzLF00ag1mHo0=\");\n_c = Track;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Track);\nvar _c;\n$RefreshReg$(_c, \"Track\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL211c2ljL011c2ljUGxheWVyL1RyYWNrLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBb0Q7QUFDMUI7QUFDYTtBQUV2QyxNQUFNSyxlQUFlO0lBQ25CQyxZQUFZO1FBQ1ZDLEdBQUc7WUFBQyxDQUFDO1lBQUk7U0FBRztRQUNaQyxHQUFHO1lBQUM7WUFBRyxDQUFDO1NBQUc7UUFDWEMsWUFBWTtZQUNWRixHQUFHO2dCQUNERyxNQUFNQztnQkFDTkMsVUFBVTtZQUNaO1lBQ0FKLEdBQUc7Z0JBQ0RFLE1BQU1DO2dCQUNOQyxVQUFVO2dCQUNWQyxNQUFNO1lBQ1I7UUFDRjtJQUNGO0FBQ0Y7QUFFQSxNQUFNQyxRQUFRLFNBQW9CO1FBQW5CLEVBQUVDLFdBQVUsRUFBRTtRQWUyREE7O0lBZHRGLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHZCxxREFBYyxDQUFDLEtBQUs7SUFFcEQscUJBQ0EsOERBQUNILGlEQUFHQTtRQUFDbUIsU0FBUTtRQUFPQyxZQUFXO1FBQVNDLElBQUk7OzBCQUMxQyw4REFBQ2pCLHFEQUFVO2dCQUNUbUIsU0FBUztvQkFDVEMsUUFBUTt3QkFBQzt3QkFBRztxQkFBSTtnQkFDbEI7Z0JBQ0FmLFlBQVk7b0JBQ1ZHLFVBQVU7b0JBQ1ZhLFFBQVFkO29CQUNSZSxZQUFZO2dCQUNaOzBCQUVBLDRFQUFDekIsbURBQUtBO29CQUFDMEIsR0FBRztvQkFBSUMsR0FBRztvQkFBSVQsU0FBUzt3QkFBQ1UsTUFBSzt3QkFBUUMsSUFBRztvQkFBTztvQkFBR0MsY0FBYTtvQkFBT0MsS0FBS2pCLHVCQUFBQSx3QkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEscUJBQUFBLFdBQVlrQixNQUFNLGNBQWxCbEIsZ0NBQUFBLEtBQUFBLElBQUFBLG1CQUFvQm1CLFFBQUY7b0JBQVlDLEtBQUk7b0JBQVlDLFdBQVU7b0JBQXdCQyxPQUFRO3dCQUFDQyxRQUFPO29CQUFHOzs7Ozs7Ozs7OzswQkFFdkwsOERBQUN0QyxpREFBR0E7Z0JBQUNtQixTQUFRO2dCQUFPb0IsU0FBUTtnQkFBU2xCLElBQUk7Z0JBQUdtQixNQUFLOztrQ0FDL0MsOERBQUNwQyxxREFBVTt3QkFDVG1CLFNBQVM7NEJBQUVoQixHQUFHO2dDQUFDO2dDQUFHLENBQUM7NkJBQUk7d0JBQUM7d0JBQ3ZCRSxZQUFZOzRCQUNiRyxVQUFVOzRCQUNWYSxRQUFRZDs0QkFDUmUsWUFBWTt3QkFDWjtrQ0FFRiw0RUFBQ3hCLGtEQUFJQTs0QkFDRHVDLFVBQVM7NEJBQ1RDLGNBQWE7NEJBQ2JDLFlBQVc7NEJBQ1hDLFlBQVc7NEJBQ1hDLFVBQVM7NEJBQ1RDLFlBQVc7NEJBQ1hDLE9BQU07NEJBQ05ULFFBQVEsQ0FBQztzQ0FFTnZCLENBQUFBLHVCQUFBQSx3QkFBQUEsS0FBQUEsSUFBQUEsV0FBWWlDLEtBQUssSUFBR2pDLHVCQUFBQSx3QkFBQUEsS0FBQUEsSUFBQUEsV0FBWWlDLEtBQUssR0FBRyxnQkFBZ0I7Ozs7Ozs7Ozs7O2tDQUcvRCw4REFBQzlDLGtEQUFJQTt3QkFDRHVDLFVBQVM7d0JBQ1RDLGNBQWE7d0JBQ2JDLFlBQVc7d0JBQ1hJLE9BQU07d0JBQVdYLFdBQVU7a0NBRTFCckIsQ0FBQUEsdUJBQUFBLHdCQUFBQSxLQUFBQSxJQUFBQSxXQUFZa0MsUUFBUSxJQUFHbEMsdUJBQUFBLHdCQUFBQSxLQUFBQSxJQUFBQSxXQUFZa0MsUUFBUSxHQUFHLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3pFO0dBbERNbkM7S0FBQUE7QUFvRE4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tdXNpYy9NdXNpY1BsYXllci9UcmFjay5qc3g/ZTQ0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEltYWdlLCBUZXh0IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcblxyXG5jb25zdCBsb2FkVmFyaWFudHMgPSB7XHJcbiAgYW5pbWF0ZU9uZToge1xyXG4gICAgeDogWy0xMCwgMTBdLFxyXG4gICAgeTogWzAsIC0xMF0sXHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgIHg6IHtcclxuICAgICAgICB5b3lvOiBJbmZpbml0eSxcclxuICAgICAgICBkdXJhdGlvbjogMC4yNVxyXG4gICAgICB9LFxyXG4gICAgICB5OiB7XHJcbiAgICAgICAgeW95bzogSW5maW5pdHksXHJcbiAgICAgICAgZHVyYXRpb246IDAuMjUsXHJcbiAgICAgICAgZWFzZTogJ2Vhc2VPdXQnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IFRyYWNrID0gKHsgYWN0aXZlU29uZyB9KSA9PiB7XHJcbiAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgPEJveCBkaXNwbGF5PSdmbGV4JyBhbGlnbkl0ZW1zPSdjZW50ZXInIHB4PXs0fT5cclxuICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgIGFuaW1hdGU9e3tcclxuICAgICAgcm90YXRlOiBbMCwgMzYwXSxcclxuICAgIH19XHJcbiAgICB0cmFuc2l0aW9uPXt7XHJcbiAgICAgIGR1cmF0aW9uOiA1LFxyXG4gICAgICByZXBlYXQ6IEluZmluaXR5LFxyXG4gICAgICByZXBlYXRUeXBlOiBcImxvb3BcIlxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8SW1hZ2UgaD17MTZ9IHc9ezE2fSBkaXNwbGF5PXt7YmFzZTonbm9uZScsIHNtOidibG9jayd9fSBib3JkZXJSYWRpdXM9J2Z1bGwnIHNyYz17YWN0aXZlU29uZz8uaW1hZ2VzPy5jb3ZlcmFydH0gYWx0PVwiY292ZXIgYXJ0XCIgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCIgICAgICAgICAgc3R5bGU9eyB7ekluZGV4OiczJ319Lz5cclxuICAgIDwvbW90aW9uLmRpdj5cclxuICAgIDxCb3ggZGlzcGxheT0nZmxleCcgZmxleERpcj0nY29sdW1uJyBweD17NH0gbWF4Vz0nOTAlJz5cclxuICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICBhbmltYXRlPXt7IHg6IFswLCAtMzYwXSB9fVxyXG4gICAgICAgICB0cmFuc2l0aW9uPXt7XHJcbiAgICAgICAgZHVyYXRpb246IDcsXHJcbiAgICAgICAgcmVwZWF0OiBJbmZpbml0eSxcclxuICAgICAgICByZXBlYXRUeXBlOiBcImxvb3BcIlxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgPFRleHRcclxuICAgICAgICAgIG92ZXJmbG93PSdlbGxpcHNpcydcclxuICAgICAgICAgIHRleHRPdmVyZmxvdz0nZWxsaXBzaXMnXHJcbiAgICAgICAgICB3aGl0ZVNwYWNlPSdub3dyYXAnXHJcbiAgICAgICAgICBmb250V2VpZ2h0PSdib2xkJ1xyXG4gICAgICAgICAgZm9udFNpemU9JzEuMjVyZW0nXHJcbiAgICAgICAgICBsaW5lSGVpZ2h0PScxLjc1cmVtJ1xyXG4gICAgICAgICAgY29sb3I9J3doaXRlJ1xyXG4gICAgICAgICAgekluZGV4PXstMjB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7YWN0aXZlU29uZz8udGl0bGUgPyBhY3RpdmVTb25nPy50aXRsZSA6ICdObyBhY3RpdmUgU29uZyd9XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgIDxUZXh0XHJcbiAgICAgICAgICBvdmVyZmxvdz0naGlkZGVuJ1xyXG4gICAgICAgICAgdGV4dE92ZXJmbG93PSdlbGxpcHNpcydcclxuICAgICAgICAgIHdoaXRlU3BhY2U9J25vd3JhcCdcclxuICAgICAgICAgIGNvbG9yPSdncmF5LjMwMCcgY2xhc3NOYW1lPVwidHJ1bmNhdGUgdGV4dC1ncmF5LTMwMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2FjdGl2ZVNvbmc/LnN1YnRpdGxlID8gYWN0aXZlU29uZz8uc3VidGl0bGUgOiAnTm8gYWN0aXZlIFNvbmcnfVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgPC9Cb3g+XHJcbiAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyYWNrO1xyXG4iXSwibmFtZXMiOlsiQm94IiwiSW1hZ2UiLCJUZXh0IiwiUmVhY3QiLCJtb3Rpb24iLCJsb2FkVmFyaWFudHMiLCJhbmltYXRlT25lIiwieCIsInkiLCJ0cmFuc2l0aW9uIiwieW95byIsIkluZmluaXR5IiwiZHVyYXRpb24iLCJlYXNlIiwiVHJhY2siLCJhY3RpdmVTb25nIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsInVzZVN0YXRlIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJweCIsImRpdiIsImFuaW1hdGUiLCJyb3RhdGUiLCJyZXBlYXQiLCJyZXBlYXRUeXBlIiwiaCIsInciLCJiYXNlIiwic20iLCJib3JkZXJSYWRpdXMiLCJzcmMiLCJpbWFnZXMiLCJjb3ZlcmFydCIsImFsdCIsImNsYXNzTmFtZSIsInN0eWxlIiwiekluZGV4IiwiZmxleERpciIsIm1heFciLCJvdmVyZmxvdyIsInRleHRPdmVyZmxvdyIsIndoaXRlU3BhY2UiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiY29sb3IiLCJ0aXRsZSIsInN1YnRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/music/MusicPlayer/Track.jsx\n"));

/***/ })

});