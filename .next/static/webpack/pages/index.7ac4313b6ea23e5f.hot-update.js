"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Auth/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Auth/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Auth = (param)=>{\n    let { session , reloadSession  } = param;\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleInputChange = (e)=>{\n        setUsername(e.target.value);\n    };\n    const onSubmit = async ()=>{\n        try {} catch (error) {\n            console.log(\"onSubmit error : \" + error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {\n            height: \"100vh\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                spacing: \"8\",\n                align: \"center\",\n                justify: \"center\",\n                children: session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                            fontSize: \"2xl\",\n                            color: \"whiteAlpha.900\",\n                            children: \"Create a Username\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davidhakak/Desktop/הכל פה/full_stack/project׳s/chat/frontend/src/components/Auth/index.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                            color: \"whiteAlpha.900\",\n                            placeholder: \"Enter a Username\",\n                            value: username,\n                            onChange: (e)=>handleInputChange(e)\n                        }, void 0, false, {\n                            fileName: \"/Users/davidhakak/Desktop/הכל פה/full_stack/project׳s/chat/frontend/src/components/Auth/index.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            onClick: onSubmit,\n                            width: \"100%\",\n                            children: \"Save\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davidhakak/Desktop/הכל פה/full_stack/project׳s/chat/frontend/src/components/Auth/index.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                            fontSize: \"2xl\",\n                            color: \"whiteAlpha.900\",\n                            children: \"My Chat App\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davidhakak/Desktop/הכל פה/full_stack/project׳s/chat/frontend/src/components/Auth/index.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(),\n                            leftIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {\n                                height: \"20px\",\n                                src: \"/images/googleLogo.png\"\n                            }, void 0, false, void 0, void 0),\n                            children: \"Continue with google\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davidhakak/Desktop/הכל פה/full_stack/project׳s/chat/frontend/src/components/Auth/index.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"/Users/davidhakak/Desktop/הכל פה/full_stack/project׳s/chat/frontend/src/components/Auth/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 5\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/davidhakak/Desktop/הכל פה/full_stack/project׳s/chat/frontend/src/components/Auth/index.tsx\",\n            lineNumber: 29,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/davidhakak/Desktop/הכל פה/full_stack/project׳s/chat/frontend/src/components/Auth/index.tsx\",\n        lineNumber: 28,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Auth, \"NdiL/piRMZ2vRLOEttBmijNvB9g=\");\n_c = Auth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Auth);\nvar _c;\n$RefreshReg$(_c, \"Auth\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BdXRoL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZFO0FBRXBDO0FBQ1I7QUFPakMsTUFBTVEsT0FBOEIsU0FBOEI7UUFBN0IsRUFBQ0MsUUFBTyxFQUFFQyxjQUFhLEVBQUM7O0lBRTNELE1BQU0sQ0FBQ0MsVUFBV0MsWUFBWSxHQUFJTCwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNTSxvQkFBb0IsQ0FBQ0MsSUFBSTtRQUM1QkYsWUFBWUUsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO0lBQzdCO0lBRUEsTUFBTUMsV0FBVyxVQUFVO1FBQzdCLElBQUksQ0FFSixFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUMsR0FBRyxDQUFDLHNCQUFzQkY7UUFFcEM7SUFDRTtJQUVBLHFCQUFPLDhEQUFDRztrQkFDUCw0RUFBQ3BCLG9EQUFNQTtZQUFDcUIsUUFBTztzQkFDZCw0RUFBQ2xCLG1EQUFLQTtnQkFBQ21CLFNBQVE7Z0JBQUlDLE9BQU07Z0JBQVNDLFNBQVE7MEJBRXRDaEIsd0JBQ0U7O3NDQUNBLDhEQUFDSixrREFBSUE7NEJBQUNxQixVQUFTOzRCQUFNQyxPQUFNO3NDQUFpQjs7Ozs7O3NDQUU1Qyw4REFBQ3hCLG1EQUFLQTs0QkFDTndCLE9BQU07NEJBQ05DLGFBQVk7NEJBQ1paLE9BQU9MOzRCQUNQa0IsVUFBVSxDQUFDZixJQUFLRCxrQkFBa0JDOzs7Ozs7c0NBRWxDLDhEQUFDZCxvREFBTUE7NEJBQUM4QixTQUFTYjs0QkFBVWMsT0FBTTtzQ0FBTzs7Ozs7OztpREFHeEM7O3NDQUNBLDhEQUFDMUIsa0RBQUlBOzRCQUFDcUIsVUFBUzs0QkFBTUMsT0FBTTtzQ0FBaUI7Ozs7OztzQ0FDNUMsOERBQUMzQixvREFBTUE7NEJBQUM4QixTQUFTLElBQU14Qix1REFBTUE7NEJBQUkwQix3QkFBVSw4REFBQzlCLG1EQUFLQTtnQ0FBQ29CLFFBQU87Z0NBQU9XLEtBQUk7O3NDQUE0Qjs7Ozs7OztnQ0FJakc7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLVDtHQTdDTXpCO0tBQUFBO0FBK0NOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0F1dGgvaW5kZXgudHN4Pzg2ZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBDZW50ZXIsIEltYWdlLCBJbnB1dCwgU3RhY2ssIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBJQXV0aFByb3BzIHtcbiAgc2Vzc2lvbjogU2Vzc2lvbiB8IG51bGw7XG4gIHJlbG9hZFNlc3Npb246ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IEF1dGg6IFJlYWN0LkZDIDxJQXV0aFByb3BzPiA9ICh7c2Vzc2lvbiwgcmVsb2FkU2Vzc2lvbn0pID0+IHtcblxuICBjb25zdCBbdXNlcm5hbWUgLCBzZXRVc2VybmFtZV0gID0gdXNlU3RhdGUoXCJcIilcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKT0+e1xuICAgICBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSlcbiAgfTtcblxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jICgpPT57XG50cnkge1xuICBcbn0gY2F0Y2ggKGVycm9yKSB7XG4gIGNvbnNvbGUubG9nKFwib25TdWJtaXQgZXJyb3IgOiBcIiArIGVycm9yKTtcbiAgXG59XG4gIH1cblxuICByZXR1cm4gPGRpdj5cbiAgIDxDZW50ZXIgaGVpZ2h0PVwiMTAwdmhcIiA+XG4gICAgPFN0YWNrIHNwYWNpbmc9XCI4XCIgYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICB7XG4gICAgICAgIHNlc3Npb24/KFxuICAgICAgICAgIDw+XG4gICAgICAgICAgPFRleHQgZm9udFNpemU9XCIyeGxcIiBjb2xvcj1cIndoaXRlQWxwaGEuOTAwXCI+Q3JlYXRlIGEgVXNlcm5hbWU8L1RleHQ+XG4gICAgICAgICAgXG4gICAgICAgICAgPElucHV0IFxuICAgICAgICAgIGNvbG9yPVwid2hpdGVBbHBoYS45MDBcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYSBVc2VybmFtZVwiXG4gICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfSBcbiAgICAgICAgICBvbkNoYW5nZT17KGUpPT4gaGFuZGxlSW5wdXRDaGFuZ2UoZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uU3VibWl0fSB3aWR0aD1cIjEwMCVcIj5TYXZlPC9CdXR0b24+XG4gICAgICAgICAgPC8+XG4gICAgICAgICk6KFxuICAgICAgICAgIDw+XG4gICAgICAgICAgPFRleHQgZm9udFNpemU9XCIyeGxcIiBjb2xvcj1cIndoaXRlQWxwaGEuOTAwXCI+TXkgQ2hhdCBBcHA8L1RleHQ+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduSW4oKX0gbGVmdEljb249ezxJbWFnZSBoZWlnaHQ9XCIyMHB4XCIgc3JjPVwiL2ltYWdlcy9nb29nbGVMb2dvLnBuZ1wiLz59PlxuICAgICAgICAgICAgQ29udGludWUgd2l0aCBnb29nbGVcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIDwvU3RhY2s+XG4gICA8L0NlbnRlcj5cbiAgPC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXV0aDsiXSwibmFtZXMiOlsiQnV0dG9uIiwiQ2VudGVyIiwiSW1hZ2UiLCJJbnB1dCIsIlN0YWNrIiwiVGV4dCIsInNpZ25JbiIsInVzZVN0YXRlIiwiQXV0aCIsInNlc3Npb24iLCJyZWxvYWRTZXNzaW9uIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25TdWJtaXQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJoZWlnaHQiLCJzcGFjaW5nIiwiYWxpZ24iLCJqdXN0aWZ5IiwiZm9udFNpemUiLCJjb2xvciIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJvbkNsaWNrIiwid2lkdGgiLCJsZWZ0SWNvbiIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Auth/index.tsx\n"));

/***/ })

});