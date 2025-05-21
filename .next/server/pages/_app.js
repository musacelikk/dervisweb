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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nprogress/nprogress.css */ \"./node_modules/nprogress/nprogress.css\");\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n// NProgress yapılandırması\nnprogress__WEBPACK_IMPORTED_MODULE_5___default().configure({\n    minimum: 0.3,\n    easing: \"ease\",\n    speed: 800,\n    showSpinner: false\n});\nfunction App({ Component, pageProps }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const handleStart = ()=>{\n            setLoading(true);\n            nprogress__WEBPACK_IMPORTED_MODULE_5___default().start();\n        };\n        const handleStop = ()=>{\n            setTimeout(()=>{\n                setLoading(false);\n            }, 700);\n            nprogress__WEBPACK_IMPORTED_MODULE_5___default().done();\n        };\n        router.events.on(\"routeChangeStart\", handleStart);\n        router.events.on(\"routeChangeComplete\", handleStop);\n        router.events.on(\"routeChangeError\", handleStop);\n        handleStart();\n        handleStop();\n        return ()=>{\n            router.events.off(\"routeChangeStart\", handleStart);\n            router.events.off(\"routeChangeComplete\", handleStop);\n            router.events.off(\"routeChangeError\", handleStop);\n        };\n    }, [\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {\n                fileName: \"/Users/musacelik/Desktop/dervisweb/pages/_app.js\",\n                lineNumber: 48,\n                columnNumber: 5\n            }, this),\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed inset-0 bg-[#0e1422]/90 backdrop-blur-sm z-50 flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-[#ad0203]\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/musacelik/Desktop/dervisweb/pages/_app.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/IMG_8681-removebg-preview.png\",\n                                        alt: \"Derviş Logo\",\n                                        className: \"w-16 h-16 object-contain\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/musacelik/Desktop/dervisweb/pages/_app.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/musacelik/Desktop/dervisweb/pages/_app.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/musacelik/Desktop/dervisweb/pages/_app.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-6 text-2xl font-semibold text-white\",\n                            children: \"Y\\xfckleniyor...\"\n                        }, void 0, false, {\n                            fileName: \"/Users/musacelik/Desktop/dervisweb/pages/_app.js\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/musacelik/Desktop/dervisweb/pages/_app.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/musacelik/Desktop/dervisweb/pages/_app.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/musacelik/Desktop/dervisweb/pages/_app.js\",\n                lineNumber: 67,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDRDtBQUNXO0FBQ0k7QUFDVjtBQUNEO0FBRWhDLDJCQUEyQjtBQUMzQkksMERBQW1CLENBQUM7SUFDbEJFLFNBQVM7SUFDVEMsUUFBUTtJQUNSQyxPQUFPO0lBQ1BDLGFBQWE7QUFDZjtBQUVlLFNBQVNDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbEQsTUFBTUMsU0FBU1osc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ2EsU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUV2Q0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNYSxjQUFjO1lBQ2xCRCxXQUFXO1lBQ1hYLHNEQUFlO1FBQ2pCO1FBRUEsTUFBTWMsYUFBYTtZQUNqQkMsV0FBVztnQkFDVEosV0FBVztZQUNiLEdBQUc7WUFDSFgscURBQWM7UUFDaEI7UUFFQVMsT0FBT1EsTUFBTSxDQUFDQyxFQUFFLENBQUMsb0JBQW9CTjtRQUNyQ0gsT0FBT1EsTUFBTSxDQUFDQyxFQUFFLENBQUMsdUJBQXVCSjtRQUN4Q0wsT0FBT1EsTUFBTSxDQUFDQyxFQUFFLENBQUMsb0JBQW9CSjtRQUVyQ0Y7UUFDQUU7UUFFQSxPQUFPO1lBQ0xMLE9BQU9RLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLG9CQUFvQlA7WUFDdENILE9BQU9RLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLHVCQUF1Qkw7WUFDekNMLE9BQU9RLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLG9CQUFvQkw7UUFDeEM7SUFDRixHQUFHO1FBQUNMO0tBQU87SUFFWCxxQkFBTzs7MEJBQ0wsOERBQUNiLGtEQUFJQTs7Ozs7WUFFSmMseUJBQ0MsOERBQUNVO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0Q7b0NBQUlDLFdBQVU7Ozs7Ozs4Q0FDZiw4REFBQ0Q7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUNDO3dDQUNDQyxLQUFJO3dDQUNKQyxLQUFJO3dDQUNKSCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJaEIsOERBQUNJOzRCQUFFSixXQUFVO3NDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSTVELDhEQUFDZDtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7OztBQUU1QiIsInNvdXJjZXMiOlsid2VicGFjazovL3N5b3RvLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJ1xuaW1wb3J0ICducHJvZ3Jlc3MvbnByb2dyZXNzLmNzcydcblxuLy8gTlByb2dyZXNzIHlhcMSxbGFuZMSxcm1hc8SxXG5OUHJvZ3Jlc3MuY29uZmlndXJlKHtcbiAgbWluaW11bTogMC4zLFxuICBlYXNpbmc6ICdlYXNlJyxcbiAgc3BlZWQ6IDgwMCxcbiAgc2hvd1NwaW5uZXI6IGZhbHNlLFxufSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU3RhcnQgPSAoKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICBOUHJvZ3Jlc3Muc3RhcnQoKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN0b3AgPSAoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgIH0sIDcwMClcbiAgICAgIE5Qcm9ncmVzcy5kb25lKClcbiAgICB9XG5cbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlU3RhcnQpXG4gICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVN0b3ApXG4gICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsIGhhbmRsZVN0b3ApXG5cbiAgICBoYW5kbGVTdGFydCgpXG4gICAgaGFuZGxlU3RvcCgpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVTdGFydClcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlU3RvcClcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUVycm9yJywgaGFuZGxlU3RvcClcbiAgICB9XG4gIH0sIFtyb3V0ZXJdKVxuXG4gIHJldHVybiA8PlxuICAgIDxIZWFkPlxuICAgIDwvSGVhZD5cbiAgICB7bG9hZGluZyAmJiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgYmctWyMwZTE0MjJdLzkwIGJhY2tkcm9wLWJsdXItc20gei01MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLXNwaW4gcm91bmRlZC1mdWxsIGgtMjQgdy0yNCBib3JkZXItdC00IGJvcmRlci1iLTQgYm9yZGVyLVsjYWQwMjAzXVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS8yIGxlZnQtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIC10cmFuc2xhdGUteS0xLzJcIj5cbiAgICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICBzcmM9XCIvSU1HXzg2ODEtcmVtb3ZlYmctcHJldmlldy5wbmdcIiBcbiAgICAgICAgICAgICAgICBhbHQ9XCJEZXJ2acWfIExvZ29cIiBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgb2JqZWN0LWNvbnRhaW5cIiBcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTYgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCI+WcO8a2xlbml5b3IuLi48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKX1cbiAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gIDwvPlxufSAiXSwibmFtZXMiOlsiSGVhZCIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTlByb2dyZXNzIiwiY29uZmlndXJlIiwibWluaW11bSIsImVhc2luZyIsInNwZWVkIiwic2hvd1NwaW5uZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZVN0YXJ0Iiwic3RhcnQiLCJoYW5kbGVTdG9wIiwic2V0VGltZW91dCIsImRvbmUiLCJldmVudHMiLCJvbiIsIm9mZiIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/nprogress"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();