"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo */ \"./components/logo.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst LinkItem = (param)=>{\n    let { href , path , children  } = param;\n    _s();\n    const active = path === href;\n    const inactiveColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"gray200\", \"whiteAlpha.900\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: href,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {\n            p: 2,\n            bg: active ? \"glassTeal\" : undefined,\n            color: active ? \"#202023\" : inactiveColor,\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\navbar.js\",\n            lineNumber: 24,\n            columnNumber: 10\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\navbar.js\",\n        lineNumber: 23,\n        columnNumber: 7\n    }, undefined);\n};\n_s(LinkItem, \"dl0xx8ZlQuUn9JhHFu16yTlHTaE=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue\n    ];\n});\n_c = LinkItem;\nconst Navbar = (props)=>{\n    _s1();\n    const { path  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        position: \"fixed\",\n        as: \"nav\",\n        w: \"100%\",\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"#ffffff40\", \"#20202380\"),\n        style: {\n            backdropFilter: \"blur(10px)\"\n        },\n        zIndex: 1,\n        ...props,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {\n            display: \"flex\",\n            p: 2,\n            maxW: \"container.md\",\n            wrap: \"wrap\",\n            align: \"center\",\n            justify: \"space-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                    align: \"center\",\n                    mr: 5,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                        as: \"h1\",\n                        size: \"lg\",\n                        letterSpacing: \"tighter\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\navbar.js\",\n                            lineNumber: 59,\n                            columnNumber: 19\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\navbar.js\",\n                        lineNumber: 58,\n                        columnNumber: 16\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\navbar.js\",\n                    lineNumber: 57,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                    direction: {\n                        base: \"coumn\",\n                        md: \"row\"\n                    },\n                    display: {\n                        base: \"none\",\n                        md: \"flex\"\n                    },\n                    width: {\n                        base: \"full\",\n                        md: \"auto\"\n                    },\n                    alignItems: \"center\",\n                    flexGrow: 1,\n                    mt: {\n                        base: 4,\n                        nmd: 0\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                            href: \"/works\",\n                            path: path,\n                            children: \"Works\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\navbar.js\",\n                            lineNumber: 70,\n                            columnNumber: 16\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                            href: \"/posts\",\n                            path: path,\n                            children: \"Posts\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\navbar.js\",\n                            lineNumber: 73,\n                            columnNumber: 16\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\navbar.js\",\n                    lineNumber: 62,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\navbar.js\",\n            lineNumber: 48,\n            columnNumber: 10\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kaeli\\\\OneDrive\\\\Documents\\\\Websites\\\\kaelin-home\\\\components\\\\navbar.js\",\n        lineNumber: 39,\n        columnNumber: 7\n    }, undefined);\n};\n_s1(Navbar, \"3skuTHwppfEdh6aKNlffDjyTB8U=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue\n    ];\n});\n_c1 = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c, _c1;\n$RefreshReg$(_c, \"LinkItem\");\n$RefreshReg$(_c1, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUI7QUFDTztBQWNQO0FBQ3VCO0FBRWhELE1BQU1lLFdBQVcsU0FBNkI7UUFBNUIsRUFBRUMsS0FBSSxFQUFFQyxLQUFJLEVBQUVDLFNBQVEsRUFBQzs7SUFDdEMsTUFBTUMsU0FBU0YsU0FBU0Q7SUFDeEIsTUFBTUksZ0JBQWdCUCxtRUFBaUJBLENBQUMsV0FBVztJQUNuRCxxQkFDRyw4REFBQ1osa0RBQVFBO1FBQUNlLE1BQU1BO2tCQUNiLDRFQUFDWixrREFBSUE7WUFDRmlCLEdBQUc7WUFDSEMsSUFBSUgsU0FBUyxjQUFjSSxTQUFTO1lBQ3BDQyxPQUFPTCxTQUFTLFlBQVlDLGFBQWE7c0JBRXhDRjs7Ozs7Ozs7Ozs7QUFJYjtHQWRNSDs7UUFFbUJGLCtEQUFpQkE7OztLQUZwQ0U7QUFnQk4sTUFBTVUsU0FBU0MsQ0FBQUEsUUFBUzs7SUFDckIsTUFBTSxFQUFFVCxLQUFJLEVBQUUsR0FBR1M7SUFFakIscUJBQ0csOERBQUN2QixpREFBR0E7UUFDRHdCLFVBQVM7UUFDVEMsSUFBRztRQUNIQyxHQUFFO1FBQ0ZQLElBQUlULG1FQUFpQkEsQ0FBQyxhQUFhO1FBQ25DaUIsT0FBTztZQUFDQyxnQkFBZ0I7UUFBWTtRQUNwQ0MsUUFBUTtRQUNQLEdBQUdOLEtBQUs7a0JBRVQsNEVBQUN4Qix1REFBU0E7WUFDUCtCLFNBQVE7WUFDUlosR0FBRztZQUNIYSxNQUFLO1lBQ0xDLE1BQUs7WUFDTEMsT0FBTTtZQUNOQyxTQUFROzs4QkFHUiw4REFBQzlCLGtEQUFJQTtvQkFBQzZCLE9BQU07b0JBQVNFLElBQUk7OEJBQ3RCLDRFQUFDaEMscURBQU9BO3dCQUFDc0IsSUFBRzt3QkFBS1csTUFBSzt3QkFBS0MsZUFBZTtrQ0FDdkMsNEVBQUN4Qyw2Q0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHWCw4REFBQ0ssbURBQUtBO29CQUNIb0MsV0FBVzt3QkFBQ0MsTUFBTTt3QkFBU0MsSUFBSTtvQkFBSztvQkFDcENWLFNBQVM7d0JBQUNTLE1BQU07d0JBQVFDLElBQUk7b0JBQU07b0JBQ2xDQyxPQUFPO3dCQUFDRixNQUFNO3dCQUFRQyxJQUFJO29CQUFNO29CQUNoQ0UsWUFBVztvQkFDWEMsVUFBVTtvQkFDVkMsSUFBSTt3QkFBRUwsTUFBTTt3QkFBR00sS0FBSztvQkFBRTs7c0NBRXRCLDhEQUFDakM7NEJBQVNDLE1BQUs7NEJBQVNDLE1BQU1BO3NDQUFNOzs7Ozs7c0NBR3BDLDhEQUFDRjs0QkFBU0MsTUFBSzs0QkFBU0MsTUFBTUE7c0NBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT25EO0lBN0NNUTs7UUFRT1osK0RBQWlCQTs7O01BUnhCWTtBQStDTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmJhci5qcz81YjVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2dvIGZyb20gJy4vbG9nbydcclxuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtcclxuICAgQ29udGFpbmVyLFxyXG4gICBCb3gsXHJcbiAgIExpbmssXHJcbiAgIFN0YWNrLFxyXG4gICBIZWFkaW5nLFxyXG4gICBGbGV4LFxyXG4gICBNZW51LFxyXG4gICBNZW51SXRlbSxcclxuICAgTWVudUxpc3QsXHJcbiAgIG1lbnVCdXR0b24sXHJcbiAgIEljb25CdXR0b24sXHJcbiAgIHVzZUNvbG9yTW9kZVZhbHVlXHJcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IHsgSHVtYnVyZ2VySWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnXHJcblxyXG5jb25zdCBMaW5rSXRlbSA9ICh7IGhyZWYsIHBhdGgsIGNoaWxkcmVufSkgPT4ge1xyXG4gICBjb25zdCBhY3RpdmUgPSBwYXRoID09PSBocmVmXHJcbiAgIGNvbnN0IGluYWN0aXZlQ29sb3IgPSB1c2VDb2xvck1vZGVWYWx1ZSgnZ3JheTIwMCcsICd3aGl0ZUFscGhhLjkwMCcpXHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxOZXh0TGluayBocmVmPXtocmVmfT5cclxuICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgcD17Mn1cclxuICAgICAgICAgICAgYmc9e2FjdGl2ZSA/ICdnbGFzc1RlYWwnIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICBjb2xvcj17YWN0aXZlID8gJyMyMDIwMjMnIDogaW5hY3RpdmVDb2xvcn1cclxuICAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgIDwvTGluaz5cclxuICAgICAgPC9OZXh0TGluaz5cclxuICAgKVxyXG59XHJcblxyXG5jb25zdCBOYXZiYXIgPSBwcm9wcyA9PiB7XHJcbiAgIGNvbnN0IHsgcGF0aCB9ID0gcHJvcHNcclxuICAgXHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxCb3ggXHJcbiAgICAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxyXG4gICAgICAgICBhcz1cIm5hdlwiXHJcbiAgICAgICAgIHc9XCIxMDAlXCJcclxuICAgICAgICAgYmc9e3VzZUNvbG9yTW9kZVZhbHVlKCcjZmZmZmZmNDAnLCAnIzIwMjAyMzgwJyl9XHJcbiAgICAgICAgIHN0eWxlPXt7YmFja2Ryb3BGaWx0ZXI6ICdibHVyKDEwcHgpJ319XHJcbiAgICAgICAgIHpJbmRleD17MX1cclxuICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICA+XHJcbiAgICAgICAgIDxDb250YWluZXIgXHJcbiAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcclxuICAgICAgICAgICAgcD17Mn0gXHJcbiAgICAgICAgICAgIG1heFc9XCJjb250YWluZXIubWRcIlxyXG4gICAgICAgICAgICB3cmFwPVwid3JhcFwiXHJcbiAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgPlxyXG4gICAgICAgICAgICA8RmxleCBhbGlnbj1cImNlbnRlclwiIG1yPXs1fT5cclxuICAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIHNpemU9XCJsZ1wiIGxldHRlclNwYWNpbmc9eyd0aWdodGVyJ30+XHJcbiAgICAgICAgICAgICAgICAgIDxMb2dvIC8+XHJcbiAgICAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICA8U3RhY2tcclxuICAgICAgICAgICAgICAgZGlyZWN0aW9uPXt7YmFzZTogJ2NvdW1uJywgbWQ6ICdyb3cnfX1cclxuICAgICAgICAgICAgICAgZGlzcGxheT17e2Jhc2U6ICdub25lJywgbWQ6ICdmbGV4J319XHJcbiAgICAgICAgICAgICAgIHdpZHRoPXt7YmFzZTogJ2Z1bGwnLCBtZDogJ2F1dG8nfX1cclxuICAgICAgICAgICAgICAgYWxpZ25JdGVtcz0nY2VudGVyJ1xyXG4gICAgICAgICAgICAgICBmbGV4R3Jvdz17MX1cclxuICAgICAgICAgICAgICAgbXQ9e3sgYmFzZTogNCwgbm1kOiAwIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgPExpbmtJdGVtIGhyZWY9XCIvd29ya3NcIiBwYXRoPXtwYXRofT5cclxuICAgICAgICAgICAgICAgICAgV29ya3NcclxuICAgICAgICAgICAgICAgPC9MaW5rSXRlbT5cclxuICAgICAgICAgICAgICAgPExpbmtJdGVtIGhyZWY9XCIvcG9zdHNcIiBwYXRoPXtwYXRofT5cclxuICAgICAgICAgICAgICAgICAgUG9zdHNcclxuICAgICAgICAgICAgICAgPC9MaW5rSXRlbT5cclxuICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvQm94PlxyXG4gICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhciJdLCJuYW1lcyI6WyJMb2dvIiwiTmV4dExpbmsiLCJDb250YWluZXIiLCJCb3giLCJMaW5rIiwiU3RhY2siLCJIZWFkaW5nIiwiRmxleCIsIk1lbnUiLCJNZW51SXRlbSIsIk1lbnVMaXN0IiwibWVudUJ1dHRvbiIsIkljb25CdXR0b24iLCJ1c2VDb2xvck1vZGVWYWx1ZSIsIkh1bWJ1cmdlckljb24iLCJMaW5rSXRlbSIsImhyZWYiLCJwYXRoIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJpbmFjdGl2ZUNvbG9yIiwicCIsImJnIiwidW5kZWZpbmVkIiwiY29sb3IiLCJOYXZiYXIiLCJwcm9wcyIsInBvc2l0aW9uIiwiYXMiLCJ3Iiwic3R5bGUiLCJiYWNrZHJvcEZpbHRlciIsInpJbmRleCIsImRpc3BsYXkiLCJtYXhXIiwid3JhcCIsImFsaWduIiwianVzdGlmeSIsIm1yIiwic2l6ZSIsImxldHRlclNwYWNpbmciLCJkaXJlY3Rpb24iLCJiYXNlIiwibWQiLCJ3aWR0aCIsImFsaWduSXRlbXMiLCJmbGV4R3JvdyIsIm10Iiwibm1kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navbar.js\n"));

/***/ })

});