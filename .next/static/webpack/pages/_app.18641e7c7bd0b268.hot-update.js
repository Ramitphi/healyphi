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

/***/ "./src/pages/_app.jsx":
/*!****************************!*\
  !*** ./src/pages/_app.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _huddle01_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @huddle01/react */ \"./node_modules/@huddle01/react/dist/index.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi/chains */ \"./node_modules/wagmi/dist/chains.js\");\n/* harmony import */ var connectkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connectkit */ \"./node_modules/connectkit/build/index.es.js\");\n\n\n\n\n\nconst chains = [\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.sepolia\n];\n// wallet connection\nconst config = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createConfig)((0,connectkit__WEBPACK_IMPORTED_MODULE_2__.getDefaultConfig)({\n    // Required API Keys\n    alchemyId: \"i3ymd5GyRNWVzKHZbPss9roT2ePUobsB\",\n    walletConnectProjectId: \"dff72063779ae5b695713c9433d3d9c7\",\n    chains,\n    // Required\n    appName: \"connectkitdemo\"\n}));\nconst huddleClient = new _huddle01_react__WEBPACK_IMPORTED_MODULE_1__.HuddleClient({\n    projectId: \"wwDJoY9VrrUaROO_wtCVBd2layq4t5GJ\",\n    options: {\n        activeSpeakers: {\n            size: 8\n        }\n    }\n});\nfunction App(param) {\n    let { Component, pageProps } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_huddle01_react__WEBPACK_IMPORTED_MODULE_1__.HuddleProvider, {\n        client: huddleClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n            config: config,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(connectkit__WEBPACK_IMPORTED_MODULE_2__.ConnectKitProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/ramit/healphi/healyphi/src/pages/_app.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ramit/healphi/healyphi/src/pages/_app.jsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ramit/healphi/healyphi/src/pages/_app.jsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ramit/healphi/healyphi/src/pages/_app.jsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0Q7QUFDYjtBQUNYO0FBQzJCO0FBRWxFLE1BQU1PLFNBQVM7SUFBQ0gsaURBQU9BO0NBQUM7QUFFeEIsb0JBQW9CO0FBQ3BCLE1BQU1JLFNBQVNMLG1EQUFZQSxDQUN6QkcsNERBQWdCQSxDQUFDO0lBQ2Ysb0JBQW9CO0lBQ3BCRyxXQUFXO0lBQ1hDLHdCQUF3QjtJQUN4Qkg7SUFDQSxXQUFXO0lBQ1hJLFNBQVM7QUFDWDtBQUdGLE1BQU1DLGVBQWUsSUFBSVoseURBQVlBLENBQUM7SUFDcENhLFdBQVdDLGtDQUFrQztJQUM3Q0csU0FBUztRQUNQQyxnQkFBZ0I7WUFDZEMsTUFBTTtRQUNSO0lBQ0Y7QUFDRjtBQUVlLFNBQVNDLElBQUksS0FBd0I7UUFBeEIsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUUsR0FBeEI7SUFDMUIscUJBQ0UsOERBQUNyQiwyREFBY0E7UUFBQ3NCLFFBQVFYO2tCQUN0Qiw0RUFBQ1YsOENBQVdBO1lBQUNNLFFBQVFBO3NCQUNuQiw0RUFBQ0gsMERBQWtCQTswQkFDakIsNEVBQUNnQjtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEM7S0FWd0JGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9fYXBwLmpzeD80Yzc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh1ZGRsZUNsaWVudCwgSHVkZGxlUHJvdmlkZXIgfSBmcm9tIFwiQGh1ZGRsZTAxL3JlYWN0XCI7XG5pbXBvcnQgeyBXYWdtaUNvbmZpZywgY3JlYXRlQ29uZmlnIH0gZnJvbSBcIndhZ21pXCI7XG5pbXBvcnQgeyBzZXBvbGlhIH0gZnJvbSBcIndhZ21pL2NoYWluc1wiO1xuaW1wb3J0IHsgQ29ubmVjdEtpdFByb3ZpZGVyLCBnZXREZWZhdWx0Q29uZmlnIH0gZnJvbSBcImNvbm5lY3RraXRcIjtcblxuY29uc3QgY2hhaW5zID0gW3NlcG9saWFdO1xuXG4vLyB3YWxsZXQgY29ubmVjdGlvblxuY29uc3QgY29uZmlnID0gY3JlYXRlQ29uZmlnKFxuICBnZXREZWZhdWx0Q29uZmlnKHtcbiAgICAvLyBSZXF1aXJlZCBBUEkgS2V5c1xuICAgIGFsY2hlbXlJZDogXCJpM3ltZDVHeVJOV1Z6S0haYlBzczlyb1QyZVBVb2JzQlwiLCAvLyBvciBpbmZ1cmFJZFxuICAgIHdhbGxldENvbm5lY3RQcm9qZWN0SWQ6IFwiZGZmNzIwNjM3NzlhZTViNjk1NzEzYzk0MzNkM2Q5YzdcIixcbiAgICBjaGFpbnMsXG4gICAgLy8gUmVxdWlyZWRcbiAgICBhcHBOYW1lOiBcImNvbm5lY3RraXRkZW1vXCIsXG4gIH0pXG4pO1xuXG5jb25zdCBodWRkbGVDbGllbnQgPSBuZXcgSHVkZGxlQ2xpZW50KHtcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QUk9KRUNUX0lELFxuICBvcHRpb25zOiB7XG4gICAgYWN0aXZlU3BlYWtlcnM6IHtcbiAgICAgIHNpemU6IDgsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPEh1ZGRsZVByb3ZpZGVyIGNsaWVudD17aHVkZGxlQ2xpZW50fT5cbiAgICAgIDxXYWdtaUNvbmZpZyBjb25maWc9e2NvbmZpZ30+XG4gICAgICAgIDxDb25uZWN0S2l0UHJvdmlkZXI+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L0Nvbm5lY3RLaXRQcm92aWRlcj5cbiAgICAgIDwvV2FnbWlDb25maWc+XG4gICAgPC9IdWRkbGVQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIdWRkbGVDbGllbnQiLCJIdWRkbGVQcm92aWRlciIsIldhZ21pQ29uZmlnIiwiY3JlYXRlQ29uZmlnIiwic2Vwb2xpYSIsIkNvbm5lY3RLaXRQcm92aWRlciIsImdldERlZmF1bHRDb25maWciLCJjaGFpbnMiLCJjb25maWciLCJhbGNoZW15SWQiLCJ3YWxsZXRDb25uZWN0UHJvamVjdElkIiwiYXBwTmFtZSIsImh1ZGRsZUNsaWVudCIsInByb2plY3RJZCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19QUk9KRUNUX0lEIiwib3B0aW9ucyIsImFjdGl2ZVNwZWFrZXJzIiwic2l6ZSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNsaWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.jsx\n"));

/***/ })

});