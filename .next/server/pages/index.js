"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/Auth/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Auth/index.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__]);\n_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst Auth = ({ session , reloadSession  })=>{\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const handleInputChange = (e)=>{\n        setUsername(e.target.value);\n    };\n    const onSubmit = async ()=>{\n        try {} catch (error) {\n            console.log(\"onSubmit error : \" + error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {\n            height: \"100vh\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {\n                spacing: \"10\",\n                align: \"center\",\n                children: session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            fontSize: \"2xl\",\n                            color: \"whiteAlpha.900\",\n                            children: \"Create a Username\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davidhakak/Desktop/הכל פה/full_stack/project׳s/chat/frontend/src/components/Auth/index.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                            color: \"whiteAlpha.900\",\n                            placeholder: \"Enter a Username\",\n                            value: username,\n                            onChange: (e)=>handleInputChange(e)\n                        }, void 0, false, {\n                            fileName: \"/Users/davidhakak/Desktop/הכל פה/full_stack/project׳s/chat/frontend/src/components/Auth/index.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                            onClick: onSubmit,\n                            width: \"320px\",\n                            children: \"Save\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davidhakak/Desktop/הכל פה/full_stack/project׳s/chat/frontend/src/components/Auth/index.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            fontSize: \"2xl\",\n                            color: \"whiteAlpha.900\",\n                            children: \"Chat App\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davidhakak/Desktop/הכל פה/full_stack/project׳s/chat/frontend/src/components/Auth/index.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                            onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(),\n                            width: \"320px\",\n                            height: \"50px\",\n                            justifyContent: \"space-around\",\n                            leftIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                height: \"20px\",\n                                src: \"/images/googleLogo.png\"\n                            }, void 0, false, void 0, void 0),\n                            children: \"Continue with google\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davidhakak/Desktop/הכל פה/full_stack/project׳s/chat/frontend/src/components/Auth/index.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"/Users/davidhakak/Desktop/הכל פה/full_stack/project׳s/chat/frontend/src/components/Auth/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 5\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/davidhakak/Desktop/הכל פה/full_stack/project׳s/chat/frontend/src/components/Auth/index.tsx\",\n            lineNumber: 28,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/davidhakak/Desktop/הכל פה/full_stack/project׳s/chat/frontend/src/components/Auth/index.tsx\",\n        lineNumber: 27,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Auth);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BdXRoL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkU7QUFFcEM7QUFDUjtBQU9qQyxNQUFNUSxPQUE4QixDQUFDLEVBQUNDLFFBQU8sRUFBRUMsY0FBYSxFQUFDLEdBQUs7SUFFaEUsTUFBTSxDQUFDQyxVQUFXQyxZQUFZLEdBQUlMLCtDQUFRQSxDQUFDO0lBRTNDLE1BQU1NLG9CQUFvQixDQUFDQyxJQUF5QztRQUNoRUYsWUFBWUUsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO0lBQzFCO0lBRUYsTUFBTUMsV0FBVyxVQUFVO1FBQzNCLElBQUksQ0FFSixFQUFFLE9BQU9DLE9BQU87WUFDaEJDLFFBQVFDLEdBQUcsQ0FBQyxzQkFBc0JGO1FBQ2xDO0lBQ0Y7SUFFQSxxQkFBTyw4REFBQ0c7a0JBQ1AsNEVBQUNwQixvREFBTUE7WUFBQ3FCLFFBQU87c0JBQ2QsNEVBQUNsQixtREFBS0E7Z0JBQUNtQixTQUFRO2dCQUFLQyxPQUFNOzBCQUV0QmYsd0JBQ0U7O3NDQUNBLDhEQUFDSixrREFBSUE7NEJBQUNvQixVQUFTOzRCQUFNQyxPQUFNO3NDQUFpQjs7Ozs7O3NDQUU1Qyw4REFBQ3ZCLG1EQUFLQTs0QkFDTnVCLE9BQU07NEJBQ05DLGFBQVk7NEJBQ1pYLE9BQU9MOzRCQUNQaUIsVUFBVSxDQUFDZCxJQUFLRCxrQkFBa0JDOzs7Ozs7c0NBRWxDLDhEQUFDZCxvREFBTUE7NEJBQUM2QixTQUFTWjs0QkFBVWEsT0FBTTtzQ0FBUTs7Ozs7OztpREFHekM7O3NDQUNBLDhEQUFDekIsa0RBQUlBOzRCQUFDb0IsVUFBUzs0QkFBTUMsT0FBTTtzQ0FBaUI7Ozs7OztzQ0FDNUMsOERBQUMxQixvREFBTUE7NEJBQUM2QixTQUFTLElBQU12Qix1REFBTUE7NEJBQUl3QixPQUFNOzRCQUFRUixRQUFPOzRCQUFPUyxnQkFBZTs0QkFBZUMsd0JBQVUsOERBQUM5QixtREFBS0E7Z0NBQUNvQixRQUFPO2dDQUFPVyxLQUFJOztzQ0FBNEI7Ozs7Ozs7Z0NBSTNKOzs7Ozs7Ozs7Ozs7Ozs7O0FBS1Q7QUFFQSxpRUFBZXpCLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0F1dGgvaW5kZXgudHN4Pzg2ZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBDZW50ZXIsIEltYWdlLCBJbnB1dCwgU3RhY2ssIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBJQXV0aFByb3BzIHtcbiAgc2Vzc2lvbjogU2Vzc2lvbiB8IG51bGw7XG4gIHJlbG9hZFNlc3Npb246ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IEF1dGg6IFJlYWN0LkZDIDxJQXV0aFByb3BzPiA9ICh7c2Vzc2lvbiwgcmVsb2FkU2Vzc2lvbn0pID0+IHtcblxuICBjb25zdCBbdXNlcm5hbWUgLCBzZXRVc2VybmFtZV0gID0gdXNlU3RhdGUoXCJcIilcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik9PntcbiAgICAgIHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgfTtcblxuICAgIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKCk9PntcbiAgICB0cnkge1xuICBcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwib25TdWJtaXQgZXJyb3IgOiBcIiArIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gPGRpdj5cbiAgIDxDZW50ZXIgaGVpZ2h0PVwiMTAwdmhcIiA+XG4gICAgPFN0YWNrIHNwYWNpbmc9XCIxMFwiIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICB7XG4gICAgICAgIHNlc3Npb24/KFxuICAgICAgICAgIDw+XG4gICAgICAgICAgPFRleHQgZm9udFNpemU9XCIyeGxcIiBjb2xvcj1cIndoaXRlQWxwaGEuOTAwXCI+Q3JlYXRlIGEgVXNlcm5hbWU8L1RleHQ+XG4gICAgICAgICAgXG4gICAgICAgICAgPElucHV0IFxuICAgICAgICAgIGNvbG9yPVwid2hpdGVBbHBoYS45MDBcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYSBVc2VybmFtZVwiXG4gICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfSBcbiAgICAgICAgICBvbkNoYW5nZT17KGUpPT4gaGFuZGxlSW5wdXRDaGFuZ2UoZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uU3VibWl0fSB3aWR0aD1cIjMyMHB4XCI+U2F2ZTwvQnV0dG9uPlxuICAgICAgICAgIDwvPlxuICAgICAgICApOihcbiAgICAgICAgICA8PlxuICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwiMnhsXCIgY29sb3I9XCJ3aGl0ZUFscGhhLjkwMFwiPkNoYXQgQXBwPC9UZXh0PlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2lnbkluKCl9IHdpZHRoPVwiMzIwcHhcIiBoZWlnaHQ9XCI1MHB4XCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1hcm91bmRcIiBsZWZ0SWNvbj17PEltYWdlIGhlaWdodD1cIjIwcHhcIiBzcmM9XCIvaW1hZ2VzL2dvb2dsZUxvZ28ucG5nXCIvPn0+XG4gICAgICAgICAgICBDb250aW51ZSB3aXRoIGdvb2dsZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgICB9XG4gICAgPC9TdGFjaz5cbiAgIDwvQ2VudGVyPlxuICA8L2Rpdj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRoOyJdLCJuYW1lcyI6WyJCdXR0b24iLCJDZW50ZXIiLCJJbWFnZSIsIklucHV0IiwiU3RhY2siLCJUZXh0Iiwic2lnbkluIiwidXNlU3RhdGUiLCJBdXRoIiwic2Vzc2lvbiIsInJlbG9hZFNlc3Npb24iLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvblN1Ym1pdCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImRpdiIsImhlaWdodCIsInNwYWNpbmciLCJhbGlnbiIsImZvbnRTaXplIiwiY29sb3IiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwib25DbGljayIsIndpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJsZWZ0SWNvbiIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Auth/index.tsx\n");

/***/ }),

/***/ "./src/components/Chat/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Chat/index.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__]);\n_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst Chat = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n            onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)(),\n            children: \"Logout\"\n        }, void 0, false, {\n            fileName: \"/Users/davidhakak/Desktop/הכל פה/full_stack/project׳s/chat/frontend/src/components/Chat/index.tsx\",\n            lineNumber: 8,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/davidhakak/Desktop/הכל פה/full_stack/project׳s/chat/frontend/src/components/Chat/index.tsx\",\n        lineNumber: 7,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chat);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0L2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ0E7QUFJMUMsTUFBTUUsT0FBOEIsQ0FBQ0MsUUFBVTtJQUM3QyxxQkFBTyw4REFBQ0M7a0JBQ04sNEVBQUNKLG9EQUFNQTtZQUFDSyxTQUFTLElBQUtKLHdEQUFPQTtzQkFBSTs7Ozs7Ozs7Ozs7QUFFckM7QUFFQSxpRUFBZUMsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvQ2hhdC9pbmRleC50c3g/YjNhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgc2lnbk91dCB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcblxuaW50ZXJmYWNlIElDaGF0UHJvcHMge31cblxuY29uc3QgQ2hhdDogUmVhY3QuRkMgPElDaGF0UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiA8ZGl2PlxuICAgIDxCdXR0b24gb25DbGljaz17KCk9PiBzaWduT3V0KCl9PkxvZ291dDwvQnV0dG9uPlxuICA8L2Rpdj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGF0OyJdLCJuYW1lcyI6WyJCdXR0b24iLCJzaWduT3V0IiwiQ2hhdCIsInByb3BzIiwiZGl2Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Chat/index.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Chat */ \"./src/components/Chat/index.tsx\");\n/* harmony import */ var _components_Auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Auth */ \"./src/components/Auth/index.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _components_Chat__WEBPACK_IMPORTED_MODULE_3__, _components_Auth__WEBPACK_IMPORTED_MODULE_4__]);\n([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _components_Chat__WEBPACK_IMPORTED_MODULE_3__, _components_Auth__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst Home = ()=>{\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const reloadSession = ()=>{};\n    console.log(\"here is data : \", session);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        children: session?.user.email ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Chat__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/davidhakak/Desktop/הכל פה/full_stack/project׳s/chat/frontend/src/pages/index.tsx\",\n            lineNumber: 18,\n            columnNumber: 29\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Auth__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            session: session,\n            reloadSession: reloadSession\n        }, void 0, false, {\n            fileName: \"/Users/davidhakak/Desktop/הכל פה/full_stack/project׳s/chat/frontend/src/pages/index.tsx\",\n            lineNumber: 18,\n            columnNumber: 39\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/davidhakak/Desktop/הכל פה/full_stack/project׳s/chat/frontend/src/pages/index.tsx\",\n        lineNumber: 17,\n        columnNumber: 3\n    }, undefined);\n};\nasync function getServerSideProps(context) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getSession)(context);\n    return {\n        props: {\n            session\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFFZ0I7QUFDakI7QUFDQTtBQUVyQyxNQUFNSyxPQUFnQixJQUFNO0lBQzNCLE1BQU0sRUFBQ0MsTUFBT0MsUUFBTyxFQUFDLEdBQUdMLDJEQUFVQTtJQUVuQyxNQUFNTSxnQkFBZ0IsSUFBSSxDQUUxQjtJQUVBQyxRQUFRQyxHQUFHLENBQUMsbUJBQW1CSDtJQUUvQixxQkFDQSw4REFBQ1AsaURBQUdBO2tCQUNBTyxTQUFTSSxLQUFLQyxLQUFLLGlCQUFHLDhEQUFDVCx3REFBSUE7Ozs7c0NBQUssOERBQUNDLHdEQUFJQTtZQUFDRyxTQUFTQTtZQUFTQyxlQUFlQTs7Ozs7cUJBQWdCOzs7Ozs7QUFHN0Y7QUFJTyxlQUFlSyxtQkFBcUJDLE9BQXdCLEVBQUU7SUFFckUsTUFBTVAsVUFBVSxNQUFNTiwyREFBVUEsQ0FBQ2E7SUFFakMsT0FBTztRQUFFQyxPQUFNO1lBQUVSO1FBQVE7SUFBRTtBQUUzQixDQUFDO0FBR0QsaUVBQWVGLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3ggfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgTmV4dFBhZ2UsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQge2dldFNlc3Npb24gLCB1c2VTZXNzaW9ufSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCJcbmltcG9ydCBDaGF0IGZyb20gXCIuLi9jb21wb25lbnRzL0NoYXRcIjtcbmltcG9ydCBBdXRoIGZyb20gXCIuLi9jb21wb25lbnRzL0F1dGhcIjtcblxuIGNvbnN0IEhvbWU6IE5leHRQYWdlID0oKSA9PiB7XG4gIGNvbnN0IHtkYXRhIDogc2Vzc2lvbn0gPSB1c2VTZXNzaW9uKCk7XG5cbiAgY29uc3QgcmVsb2FkU2Vzc2lvbiA9ICgpPT57XG5cbiAgfVxuXG4gIGNvbnNvbGUubG9nKFwiaGVyZSBpcyBkYXRhIDogXCIgLHNlc3Npb24pO1xuICBcbiAgcmV0dXJuIChcbiAgPEJveD5cbiAgICB7IHNlc3Npb24/LnVzZXIuZW1haWwgPyA8Q2hhdC8+IDogPEF1dGggc2Vzc2lvbj17c2Vzc2lvbn0gcmVsb2FkU2Vzc2lvbj17cmVsb2FkU2Vzc2lvbn0vPn1cbiAgPC9Cb3g+XG4gIClcbn1cblxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMgKCBjb250ZXh0OiBOZXh0UGFnZUNvbnRleHQgKXtcblxuY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oY29udGV4dCk7XG5cbnJldHVybiB7IHByb3BzOnsgc2Vzc2lvbiB9LH07XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4gIl0sIm5hbWVzIjpbIkJveCIsImdldFNlc3Npb24iLCJ1c2VTZXNzaW9uIiwiQ2hhdCIsIkF1dGgiLCJIb21lIiwiZGF0YSIsInNlc3Npb24iLCJyZWxvYWRTZXNzaW9uIiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJlbWFpbCIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();