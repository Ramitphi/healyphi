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

/***/ "./src/component/RemotePeer/RemotePeer.jsx":
/*!*************************************************!*\
  !*** ./src/component/RemotePeer/RemotePeer.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _huddle01_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @huddle01/react/hooks */ \"./node_modules/@huddle01/react/dist/hooks/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst RemotePeer = (param)=>{\n    let { peerId } = param;\n    _s();\n    const { stream, state } = (0,_huddle01_react_hooks__WEBPACK_IMPORTED_MODULE_1__.useRemoteVideo)({\n        peerId\n    });\n    const { stream: audioStream, state: audioState } = (0,_huddle01_react_hooks__WEBPACK_IMPORTED_MODULE_1__.useRemoteAudio)({\n        peerId\n    });\n    const { videoStream: screenVideo, audioStream: screenAudio } = (0,_huddle01_react_hooks__WEBPACK_IMPORTED_MODULE_1__.useRemoteScreenShare)({\n        peerId\n    });\n    const vidRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const screenVideoRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const screenAudioRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const { metadata } = (0,_huddle01_react_hooks__WEBPACK_IMPORTED_MODULE_1__.useRemotePeer)({\n        peerId\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(\"stream\", stream);\n        if (stream && vidRef.current && state === \"playable\") {\n            vidRef.current.srcObject = stream;\n            vidRef.current.onloadedmetadata = async ()=>{\n                try {\n                    var _vidRef_current;\n                    (_vidRef_current = vidRef.current) === null || _vidRef_current === void 0 ? void 0 : _vidRef_current.play();\n                } catch (error) {\n                    console.error(error);\n                }\n            };\n            vidRef.current.onerror = ()=>{\n                console.error(\"videoCard() | Error is hapenning...\");\n            };\n        }\n    }, [\n        stream\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (audioStream && audioRef.current && audioState === \"playable\") {\n            audioRef.current.srcObject = audioStream;\n            audioRef.current.onloadedmetadata = async ()=>{\n                try {\n                    var _audioRef_current;\n                    (_audioRef_current = audioRef.current) === null || _audioRef_current === void 0 ? void 0 : _audioRef_current.play();\n                } catch (error) {\n                    console.error(error);\n                }\n            };\n            audioRef.current.onerror = ()=>{\n                console.error(\"videoCard() | Error is hapenning...\");\n            };\n        }\n    }, [\n        audioStream\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (screenVideo && screenVideoRef.current) {\n            screenVideoRef.current.srcObject = screenVideo;\n            screenVideoRef.current.onloadedmetadata = async ()=>{\n                try {\n                    var _screenVideoRef_current;\n                    (_screenVideoRef_current = screenVideoRef.current) === null || _screenVideoRef_current === void 0 ? void 0 : _screenVideoRef_current.play();\n                } catch (error) {\n                    console.error(error);\n                }\n            };\n            screenVideoRef.current.onerror = ()=>{\n                console.error(\"videoCard() | Error is hapenning...\");\n            };\n        }\n    }, [\n        screenVideo\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (screenAudio && screenAudioRef.current) {\n            screenAudioRef.current.srcObject = screenAudio;\n            screenAudioRef.current.onloadedmetadata = async ()=>{\n                try {\n                    var _screenAudioRef_current;\n                    (_screenAudioRef_current = screenAudioRef.current) === null || _screenAudioRef_current === void 0 ? void 0 : _screenAudioRef_current.play();\n                } catch (error) {\n                    console.error(error);\n                }\n            };\n            screenAudioRef.current.onerror = ()=>{\n                console.error(\"videoCard() | Error is hapenning...\");\n            };\n        }\n    }, [\n        screenAudio\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                ref: vidRef,\n                autoPlay: true,\n                muted: true,\n                className: \"border-2 rounded-xl border-white-400 aspect-video\"\n            }, void 0, false, {\n                fileName: \"/Users/ramit/healphi/healyphi/src/component/RemotePeer/RemotePeer.jsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, undefined),\n            screenVideo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                ref: screenVideoRef,\n                autoPlay: true,\n                muted: true,\n                className: \"border-2 rounded-xl border-white-400 aspect-video\"\n            }, void 0, false, {\n                fileName: \"/Users/ramit/healphi/healyphi/src/component/RemotePeer/RemotePeer.jsx\",\n                lineNumber: 103,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>alert(metadata === null || metadata === void 0 ? void 0 : metadata.address),\n                children: \"click me\"\n            }, void 0, false, {\n                fileName: \"/Users/ramit/healphi/healyphi/src/component/RemotePeer/RemotePeer.jsx\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                ref: audioRef,\n                autoPlay: true\n            }, void 0, false, {\n                fileName: \"/Users/ramit/healphi/healyphi/src/component/RemotePeer/RemotePeer.jsx\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, undefined),\n            screenAudio && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                ref: screenAudioRef,\n                autoPlay: true\n            }, void 0, false, {\n                fileName: \"/Users/ramit/healphi/healyphi/src/component/RemotePeer/RemotePeer.jsx\",\n                lineNumber: 112,\n                columnNumber: 23\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ramit/healphi/healyphi/src/component/RemotePeer/RemotePeer.jsx\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RemotePeer, \"DYXPmYY5Icmq2apbhn8yxwBO8SU=\", false, function() {\n    return [\n        _huddle01_react_hooks__WEBPACK_IMPORTED_MODULE_1__.useRemoteVideo,\n        _huddle01_react_hooks__WEBPACK_IMPORTED_MODULE_1__.useRemoteAudio,\n        _huddle01_react_hooks__WEBPACK_IMPORTED_MODULE_1__.useRemoteScreenShare,\n        _huddle01_react_hooks__WEBPACK_IMPORTED_MODULE_1__.useRemotePeer\n    ];\n});\n_c = RemotePeer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c1 = react__WEBPACK_IMPORTED_MODULE_2___default().memo(RemotePeer));\nvar _c, _c1;\n$RefreshReg$(_c, \"RemotePeer\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSx3QkFBd0JPLElBQUk7Z0JBQzlCLEVBQUUsT0FBT0MsT0FBTztvQkFDZE4sUUFBUU0sS0FBSyxDQUFDQTtnQkFDaEI7WUFDRjtZQUVBUixlQUFlSSxPQUFPLENBQUNLLE9BQU8sR0FBRztnQkFDL0JQLFFBQVFNLEtBQUssQ0FBQztZQUNoQjtRQUNGO0lBQ0YsR0FBRztRQUFDWjtLQUFZO0lBRWhCLHFCQUNFLDhEQUFDYztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQ0NDLEtBQUtoQjtnQkFDTGlCLFFBQVE7Z0JBQ1JDLEtBQUs7Z0JBQ0xKLFdBQVU7Ozs7OztZQUVYaEIsNkJBQ0MsOERBQUNpQjtnQkFDQ0MsS0FBS2Q7Z0JBQ0xlLFFBQVE7Z0JBQ1JDLEtBQUs7Z0JBQ0xKLFdBQVU7Ozs7OzswQkFHZCw4REFBQ0s7Z0JBQU9DLFNBQVMsSUFBTUMsTUFBTWpCLHFCQUFBQSwrQkFBQUEsU0FBVWtCLE9BQU87MEJBQUc7Ozs7OzswQkFDakQsOERBQUNDO2dCQUFNUCxLQUFLZjtnQkFBVWdCLFFBQVE7Ozs7OztZQUM3QmxCLDZCQUFlLDhEQUFDd0I7Z0JBQU1QLEtBQUtiO2dCQUFnQmMsUUFBUTs7Ozs7Ozs7Ozs7O0FBRzFEO0dBMUdNMUI7O1FBQ3NCTCxpRUFBY0E7UUFDV0YsaUVBQWNBO1FBRS9EQyx1RUFBb0JBO1FBTURFLGdFQUFhQTs7O0tBVjlCSTtBQTRHTixrRkFBZUgsaURBQVUsQ0FBQ0csV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50L1JlbW90ZVBlZXIvUmVtb3RlUGVlci5qc3g/YTI4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICB1c2VSZW1vdGVBdWRpbyxcbiAgdXNlUmVtb3RlU2NyZWVuU2hhcmUsXG4gIHVzZVJlbW90ZVZpZGVvLFxuICB1c2VSZW1vdGVQZWVyLFxufSBmcm9tIFwiQGh1ZGRsZTAxL3JlYWN0L2hvb2tzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUmVtb3RlUGVlciA9ICh7IHBlZXJJZCB9KSA9PiB7XG4gIGNvbnN0IHsgc3RyZWFtLCBzdGF0ZSB9ID0gdXNlUmVtb3RlVmlkZW8oeyBwZWVySWQgfSk7XG4gIGNvbnN0IHsgc3RyZWFtOiBhdWRpb1N0cmVhbSwgc3RhdGU6IGF1ZGlvU3RhdGUgfSA9IHVzZVJlbW90ZUF1ZGlvKHsgcGVlcklkIH0pO1xuICBjb25zdCB7IHZpZGVvU3RyZWFtOiBzY3JlZW5WaWRlbywgYXVkaW9TdHJlYW06IHNjcmVlbkF1ZGlvIH0gPVxuICAgIHVzZVJlbW90ZVNjcmVlblNoYXJlKHsgcGVlcklkIH0pO1xuICBjb25zdCB2aWRSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBzY3JlZW5WaWRlb1JlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3Qgc2NyZWVuQXVkaW9SZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgeyBtZXRhZGF0YSB9ID0gdXNlUmVtb3RlUGVlcih7IHBlZXJJZCB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwic3RyZWFtXCIsIHN0cmVhbSk7XG4gICAgaWYgKHN0cmVhbSAmJiB2aWRSZWYuY3VycmVudCAmJiBzdGF0ZSA9PT0gXCJwbGF5YWJsZVwiKSB7XG4gICAgICB2aWRSZWYuY3VycmVudC5zcmNPYmplY3QgPSBzdHJlYW07XG5cbiAgICAgIHZpZFJlZi5jdXJyZW50Lm9ubG9hZGVkbWV0YWRhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmlkUmVmLmN1cnJlbnQ/LnBsYXkoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmlkUmVmLmN1cnJlbnQub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcInZpZGVvQ2FyZCgpIHwgRXJyb3IgaXMgaGFwZW5uaW5nLi4uXCIpO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIFtzdHJlYW1dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhdWRpb1N0cmVhbSAmJiBhdWRpb1JlZi5jdXJyZW50ICYmIGF1ZGlvU3RhdGUgPT09IFwicGxheWFibGVcIikge1xuICAgICAgYXVkaW9SZWYuY3VycmVudC5zcmNPYmplY3QgPSBhdWRpb1N0cmVhbTtcblxuICAgICAgYXVkaW9SZWYuY3VycmVudC5vbmxvYWRlZG1ldGFkYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQ/LnBsYXkoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgYXVkaW9SZWYuY3VycmVudC5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwidmlkZW9DYXJkKCkgfCBFcnJvciBpcyBoYXBlbm5pbmcuLi5cIik7XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW2F1ZGlvU3RyZWFtXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2NyZWVuVmlkZW8gJiYgc2NyZWVuVmlkZW9SZWYuY3VycmVudCkge1xuICAgICAgc2NyZWVuVmlkZW9SZWYuY3VycmVudC5zcmNPYmplY3QgPSBzY3JlZW5WaWRlbztcblxuICAgICAgc2NyZWVuVmlkZW9SZWYuY3VycmVudC5vbmxvYWRlZG1ldGFkYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHNjcmVlblZpZGVvUmVmLmN1cnJlbnQ/LnBsYXkoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgc2NyZWVuVmlkZW9SZWYuY3VycmVudC5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwidmlkZW9DYXJkKCkgfCBFcnJvciBpcyBoYXBlbm5pbmcuLi5cIik7XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW3NjcmVlblZpZGVvXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2NyZWVuQXVkaW8gJiYgc2NyZWVuQXVkaW9SZWYuY3VycmVudCkge1xuICAgICAgc2NyZWVuQXVkaW9SZWYuY3VycmVudC5zcmNPYmplY3QgPSBzY3JlZW5BdWRpbztcblxuICAgICAgc2NyZWVuQXVkaW9SZWYuY3VycmVudC5vbmxvYWRlZG1ldGFkYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHNjcmVlbkF1ZGlvUmVmLmN1cnJlbnQ/LnBsYXkoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgc2NyZWVuQXVkaW9SZWYuY3VycmVudC5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwidmlkZW9DYXJkKCkgfCBFcnJvciBpcyBoYXBlbm5pbmcuLi5cIik7XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW3NjcmVlbkF1ZGlvXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTJcIj5cbiAgICAgIDx2aWRlb1xuICAgICAgICByZWY9e3ZpZFJlZn1cbiAgICAgICAgYXV0b1BsYXlcbiAgICAgICAgbXV0ZWRcbiAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTIgcm91bmRlZC14bCBib3JkZXItd2hpdGUtNDAwIGFzcGVjdC12aWRlb1wiXG4gICAgICAvPlxuICAgICAge3NjcmVlblZpZGVvICYmIChcbiAgICAgICAgPHZpZGVvXG4gICAgICAgICAgcmVmPXtzY3JlZW5WaWRlb1JlZn1cbiAgICAgICAgICBhdXRvUGxheVxuICAgICAgICAgIG11dGVkXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTIgcm91bmRlZC14bCBib3JkZXItd2hpdGUtNDAwIGFzcGVjdC12aWRlb1wiXG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhbGVydChtZXRhZGF0YT8uYWRkcmVzcyl9PmNsaWNrIG1lPC9idXR0b24+XG4gICAgICA8YXVkaW8gcmVmPXthdWRpb1JlZn0gYXV0b1BsYXk+PC9hdWRpbz5cbiAgICAgIHtzY3JlZW5BdWRpbyAmJiA8YXVkaW8gcmVmPXtzY3JlZW5BdWRpb1JlZn0gYXV0b1BsYXk+PC9hdWRpbz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFJlbW90ZVBlZXIpO1xuIl0sIm5hbWVzIjpbInVzZVJlbW90ZUF1ZGlvIiwidXNlUmVtb3RlU2NyZWVuU2hhcmUiLCJ1c2VSZW1vdGVWaWRlbyIsInVzZVJlbW90ZVBlZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIlJlbW90ZVBlZXIiLCJwZWVySWQiLCJzdHJlYW0iLCJzdGF0ZSIsImF1ZGlvU3RyZWFtIiwiYXVkaW9TdGF0ZSIsInZpZGVvU3RyZWFtIiwic2NyZWVuVmlkZW8iLCJzY3JlZW5BdWRpbyIsInZpZFJlZiIsImF1ZGlvUmVmIiwic2NyZWVuVmlkZW9SZWYiLCJzY3JlZW5BdWRpb1JlZiIsIm1ldGFkYXRhIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJzcmNPYmplY3QiLCJvbmxvYWRlZG1ldGFkYXRhIiwicGxheSIsImVycm9yIiwib25lcnJvciIsImRpdiIsImNsYXNzTmFtZSIsInZpZGVvIiwicmVmIiwiYXV0b1BsYXkiLCJtdXRlZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJhbGVydCIsImFkZHJlc3MiLCJhdWRpbyIsIm1lbW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/component/RemotePeer/RemotePeer.jsx\n"));

/***/ })

});