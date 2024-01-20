"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/meetings",{

/***/ "./src/pages/meetings/index.jsx":
/*!**************************************!*\
  !*** ./src/pages/meetings/index.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Meetings = ()=>{\n    _s();\n    const { push } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const createRandomRoom = async (title)=>{\n        const res = await fetch(\"https://api.huddle01.com/api/v1/create-room\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                title\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"x-api-key\": \"eei853S8vM40Dh0anAysfDwQ5cZCDDwh\"\n            },\n            cache: \"no-store\"\n        });\n        const data = await res.json();\n        const { roomId } = data.data;\n        console.log({\n            roomId\n        });\n        push(\"/\".concat(roomId));\n        return {\n            roomId\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#B1D27B] h-screen w-screen flex items-center flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" mt-24 flex justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-lg mx-4\",\n                        children: \"Enter Title\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ramit/healphi/healyphi/src/pages/meetings/index.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"h-10 rounded text-black\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ramit/healphi/healyphi/src/pages/meetings/index.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ramit/healphi/healyphi/src/pages/meetings/index.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>createRandomRoom(\"123\"),\n                className: \"border border-black my-10 h-10 mx-3 px-4 py-2 rounded-md\",\n                children: \"Create Space\"\n            }, void 0, false, {\n                fileName: \"/Users/ramit/healphi/healyphi/src/pages/meetings/index.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ramit/healphi/healyphi/src/pages/meetings/index.jsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Meetings, \"qsDkn33CqmlEcFEENil8IeDjAvk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Meetings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Meetings);\nvar _c;\n$RefreshReg$(_c, \"Meetings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbWVldGluZ3MvaW5kZXguanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUNjO0FBRXhDLE1BQU1FLFdBQVc7O0lBQ2YsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR0Ysc0RBQVNBO0lBQzFCLE1BQU1HLG1CQUFtQixPQUFPQztRQUM5QixNQUFNQyxNQUFNLE1BQU1DLE1BQU0sK0NBQStDO1lBQ3JFQyxRQUFRO1lBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFDbkJOO1lBQ0Y7WUFDQU8sU0FBUztnQkFDUCxnQkFBZ0I7Z0JBQ2hCLGFBQWE7WUFDZjtZQUNBQyxPQUFPO1FBQ1Q7UUFFQSxNQUFNQyxPQUFPLE1BQU1SLElBQUlTLElBQUk7UUFFM0IsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0YsS0FBS0EsSUFBSTtRQUM1QkcsUUFBUUMsR0FBRyxDQUFDO1lBQUVGO1FBQU87UUFDckJiLEtBQUssSUFBVyxPQUFQYTtRQUNULE9BQU87WUFBRUE7UUFBTztJQUNsQjtJQUVBLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBRUQsV0FBVTtrQ0FBZTs7Ozs7O2tDQUM1Qiw4REFBQ0U7d0JBQU1GLFdBQVU7Ozs7Ozs7Ozs7OzswQkFFbkIsOERBQUNHO2dCQUNDQyxTQUFTLElBQU1wQixpQkFBaUI7Z0JBQ2hDZ0IsV0FBVTswQkFDWDs7Ozs7Ozs7Ozs7O0FBS1A7R0FyQ01sQjs7UUFDYUQsa0RBQVNBOzs7S0FEdEJDO0FBdUNOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9tZWV0aW5ncy9pbmRleC5qc3g/ZDc4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgTWVldGluZ3MgPSAoKSA9PiB7XG4gIGNvbnN0IHsgcHVzaCB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGNyZWF0ZVJhbmRvbVJvb20gPSBhc3luYyAodGl0bGUpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLmh1ZGRsZTAxLmNvbS9hcGkvdjEvY3JlYXRlLXJvb21cIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGUsXG4gICAgICB9KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIFwieC1hcGkta2V5XCI6IFwiZWVpODUzUzh2TTQwRGgwYW5BeXNmRHdRNWNaQ0REd2hcIixcbiAgICAgIH0sXG4gICAgICBjYWNoZTogXCJuby1zdG9yZVwiLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICBjb25zdCB7IHJvb21JZCB9ID0gZGF0YS5kYXRhO1xuICAgIGNvbnNvbGUubG9nKHsgcm9vbUlkIH0pO1xuICAgIHB1c2goYC8ke3Jvb21JZH1gKTtcbiAgICByZXR1cm4geyByb29tSWQgfTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyNCMUQyN0JdIGgtc2NyZWVuIHctc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGZsZXgtY29sXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtdC0yNCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIG14LTRcIj5FbnRlciBUaXRsZTwvcD5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImgtMTAgcm91bmRlZCB0ZXh0LWJsYWNrXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBjcmVhdGVSYW5kb21Sb29tKFwiMTIzXCIpfVxuICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWJsYWNrIG15LTEwIGgtMTAgbXgtMyBweC00IHB5LTIgcm91bmRlZC1tZFwiXG4gICAgICA+XG4gICAgICAgIENyZWF0ZSBTcGFjZVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZWV0aW5ncztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsIk1lZXRpbmdzIiwicHVzaCIsImNyZWF0ZVJhbmRvbVJvb20iLCJ0aXRsZSIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiY2FjaGUiLCJkYXRhIiwianNvbiIsInJvb21JZCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiaW5wdXQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/meetings/index.jsx\n"));

/***/ })

});