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

/***/ "./components/music/SongCard.jsx":
/*!***************************************!*\
  !*** ./components/music/SongCard.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _PlayPause__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlayPause */ \"./components/music/PlayPause.jsx\");\n/* harmony import */ var _redux_features_playerSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/features/playerSlice */ \"./redux/features/playerSlice.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst SongCard = (param)=>{\n    let { song , isPlaying , activeSong , data , i  } = param;\n    var _song_images, _song_artists_;\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const handlePauseClick = ()=>{\n        dispatch((0,_redux_features_playerSlice__WEBPACK_IMPORTED_MODULE_4__.playPause)(false));\n    };\n    const handlePlayClick = ()=>{\n        dispatch((0,_redux_features_playerSlice__WEBPACK_IMPORTED_MODULE_4__.setActiveSong)({\n            song,\n            data,\n            i\n        }));\n        dispatch((0,_redux_features_playerSlice__WEBPACK_IMPORTED_MODULE_4__.playPause)(true));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        padding: 4,\n        display: \"flex\",\n        flexDir: \"column\",\n        w: \"250px\",\n        Text: 4,\n        backgroundColor: \"whiteAlpha.100\",\n        borderRadius: \".5rem\",\n        cursor: \"pointer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                position: \"relative\",\n                w: \"full\",\n                h: \"14rem\",\n                _groupActive: true,\n                className: \"relative w-full h-56 group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        position: \"absolute\",\n                        inset: 0,\n                        justifyContent: \"center\",\n                        alignItems: \"center\",\n                        backgroundColor: \"black\",\n                        opacity: \".75\",\n                        display: \"none\",\n                        sx: (activeSong === null || activeSong === void 0 ? void 0 : activeSong.title) === (song === null || song === void 0 ? void 0 : song.title) ? {\n                            display: \"flex\"\n                        } : {\n                            display: \"none\",\n                            _groupHover: {\n                                display: \"flex\"\n                            }\n                        },\n                        _groupHover: {\n                            display: \"flex\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlayPause__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            isPlaying: isPlaying,\n                            activeSong: activeSong,\n                            song: song,\n                            handlePause: handlePauseClick,\n                            handlePlay: handlePlayClick\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\SongCard.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\SongCard.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Image, {\n                        alt: \"song_img\",\n                        src: (_song_images = song.images) === null || _song_images === void 0 ? void 0 : _song_images.coverart,\n                        w: \"full\",\n                        h: \"full\",\n                        rounded: \".5rem\",\n                        className: \"w-full h-full rounded-lg\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\SongCard.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\SongCard.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                mt: 4,\n                display: \"flex\",\n                flexDirection: \"column\",\n                className: \"mt-4 flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                        fontWeight: \"semibold\",\n                        fontSize: \"1.25rem\",\n                        lineHeight: \"1.75rem\",\n                        color: \"white\",\n                        overflow: \"hidden\",\n                        textOverflow: \"ellipsis\",\n                        whiteSpace: \"nowrap\",\n                        className: \"font-semibold text-lg text-white truncate\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link, {\n                            to: \"/songs/\".concat(song === null || song === void 0 ? void 0 : song.key),\n                            color: \"white\",\n                            _hover: {\n                                textDecoration: \"none\"\n                            },\n                            children: song.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\SongCard.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\SongCard.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                        fontSize: \".875rem\",\n                        color: useColorModeValue(\"black\", \"white\"),\n                        textColor: \"white\",\n                        lineHeight: \"1.25rem\",\n                        overflow: \"hidden\",\n                        textOverflow: \"ellipsis\",\n                        whiteSpace: \"nowrap\",\n                        mt: 1,\n                        className: \"text-sm truncate text-gray-300 mt-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link, {\n                            to: song.artists ? \"/artists/\".concat((_song_artists_ = song === null || song === void 0 ? void 0 : song.artists[1]) === null || _song_artists_ === void 0 ? void 0 : _song_artists_.adamid) : \"/top-artists\",\n                            color: \"white\",\n                            _hover: {\n                                textDecoration: \"none\"\n                            },\n                            children: song.subtitle\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\SongCard.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\SongCard.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\SongCard.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\SongCard.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SongCard, \"kWDSgSirJQ0kEXxCTxhlgkRuLDw=\", true, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = SongCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SongCard);\nvar _c;\n$RefreshReg$(_c, \"SongCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNZ0QsT0FBTyxDQUFDLEVBQUUsY0FBaEJoRCw0QkFBQUEsS0FBQUEsSUFBQUEsZUFBa0JpRCxNQUFNLElBQUssY0FBYzs0QkFBRVgsT0FBTTs0QkFBUU0sUUFBUTtnQ0FBQ0MsZ0JBQWU7NEJBQU07c0NBQzNIN0MsS0FBS2tELFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTFCO0dBekNNbkQ7O1FBQ2FSLG9EQUFXQTs7O0tBRHhCUTtBQTJDTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL211c2ljL1NvbmdDYXJkLmpzeD9hNThkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuaW1wb3J0IFBsYXlQYXVzZSBmcm9tICcuL1BsYXlQYXVzZSc7XHJcbmltcG9ydCB7IHBsYXlQYXVzZSwgc2V0QWN0aXZlU29uZyB9IGZyb20gJy4uLy4uL3JlZHV4L2ZlYXR1cmVzL3BsYXllclNsaWNlJztcclxuaW1wb3J0IHsgQm94LCBJbWFnZSwgTGluaywgVGV4dCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5cclxuY29uc3QgU29uZ0NhcmQgPSAoeyBzb25nLCBpc1BsYXlpbmcsIGFjdGl2ZVNvbmcsIGRhdGEsIGkgfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUGF1c2VDbGljayA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHBsYXlQYXVzZShmYWxzZSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBsYXlDbGljayA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHNldEFjdGl2ZVNvbmcoeyBzb25nLCBkYXRhLCBpIH0pKTtcclxuICAgIGRpc3BhdGNoKHBsYXlQYXVzZSh0cnVlKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggcGFkZGluZz17NH0gZGlzcGxheT0nZmxleCcgZmxleERpcj0nY29sdW1uJyB3PScyNTBweCcgVGV4dD17NH0gYmFja2dyb3VuZENvbG9yPSd3aGl0ZUFscGhhLjEwMCcgYm9yZGVyUmFkaXVzPScuNXJlbScgY3Vyc29yPSdwb2ludGVyJz5cclxuICAgICAgPEJveCBwb3NpdGlvbj0ncmVsYXRpdmUnIHc9J2Z1bGwnIGg9JzE0cmVtJyBfZ3JvdXBBY3RpdmU9e3RydWV9IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBoLTU2IGdyb3VwXCI+XHJcbiAgICAgICAgPEJveCBwb3NpdGlvbj0nYWJzb2x1dGUnIGluc2V0PXswfSBqdXN0aWZ5Q29udGVudD0nY2VudGVyJyBhbGlnbkl0ZW1zPSdjZW50ZXInIGJhY2tncm91bmRDb2xvcj0nYmxhY2snIG9wYWNpdHk9Jy43NScgZGlzcGxheT0nbm9uZScgc3g9e2FjdGl2ZVNvbmc/LnRpdGxlID09PSBzb25nPy50aXRsZSA/IHtkaXNwbGF5OidmbGV4J30gOiB7ZGlzcGxheTogJ25vbmUnLCBfZ3JvdXBIb3Zlcjp7ZGlzcGxheTonZmxleCd9fX0gX2dyb3VwSG92ZXI9e3tkaXNwbGF5OidmbGV4J319ID5cclxuICAgICAgICAgIDxQbGF5UGF1c2VcclxuICAgICAgICAgICAgaXNQbGF5aW5nPXtpc1BsYXlpbmd9XHJcbiAgICAgICAgICAgIGFjdGl2ZVNvbmc9e2FjdGl2ZVNvbmd9XHJcbiAgICAgICAgICAgIHNvbmc9e3Nvbmd9XHJcbiAgICAgICAgICAgIGhhbmRsZVBhdXNlPXtoYW5kbGVQYXVzZUNsaWNrfVxyXG4gICAgICAgICAgICBoYW5kbGVQbGF5PXtoYW5kbGVQbGF5Q2xpY2t9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDxJbWFnZSBhbHQ9XCJzb25nX2ltZ1wiIHNyYz17c29uZy5pbWFnZXM/LmNvdmVyYXJ0fSB3PSdmdWxsJyBoPSdmdWxsJyByb3VuZGVkPScuNXJlbScgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCByb3VuZGVkLWxnXCIgLz5cclxuICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICA8Qm94IG10PXs0fSBkaXNwbGF5PSdmbGV4JyBmbGV4RGlyZWN0aW9uPSdjb2x1bW4nIGNsYXNzTmFtZT1cIm10LTQgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9J3NlbWlib2xkJyBmb250U2l6ZT0nMS4yNXJlbScgbGluZUhlaWdodD0nMS43NXJlbScgY29sb3I9J3doaXRlJyBvdmVyZmxvdz0naGlkZGVuJyB0ZXh0T3ZlcmZsb3c9J2VsbGlwc2lzJyB3aGl0ZVNwYWNlPSdub3dyYXAnIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1sZyB0ZXh0LXdoaXRlIHRydW5jYXRlXCI+XHJcbiAgICAgICAgICA8TGluayB0bz17YC9zb25ncy8ke3Nvbmc/LmtleX1gfSBjb2xvcj0nd2hpdGUnIF9ob3Zlcj17e3RleHREZWNvcmF0aW9uOidub25lJ319PlxyXG4gICAgICAgICAgICB7c29uZy50aXRsZX1cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPFRleHQgZm9udFNpemU9Jy44NzVyZW0nIGNvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZSgnYmxhY2snLCAnd2hpdGUnKX0gdGV4dENvbG9yPSd3aGl0ZScgbGluZUhlaWdodD0nMS4yNXJlbScgb3ZlcmZsb3c9J2hpZGRlbicgdGV4dE92ZXJmbG93PSdlbGxpcHNpcycgd2hpdGVTcGFjZT0nbm93cmFwJyBtdD17MX0gY2xhc3NOYW1lPVwidGV4dC1zbSB0cnVuY2F0ZSB0ZXh0LWdyYXktMzAwIG10LTFcIj5cclxuICAgICAgICAgIDxMaW5rIHRvPXtzb25nLmFydGlzdHMgPyBgL2FydGlzdHMvJHtzb25nPy5hcnRpc3RzWzFdPy5hZGFtaWR9YCA6ICcvdG9wLWFydGlzdHMnfSBjb2xvcj0nd2hpdGUnIF9ob3Zlcj17e3RleHREZWNvcmF0aW9uOidub25lJ319PlxyXG4gICAgICAgICAgICB7c29uZy5zdWJ0aXRsZX1cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvbmdDYXJkO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VEaXNwYXRjaCIsIlBsYXlQYXVzZSIsInBsYXlQYXVzZSIsInNldEFjdGl2ZVNvbmciLCJCb3giLCJJbWFnZSIsIkxpbmsiLCJUZXh0IiwiU29uZ0NhcmQiLCJzb25nIiwiaXNQbGF5aW5nIiwiYWN0aXZlU29uZyIsImRhdGEiLCJpIiwiZGlzcGF0Y2giLCJoYW5kbGVQYXVzZUNsaWNrIiwiaGFuZGxlUGxheUNsaWNrIiwicGFkZGluZyIsImRpc3BsYXkiLCJmbGV4RGlyIiwidyIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsImN1cnNvciIsInBvc2l0aW9uIiwiaCIsIl9ncm91cEFjdGl2ZSIsImNsYXNzTmFtZSIsImluc2V0IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwib3BhY2l0eSIsInN4IiwidGl0bGUiLCJfZ3JvdXBIb3ZlciIsImhhbmRsZVBhdXNlIiwiaGFuZGxlUGxheSIsImFsdCIsInNyYyIsImltYWdlcyIsImNvdmVyYXJ0Iiwicm91bmRlZCIsIm10IiwiZmxleERpcmVjdGlvbiIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJjb2xvciIsIm92ZXJmbG93IiwidGV4dE92ZXJmbG93Iiwid2hpdGVTcGFjZSIsInRvIiwia2V5IiwiX2hvdmVyIiwidGV4dERlY29yYXRpb24iLCJ1c2VDb2xvck1vZGVWYWx1ZSIsInRleHRDb2xvciIsImFydGlzdHMiLCJhZGFtaWQiLCJzdWJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/music/SongCard.jsx\n"));

/***/ })

});