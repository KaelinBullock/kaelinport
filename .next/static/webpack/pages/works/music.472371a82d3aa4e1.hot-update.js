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

/***/ "./components/music/TopPlay.jsx":
/*!**************************************!*\
  !*** ./components/music/TopPlay.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _PlayPause__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlayPause */ \"./components/music/PlayPause.jsx\");\n/* harmony import */ var _redux_features_playerSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/features/playerSlice */ \"./redux/features/playerSlice.js\");\n/* harmony import */ var _redux_services_shazamCore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/services/shazamCore */ \"./redux/services/shazamCore.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* eslint-disable import/no-unresolved */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\n\n\n\n\n//TODO fix links ans swiper\nconst TopChartCard = (param)=>{\n    let { song , i , isPlaying , activeSong , handlePauseClick , handlePlayClick  } = param;\n    var _song_images;\n    _s();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        w: \"full\",\n        display: \"flex\",\n        flexDir: \"row\",\n        alignItems: \"center\",\n        _hover: {\n            background: \"#4c426e\",\n            color: \"teal.500\"\n        },\n        style: (activeSong === null || activeSong === void 0 ? void 0 : activeSong.title) === (song === null || song === void 0 ? void 0 : song.title) ? {\n            backgroundColor: \"#4c426e\"\n        } : {\n            backgroundColor: \"transparent\"\n        },\n        py: 2,\n        p: 4,\n        borderRadius: \".5rem\",\n        cursor: \"pointer\",\n        mb: 2,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                as: \"h3\",\n                fontWeight: \"bold\",\n                fontSize: \"1rem\",\n                lineHeight: \"1.5rem\",\n                textColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useColorModeValue)(\"black\", \"white\"),\n                mr: 3,\n                children: [\n                    i + 1,\n                    \".\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\TopPlay.jsx\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                flex: \"1 1 0%\",\n                display: \"flex\",\n                flexDir: \"row\",\n                justifyContent: \"space-between\",\n                alignItems: \"center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Image, {\n                        w: 20,\n                        h: 20,\n                        borderRadius: \".5rem\",\n                        src: song === null || song === void 0 ? void 0 : (_song_images = song.images) === null || _song_images === void 0 ? void 0 : _song_images.coverart,\n                        alt: song === null || song === void 0 ? void 0 : song.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\TopPlay.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                        flex: \"1 1 0%\",\n                        display: \"flex\",\n                        flexDir: \"column\",\n                        justifyContent: \"center\",\n                        mx: 3,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                            fontSize: \"1.25rem\",\n                            lineHeight: \"1.75rem\",\n                            fontWeight: \"bold\",\n                            textColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useColorModeValue)(\"black\", \"white\"),\n                            children: song === null || song === void 0 ? void 0 : song.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\TopPlay.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\TopPlay.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\TopPlay.jsx\",\n                lineNumber: 29,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlayPause__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                isPlaying: isPlaying,\n                activeSong: activeSong,\n                song: song,\n                handlePause: handlePauseClick,\n                handlePlay: handlePlayClick\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\TopPlay.jsx\",\n                lineNumber: 44,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\TopPlay.jsx\",\n        lineNumber: 13,\n        columnNumber: 3\n    }, undefined);\n};\n_s(TopChartCard, \"5rxRexUsrrZIvnjV+vC1pFVSBPE=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useColorModeValue\n    ];\n});\n_c = TopChartCard;\nconst validateSongData = ()=>{\n    _s1();\n    // eslint-disable-next-line react-hooks/rules-of-hooks\n    const { data  } = (0,_redux_services_shazamCore__WEBPACK_IMPORTED_MODULE_5__.useGetTopChartsQuery)();\n    let tempData = [];\n    if (typeof data !== \"undefined\") {\n        for(let i = 0; i < data.length; i++){\n            var _data_i, _data_i_hub;\n            if (typeof ((_data_i = data[i]) === null || _data_i === void 0 ? void 0 : (_data_i_hub = _data_i.hub) === null || _data_i_hub === void 0 ? void 0 : _data_i_hub.actions) !== \"undefined\") {\n                tempData.push(data[i]);\n            }\n        }\n    }\n    return tempData;\n};\n_s1(validateSongData, \"t0PhkqOAhKmHV8d27jpMFcJetGI=\", false, function() {\n    return [\n        _redux_services_shazamCore__WEBPACK_IMPORTED_MODULE_5__.useGetTopChartsQuery\n    ];\n});\nconst TopPlay = ()=>{\n    _s2();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const { activeSong , isPlaying  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.player);\n    let data = validateSongData();\n    const divRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const topPlays = data === null || data === void 0 ? void 0 : data.slice(0, 5);\n    const handlePauseClick = ()=>{\n        dispatch((0,_redux_features_playerSlice__WEBPACK_IMPORTED_MODULE_4__.playPause)(false));\n    };\n    const handlePlayClick = (song, i)=>{\n        dispatch((0,_redux_features_playerSlice__WEBPACK_IMPORTED_MODULE_4__.setActiveSong)({\n            song,\n            data,\n            i\n        }));\n        dispatch((0,_redux_features_playerSlice__WEBPACK_IMPORTED_MODULE_4__.playPause)(true));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        ref: divRef,\n        ml: 0,\n        mb: 6,\n        flex: 1,\n        maxW: \"full\",\n        display: \"flex\",\n        flexDir: \"column\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n            w: \"full\",\n            display: \"flex\",\n            flexDir: \"column\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                    w: \"full\",\n                    display: \"flex\",\n                    flexDir: \"row\",\n                    justifyContent: \"space-between\",\n                    alignItems: \"center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                        as: \"h2\",\n                        textColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useColorModeValue)(\"black\", \"white\"),\n                        fontWeight: \"bold\",\n                        fontSize: \"1.5rem\",\n                        lineHeight: \"1.5rem\",\n                        mb: 4,\n                        children: \"Top Charts\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\TopPlay.jsx\",\n                        lineNumber: 90,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\TopPlay.jsx\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4 flex flex-col gap-1\",\n                    children: topPlays === null || topPlays === void 0 ? void 0 : topPlays.map((song, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TopChartCard, {\n                            song: song,\n                            i: i,\n                            isPlaying: isPlaying,\n                            activeSong: activeSong,\n                            handlePauseClick: handlePauseClick,\n                            handlePlayClick: ()=>handlePlayClick(song, i)\n                        }, song.key, false, {\n                            fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\TopPlay.jsx\",\n                            lineNumber: 95,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\TopPlay.jsx\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\TopPlay.jsx\",\n            lineNumber: 88,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\music\\\\TopPlay.jsx\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, undefined);\n};\n_s2(TopPlay, \"0f3A2iX1GVX3d9pFkF48LGUU0LE=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useColorModeValue\n    ];\n});\n_c1 = TopPlay;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopPlay);\nvar _c, _c1;\n$RefreshReg$(_c, \"TopChartCard\");\n$RefreshReg$(_c1, \"TopPlay\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBQUEsS0FBQUEsSUFBQUEsU0FBVU8sR0FBRyxDQUFDLENBQUN4RCxNQUFNQyxrQkFDcEIsOERBQUNGOzRCQUVDQyxNQUFNQTs0QkFDTkMsR0FBR0E7NEJBQ0hDLFdBQVdBOzRCQUNYQyxZQUFZQTs0QkFDWkMsa0JBQWtCQTs0QkFDbEJDLGlCQUFpQixJQUFNQSxnQkFBZ0JMLE1BQU1DOzJCQU54Q0QsS0FBS3lELEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWEzQjtJQXhDTWI7O1FBQ2F4RCxvREFBV0E7UUFDTUQsb0RBQVdBO1FBbUJUVywrREFBaUJBOzs7TUFyQmpEOEM7QUEwQ04sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tdXNpYy9Ub3BQbGF5LmpzeD80YzFmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby11bnJlc29sdmVkICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCBQbGF5UGF1c2UgZnJvbSAnLi9QbGF5UGF1c2UnO1xyXG5pbXBvcnQgeyBwbGF5UGF1c2UsIHNldEFjdGl2ZVNvbmcgfSBmcm9tICcuLi8uLi9yZWR1eC9mZWF0dXJlcy9wbGF5ZXJTbGljZSc7XHJcbmltcG9ydCB7IHVzZUdldFRvcENoYXJ0c1F1ZXJ5IH0gZnJvbSAnLi4vLi4vcmVkdXgvc2VydmljZXMvc2hhemFtQ29yZSc7XHJcblxyXG5pbXBvcnQgeyBCb3gsIEhlYWRpbmcsIEltYWdlLCBMaW5rLCBUZXh0LCB1c2VDb2xvck1vZGVWYWx1ZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5cclxuLy9UT0RPIGZpeCBsaW5rcyBhbnMgc3dpcGVyXHJcbmNvbnN0IFRvcENoYXJ0Q2FyZCA9ICh7IHNvbmcsIGksIGlzUGxheWluZywgYWN0aXZlU29uZywgaGFuZGxlUGF1c2VDbGljaywgaGFuZGxlUGxheUNsaWNrIH0pID0+IChcclxuICA8Qm94IFxyXG4gICAgdz0nZnVsbCcgXHJcbiAgICBkaXNwbGF5PSdmbGV4JyBcclxuICAgIGZsZXhEaXI9J3JvdycgXHJcbiAgICBhbGlnbkl0ZW1zPSdjZW50ZXInIFxyXG4gICAgX2hvdmVyPXt7XHJcbiAgICAgIGJhY2tncm91bmQ6ICcjNGM0MjZlJyxcclxuICAgICAgY29sb3I6ICd0ZWFsLjUwMCcsXHJcbiAgICB9fSBcclxuICAgIHN0eWxlPXthY3RpdmVTb25nPy50aXRsZSA9PT0gc29uZz8udGl0bGUgPyB7YmFja2dyb3VuZENvbG9yOicjNGM0MjZlJ30gOiB7YmFja2dyb3VuZENvbG9yOid0cmFuc3BhcmVudCd9fVxyXG4gICAgcHk9ezJ9XHJcbiAgICBwPXs0fVxyXG4gICAgYm9yZGVyUmFkaXVzPScuNXJlbSdcclxuICAgIGN1cnNvcj0ncG9pbnRlcidcclxuICAgIG1iPXsyfT5cclxuICAgIDxIZWFkaW5nIGFzPSdoMycgZm9udFdlaWdodD0nYm9sZCcgZm9udFNpemU9JzFyZW0nIGxpbmVIZWlnaHQ9JzEuNXJlbScgdGV4dENvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZSgnYmxhY2snLCAnd2hpdGUnKX0gbXI9ezN9PntpICsgMX0uPC9IZWFkaW5nPlxyXG4gICAgPEJveCBmbGV4PScxIDEgMCUnIGRpc3BsYXk9J2ZsZXgnIGZsZXhEaXI9J3JvdycganVzdGlmeUNvbnRlbnQ9J3NwYWNlLWJldHdlZW4nIGFsaWduSXRlbXM9J2NlbnRlcic+XHJcbiAgICAgIDxJbWFnZSB3PXsyMH0gaD17MjB9IGJvcmRlclJhZGl1cz0nLjVyZW0nIHNyYz17c29uZz8uaW1hZ2VzPy5jb3ZlcmFydH0gYWx0PXtzb25nPy50aXRsZX0gLz5cclxuICAgICAgPEJveCBmbGV4PScxIDEgMCUnIGRpc3BsYXk9J2ZsZXgnIGZsZXhEaXI9J2NvbHVtbicganVzdGlmeUNvbnRlbnQ9J2NlbnRlcicgbXg9ezN9PlxyXG4gICAgICAgIHsvKiA8TGluayB0bz17YC9zb25ncy8ke3Nvbmcua2V5fWB9PiAqL31cclxuICAgICAgICAgIDxUZXh0IGZvbnRTaXplPScxLjI1cmVtJyBsaW5lSGVpZ2h0PScxLjc1cmVtJyBmb250V2VpZ2h0PSdib2xkJyB0ZXh0Q29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKCdibGFjaycsICd3aGl0ZScpfT5cclxuICAgICAgICAgICAge3Nvbmc/LnRpdGxlfVxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIHsvKiA8L0xpbms+ICovfVxyXG4gICAgICAgIHsvKiA8TGluayB0bz17YC9hcnRpc3RzLyR7c29uZz8uYXJ0aXN0c1swXS5hZGFtaWR9YH0+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC1ncmF5LTMwMCBtdC0xXCI+XHJcbiAgICAgICAgICAgIHtzb25nPy5zdWJ0aXRsZX1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L0xpbms+ICovfVxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICAgPFBsYXlQYXVzZVxyXG4gICAgICBpc1BsYXlpbmc9e2lzUGxheWluZ31cclxuICAgICAgYWN0aXZlU29uZz17YWN0aXZlU29uZ31cclxuICAgICAgc29uZz17c29uZ31cclxuICAgICAgaGFuZGxlUGF1c2U9e2hhbmRsZVBhdXNlQ2xpY2t9XHJcbiAgICAgIGhhbmRsZVBsYXk9e2hhbmRsZVBsYXlDbGlja31cclxuICAgIC8+XHJcbiAgPC9Cb3g+XHJcbik7XHJcblxyXG5jb25zdCB2YWxpZGF0ZVNvbmdEYXRhID0gKCkgPT4ge1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlR2V0VG9wQ2hhcnRzUXVlcnkoKTtcclxuICBsZXQgdGVtcERhdGEgPSBbXTtcclxuXHJcbiAgaWYodHlwZW9mIGRhdGEgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZih0eXBlb2YgZGF0YVtpXT8uaHViPy5hY3Rpb25zICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHRlbXBEYXRhLnB1c2goZGF0YVtpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRlbXBEYXRhO1xyXG59O1xyXG5cclxuY29uc3QgVG9wUGxheSA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBhY3RpdmVTb25nLCBpc1BsYXlpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucGxheWVyKTtcclxuICBsZXQgZGF0YSAgPSB2YWxpZGF0ZVNvbmdEYXRhKCk7XHJcbiAgY29uc3QgZGl2UmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCB0b3BQbGF5cyA9IGRhdGE/LnNsaWNlKDAsIDUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVQYXVzZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2gocGxheVBhdXNlKGZhbHNlKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUGxheUNsaWNrID0gKHNvbmcsIGkpID0+IHtcclxuICAgIGRpc3BhdGNoKHNldEFjdGl2ZVNvbmcoeyBzb25nLCBkYXRhLCBpIH0pKTtcclxuICAgIGRpc3BhdGNoKHBsYXlQYXVzZSh0cnVlKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggcmVmPXtkaXZSZWZ9IG1sPXswfSBtYj17Nn0gZmxleD17MX0gbWF4Vz0nZnVsbCcgZGlzcGxheT0nZmxleCcgZmxleERpcj0nY29sdW1uJz5cclxuICAgICAgPEJveCB3PSdmdWxsJyBkaXNwbGF5PSdmbGV4JyBmbGV4RGlyPSdjb2x1bW4nPlxyXG4gICAgICAgIDxCb3ggdz0nZnVsbCcgZGlzcGxheT0nZmxleCcgZmxleERpcj0ncm93JyBqdXN0aWZ5Q29udGVudD0nc3BhY2UtYmV0d2VlbicgYWxpZ25JdGVtcz0nY2VudGVyJz5cclxuICAgICAgICAgIDxIZWFkaW5nIGFzPSdoMicgdGV4dENvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZSgnYmxhY2snLCAnd2hpdGUnKX0gZm9udFdlaWdodD0nYm9sZCcgZm9udFNpemU9JzEuNXJlbScgbGluZUhlaWdodD0nMS41cmVtJyBtYj17NH0+VG9wIENoYXJ0czwvSGVhZGluZz5cclxuICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IGZsZXggZmxleC1jb2wgZ2FwLTFcIj5cclxuICAgICAgICAgIHt0b3BQbGF5cz8ubWFwKChzb25nLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxUb3BDaGFydENhcmRcclxuICAgICAgICAgICAgICBrZXk9e3Nvbmcua2V5fVxyXG4gICAgICAgICAgICAgIHNvbmc9e3Nvbmd9XHJcbiAgICAgICAgICAgICAgaT17aX1cclxuICAgICAgICAgICAgICBpc1BsYXlpbmc9e2lzUGxheWluZ31cclxuICAgICAgICAgICAgICBhY3RpdmVTb25nPXthY3RpdmVTb25nfVxyXG4gICAgICAgICAgICAgIGhhbmRsZVBhdXNlQ2xpY2s9e2hhbmRsZVBhdXNlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgaGFuZGxlUGxheUNsaWNrPXsoKSA9PiBoYW5kbGVQbGF5Q2xpY2soc29uZywgaSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9wUGxheTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsIlBsYXlQYXVzZSIsInBsYXlQYXVzZSIsInNldEFjdGl2ZVNvbmciLCJ1c2VHZXRUb3BDaGFydHNRdWVyeSIsIkJveCIsIkhlYWRpbmciLCJJbWFnZSIsIkxpbmsiLCJUZXh0IiwidXNlQ29sb3JNb2RlVmFsdWUiLCJUb3BDaGFydENhcmQiLCJzb25nIiwiaSIsImlzUGxheWluZyIsImFjdGl2ZVNvbmciLCJoYW5kbGVQYXVzZUNsaWNrIiwiaGFuZGxlUGxheUNsaWNrIiwidyIsImRpc3BsYXkiLCJmbGV4RGlyIiwiYWxpZ25JdGVtcyIsIl9ob3ZlciIsImJhY2tncm91bmQiLCJjb2xvciIsInN0eWxlIiwidGl0bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJweSIsInAiLCJib3JkZXJSYWRpdXMiLCJjdXJzb3IiLCJtYiIsImFzIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsInRleHRDb2xvciIsIm1yIiwiZmxleCIsImp1c3RpZnlDb250ZW50IiwiaCIsInNyYyIsImltYWdlcyIsImNvdmVyYXJ0IiwiYWx0IiwibXgiLCJoYW5kbGVQYXVzZSIsImhhbmRsZVBsYXkiLCJ2YWxpZGF0ZVNvbmdEYXRhIiwiZGF0YSIsInRlbXBEYXRhIiwibGVuZ3RoIiwiaHViIiwiYWN0aW9ucyIsInB1c2giLCJUb3BQbGF5IiwiZGlzcGF0Y2giLCJzdGF0ZSIsInBsYXllciIsImRpdlJlZiIsInRvcFBsYXlzIiwic2xpY2UiLCJyZWYiLCJtbCIsIm1heFciLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/music/TopPlay.jsx\n"));

/***/ })

});