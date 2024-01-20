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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Meetings = ()=>{\n    _s();\n    const { push } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [meetings, setMeetings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [meetingTitle, setMeetingTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const res = async ()=>{\n            const res = await getMeeting();\n            console.log({\n                res\n            });\n            setMeetings([\n                ...meetings,\n                ...res.liveMeetings\n            ]);\n        };\n        res();\n    }, []);\n    console.log({\n        meetings\n    });\n    const getMeeting = async ()=>{\n        const res = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"https://api.huddle01.com/api/v1/live-meetings\", {\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"x-api-key\": \"eei853S8vM40Dh0anAysfDwQ5cZCDDwh\"\n            }\n        });\n        console.log({\n            res\n        });\n        return res.data;\n    };\n    const createRandomRoom = async (title)=>{\n        const res = await fetch(\"https://api.huddle01.com/api/v1/create-room\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                title\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"x-api-key\": \"eei853S8vM40Dh0anAysfDwQ5cZCDDwh\"\n            },\n            cache: \"no-store\"\n        });\n        const data = await res.json();\n        const { roomId } = data.data;\n        console.log({\n            roomId\n        });\n        push(\"/\".concat(roomId));\n        return {\n            roomId\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#B1D27B] h-screen w-screen flex items-center flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" mt-24 flex justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-lg mx-4\",\n                        children: \"Enter Title\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ramit/healphi/healyphi/src/pages/meetings/index.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"h-10 rounded text-black\",\n                        onChange: (e)=>setMeetingTitle(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/ramit/healphi/healyphi/src/pages/meetings/index.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ramit/healphi/healyphi/src/pages/meetings/index.jsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>createRandomRoom(meetingTitle),\n                className: \"border border-black my-10 h-10 mx-3 px-4 py-2 rounded-md\",\n                children: \"Create Space\"\n            }, void 0, false, {\n                fileName: \"/Users/ramit/healphi/healyphi/src/pages/meetings/index.jsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ramit/healphi/healyphi/src/pages/meetings/index.jsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Meetings, \"xXeQP+/6/7D47GNB5+g+U+s83a4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Meetings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Meetings);\nvar _c;\n$RefreshReg$(_c, \"Meetings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbWVldGluZ3MvaW5kZXguanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDYztBQUNJO0FBQ2xCO0FBRTFCLE1BQU1LLFdBQVc7O0lBQ2YsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR0wsc0RBQVNBO0lBQzFCLE1BQU0sQ0FBQ00sVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTNDLE1BQU0sQ0FBQ08sY0FBY0MsZ0JBQWdCLEdBQUdSLCtDQUFRQSxDQUFDO0lBRWpEQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1RLE1BQU07WUFDVixNQUFNQSxNQUFNLE1BQU1DO1lBQ2xCQyxRQUFRQyxHQUFHLENBQUM7Z0JBQUVIO1lBQUk7WUFDbEJILFlBQVk7bUJBQUlEO21CQUFhSSxJQUFJSSxZQUFZO2FBQUM7UUFDaEQ7UUFDQUo7SUFDRixHQUFHLEVBQUU7SUFFTEUsUUFBUUMsR0FBRyxDQUFDO1FBQUVQO0lBQVM7SUFDdkIsTUFBTUssYUFBYTtRQUNqQixNQUFNRCxNQUFNLE1BQU1QLGlEQUFTLENBQ3pCLGlEQUNBO1lBQ0VhLFNBQVM7Z0JBQ1AsZ0JBQWdCO2dCQUNoQixhQUFhO1lBQ2Y7UUFDRjtRQUVGSixRQUFRQyxHQUFHLENBQUM7WUFBRUg7UUFBSTtRQUVsQixPQUFPQSxJQUFJTyxJQUFJO0lBQ2pCO0lBRUEsTUFBTUMsbUJBQW1CLE9BQU9DO1FBQzlCLE1BQU1ULE1BQU0sTUFBTVUsTUFBTSwrQ0FBK0M7WUFDckVDLFFBQVE7WUFDUkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNuQkw7WUFDRjtZQUNBSCxTQUFTO2dCQUNQLGdCQUFnQjtnQkFDaEIsYUFBYTtZQUNmO1lBQ0FTLE9BQU87UUFDVDtRQUVBLE1BQU1SLE9BQU8sTUFBTVAsSUFBSWdCLElBQUk7UUFFM0IsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR1YsS0FBS0EsSUFBSTtRQUM1QkwsUUFBUUMsR0FBRyxDQUFDO1lBQUVjO1FBQU87UUFDckJ0QixLQUFLLElBQVcsT0FBUHNCO1FBQ1QsT0FBTztZQUFFQTtRQUFPO0lBQ2xCO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFFRCxXQUFVO2tDQUFlOzs7Ozs7a0NBQzVCLDhEQUFDRTt3QkFDQ0YsV0FBVTt3QkFDVkcsVUFBVSxDQUFDQyxJQUFNeEIsZ0JBQWdCd0IsRUFBRUMsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7Ozs7Ozs7MEJBR25ELDhEQUFDQztnQkFDQ0MsU0FBUyxJQUFNbkIsaUJBQWlCVjtnQkFDaENxQixXQUFVOzBCQUNYOzs7Ozs7Ozs7Ozs7QUFLUDtHQXJFTXpCOztRQUNhSixrREFBU0E7OztLQUR0Qkk7QUF1RU4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL21lZXRpbmdzL2luZGV4LmpzeD9kNzhjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBNZWV0aW5ncyA9ICgpID0+IHtcbiAgY29uc3QgeyBwdXNoIH0gPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW21lZXRpbmdzLCBzZXRNZWV0aW5nc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgW21lZXRpbmdUaXRsZSwgc2V0TWVldGluZ1RpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0TWVldGluZygpO1xuICAgICAgY29uc29sZS5sb2coeyByZXMgfSk7XG4gICAgICBzZXRNZWV0aW5ncyhbLi4ubWVldGluZ3MsIC4uLnJlcy5saXZlTWVldGluZ3NdKTtcbiAgICB9O1xuICAgIHJlcygpO1xuICB9LCBbXSk7XG5cbiAgY29uc29sZS5sb2coeyBtZWV0aW5ncyB9KTtcbiAgY29uc3QgZ2V0TWVldGluZyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICBcImh0dHBzOi8vYXBpLmh1ZGRsZTAxLmNvbS9hcGkvdjEvbGl2ZS1tZWV0aW5nc1wiLFxuICAgICAge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgXCJ4LWFwaS1rZXlcIjogXCJlZWk4NTNTOHZNNDBEaDBhbkF5c2ZEd1E1Y1pDRER3aFwiLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgICk7XG4gICAgY29uc29sZS5sb2coeyByZXMgfSk7XG5cbiAgICByZXR1cm4gcmVzLmRhdGE7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUmFuZG9tUm9vbSA9IGFzeW5jICh0aXRsZSkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkuaHVkZGxlMDEuY29tL2FwaS92MS9jcmVhdGUtcm9vbVwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0aXRsZSxcbiAgICAgIH0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgXCJ4LWFwaS1rZXlcIjogXCJlZWk4NTNTOHZNNDBEaDBhbkF5c2ZEd1E1Y1pDRER3aFwiLFxuICAgICAgfSxcbiAgICAgIGNhY2hlOiBcIm5vLXN0b3JlXCIsXG4gICAgfSk7XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIGNvbnN0IHsgcm9vbUlkIH0gPSBkYXRhLmRhdGE7XG4gICAgY29uc29sZS5sb2coeyByb29tSWQgfSk7XG4gICAgcHVzaChgLyR7cm9vbUlkfWApO1xuICAgIHJldHVybiB7IHJvb21JZCB9O1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bI0IxRDI3Ql0gaC1zY3JlZW4gdy1zY3JlZW4gZmxleCBpdGVtcy1jZW50ZXIgZmxleC1jb2xcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG10LTI0IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbXgtNFwiPkVudGVyIFRpdGxlPC9wPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJoLTEwIHJvdW5kZWQgdGV4dC1ibGFja1wiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNZWV0aW5nVGl0bGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGNyZWF0ZVJhbmRvbVJvb20obWVldGluZ1RpdGxlKX1cbiAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ibGFjayBteS0xMCBoLTEwIG14LTMgcHgtNCBweS0yIHJvdW5kZWQtbWRcIlxuICAgICAgPlxuICAgICAgICBDcmVhdGUgU3BhY2VcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVldGluZ3M7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiTWVldGluZ3MiLCJwdXNoIiwibWVldGluZ3MiLCJzZXRNZWV0aW5ncyIsIm1lZXRpbmdUaXRsZSIsInNldE1lZXRpbmdUaXRsZSIsInJlcyIsImdldE1lZXRpbmciLCJjb25zb2xlIiwibG9nIiwibGl2ZU1lZXRpbmdzIiwiZ2V0IiwiaGVhZGVycyIsImRhdGEiLCJjcmVhdGVSYW5kb21Sb29tIiwidGl0bGUiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY2FjaGUiLCJqc29uIiwicm9vbUlkIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImlucHV0Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/meetings/index.jsx\n"));

/***/ })

});