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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Meetings = ()=>{\n    _s();\n    const { push } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [meetingTitle, setMeetingTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const res = async ()=>{\n            const res = await getMeeting();\n            console.log({\n                res\n            });\n        };\n        res();\n    }, []);\n    const getMeeting = async ()=>{\n        const res = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"https://api.huddle01.com/api/v1/live-meetings\", {\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"x-api-key\": \"eei853S8vM40Dh0anAysfDwQ5cZCDDwh\"\n            }\n        });\n        console.log({\n            res\n        });\n        return res.data;\n    };\n    const createRandomRoom = async (title)=>{\n        const res = await fetch(\"https://api.huddle01.com/api/v1/create-room\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                title\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"x-api-key\": \"eei853S8vM40Dh0anAysfDwQ5cZCDDwh\"\n            },\n            cache: \"no-store\"\n        });\n        const data = await res.json();\n        const { roomId } = data.data;\n        console.log({\n            roomId\n        });\n        push(\"/\".concat(roomId));\n        return {\n            roomId\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#B1D27B] h-screen w-screen flex items-center flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" mt-24 flex justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-lg mx-4\",\n                        children: \"Enter Title\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ramit/healphi/healyphi/src/pages/meetings/index.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"h-10 rounded text-black\",\n                        onChange: (e)=>setMeetingTitle(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/ramit/healphi/healyphi/src/pages/meetings/index.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ramit/healphi/healyphi/src/pages/meetings/index.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>createRandomRoom(meetingTitle),\n                className: \"border border-black my-10 h-10 mx-3 px-4 py-2 rounded-md\",\n                children: \"Create Space\"\n            }, void 0, false, {\n                fileName: \"/Users/ramit/healphi/healyphi/src/pages/meetings/index.jsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ramit/healphi/healyphi/src/pages/meetings/index.jsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Meetings, \"7G9phKbbAxKu+cceqByrDf97X8c=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Meetings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Meetings);\nvar _c;\n$RefreshReg$(_c, \"Meetings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbWVldGluZ3MvaW5kZXguanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDYztBQUNJO0FBQ2xCO0FBRTFCLE1BQU1LLFdBQVc7O0lBQ2YsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR0wsc0RBQVNBO0lBQzFCLE1BQU0sQ0FBQ00sY0FBY0MsZ0JBQWdCLEdBQUdOLCtDQUFRQSxDQUFDO0lBRWpEQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1NLE1BQU07WUFDVixNQUFNQSxNQUFNLE1BQU1DO1lBQ2xCQyxRQUFRQyxHQUFHLENBQUM7Z0JBQUVIO1lBQUk7UUFDcEI7UUFDQUE7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNQyxhQUFhO1FBQ2pCLE1BQU1ELE1BQU0sTUFBTUwsaURBQVMsQ0FDekIsaURBQ0E7WUFDRVUsU0FBUztnQkFDUCxnQkFBZ0I7Z0JBQ2hCLGFBQWE7WUFDZjtRQUNGO1FBRUZILFFBQVFDLEdBQUcsQ0FBQztZQUFFSDtRQUFJO1FBRWxCLE9BQU9BLElBQUlNLElBQUk7SUFDakI7SUFFQSxNQUFNQyxtQkFBbUIsT0FBT0M7UUFDOUIsTUFBTVIsTUFBTSxNQUFNUyxNQUFNLCtDQUErQztZQUNyRUMsUUFBUTtZQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ25CTDtZQUNGO1lBQ0FILFNBQVM7Z0JBQ1AsZ0JBQWdCO2dCQUNoQixhQUFhO1lBQ2Y7WUFDQVMsT0FBTztRQUNUO1FBRUEsTUFBTVIsT0FBTyxNQUFNTixJQUFJZSxJQUFJO1FBRTNCLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdWLEtBQUtBLElBQUk7UUFDNUJKLFFBQVFDLEdBQUcsQ0FBQztZQUFFYTtRQUFPO1FBQ3JCbkIsS0FBSyxJQUFXLE9BQVBtQjtRQUNULE9BQU87WUFBRUE7UUFBTztJQUNsQjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBRUQsV0FBVTtrQ0FBZTs7Ozs7O2tDQUM1Qiw4REFBQ0U7d0JBQ0NGLFdBQVU7d0JBQ1ZHLFVBQVUsQ0FBQ0MsSUFBTXZCLGdCQUFnQnVCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7Ozs7Ozs7OzBCQUduRCw4REFBQ0M7Z0JBQ0NDLFNBQVMsSUFBTW5CLGlCQUFpQlQ7Z0JBQ2hDb0IsV0FBVTswQkFDWDs7Ozs7Ozs7Ozs7O0FBS1A7R0FqRU10Qjs7UUFDYUosa0RBQVNBOzs7S0FEdEJJO0FBbUVOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9tZWV0aW5ncy9pbmRleC5qc3g/ZDc4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgTWVldGluZ3MgPSAoKSA9PiB7XG4gIGNvbnN0IHsgcHVzaCB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFttZWV0aW5nVGl0bGUsIHNldE1lZXRpbmdUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldE1lZXRpbmcoKTtcbiAgICAgIGNvbnNvbGUubG9nKHsgcmVzIH0pO1xuICAgIH07XG4gICAgcmVzKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBnZXRNZWV0aW5nID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgIFwiaHR0cHM6Ly9hcGkuaHVkZGxlMDEuY29tL2FwaS92MS9saXZlLW1lZXRpbmdzXCIsXG4gICAgICB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICBcIngtYXBpLWtleVwiOiBcImVlaTg1M1M4dk00MERoMGFuQXlzZkR3UTVjWkNERHdoXCIsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyh7IHJlcyB9KTtcblxuICAgIHJldHVybiByZXMuZGF0YTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVSYW5kb21Sb29tID0gYXN5bmMgKHRpdGxlKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS5odWRkbGUwMS5jb20vYXBpL3YxL2NyZWF0ZS1yb29tXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlLFxuICAgICAgfSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBcIngtYXBpLWtleVwiOiBcImVlaTg1M1M4dk00MERoMGFuQXlzZkR3UTVjWkNERHdoXCIsXG4gICAgICB9LFxuICAgICAgY2FjaGU6IFwibm8tc3RvcmVcIixcbiAgICB9KTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgY29uc3QgeyByb29tSWQgfSA9IGRhdGEuZGF0YTtcbiAgICBjb25zb2xlLmxvZyh7IHJvb21JZCB9KTtcbiAgICBwdXNoKGAvJHtyb29tSWR9YCk7XG4gICAgcmV0dXJuIHsgcm9vbUlkIH07XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjQjFEMjdCXSBoLXNjcmVlbiB3LXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LWNvbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbXQtMjQgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBteC00XCI+RW50ZXIgVGl0bGU8L3A+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTAgcm91bmRlZCB0ZXh0LWJsYWNrXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1lZXRpbmdUaXRsZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17KCkgPT4gY3JlYXRlUmFuZG9tUm9vbShtZWV0aW5nVGl0bGUpfVxuICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWJsYWNrIG15LTEwIGgtMTAgbXgtMyBweC00IHB5LTIgcm91bmRlZC1tZFwiXG4gICAgICA+XG4gICAgICAgIENyZWF0ZSBTcGFjZVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZWV0aW5ncztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJNZWV0aW5ncyIsInB1c2giLCJtZWV0aW5nVGl0bGUiLCJzZXRNZWV0aW5nVGl0bGUiLCJyZXMiLCJnZXRNZWV0aW5nIiwiY29uc29sZSIsImxvZyIsImdldCIsImhlYWRlcnMiLCJkYXRhIiwiY3JlYXRlUmFuZG9tUm9vbSIsInRpdGxlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNhY2hlIiwianNvbiIsInJvb21JZCIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJpbnB1dCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/meetings/index.jsx\n"));

/***/ })

});