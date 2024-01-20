"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[roomId]",{

/***/ "./src/component/ChatBox/ChatBox.jsx":
/*!*******************************************!*\
  !*** ./src/component/ChatBox/ChatBox.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _huddle01_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @huddle01/react/hooks */ \"./node_modules/@huddle01/react/dist/hooks/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _LocalMessageBubble__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LocalMessageBubble */ \"./src/component/ChatBox/LocalMessageBubble.jsx\");\n/* harmony import */ var _RemoteMessageBubble__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RemoteMessageBubble */ \"./src/component/ChatBox/RemoteMessageBubble.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction ChatBox() {\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { peerId, metadata } = (0,_huddle01_react_hooks__WEBPACK_IMPORTED_MODULE_1__.useLocalPeer)();\n    console.log({\n        metadata\n    });\n    const { sendData } = (0,_huddle01_react_hooks__WEBPACK_IMPORTED_MODULE_1__.useDataMessage)({\n        onMessage: (payload, from, label)=>{\n            if (label === \"chat\") {\n                setMessages((prev)=>[\n                        ...prev,\n                        {\n                            text: payload,\n                            sender: from\n                        }\n                    ]);\n            }\n        }\n    });\n    const sendMessage = ()=>{\n        sendData({\n            to: \"*\",\n            payload: text,\n            label: \"chat\"\n        });\n        setText(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-1/3 border-2 border-blue-400 rounded-lg flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center text-2xl my-2 border-b border-blue-400\",\n                children: \"Chat Room\"\n            }, void 0, false, {\n                fileName: \"/Users/ramit/healphi/healyphi/src/component/ChatBox/ChatBox.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 p-4 border-b border-blue-400\",\n                children: messages.map((message, index)=>message.sender === peerId ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LocalMessageBubble__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        message: message\n                    }, index, false, {\n                        fileName: \"/Users/ramit/healphi/healyphi/src/component/ChatBox/ChatBox.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RemoteMessageBubble__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        message: message\n                    }, index, false, {\n                        fileName: \"/Users/ramit/healphi/healyphi/src/component/ChatBox/ChatBox.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/ramit/healphi/healyphi/src/component/ChatBox/ChatBox.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex p-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"self-end w-full bg-[#B1D27B]  text-white outline-none p-2 text-sm\",\n                        placeholder: \"Type Message...\",\n                        value: text,\n                        onChange: (event)=>setText(event.target.value),\n                        onKeyDown: (event)=>{\n                            if (event.key === \"Enter\") {\n                                sendMessage();\n                            }\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/ramit/healphi/healyphi/src/component/ChatBox/ChatBox.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            sendMessage();\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            width: \"24\",\n                            height: \"24\",\n                            viewBox: \"-2.4 -2.4 28.80 28.80\",\n                            fill: \"none\",\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            stroke: \"#000000\",\n                            \"stroke-width\": \"0.00024000000000000003\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                                    id: \"SVGRepo_bgCarrier\",\n                                    \"stroke-width\": \"0\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ramit/healphi/healyphi/src/component/ChatBox/ChatBox.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                                    id: \"SVGRepo_tracerCarrier\",\n                                    \"stroke-linecap\": \"round\",\n                                    \"stroke-linejoin\": \"round\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ramit/healphi/healyphi/src/component/ChatBox/ChatBox.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                                    id: \"SVGRepo_iconCarrier\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        \"fill-rule\": \"evenodd\",\n                                        \"clip-rule\": \"evenodd\",\n                                        d: \"M1.265 4.42619C1.04293 2.87167 2.6169 1.67931 4.05323 2.31397L21.8341 10.1706C23.423 10.8727 23.423 13.1273 21.8341 13.8294L4.05323 21.686C2.6169 22.3207 1.04293 21.1283 1.265 19.5738L1.99102 14.4917C2.06002 14.0087 2.41458 13.6156 2.88791 13.4972L8.87688 12L2.88791 10.5028C2.41458 10.3844 2.06002 9.99129 1.99102 9.50829L1.265 4.42619ZM21.0257 12L3.2449 4.14335L3.89484 8.69294L12.8545 10.9328C13.9654 11.2106 13.9654 12.7894 12.8545 13.0672L3.89484 15.3071L3.2449 19.8566L21.0257 12Z\",\n                                        fill: \"#ffffff\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ramit/healphi/healyphi/src/component/ChatBox/ChatBox.jsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ramit/healphi/healyphi/src/component/ChatBox/ChatBox.jsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ramit/healphi/healyphi/src/component/ChatBox/ChatBox.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ramit/healphi/healyphi/src/component/ChatBox/ChatBox.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ramit/healphi/healyphi/src/component/ChatBox/ChatBox.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ramit/healphi/healyphi/src/component/ChatBox/ChatBox.jsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatBox, \"G8a9x/9tNni4tb6MvLDiNr2LQGE=\", false, function() {\n    return [\n        _huddle01_react_hooks__WEBPACK_IMPORTED_MODULE_1__.useLocalPeer,\n        _huddle01_react_hooks__WEBPACK_IMPORTED_MODULE_1__.useDataMessage\n    ];\n});\n_c = ChatBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatBox);\nvar _c;\n$RefreshReg$(_c, \"ChatBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50L0NoYXRCb3gvQ2hhdEJveC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFxRTtBQUNwQztBQUNxQjtBQUNFO0FBRXhELFNBQVNLOztJQUNQLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ00sTUFBTUMsUUFBUSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUVqQyxNQUFNLEVBQUVRLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdWLG1FQUFZQTtJQUV6Q1csUUFBUUMsR0FBRyxDQUFDO1FBQUVGO0lBQVM7SUFDdkIsTUFBTSxFQUFFRyxRQUFRLEVBQUUsR0FBR2QscUVBQWNBLENBQUM7UUFDbENlLFdBQVcsQ0FBQ0MsU0FBU0MsTUFBTUM7WUFDekIsSUFBSUEsVUFBVSxRQUFRO2dCQUNwQlgsWUFBWSxDQUFDWSxPQUFTOzJCQUFJQTt3QkFBTTs0QkFBRVgsTUFBTVE7NEJBQVNJLFFBQVFIO3dCQUFLO3FCQUFFO1lBQ2xFO1FBQ0Y7SUFDRjtJQUVBLE1BQU1JLGNBQWM7UUFDbEJQLFNBQVM7WUFDUFEsSUFBSTtZQUNKTixTQUFTUjtZQUNUVSxPQUFPO1FBQ1Q7UUFDQVQsUUFBUTtJQUNWO0lBRUEscUJBQ0UsOERBQUNjO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBcUQ7Ozs7OzswQkFHbkUsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNabEIsU0FBU29CLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxRQUN0QkQsUUFBUVAsTUFBTSxLQUFLVix1QkFDakIsOERBQUNQLDJEQUFrQkE7d0JBQWF3QixTQUFTQTt1QkFBaEJDOzs7OzZDQUV6Qiw4REFBQ3hCLDREQUFtQkE7d0JBQWF1QixTQUFTQTt1QkFBaEJDOzs7Ozs7Ozs7OzBCQUloQyw4REFBQ0w7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDSzt3QkFDQ0MsTUFBSzt3QkFDTE4sV0FBVTt3QkFDVk8sYUFBWTt3QkFDWkMsT0FBT3hCO3dCQUNQeUIsVUFBVSxDQUFDQyxRQUFVekIsUUFBUXlCLE1BQU1DLE1BQU0sQ0FBQ0gsS0FBSzt3QkFDL0NJLFdBQVcsQ0FBQ0Y7NEJBQ1YsSUFBSUEsTUFBTUcsR0FBRyxLQUFLLFNBQVM7Z0NBQ3pCaEI7NEJBQ0Y7d0JBQ0Y7Ozs7OztrQ0FFRiw4REFBQ2lCO3dCQUNDQyxTQUFTOzRCQUNQbEI7d0JBQ0Y7a0NBRUEsNEVBQUNtQjs0QkFDQ0MsT0FBTTs0QkFDTkMsUUFBTzs0QkFDUEMsU0FBUTs0QkFDUkMsTUFBSzs0QkFDTEMsT0FBTTs0QkFDTkMsUUFBTzs0QkFDUEMsZ0JBQWE7OzhDQUViLDhEQUFDQztvQ0FBRUMsSUFBRztvQ0FBb0JGLGdCQUFhOzs7Ozs7OENBQ3ZDLDhEQUFDQztvQ0FDQ0MsSUFBRztvQ0FDSEMsa0JBQWU7b0NBQ2ZDLG1CQUFnQjs7Ozs7OzhDQUVsQiw4REFBQ0g7b0NBQUVDLElBQUc7OENBQ0osNEVBQUNHO3dDQUNDQyxhQUFVO3dDQUNWQyxhQUFVO3dDQUNWQyxHQUFFO3dDQUNGWCxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXJCO0dBcEZTdkM7O1FBSXNCSiwrREFBWUE7UUFHcEJELGlFQUFjQTs7O0tBUDVCSztBQXNGVCwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50L0NoYXRCb3gvQ2hhdEJveC5qc3g/YTQ2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VEYXRhTWVzc2FnZSwgdXNlTG9jYWxQZWVyIH0gZnJvbSBcIkBodWRkbGUwMS9yZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2NhbE1lc3NhZ2VCdWJibGUgZnJvbSBcIi4vTG9jYWxNZXNzYWdlQnViYmxlXCI7XG5pbXBvcnQgUmVtb3RlTWVzc2FnZUJ1YmJsZSBmcm9tIFwiLi9SZW1vdGVNZXNzYWdlQnViYmxlXCI7XG5cbmZ1bmN0aW9uIENoYXRCb3goKSB7XG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCB7IHBlZXJJZCwgbWV0YWRhdGEgfSA9IHVzZUxvY2FsUGVlcigpO1xuXG4gIGNvbnNvbGUubG9nKHsgbWV0YWRhdGEgfSk7XG4gIGNvbnN0IHsgc2VuZERhdGEgfSA9IHVzZURhdGFNZXNzYWdlKHtcbiAgICBvbk1lc3NhZ2U6IChwYXlsb2FkLCBmcm9tLCBsYWJlbCkgPT4ge1xuICAgICAgaWYgKGxhYmVsID09PSBcImNoYXRcIikge1xuICAgICAgICBzZXRNZXNzYWdlcygocHJldikgPT4gWy4uLnByZXYsIHsgdGV4dDogcGF5bG9hZCwgc2VuZGVyOiBmcm9tIH1dKTtcbiAgICAgIH1cbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBzZW5kTWVzc2FnZSA9ICgpID0+IHtcbiAgICBzZW5kRGF0YSh7XG4gICAgICB0bzogXCIqXCIsXG4gICAgICBwYXlsb2FkOiB0ZXh0LFxuICAgICAgbGFiZWw6IFwiY2hhdFwiLFxuICAgIH0pO1xuICAgIHNldFRleHQoXCJcIik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8zIGJvcmRlci0yIGJvcmRlci1ibHVlLTQwMCByb3VuZGVkLWxnIGZsZXggZmxleC1jb2xcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTJ4bCBteS0yIGJvcmRlci1iIGJvcmRlci1ibHVlLTQwMFwiPlxuICAgICAgICBDaGF0IFJvb21cbiAgICAgIDwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBwLTQgYm9yZGVyLWIgYm9yZGVyLWJsdWUtNDAwXCI+XG4gICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PlxuICAgICAgICAgIG1lc3NhZ2Uuc2VuZGVyID09PSBwZWVySWQgPyAoXG4gICAgICAgICAgICA8TG9jYWxNZXNzYWdlQnViYmxlIGtleT17aW5kZXh9IG1lc3NhZ2U9e21lc3NhZ2V9IC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxSZW1vdGVNZXNzYWdlQnViYmxlIGtleT17aW5kZXh9IG1lc3NhZ2U9e21lc3NhZ2V9IC8+XG4gICAgICAgICAgKVxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcC0xXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzZWxmLWVuZCB3LWZ1bGwgYmctWyNCMUQyN0JdICB0ZXh0LXdoaXRlIG91dGxpbmUtbm9uZSBwLTIgdGV4dC1zbVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIE1lc3NhZ2UuLi5cIlxuICAgICAgICAgIHZhbHVlPXt0ZXh0fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFRleHQoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBvbktleURvd249eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICAgIHNlbmRNZXNzYWdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlKCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgICAgICAgdmlld0JveD1cIi0yLjQgLTIuNCAyOC44MCAyOC44MFwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIHN0cm9rZT1cIiMwMDAwMDBcIlxuICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMC4wMDAyNDAwMDAwMDAwMDAwMDAwM1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGcgaWQ9XCJTVkdSZXBvX2JnQ2FycmllclwiIHN0cm9rZS13aWR0aD1cIjBcIj48L2c+XG4gICAgICAgICAgICA8Z1xuICAgICAgICAgICAgICBpZD1cIlNWR1JlcG9fdHJhY2VyQ2FycmllclwiXG4gICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICA+PC9nPlxuICAgICAgICAgICAgPGcgaWQ9XCJTVkdSZXBvX2ljb25DYXJyaWVyXCI+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZmlsbC1ydWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgY2xpcC1ydWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZD1cIk0xLjI2NSA0LjQyNjE5QzEuMDQyOTMgMi44NzE2NyAyLjYxNjkgMS42NzkzMSA0LjA1MzIzIDIuMzEzOTdMMjEuODM0MSAxMC4xNzA2QzIzLjQyMyAxMC44NzI3IDIzLjQyMyAxMy4xMjczIDIxLjgzNDEgMTMuODI5NEw0LjA1MzIzIDIxLjY4NkMyLjYxNjkgMjIuMzIwNyAxLjA0MjkzIDIxLjEyODMgMS4yNjUgMTkuNTczOEwxLjk5MTAyIDE0LjQ5MTdDMi4wNjAwMiAxNC4wMDg3IDIuNDE0NTggMTMuNjE1NiAyLjg4NzkxIDEzLjQ5NzJMOC44NzY4OCAxMkwyLjg4NzkxIDEwLjUwMjhDMi40MTQ1OCAxMC4zODQ0IDIuMDYwMDIgOS45OTEyOSAxLjk5MTAyIDkuNTA4MjlMMS4yNjUgNC40MjYxOVpNMjEuMDI1NyAxMkwzLjI0NDkgNC4xNDMzNUwzLjg5NDg0IDguNjkyOTRMMTIuODU0NSAxMC45MzI4QzEzLjk2NTQgMTEuMjEwNiAxMy45NjU0IDEyLjc4OTQgMTIuODU0NSAxMy4wNjcyTDMuODk0ODQgMTUuMzA3MUwzLjI0NDkgMTkuODU2NkwyMS4wMjU3IDEyWlwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNmZmZmZmZcIlxuICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0Qm94O1xuIl0sIm5hbWVzIjpbInVzZURhdGFNZXNzYWdlIiwidXNlTG9jYWxQZWVyIiwidXNlU3RhdGUiLCJMb2NhbE1lc3NhZ2VCdWJibGUiLCJSZW1vdGVNZXNzYWdlQnViYmxlIiwiQ2hhdEJveCIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJ0ZXh0Iiwic2V0VGV4dCIsInBlZXJJZCIsIm1ldGFkYXRhIiwiY29uc29sZSIsImxvZyIsInNlbmREYXRhIiwib25NZXNzYWdlIiwicGF5bG9hZCIsImZyb20iLCJsYWJlbCIsInByZXYiLCJzZW5kZXIiLCJzZW5kTWVzc2FnZSIsInRvIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJtZXNzYWdlIiwiaW5kZXgiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsIm9uS2V5RG93biIsImtleSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzdmciLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJmaWxsIiwieG1sbnMiLCJzdHJva2UiLCJzdHJva2Utd2lkdGgiLCJnIiwiaWQiLCJzdHJva2UtbGluZWNhcCIsInN0cm9rZS1saW5lam9pbiIsInBhdGgiLCJmaWxsLXJ1bGUiLCJjbGlwLXJ1bGUiLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/component/ChatBox/ChatBox.jsx\n"));

/***/ })

});