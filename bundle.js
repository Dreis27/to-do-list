/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./dirty-font.ttf */ \"./src/dirty-font.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: 'MyFont';\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');\n  font-weight: 600;\n  font-style: normal;\n}\nheader > div {\n  font-family: 'MyFont';\n  font-size: 80px;\n}\n:root {\n  --main-color: #c5e8ff;\n}\ni {\n  margin-right: 15px;\n}\nbody {\n    margin: 0;\n    padding: 0;\n    font-family: Arial, sans-serif;\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n}\n\nheader {\n    background-color: #3498db;\n    color: white;\n    display: flex;\n    justify-content: left;\n    padding-left: 2vw;\n    align-items: center;\n    height: 10vh;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n#container {\n    flex-grow: 1;\n    display: flex;\n}\n\n#menu-bar {\n    display: flex;\n    flex-direction: column;\n    background-color: #eaeaea;\n    flex-basis: 20%;\n    border-right: 1px solid #dcdcdc;\n    padding: 20px;\n    overflow: scroll;\n}\n\n#page-container {\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    background-color: #f9f9f9;\n    padding-top: 20px;\n    padding-left: min(300px, 15%);\n    padding-right: min(300px, 15%);\n}\n\n#task-container,\n#done-container {\n  box-sizing: border-box;\n  flex-grow: 1;\n  margin: 10px; /* Add some spacing between the containers */\n\n}\n\nfooter {\n    background-color: #2c3e50;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 5vh;\n}\n\n@media screen and (max-width: 600px) {\n    #container {\n        flex-direction: column;\n    }\n\n    #menu-bar, #task-container {\n        flex-basis: auto;\n        flex-grow: 1;\n        width: 100%;\n    }\n}\n\n.task-button {\n    display: flex;\n    justify-content: space-between; /* This ensures the name is on the left and the date is on the right */\n    width: 100%;\n    padding: 10px;\n    border: 1px solid #ccc;\n    margin-bottom: 10px;\n    align-items: center;\n    border-radius: 5px;\n}\n\n.task-name {\n    flex-grow: 1; /* Allows name to take as much space as available */\n    text-align: left;\n}\n\n.task-date {\n  box-sizing: border-box;\n  padding: 5px;\n  margin-left: 20px; /* Some spacing between name and date */\n  text-align: right;\n  border-radius: 4px;\n}\n.task-date:hover{\n  background-color: var(--main-color);\n}\n.dateBtn{\n  background-color: transparent;\n  border: none;\n}\n\n#projectLabel {\n  border-bottom: 3px solid #000000;\n}\n\n.default-projects, #project-container{\n    margin-top: 10px;\n    margin-bottom: 20px;\n    display: flex;\n    flex-direction: column;\n}\n\n.button-default-project, .project-button {\n    display: flex;\n    box-sizing: border-box;\n    margin-top: 10px;\n    text-align: left;\n    font-family: Arial;\n    color: #353434;\n    font-size: 20px;\n    background: transparent;\n    padding: 10px 20px 10px 20px;\n    border: none;\n    text-decoration: none;\n  }\n  \n  .button-default-project:hover, .project-button:hover {\n    background: var(--main-color);\n    text-decoration: none;\n  }\n\n  .button-add-project, .add-task-button{\n    background-color: transparent;\n    box-sizing: border-box;\n    margin-top: 10px;\n    color: #353434;\n    font-family: Arial;\n    border: none;\n    font-size: 16px;\n    padding:15px;\n    margin-bottom: 20px;\n    border-radius: 8px;\n  }\n  .add-task-button{\n    width: 102.5%;\n    font-size: 20px;\n  }\n  .button-add-project:hover, .add-task-button:hover {\n    background: var(--main-color);\n    text-decoration: none;\n\n  }\n\n  h1{\n    margin-left: 20px;\n  }\n\n.modal, .modal1 {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 1;\n  }\n  \n  .modal-content, .modal-content1 {\n    background-color: #fefefe;\n    margin: 15% auto;\n    padding: 20px;\n    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);\n    width: 70%;\n    max-width: 400px;\n  }\n\n  .modal-header, .modal-header1 {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  \n  .close, .close1 {\n    color: #aaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n  \n  .close:hover, .close:focus, .close1:hover, .close1:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n  }\n  \n  .modal-body, .modal-body1 {\n    margin-top: 10px;\n    display: grid;\n    align-items: center;\n    grid-template-columns: 1fr;\n    margin-bottom: 10px;\n  }\n  \n  .modal-body label, .modal-body1 label {\n    display: block;\n    font-weight: bold;\n    margin-bottom: 5px;\n  }\n  \n  .modal-body input, .modal-body1 input {\n    width: 90%;\n    padding: 8px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    height: 20px;\n  }\n  \n  .modal-footer, .modal-footer1 {\n    margin-top: 15px;\n    text-align: right;\n  }\n  \n  .modal-footer button, .modal-footer1 button {\n    padding: 8px 20px;\n    margin-left: 10px;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n  }\n  \n  #add, #add1 {\n    background-color: #3498db;\n    color: white;\n  }\n  \n  #cancel, #cancel1 {\n    background-color: #ccc;\n    color: black;\n  }\n\n  .left{\n    margin-left: auto;\n  }\n\n  .fa-github{\n    transition: transform 0.3s ease-in-out;\n  }\n  .fa-github:hover {\n    transform: rotate(360deg) scale(1.2); \n  }\n\n\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface */ \"./src/interface.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\n\n    (0,_interface__WEBPACK_IMPORTED_MODULE_1__.displayProjects)();\n    (0,_interface__WEBPACK_IMPORTED_MODULE_1__.displayProjectTasks)('Home'); \n    (0,_interface__WEBPACK_IMPORTED_MODULE_1__.manageAddProjectButton)();\n    (0,_interface__WEBPACK_IMPORTED_MODULE_1__.checkTodayThisWeek)();\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkTodayThisWeek: () => (/* binding */ checkTodayThisWeek),\n/* harmony export */   displayProjectTasks: () => (/* binding */ displayProjectTasks),\n/* harmony export */   displayProjects: () => (/* binding */ displayProjects),\n/* harmony export */   manageAddProjectButton: () => (/* binding */ manageAddProjectButton)\n/* harmony export */ });\n/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-item */ \"./src/list-item.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ \"./src/list.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\n\n\nconst today = new Date();\nconst year = today.getFullYear();\nconst month = today.getMonth() + 1;\nconst day = today.getDate();\n\nconst formattedToday = `${year}-0${month}-${day}`;\n\nfunction isDateInThisWeek(date) { //fix this function fr wtf\n    const [givenYear, givenMonth, givenDay] = date.split('-').map(Number);\n\n      // Calculate the day of the week where Monday is 0 and Sunday is 6\n    const todayDayOfWeek = (today.getDay() + 6) % 7;\n \n    const firstDayOfWeek = new Date(year, month - 1, day - todayDayOfWeek);\n\n    // Calculate the last day of the week (Sunday)\n    const lastDayOfWeek = new Date(year, month - 1, day + (6 - todayDayOfWeek));\n\n    const inputDate = new Date(givenYear, givenMonth - 1, givenDay);\n\n    return inputDate >= firstDayOfWeek && inputDate <= lastDayOfWeek;\n  }\n\nfunction createAddTaskButton() {\n    const addTaskButton = document.createElement(\"button\");\n    addTaskButton.textContent = \"+ Add Task\";\n    addTaskButton.classList.add(\"add-task-button\");\n\n    return addTaskButton;\n}\n\nfunction createTask(ListItem, projectName) {\n\n    let text = ListItem.getName();\n    let date = (0,_storage__WEBPACK_IMPORTED_MODULE_3__.getToDoList)().getProject(projectName).getTask(text).getDate();\n\n\n    let btn = document.createElement(\"div\");\n    btn.classList.add(\"task-button\");\n\n    const icon = document.createElement('i');\n    icon.classList.add('fa-regular', 'fa-square');\n    icon.style.fontSize = '24px';\n\n    icon.addEventListener('click', function(event){\n        event.stopPropagation();\n            icon.classList = [];\n            icon.classList.add('far', 'fa-check-square');\n            (0,_storage__WEBPACK_IMPORTED_MODULE_3__.addSavedDoneTask)(projectName, ListItem);\n            (0,_storage__WEBPACK_IMPORTED_MODULE_3__.deleteSavedTask)(projectName, text);\n            displayProjectTasks(projectName);\n    })\n\n    let nameDiv = document.createElement(\"div\");\n    nameDiv.classList.add(\"task-name\");\n    nameDiv.innerText = text;\n\n    const span = document.createElement('span');\n    span.classList.add('close');\n    span.innerHTML = '&times;';\n\n    span.addEventListener('click', function(){\n        (0,_storage__WEBPACK_IMPORTED_MODULE_3__.deleteSavedTask)(projectName, text);\n        (0,_storage__WEBPACK_IMPORTED_MODULE_3__.deleteSavedTask)('Today', text);\n        (0,_storage__WEBPACK_IMPORTED_MODULE_3__.deleteSavedTask)('This Week', text);\n        displayProjectTasks(projectName);\n    })\n\n    let dateDiv = document.createElement(\"div\");\n    const dateBtn = document.createElement('button');\n    if (projectName=='Today' || projectName=='This Week'){\n        dateBtn.disabled = true;\n        span.style.display = 'none';\n    }\n    \n    dateDiv.classList.add(\"task-date\");\n    dateBtn.classList.add('dateBtn');\n \n    if(!date){\n        dateBtn.innerHTML = \"No date\";\n    } else {\n        dateBtn.innerHTML = `${date}`;\n        if(date==formattedToday){\n            (0,_storage__WEBPACK_IMPORTED_MODULE_3__.addSavedTask)('Today', ListItem);\n        }\n        if(isDateInThisWeek(date)){\n            (0,_storage__WEBPACK_IMPORTED_MODULE_3__.addSavedTask)('This Week', ListItem);\n        }\n    }\n\n    dateDiv.appendChild(dateBtn);\n    \n    btn.appendChild(icon);\n    btn.appendChild(nameDiv);\n    btn.appendChild(dateDiv);\n    btn.appendChild(span);\n\n    let taskDateInput = null;\n    dateBtn.addEventListener('click', function(){\n        if (!taskDateInput) {\n            taskDateInput = document.createElement('input');\n            taskDateInput.type = 'date';\n            taskDateInput.id = 'taskDate';\n\n            // Append the input element to the clicked dateDiv\n            dateDiv.appendChild(taskDateInput);\n            dateBtn.style.display = 'none';\n\n            taskDateInput.addEventListener('change', function(event){\n                taskDateInput.remove();\n                taskDateInput = null;\n                (0,_storage__WEBPACK_IMPORTED_MODULE_3__.setSavedTaskDate)(projectName, text, event.target.value);\n                let newDate = (0,_storage__WEBPACK_IMPORTED_MODULE_3__.getToDoList)().getProject(projectName).getTask(text).getDate();\n                dateBtn.innerHTML = `${newDate}` || 'No date';\n\n                if(newDate==formattedToday){ // here must also check whether project already contains the task!!!!!!!!!!!!!!!!!!!!\n                    (0,_storage__WEBPACK_IMPORTED_MODULE_3__.deleteSavedTask)('Today', text);\n                    (0,_storage__WEBPACK_IMPORTED_MODULE_3__.addSavedTask)('Today', (0,_storage__WEBPACK_IMPORTED_MODULE_3__.getToDoList)().getProject(projectName).getTask(text));\n                } else {\n                    (0,_storage__WEBPACK_IMPORTED_MODULE_3__.deleteSavedTask)('Today', text);\n                }\n                if(isDateInThisWeek(newDate)){\n                    (0,_storage__WEBPACK_IMPORTED_MODULE_3__.deleteSavedTask)('This Week', text);\n                    (0,_storage__WEBPACK_IMPORTED_MODULE_3__.addSavedTask)('This Week', (0,_storage__WEBPACK_IMPORTED_MODULE_3__.getToDoList)().getProject(projectName).getTask(text));\n                } else {\n                    (0,_storage__WEBPACK_IMPORTED_MODULE_3__.deleteSavedTask)('This Week', text);\n                }\n                dateBtn.style.display = 'inline-block';\n            });\n\n            // Add a click event to the document to handle cancellation\n            document.addEventListener('click', function(event) {\n                \n                    // Check if the clicked element is the date input or date button\n                    if (event.target !== taskDateInput && !event.target.classList.contains('dateBtn')) {\n                        \n                        // Remove the input element and remove the click event listener\n                        if (taskDateInput) {\n                            taskDateInput.remove();\n                            taskDateInput = null;\n                            dateBtn.style.display = 'inline-block';\n                        }\n                    }\n            });\n        }\n    })\n\n    return btn;\n}\n\nfunction createProject(projectName) {\n\n    let btn = document.createElement(\"button\");\n    btn.classList.add(\"project-button\");\n\n    btn.innerHTML = '<i class=\"fas fa-project-diagram\"></i>';\n\n    const span = document.createElement('span');\n    span.classList.add('close');\n    span.classList.add('left');\n    span.innerHTML = '&times;';\n\n    span.addEventListener('click', function(event){\n        event.stopPropagation();\n        const array = (0,_storage__WEBPACK_IMPORTED_MODULE_3__.getToDoList)().getProject(projectName).getTasks();\n        array.forEach(task => {\n            if((0,_storage__WEBPACK_IMPORTED_MODULE_3__.getToDoList)().getProject('Today').contains(task.getName())){\n                (0,_storage__WEBPACK_IMPORTED_MODULE_3__.deleteSavedTask)('Today', task.getName());\n            }\n            if((0,_storage__WEBPACK_IMPORTED_MODULE_3__.getToDoList)().getProject('This Week').contains(task.getName())){\n                (0,_storage__WEBPACK_IMPORTED_MODULE_3__.deleteSavedTask)('This Week', task.getName());\n            }\n        });\n        (0,_storage__WEBPACK_IMPORTED_MODULE_3__.deleteSavedProject)(projectName);\n        (0,_storage__WEBPACK_IMPORTED_MODULE_3__.deleteSavedDoneProject)(projectName);\n        displayProjects();\n    })\n\n    let nameDiv = document.createElement(\"div\");\n    nameDiv.classList.add(\"project-name\");\n    nameDiv.innerText = projectName;\n    btn.appendChild(nameDiv);\n    btn.appendChild(span);\n\n    return btn;\n}\n\nfunction displayProjectTasks(projectName) {\n\n    const project = (0,_storage__WEBPACK_IMPORTED_MODULE_3__.getToDoList)().getProject(projectName)\n    const projectDone = (0,_storage__WEBPACK_IMPORTED_MODULE_3__.getDoneList)().getProject(projectName);\n\n    const taskContainer = document.getElementById('task-container');\n\n    if(project== undefined){\n        taskContainer.innerHTML = '';\n    } else {\n        const tasks = project.getTasks();\n\n        taskContainer.innerHTML = '';\n\n        let label = document.createElement('h1');\n        label.setAttribute(\"id\", \"projectLabel\");\n        label.innerText = projectName;\n\n        taskContainer.appendChild(label);\n\n        const addTaskButton = createAddTaskButton();\n\n        if (projectName=='Today' || projectName=='This Week'){\n            addTaskButton.style.display = 'none';\n        } else {\n            addTaskButton.style.display = 'inline-block';\n        \n            const modal = document.getElementById(\"myModal1\");\n            const span = document.getElementsByClassName(\"close1\")[0];\n            const addButton = document.getElementById(\"add1\");\n            const cancelButton = document.getElementById(\"cancel1\");\n\n            addTaskButton.onclick = function() {\n            modal.style.display = \"block\";\n            }\n\n            span.onclick = function() {\n            modal.style.display = \"none\";\n            }\n\n            window.onclick = function(event) {\n                if (event.target == modal) {\n                modal.style.display = \"none\";\n                }}\n\n            addButton.onclick = function() {\n                const taskName = document.getElementById(\"taskName\").value;\n                const taskDate = document.getElementById(\"taskDate\").value;\n\n                if (taskName.trim() === \"\") {\n                    alert(\"Task name is required.\");\n                    return;\n                }\n            \n                let newTask = new _list_item__WEBPACK_IMPORTED_MODULE_0__.ListItem(taskName,taskDate);\n                \n                (0,_storage__WEBPACK_IMPORTED_MODULE_3__.addSavedTask)(projectName, newTask);\n                displayProjectTasks(projectName);\n            \n                modal.style.display = \"none\";\n                }\n\n            cancelButton.onclick = function() {\n            modal.style.display = \"none\";\n                }\n\n            taskContainer.appendChild(addTaskButton);\n        }\n\n        tasks.forEach((task) => {\n            const button = createTask(task, projectName);\n            taskContainer.appendChild(button);\n\n        });\n    }\n\n    const containerDone = document.getElementById('done-container');\n\n    if(projectDone== undefined){\n        containerDone.innerHTML = '';\n        console.log('project undefined');\n    } else {\n        console.log('project should work');\n        const tasksDone = projectDone.getTasks();\n        containerDone.innerHTML = '';\n\n        tasksDone.forEach((task) => {\n            const button = createDoneTask(task, projectName);\n            containerDone.appendChild(button);\n\n        });\n    }\n    }\n\n    function displayProjects() {\n\n        let projects = (0,_storage__WEBPACK_IMPORTED_MODULE_3__.getToDoList)().getProjects();\n        let projectsDone = (0,_storage__WEBPACK_IMPORTED_MODULE_3__.getDoneList)().getProjects();\n        const projectContainer = document.getElementById('project-container');\n        projectContainer.innerHTML = '';\n\n        const homeButton = document.getElementById(\"button-home-projects\");\n        homeButton.addEventListener('click', function() {\n            displayProjectTasks('Home');\n        })\n\n        const todayButton = document.getElementById(\"button-today-projects\");\n        todayButton.addEventListener('click', function() {\n            displayProjectTasks('Today');\n        })\n\n        const thisWeekButton = document.getElementById(\"button-week-projects\");\n        thisWeekButton.addEventListener('click', function() {\n            displayProjectTasks('This Week');\n        })\n\n        for (let j = 3; j<projects.length; j++){\n            const projectButton = createProject(projects[j].getName());\n            projectContainer.appendChild(projectButton);\n            projectButton.classList.add('project-button');\n            projectButton.addEventListener('click', function() {\n                displayProjectTasks(projects[j].getName());\n            })\n    }\n}\n\nfunction manageAddProjectButton(){\n\n    const modal = document.getElementById(\"myModal\");\n    const btn = document.getElementById(\"button-add-project\");\n    const span = document.getElementById(\"close2\");\n    const addButton = document.getElementById(\"add\");\n    const cancelButton = document.getElementById(\"cancel\");\n\n    btn.onclick = function() {\n    modal.style.display = \"block\";\n    }\n\n    span.onclick = function() {\n        console.log('ok');\n    modal.style.display = \"none\";\n    }\n\n    document.onclick = function(event) {\n        if (event.target == modal) {\n        modal.style.display = \"none\";\n        }}\n\n    addButton.onclick = function() {\n    const projectName = document.getElementById(\"projectName\").value;\n\n    if (projectName.trim() === \"\") {\n        alert(\"Project name is required.\");\n        return;\n      }\n\n    let newProject = new _project__WEBPACK_IMPORTED_MODULE_1__.Project(projectName);\n    (0,_storage__WEBPACK_IMPORTED_MODULE_3__.addSavedProject)(newProject);\n    (0,_storage__WEBPACK_IMPORTED_MODULE_3__.addSavedDoneProject)(newProject);\n    displayProjects();\n\n    modal.style.display = \"none\";\n    }\n\n    cancelButton.onclick = function() {\n    modal.style.display = \"none\";\n    }\n}\n\nfunction checkTodayThisWeek(){\n    const today = (0,_storage__WEBPACK_IMPORTED_MODULE_3__.getToDoList)().getProject('Today').getTasks();\n    const thisWeek = (0,_storage__WEBPACK_IMPORTED_MODULE_3__.getToDoList)().getProject('This Week').getTasks();\n    const projects = (0,_storage__WEBPACK_IMPORTED_MODULE_3__.getToDoList)().getProjects();\n\n    today.forEach(task=>{\n        if(task.getDate()!== formattedToday){\n            (0,_storage__WEBPACK_IMPORTED_MODULE_3__.deleteSavedTask)('Today', task.getName());\n        }\n    });\n\n    thisWeek.forEach(task=>{\n        if(!isDateInThisWeek(task.getDate())){\n            (0,_storage__WEBPACK_IMPORTED_MODULE_3__.deleteSavedTask)('This Week', task.getName());\n        }\n    });\n\n    for(let i = 2; i<projects.length; i++){\n        let projectTasks = projects[i].getTasks();\n        projectTasks.forEach(task=>{\n            if(task.getDate() == formattedToday){\n                (0,_storage__WEBPACK_IMPORTED_MODULE_3__.addSavedTask)('Today', task);\n            }\n            if(isDateInThisWeek(task.getDate())){\n                (0,_storage__WEBPACK_IMPORTED_MODULE_3__.addSavedTask)('This Week', task);\n            }\n        })\n\n    }\n}\n\nfunction createDoneTask(ListItem, projectName) {\n\n    let text = ListItem.getName();\n\n    let btn = document.createElement(\"div\");\n    btn.classList.add(\"task-button\");\n\n    const icon = document.createElement('i');\n    icon.classList.add('far', 'fa-check-square');\n    icon.style.fontSize = '24px';\n\n    icon.addEventListener('click', function(event){\n        event.stopPropagation();\n            icon.classList = [];\n            icon.classList.add('fa-regular', 'fa-square');\n            (0,_storage__WEBPACK_IMPORTED_MODULE_3__.addSavedTask)(projectName, ListItem);\n            (0,_storage__WEBPACK_IMPORTED_MODULE_3__.deleteSavedDoneTask)(projectName, text);\n            displayProjectTasks(projectName);\n    })\n\n    let nameDiv = document.createElement(\"div\");\n    nameDiv.classList.add(\"task-name\");\n    nameDiv.innerText = text;\n\n    const span = document.createElement('span');\n    span.classList.add('close');\n    span.innerHTML = '&times;';\n\n    span.addEventListener('click', function(){\n        (0,_storage__WEBPACK_IMPORTED_MODULE_3__.deleteSavedDoneTask)(projectName, text);\n        displayProjectTasks(projectName);\n    })\n\n    btn.appendChild(icon);\n    btn.appendChild(nameDiv);\n    btn.appendChild(span);\n\n    return btn;\n}\n\n\n//# sourceURL=webpack:///./src/interface.js?");

/***/ }),

/***/ "./src/list-item.js":
/*!**************************!*\
  !*** ./src/list-item.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ListItem: () => (/* binding */ ListItem)\n/* harmony export */ });\nclass ListItem {\n    constructor(name, dueDate){\n        this.name = name;\n        this.dueDate = dueDate;\n    }\n\n    getName(){\n        return this.name;\n    }\n    getDate(){\n        return this.dueDate;\n    }\n    setName(name){\n        this.name=name;\n    }\n    setDate(dueDate){\n        this.dueDate=dueDate;\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/list-item.js?");

/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DoneList: () => (/* binding */ DoneList),\n/* harmony export */   List: () => (/* binding */ List)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-item */ \"./src/list-item.js\");\n\n\n\nclass List {\n    constructor(){\n        this.projects = [];\n        this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__.Project('Today'));\n        this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__.Project('This Week'));\n        this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__.Project('Home'));\n    }\n\n    getProjects(){\n        return this.projects;\n    }\n\n    setProjects(projectArray){\n        this.projects = projectArray;\n    }\n\n    getProject(name){\n        return this.projects.find((project)=> project.getName() === name);\n    }\n\n    addProject(newProj){\n        if (this.projects.find((project)=> project.getName() === newProj.getName())) return;\n        this.projects.push(newProj);\n    }\n\n    deleteProject(name){\n        this.projects = this.projects.filter((project)=> project.getName() !== name);\n    }\n}\n\nclass DoneList {\n    constructor(){\n        this.projects = [];\n        this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__.Project('Home'));\n    }\n\n    getProjects(){\n        return this.projects;\n    }\n\n    setProjects(projectArray){\n        this.projects = projectArray;\n    }\n\n    getProject(name){\n        return this.projects.find((project)=> project.getName() === name);\n    }\n\n    addProject(newProj){\n        if (this.projects.find((project)=> project.getName() === newProj.getName())) return;\n        this.projects.push(newProj);\n    }\n\n    deleteProject(name){\n        this.projects = this.projects.filter((project)=> project.getName() !== name);\n    }\n}\n\n\n\n\n\n//# sourceURL=webpack:///./src/list.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-item */ \"./src/list-item.js\");\n\n\nclass Project {\n    constructor(name){\n        this.name = name;\n        this.tasks = [];\n    }\n\n    getName(){\n        return this.name;\n    }\n    getTasks(){\n        return this.tasks;\n    }\n    getTask(taskName){\n        return this.tasks.find((task)=> task.getName() === taskName);\n    }\n\n    setName(name){\n        this.name = name;\n    }\n    setTasks(taskArray){\n        this.tasks = taskArray;\n    }\n    addTask(newTask){\n        if(this.tasks.find((task)=> task.getName()===newTask.getName())) return;\n        this.tasks.push(newTask)\n    }\n\n    deleteTask(taskName){\n        this.tasks = this.tasks.filter((task)=> task.name !== taskName);\n    }\n    contains(taskName) {\n        return this.tasks.some((task) => task.getName() === taskName);\n      }\n}\n\n\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addSavedDoneProject: () => (/* binding */ addSavedDoneProject),\n/* harmony export */   addSavedDoneTask: () => (/* binding */ addSavedDoneTask),\n/* harmony export */   addSavedProject: () => (/* binding */ addSavedProject),\n/* harmony export */   addSavedTask: () => (/* binding */ addSavedTask),\n/* harmony export */   deleteSavedDoneProject: () => (/* binding */ deleteSavedDoneProject),\n/* harmony export */   deleteSavedDoneTask: () => (/* binding */ deleteSavedDoneTask),\n/* harmony export */   deleteSavedProject: () => (/* binding */ deleteSavedProject),\n/* harmony export */   deleteSavedTask: () => (/* binding */ deleteSavedTask),\n/* harmony export */   getDoneList: () => (/* binding */ getDoneList),\n/* harmony export */   getToDoList: () => (/* binding */ getToDoList),\n/* harmony export */   renameSavedDoneTask: () => (/* binding */ renameSavedDoneTask),\n/* harmony export */   renameSavedTask: () => (/* binding */ renameSavedTask),\n/* harmony export */   saveDoneList: () => (/* binding */ saveDoneList),\n/* harmony export */   saveList: () => (/* binding */ saveList),\n/* harmony export */   setSavedTaskDate: () => (/* binding */ setSavedTaskDate)\n/* harmony export */ });\n/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-item */ \"./src/list-item.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ \"./src/list.js\");\n\n\n\n\nfunction saveList(data) {\n    localStorage.setItem('myData', JSON.stringify(data));\n}\n\nfunction getToDoList(){\n    const list = Object.assign(new _list__WEBPACK_IMPORTED_MODULE_2__.List(), JSON.parse(localStorage.getItem('myData')));\n\n    list.setProjects(list.getProjects().map((project)=> Object.assign(new _project__WEBPACK_IMPORTED_MODULE_1__.Project(), project)));\n\n    list.getProjects().forEach((project)=> project.setTasks(project.getTasks().map((task)=> Object.assign(new _list_item__WEBPACK_IMPORTED_MODULE_0__.ListItem(), task))));\n\n    return list;\n}\n\nfunction addSavedProject(project){\n    const list = getToDoList();\n    list.addProject(project);\n    saveList(list);\n}\n\nfunction deleteSavedProject(projectName){\n    const list = getToDoList();\n    list.deleteProject(projectName);\n    saveList(list);\n}\n\nfunction addSavedTask(projectName, task){\n    const list = getToDoList();\n    list.getProject(projectName).addTask(task);\n    saveList(list);\n} \n\nfunction deleteSavedTask(projectName, taskName){\n    const list = getToDoList();\n    list.getProject(projectName).deleteTask(taskName);\n    saveList(list);\n} \n\nfunction renameSavedTask(projectName, taskName, newName){\n    const list = getToDoList();\n    list.getProject(projectName).getTask(taskName).setName(newName);\n    saveList(list);\n} \n\nfunction setSavedTaskDate(projectName, taskName, newDate){\n    const list = getToDoList();\n    list.getProject(projectName).getTask(taskName).setDate(newDate);\n    saveList(list);\n}\n\n//DoneList\n\nfunction saveDoneList(data) {\n    localStorage.setItem('DoneList', JSON.stringify(data));\n}\n\nfunction getDoneList(){\n    const list = Object.assign(new _list__WEBPACK_IMPORTED_MODULE_2__.DoneList(), JSON.parse(localStorage.getItem('DoneList')));\n\n    list.setProjects(list.getProjects().map((project)=> Object.assign(new _project__WEBPACK_IMPORTED_MODULE_1__.Project(), project)));\n\n    list.getProjects().forEach((project)=> project.setTasks(project.getTasks().map((task)=> Object.assign(new _list_item__WEBPACK_IMPORTED_MODULE_0__.ListItem(), task))));\n\n    return list;\n}\n\nfunction addSavedDoneProject(project){\n    const list = getDoneList();\n    list.addProject(project);\n    saveDoneList(list);\n}\nfunction deleteSavedDoneProject(projectName){\n    const list = getDoneList();\n    list.deleteProject(projectName);\n    saveDoneList(list);\n}\n\nfunction addSavedDoneTask(projectName, task){\n    const list = getDoneList();\n    list.getProject(projectName).addTask(task);\n    saveDoneList(list);\n} \n\nfunction deleteSavedDoneTask(projectName, taskName){\n    const list = getDoneList();\n    list.getProject(projectName).deleteTask(taskName);\n    saveDoneList(list);\n} \n\nfunction renameSavedDoneTask(projectName, taskName, newName){\n    const list = getDoneList();\n    list.getProject(projectName).getTask(taskName).setName(newName);\n    saveDoneList(list);\n} \n\n\n\n//# sourceURL=webpack:///./src/storage.js?");

/***/ }),

/***/ "./src/dirty-font.ttf":
/*!****************************!*\
  !*** ./src/dirty-font.ttf ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1ac3600a457c00e384ec.ttf\";\n\n//# sourceURL=webpack:///./src/dirty-font.ttf?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;