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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Meetings = ()=>{\n    const createRandomRoom = async (title)=>{\n        const res = await fetch(\"https://api.huddle01.com/api/v1/create-room\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                title\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"x-api-key\": \"eei853S8vM40Dh0anAysfDwQ5cZCDDwh\"\n            },\n            cache: \"no-store\"\n        });\n        const data = await res.json();\n        const { roomId } = data.data;\n        console.log({\n            roomId\n        });\n        return {\n            roomId\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#B1D27B] h-screen w-screen flex items-center flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" mt-24 flex justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-lg mx-4\",\n                        children: \"Enter Title\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ramit/healphi/healyphi/src/pages/meetings/index.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"h-10 rounded text-black\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ramit/healphi/healyphi/src/pages/meetings/index.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ramit/healphi/healyphi/src/pages/meetings/index.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>createRandomRoom(\"123\"),\n                className: \"border border-black my-10 h-10 mx-3 px-4 py-2 rounded-md\",\n                children: \"Create Space\"\n            }, void 0, false, {\n                fileName: \"/Users/ramit/healphi/healyphi/src/pages/meetings/index.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ramit/healphi/healyphi/src/pages/meetings/index.jsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Meetings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Meetings);\nvar _c;\n$RefreshReg$(_c, \"Meetings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbWVldGluZ3MvaW5kZXguanN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxXQUFXO0lBQ2YsTUFBTUMsbUJBQW1CLE9BQU9DO1FBQzlCLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSwrQ0FBK0M7WUFDckVDLFFBQVE7WUFDUkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNuQk47WUFDRjtZQUNBTyxTQUFTO2dCQUNQLGdCQUFnQjtnQkFDaEIsYUFBYTtZQUNmO1lBQ0FDLE9BQU87UUFDVDtRQUVBLE1BQU1DLE9BQU8sTUFBTVIsSUFBSVMsSUFBSTtRQUUzQixNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHRixLQUFLQSxJQUFJO1FBQzVCRyxRQUFRQyxHQUFHLENBQUM7WUFBRUY7UUFBTztRQUNyQixPQUFPO1lBQUVBO1FBQU87SUFDbEI7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUVELFdBQVU7a0NBQWU7Ozs7OztrQ0FDNUIsOERBQUNFO3dCQUFNRixXQUFVOzs7Ozs7Ozs7Ozs7MEJBRW5CLDhEQUFDRztnQkFDQ0MsU0FBUyxJQUFNcEIsaUJBQWlCO2dCQUNoQ2dCLFdBQVU7MEJBQ1g7Ozs7Ozs7Ozs7OztBQUtQO0tBbkNNakI7QUFxQ04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL21lZXRpbmdzL2luZGV4LmpzeD9kNzhjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTWVldGluZ3MgPSAoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZVJhbmRvbVJvb20gPSBhc3luYyAodGl0bGUpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLmh1ZGRsZTAxLmNvbS9hcGkvdjEvY3JlYXRlLXJvb21cIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGUsXG4gICAgICB9KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIFwieC1hcGkta2V5XCI6IFwiZWVpODUzUzh2TTQwRGgwYW5BeXNmRHdRNWNaQ0REd2hcIixcbiAgICAgIH0sXG4gICAgICBjYWNoZTogXCJuby1zdG9yZVwiLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICBjb25zdCB7IHJvb21JZCB9ID0gZGF0YS5kYXRhO1xuICAgIGNvbnNvbGUubG9nKHsgcm9vbUlkIH0pO1xuICAgIHJldHVybiB7IHJvb21JZCB9O1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bI0IxRDI3Ql0gaC1zY3JlZW4gdy1zY3JlZW4gZmxleCBpdGVtcy1jZW50ZXIgZmxleC1jb2xcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG10LTI0IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbXgtNFwiPkVudGVyIFRpdGxlPC9wPlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaC0xMCByb3VuZGVkIHRleHQtYmxhY2tcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGNyZWF0ZVJhbmRvbVJvb20oXCIxMjNcIil9XG4gICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItYmxhY2sgbXktMTAgaC0xMCBteC0zIHB4LTQgcHktMiByb3VuZGVkLW1kXCJcbiAgICAgID5cbiAgICAgICAgQ3JlYXRlIFNwYWNlXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lZXRpbmdzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTWVldGluZ3MiLCJjcmVhdGVSYW5kb21Sb29tIiwidGl0bGUiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImNhY2hlIiwiZGF0YSIsImpzb24iLCJyb29tSWQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImlucHV0IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/meetings/index.jsx\n"));

/***/ })

});