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

/***/ "./app/store.js":
/*!**********************!*\
  !*** ./app/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   store: () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _features_hero_findPlaceSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/hero/findPlaceSlice */ \"./features/hero/findPlaceSlice.js\");\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        hero: _features_hero_findPlaceSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RvcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFrRDtBQUNXO0FBRXRELE1BQU1FLFFBQVFGLGdFQUFjQSxDQUFDO0lBQ2hDRyxTQUFTO1FBQ0xDLE1BQU1ILHFFQUFjQTtJQUN4QjtBQUNKLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb3RyaXAtbmV4dC8uL2FwcC9zdG9yZS5qcz9jYWU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCBmaW5kUGxhY2VTbGljZSBmcm9tIFwiLi4vZmVhdHVyZXMvaGVyby9maW5kUGxhY2VTbGljZVwiO1xuXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gICAgcmVkdWNlcjoge1xuICAgICAgICBoZXJvOiBmaW5kUGxhY2VTbGljZSxcbiAgICB9LFxufSk7XG4iXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJmaW5kUGxhY2VTbGljZSIsInN0b3JlIiwicmVkdWNlciIsImhlcm8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/store.js\n");

/***/ }),

/***/ "./components/common/ScrollTop.jsx":
/*!*****************************************!*\
  !*** ./components/common/ScrollTop.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollToTop)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction ScrollToTop() {\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Top: 0 takes us all the way back to the top of the page\n    // Behavior: smooth keeps it smooth!\n    const scrollToTop = ()=>{\n        window.scrollTo({\n            top: 0,\n            behavior: \"smooth\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Button is displayed after scrolling for 500 pixels\n        const toggleVisibility = ()=>{\n            if (window.pageYOffset > 500) {\n                setIsVisible(true);\n            } else {\n                setIsVisible(false);\n            }\n        };\n        window.addEventListener(\"scroll\", toggleVisibility);\n        return ()=>window.removeEventListener(\"scroll\", toggleVisibility);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: isVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"scroll-to-top scroll-to-target\",\n                onClick: scrollToTop,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"icon icon-arrow-top-right\"\n                }, void 0, false, {\n                    fileName: \"/Users/agnaldojunior/Documents/guia-lagamar/job-site/guialagamar-site/components/common/ScrollTop.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/agnaldojunior/Documents/guia-lagamar/job-site/guialagamar-site/components/common/ScrollTop.jsx\",\n                lineNumber: 34,\n                columnNumber: 11\n            }, this)\n        }, void 0, false)\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9TY3JvbGxUb3AuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE0QztBQUU3QixTQUFTRTtJQUN0QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0gsK0NBQVFBLENBQUM7SUFFM0MsMERBQTBEO0lBQzFELG9DQUFvQztJQUNwQyxNQUFNSSxjQUFjO1FBQ2xCQyxPQUFPQyxRQUFRLENBQUM7WUFDZEMsS0FBSztZQUNMQyxVQUFVO1FBQ1o7SUFDRjtJQUVBVCxnREFBU0EsQ0FBQztRQUNSLHFEQUFxRDtRQUNyRCxNQUFNVSxtQkFBbUI7WUFDdkIsSUFBSUosT0FBT0ssV0FBVyxHQUFHLEtBQUs7Z0JBQzVCUCxhQUFhO1lBQ2YsT0FBTztnQkFDTEEsYUFBYTtZQUNmO1FBQ0Y7UUFFQUUsT0FBT00sZ0JBQWdCLENBQUMsVUFBVUY7UUFFbEMsT0FBTyxJQUFNSixPQUFPTyxtQkFBbUIsQ0FBQyxVQUFVSDtJQUNwRCxHQUFHLEVBQUU7SUFFTCxxQkFDRTtrQkFDR1AsMkJBQ0M7c0JBQ0UsNEVBQUNXO2dCQUFJQyxXQUFVO2dCQUFpQ0MsU0FBU1g7MEJBQ3ZELDRFQUFDWTtvQkFBS0YsV0FBVTs7Ozs7Ozs7Ozs7OztBQU01QiIsInNvdXJjZXMiOlsid2VicGFjazovL2dvdHJpcC1uZXh0Ly4vY29tcG9uZW50cy9jb21tb24vU2Nyb2xsVG9wLmpzeD83MmQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Nyb2xsVG9Ub3AoKSB7XG4gIGNvbnN0IFtpc1Zpc2libGUsIHNldElzVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gVG9wOiAwIHRha2VzIHVzIGFsbCB0aGUgd2F5IGJhY2sgdG8gdGhlIHRvcCBvZiB0aGUgcGFnZVxuICAvLyBCZWhhdmlvcjogc21vb3RoIGtlZXBzIGl0IHNtb290aCFcbiAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XG4gICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgIHRvcDogMCxcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQnV0dG9uIGlzIGRpc3BsYXllZCBhZnRlciBzY3JvbGxpbmcgZm9yIDUwMCBwaXhlbHNcbiAgICBjb25zdCB0b2dnbGVWaXNpYmlsaXR5ID0gKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDUwMCkge1xuICAgICAgICBzZXRJc1Zpc2libGUodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRJc1Zpc2libGUoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0b2dnbGVWaXNpYmlsaXR5KTtcblxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0b2dnbGVWaXNpYmlsaXR5KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtpc1Zpc2libGUgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsLXRvLXRvcCBzY3JvbGwtdG8tdGFyZ2V0XCIgb25DbGljaz17c2Nyb2xsVG9Ub3B9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLWFycm93LXRvcC1yaWdodFwiPjwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2Nyb2xsVG9Ub3AiLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJzY3JvbGxUb1RvcCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJ0b2dnbGVWaXNpYmlsaXR5IiwicGFnZVlPZmZzZXQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/common/ScrollTop.jsx\n");

/***/ }),

/***/ "./features/hero/findPlaceSlice.js":
/*!*****************************************!*\
  !*** ./features/hero/findPlaceSlice.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addCurrentTab: () => (/* binding */ addCurrentTab),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   findPlaceSlice: () => (/* binding */ findPlaceSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    tabs: [\n        {\n            id: 1,\n            name: \"Hotel\",\n            icon: \"icon-bed\"\n        },\n        {\n            id: 2,\n            name: \"Tour\",\n            icon: \"icon-destination\"\n        },\n        {\n            id: 3,\n            name: \"Activity\",\n            icon: \"icon-ski\"\n        },\n        {\n            id: 4,\n            name: \"Holyday Rentals\",\n            icon: \"icon-home\"\n        },\n        {\n            id: 5,\n            name: \"Car\",\n            icon: \"icon-car\"\n        },\n        {\n            id: 6,\n            name: \"Cruise\",\n            icon: \"icon-yatch\"\n        },\n        {\n            id: 7,\n            name: \"Flights\",\n            icon: \"icon-tickets\"\n        }\n    ],\n    currentTab: \"Hotel\"\n};\nconst findPlaceSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"find-place\",\n    initialState,\n    reducers: {\n        addCurrentTab: (state, { payload })=>{\n            state.currentTab = payload;\n        }\n    }\n});\nconst { addCurrentTab } = findPlaceSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (findPlaceSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mZWF0dXJlcy9oZXJvL2ZpbmRQbGFjZVNsaWNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQStDO0FBRS9DLE1BQU1DLGVBQWU7SUFDbkJDLE1BQU07UUFDSjtZQUFFQyxJQUFJO1lBQUdDLE1BQU07WUFBU0MsTUFBTTtRQUFXO1FBQ3pDO1lBQUVGLElBQUk7WUFBR0MsTUFBTTtZQUFRQyxNQUFNO1FBQW1CO1FBQ2hEO1lBQUVGLElBQUk7WUFBR0MsTUFBTTtZQUFZQyxNQUFNO1FBQVc7UUFDNUM7WUFBRUYsSUFBSTtZQUFHQyxNQUFNO1lBQW1CQyxNQUFNO1FBQVk7UUFDcEQ7WUFBRUYsSUFBSTtZQUFHQyxNQUFNO1lBQU9DLE1BQU07UUFBVztRQUN2QztZQUFFRixJQUFJO1lBQUdDLE1BQU07WUFBVUMsTUFBTTtRQUFhO1FBQzVDO1lBQUVGLElBQUk7WUFBR0MsTUFBTTtZQUFXQyxNQUFNO1FBQWU7S0FDaEQ7SUFDREMsWUFBWTtBQUNkO0FBRU8sTUFBTUMsaUJBQWlCUCw2REFBV0EsQ0FBQztJQUN4Q0ksTUFBTTtJQUNOSDtJQUNBTyxVQUFVO1FBQ1JDLGVBQWUsQ0FBQ0MsT0FBTyxFQUFFQyxPQUFPLEVBQUU7WUFDaENELE1BQU1KLFVBQVUsR0FBR0s7UUFDckI7SUFDRjtBQUNGLEdBQUc7QUFFSSxNQUFNLEVBQUVGLGFBQWEsRUFBRSxHQUFHRixlQUFlSyxPQUFPLENBQUM7QUFDeEQsaUVBQWVMLGVBQWVNLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dvdHJpcC1uZXh0Ly4vZmVhdHVyZXMvaGVyby9maW5kUGxhY2VTbGljZS5qcz80ZDAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB0YWJzOiBbXG4gICAgeyBpZDogMSwgbmFtZTogXCJIb3RlbFwiLCBpY29uOiBcImljb24tYmVkXCIgfSxcbiAgICB7IGlkOiAyLCBuYW1lOiBcIlRvdXJcIiwgaWNvbjogXCJpY29uLWRlc3RpbmF0aW9uXCIgfSxcbiAgICB7IGlkOiAzLCBuYW1lOiBcIkFjdGl2aXR5XCIsIGljb246IFwiaWNvbi1za2lcIiB9LFxuICAgIHsgaWQ6IDQsIG5hbWU6IFwiSG9seWRheSBSZW50YWxzXCIsIGljb246IFwiaWNvbi1ob21lXCIgfSxcbiAgICB7IGlkOiA1LCBuYW1lOiBcIkNhclwiLCBpY29uOiBcImljb24tY2FyXCIgfSxcbiAgICB7IGlkOiA2LCBuYW1lOiBcIkNydWlzZVwiLCBpY29uOiBcImljb24teWF0Y2hcIiB9LFxuICAgIHsgaWQ6IDcsIG5hbWU6IFwiRmxpZ2h0c1wiLCBpY29uOiBcImljb24tdGlja2V0c1wiIH0sXG4gIF0sXG4gIGN1cnJlbnRUYWI6IFwiSG90ZWxcIixcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kUGxhY2VTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJmaW5kLXBsYWNlXCIsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBhZGRDdXJyZW50VGFiOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzdGF0ZS5jdXJyZW50VGFiID0gcGF5bG9hZDtcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCB7IGFkZEN1cnJlbnRUYWIgfSA9IGZpbmRQbGFjZVNsaWNlLmFjdGlvbnM7XG5leHBvcnQgZGVmYXVsdCBmaW5kUGxhY2VTbGljZS5yZWR1Y2VyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwidGFicyIsImlkIiwibmFtZSIsImljb24iLCJjdXJyZW50VGFiIiwiZmluZFBsYWNlU2xpY2UiLCJyZWR1Y2VycyIsImFkZEN1cnJlbnRUYWIiLCJzdGF0ZSIsInBheWxvYWQiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./features/hero/findPlaceSlice.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ \"aos\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_common_ScrollTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/common/ScrollTop */ \"./components/common/ScrollTop.jsx\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/navigation */ \"./node_modules/swiper/modules/navigation/navigation.min.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/css/scrollbar */ \"./node_modules/swiper/modules/scrollbar/scrollbar.min.css\");\n/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var swiper_css_effect_cards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/css/effect-cards */ \"./node_modules/swiper/modules/effect-cards/effect-cards.min.css\");\n/* harmony import */ var swiper_css_effect_cards__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(swiper_css_effect_cards__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! aos/dist/aos.css */ \"./node_modules/aos/dist/aos.css\");\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/index.scss */ \"./styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app/store */ \"./app/store.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nif (false) {}\nfunction App({ Component, pageProps }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        aos__WEBPACK_IMPORTED_MODULE_1___default().init({\n            duration: 1200,\n            once: true\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_11__.Provider, {\n            store: _app_store__WEBPACK_IMPORTED_MODULE_12__.store,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/agnaldojunior/Documents/guia-lagamar/job-site/guialagamar-site/pages/_app.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_ScrollTop__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/agnaldojunior/Documents/guia-lagamar/job-site/guialagamar-site/pages/_app.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/agnaldojunior/Documents/guia-lagamar/job-site/guialagamar-site/pages/_app.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/agnaldojunior/Documents/guia-lagamar/job-site/guialagamar-site/pages/_app.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNCO0FBQ1k7QUFDb0I7QUFDbEM7QUFDVztBQUNBO0FBQ0Q7QUFDRztBQUNQO0FBQ0k7QUFDUztBQUNGO0FBRXJDLElBQUksS0FBNkIsRUFBRSxFQUVsQztBQUVjLFNBQVNNLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbERQLGdEQUFTQSxDQUFDO1FBQ1JELCtDQUFRLENBQUM7WUFDUFUsVUFBVTtZQUNWQyxNQUFNO1FBQ1I7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0M7a0JBQ0MsNEVBQUNULGtEQUFRQTtZQUFDQyxPQUFPQSw4Q0FBS0E7OzhCQUNwQiw4REFBQ0c7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7OzhCQUN4Qiw4REFBQ04sb0VBQVFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ290cmlwLW5leHQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFvcyBmcm9tIFwiYW9zXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTcm9sbFRvcCBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vU2Nyb2xsVG9wXCI7XG5pbXBvcnQgXCJzd2lwZXIvY3NzXCI7XG5pbXBvcnQgXCJzd2lwZXIvY3NzL3BhZ2luYXRpb25cIjtcbmltcG9ydCBcInN3aXBlci9jc3MvbmF2aWdhdGlvblwiO1xuaW1wb3J0IFwic3dpcGVyL2Nzcy9zY3JvbGxiYXJcIjtcbmltcG9ydCBcInN3aXBlci9jc3MvZWZmZWN0LWNhcmRzXCI7XG5pbXBvcnQgXCJhb3MvZGlzdC9hb3MuY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL2FwcC9zdG9yZVwiO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICByZXF1aXJlKFwiYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwXCIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgQW9zLmluaXQoe1xuICAgICAgZHVyYXRpb246IDEyMDAsXG4gICAgICBvbmNlOiB0cnVlLFxuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDxTcm9sbFRvcCAvPlxuICAgICAgPC9Qcm92aWRlcj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQW9zIiwidXNlRWZmZWN0IiwiU3JvbGxUb3AiLCJQcm92aWRlciIsInN0b3JlIiwicmVxdWlyZSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImluaXQiLCJkdXJhdGlvbiIsIm9uY2UiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "aos":
/*!**********************!*\
  !*** external "aos" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("aos");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/swiper","vendor-chunks/aos"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();