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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _huddle01_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @huddle01/react/hooks */ \"./node_modules/@huddle01/react/dist/hooks/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _LocalMessageBubble__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LocalMessageBubble */ \"./src/component/ChatBox/LocalMessageBubble.jsx\");\n/* harmony import */ var _RemoteMessageBubble__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RemoteMessageBubble */ \"./src/component/ChatBox/RemoteMessageBubble.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction ChatBox() {\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { peerId, metadata } = (0,_huddle01_react_hooks__WEBPACK_IMPORTED_MODULE_1__.useLocalPeer)();\n    console.log({\n        metadata\n    });\n    const { sendData } = (0,_huddle01_react_hooks__WEBPACK_IMPORTED_MODULE_1__.useDataMessage)({\n        onMessage: (payload, from, label)=>{\n            if (label === \"chat\") {\n                setMessages((prev)=>[\n                        ...prev,\n                        {\n                            text: payload,\n                            sender: from\n                        }\n                    ]);\n            }\n        }\n    });\n    const sendMessage = ()=>{\n        sendData({\n            to: \"*\",\n            payload: text,\n            label: \"chat\"\n        });\n        setText(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-1/3 border-2 border-blue-400 rounded-lg flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center text-2xl my-2 border-b border-blue-400\",\n                children: \"Chat Room\"\n            }, void 0, false, {\n                fileName: \"/Users/ramit/healphi/healyphi/src/component/ChatBox/ChatBox.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 p-4 border-b border-blue-400\",\n                children: messages.map((message, index)=>message.sender === peerId ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LocalMessageBubble__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        message: message\n                    }, index, false, {\n                        fileName: \"/Users/ramit/healphi/healyphi/src/component/ChatBox/ChatBox.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RemoteMessageBubble__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        message: message\n                    }, index, false, {\n                        fileName: \"/Users/ramit/healphi/healyphi/src/component/ChatBox/ChatBox.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/ramit/healphi/healyphi/src/component/ChatBox/ChatBox.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex p-1\",\n                children: [\n                    metadata.displayName,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"self-end w-full bg-[#B1D27B]  text-white outline-none p-2 text-sm\",\n                        placeholder: \"Type Message...\",\n                        value: text,\n                        onChange: (event)=>setText(event.target.value),\n                        onKeyDown: (event)=>{\n                            if (event.key === \"Enter\") {\n                                sendMessage();\n                            }\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/ramit/healphi/healyphi/src/component/ChatBox/ChatBox.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            sendMessage();\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            width: \"24\",\n                            height: \"24\",\n                            viewBox: \"-2.4 -2.4 28.80 28.80\",\n                            fill: \"none\",\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            stroke: \"#000000\",\n                            \"stroke-width\": \"0.00024000000000000003\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                                    id: \"SVGRepo_bgCarrier\",\n                                    \"stroke-width\": \"0\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ramit/healphi/healyphi/src/component/ChatBox/ChatBox.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                                    id: \"SVGRepo_tracerCarrier\",\n                                    \"stroke-linecap\": \"round\",\n                                    \"stroke-linejoin\": \"round\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ramit/healphi/healyphi/src/component/ChatBox/ChatBox.jsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                                    id: \"SVGRepo_iconCarrier\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        \"fill-rule\": \"evenodd\",\n                                        \"clip-rule\": \"evenodd\",\n                                        d: \"M1.265 4.42619C1.04293 2.87167 2.6169 1.67931 4.05323 2.31397L21.8341 10.1706C23.423 10.8727 23.423 13.1273 21.8341 13.8294L4.05323 21.686C2.6169 22.3207 1.04293 21.1283 1.265 19.5738L1.99102 14.4917C2.06002 14.0087 2.41458 13.6156 2.88791 13.4972L8.87688 12L2.88791 10.5028C2.41458 10.3844 2.06002 9.99129 1.99102 9.50829L1.265 4.42619ZM21.0257 12L3.2449 4.14335L3.89484 8.69294L12.8545 10.9328C13.9654 11.2106 13.9654 12.7894 12.8545 13.0672L3.89484 15.3071L3.2449 19.8566L21.0257 12Z\",\n                                        fill: \"#ffffff\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ramit/healphi/healyphi/src/component/ChatBox/ChatBox.jsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ramit/healphi/healyphi/src/component/ChatBox/ChatBox.jsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ramit/healphi/healyphi/src/component/ChatBox/ChatBox.jsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ramit/healphi/healyphi/src/component/ChatBox/ChatBox.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ramit/healphi/healyphi/src/component/ChatBox/ChatBox.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ramit/healphi/healyphi/src/component/ChatBox/ChatBox.jsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatBox, \"G8a9x/9tNni4tb6MvLDiNr2LQGE=\", false, function() {\n    return [\n        _huddle01_react_hooks__WEBPACK_IMPORTED_MODULE_1__.useLocalPeer,\n        _huddle01_react_hooks__WEBPACK_IMPORTED_MODULE_1__.useDataMessage\n    ];\n});\n_c = ChatBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatBox);\nvar _c;\n$RefreshReg$(_c, \"ChatBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50L0NoYXRCb3gvQ2hhdEJveC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFxRTtBQUNwQztBQUNxQjtBQUNFO0FBRXhELFNBQVNLOztJQUNQLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ00sTUFBTUMsUUFBUSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUVqQyxNQUFNLEVBQUVRLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdWLG1FQUFZQTtJQUV6Q1csUUFBUUMsR0FBRyxDQUFDO1FBQUVGO0lBQVM7SUFDdkIsTUFBTSxFQUFFRyxRQUFRLEVBQUUsR0FBR2QscUVBQWNBLENBQUM7UUFDbENlLFdBQVcsQ0FBQ0MsU0FBU0MsTUFBTUM7WUFDekIsSUFBSUEsVUFBVSxRQUFRO2dCQUNwQlgsWUFBWSxDQUFDWSxPQUFTOzJCQUFJQTt3QkFBTTs0QkFBRVgsTUFBTVE7NEJBQVNJLFFBQVFIO3dCQUFLO3FCQUFFO1lBQ2xFO1FBQ0Y7SUFDRjtJQUVBLE1BQU1JLGNBQWM7UUFDbEJQLFNBQVM7WUFDUFEsSUFBSTtZQUNKTixTQUFTUjtZQUNUVSxPQUFPO1FBQ1Q7UUFDQVQsUUFBUTtJQUNWO0lBRUEscUJBQ0UsOERBQUNjO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBcUQ7Ozs7OzswQkFHbkUsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNabEIsU0FBU29CLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxRQUN0QkQsUUFBUVAsTUFBTSxLQUFLVix1QkFDakIsOERBQUNQLDJEQUFrQkE7d0JBQWF3QixTQUFTQTt1QkFBaEJDOzs7OzZDQUV6Qiw4REFBQ3hCLDREQUFtQkE7d0JBQWF1QixTQUFTQTt1QkFBaEJDOzs7Ozs7Ozs7OzBCQUloQyw4REFBQ0w7Z0JBQUlDLFdBQVU7O29CQUNaYixTQUFTa0IsV0FBVztrQ0FDckIsOERBQUNDO3dCQUNDQyxNQUFLO3dCQUNMUCxXQUFVO3dCQUNWUSxhQUFZO3dCQUNaQyxPQUFPekI7d0JBQ1AwQixVQUFVLENBQUNDLFFBQVUxQixRQUFRMEIsTUFBTUMsTUFBTSxDQUFDSCxLQUFLO3dCQUMvQ0ksV0FBVyxDQUFDRjs0QkFDVixJQUFJQSxNQUFNRyxHQUFHLEtBQUssU0FBUztnQ0FDekJqQjs0QkFDRjt3QkFDRjs7Ozs7O2tDQUVGLDhEQUFDa0I7d0JBQ0NDLFNBQVM7NEJBQ1BuQjt3QkFDRjtrQ0FFQSw0RUFBQ29COzRCQUNDQyxPQUFNOzRCQUNOQyxRQUFPOzRCQUNQQyxTQUFROzRCQUNSQyxNQUFLOzRCQUNMQyxPQUFNOzRCQUNOQyxRQUFPOzRCQUNQQyxnQkFBYTs7OENBRWIsOERBQUNDO29DQUFFQyxJQUFHO29DQUFvQkYsZ0JBQWE7Ozs7Ozs4Q0FDdkMsOERBQUNDO29DQUNDQyxJQUFHO29DQUNIQyxrQkFBZTtvQ0FDZkMsbUJBQWdCOzs7Ozs7OENBRWxCLDhEQUFDSDtvQ0FBRUMsSUFBRzs4Q0FDSiw0RUFBQ0c7d0NBQ0NDLGFBQVU7d0NBQ1ZDLGFBQVU7d0NBQ1ZDLEdBQUU7d0NBQ0ZYLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRckI7R0FyRlN4Qzs7UUFJc0JKLCtEQUFZQTtRQUdwQkQsaUVBQWNBOzs7S0FQNUJLO0FBdUZULCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnQvQ2hhdEJveC9DaGF0Qm94LmpzeD9hNDYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZURhdGFNZXNzYWdlLCB1c2VMb2NhbFBlZXIgfSBmcm9tIFwiQGh1ZGRsZTAxL3JlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvY2FsTWVzc2FnZUJ1YmJsZSBmcm9tIFwiLi9Mb2NhbE1lc3NhZ2VCdWJibGVcIjtcbmltcG9ydCBSZW1vdGVNZXNzYWdlQnViYmxlIGZyb20gXCIuL1JlbW90ZU1lc3NhZ2VCdWJibGVcIjtcblxuZnVuY3Rpb24gQ2hhdEJveCgpIHtcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IHsgcGVlcklkLCBtZXRhZGF0YSB9ID0gdXNlTG9jYWxQZWVyKCk7XG5cbiAgY29uc29sZS5sb2coeyBtZXRhZGF0YSB9KTtcbiAgY29uc3QgeyBzZW5kRGF0YSB9ID0gdXNlRGF0YU1lc3NhZ2Uoe1xuICAgIG9uTWVzc2FnZTogKHBheWxvYWQsIGZyb20sIGxhYmVsKSA9PiB7XG4gICAgICBpZiAobGFiZWwgPT09IFwiY2hhdFwiKSB7XG4gICAgICAgIHNldE1lc3NhZ2VzKChwcmV2KSA9PiBbLi4ucHJldiwgeyB0ZXh0OiBwYXlsb2FkLCBzZW5kZXI6IGZyb20gfV0pO1xuICAgICAgfVxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gKCkgPT4ge1xuICAgIHNlbmREYXRhKHtcbiAgICAgIHRvOiBcIipcIixcbiAgICAgIHBheWxvYWQ6IHRleHQsXG4gICAgICBsYWJlbDogXCJjaGF0XCIsXG4gICAgfSk7XG4gICAgc2V0VGV4dChcIlwiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzMgYm9yZGVyLTIgYm9yZGVyLWJsdWUtNDAwIHJvdW5kZWQtbGcgZmxleCBmbGV4LWNvbFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtMnhsIG15LTIgYm9yZGVyLWIgYm9yZGVyLWJsdWUtNDAwXCI+XG4gICAgICAgIENoYXQgUm9vbVxuICAgICAgPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIHAtNCBib3JkZXItYiBib3JkZXItYmx1ZS00MDBcIj5cbiAgICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+XG4gICAgICAgICAgbWVzc2FnZS5zZW5kZXIgPT09IHBlZXJJZCA/IChcbiAgICAgICAgICAgIDxMb2NhbE1lc3NhZ2VCdWJibGUga2V5PXtpbmRleH0gbWVzc2FnZT17bWVzc2FnZX0gLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFJlbW90ZU1lc3NhZ2VCdWJibGUga2V5PXtpbmRleH0gbWVzc2FnZT17bWVzc2FnZX0gLz5cbiAgICAgICAgICApXG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBwLTFcIj5cbiAgICAgICAge21ldGFkYXRhLmRpc3BsYXlOYW1lfVxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2VsZi1lbmQgdy1mdWxsIGJnLVsjQjFEMjdCXSAgdGV4dC13aGl0ZSBvdXRsaW5lLW5vbmUgcC0yIHRleHQtc21cIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBNZXNzYWdlLi4uXCJcbiAgICAgICAgICB2YWx1ZT17dGV4dH1cbiAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRUZXh0KGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgb25LZXlEb3duPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgICBzZW5kTWVzc2FnZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzZW5kTWVzc2FnZSgpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjI0XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCItMi40IC0yLjQgMjguODAgMjguODBcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICBzdHJva2U9XCIjMDAwMDAwXCJcbiAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjAuMDAwMjQwMDAwMDAwMDAwMDAwMDNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxnIGlkPVwiU1ZHUmVwb19iZ0NhcnJpZXJcIiBzdHJva2Utd2lkdGg9XCIwXCI+PC9nPlxuICAgICAgICAgICAgPGdcbiAgICAgICAgICAgICAgaWQ9XCJTVkdSZXBvX3RyYWNlckNhcnJpZXJcIlxuICAgICAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgPjwvZz5cbiAgICAgICAgICAgIDxnIGlkPVwiU1ZHUmVwb19pY29uQ2FycmllclwiPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGNsaXAtcnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMS4yNjUgNC40MjYxOUMxLjA0MjkzIDIuODcxNjcgMi42MTY5IDEuNjc5MzEgNC4wNTMyMyAyLjMxMzk3TDIxLjgzNDEgMTAuMTcwNkMyMy40MjMgMTAuODcyNyAyMy40MjMgMTMuMTI3MyAyMS44MzQxIDEzLjgyOTRMNC4wNTMyMyAyMS42ODZDMi42MTY5IDIyLjMyMDcgMS4wNDI5MyAyMS4xMjgzIDEuMjY1IDE5LjU3MzhMMS45OTEwMiAxNC40OTE3QzIuMDYwMDIgMTQuMDA4NyAyLjQxNDU4IDEzLjYxNTYgMi44ODc5MSAxMy40OTcyTDguODc2ODggMTJMMi44ODc5MSAxMC41MDI4QzIuNDE0NTggMTAuMzg0NCAyLjA2MDAyIDkuOTkxMjkgMS45OTEwMiA5LjUwODI5TDEuMjY1IDQuNDI2MTlaTTIxLjAyNTcgMTJMMy4yNDQ5IDQuMTQzMzVMMy44OTQ4NCA4LjY5Mjk0TDEyLjg1NDUgMTAuOTMyOEMxMy45NjU0IDExLjIxMDYgMTMuOTY1NCAxMi43ODk0IDEyLjg1NDUgMTMuMDY3MkwzLjg5NDg0IDE1LjMwNzFMMy4yNDQ5IDE5Ljg1NjZMMjEuMDI1NyAxMlpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjZmZmZmZmXCJcbiAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhdEJveDtcbiJdLCJuYW1lcyI6WyJ1c2VEYXRhTWVzc2FnZSIsInVzZUxvY2FsUGVlciIsInVzZVN0YXRlIiwiTG9jYWxNZXNzYWdlQnViYmxlIiwiUmVtb3RlTWVzc2FnZUJ1YmJsZSIsIkNoYXRCb3giLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwidGV4dCIsInNldFRleHQiLCJwZWVySWQiLCJtZXRhZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzZW5kRGF0YSIsIm9uTWVzc2FnZSIsInBheWxvYWQiLCJmcm9tIiwibGFiZWwiLCJwcmV2Iiwic2VuZGVyIiwic2VuZE1lc3NhZ2UiLCJ0byIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwibWVzc2FnZSIsImluZGV4IiwiZGlzcGxheU5hbWUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsIm9uS2V5RG93biIsImtleSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzdmciLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJmaWxsIiwieG1sbnMiLCJzdHJva2UiLCJzdHJva2Utd2lkdGgiLCJnIiwiaWQiLCJzdHJva2UtbGluZWNhcCIsInN0cm9rZS1saW5lam9pbiIsInBhdGgiLCJmaWxsLXJ1bGUiLCJjbGlwLXJ1bGUiLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/component/ChatBox/ChatBox.jsx\n"));

/***/ })

});