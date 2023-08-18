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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    margin: 0;\n    padding: 0;\n    font-family: Arial, sans-serif;\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n}\n\nheader {\n    background-color: #3498db;\n    color: white;\n    display: flex;\n    justify-content: left;\n    padding-left: 5vw;\n    align-items: center;\n    height: 10vh;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n#container {\n    flex-grow: 1;\n    display: flex;\n}\n\n#menu-bar {\n    display: flex;\n    flex-direction: column;\n    background-color: #eaeaea;\n    flex-basis: 20%;\n    border-right: 1px solid #dcdcdc;\n    padding: 20px;\n    overflow: scroll;\n}\n\n#task-container {\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    background-color: #f9f9f9;\n    padding-top: 20px;\n    padding-left: min(300px, 15%);\n    padding-right: min(300px, 15%);\n}\n\nfooter {\n    background-color: #2c3e50;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 5vh;\n}\n\n@media screen and (max-width: 600px) {\n    #container {\n        flex-direction: column;\n    }\n\n    #menu-bar, #task-container {\n        flex-basis: auto;\n        flex-grow: 1;\n        width: 100%;\n    }\n}\n\n.task-button {\n    display: flex;\n    justify-content: space-between; /* This ensures the name is on the left and the date is on the right */\n    width: 100%;\n    padding: 10px;\n    border: 1px solid #ccc;\n    margin-bottom: 10px;\n}\n\n.task-name {\n    flex-grow: 1; /* Allows name to take as much space as available */\n    text-align: left;\n}\n\n.task-date {\n    margin-left: 20px; /* Some spacing between name and date */\n    text-align: right;\n}\n\n.default-projects, #project-container{\n    margin-top: 10px;\n    margin-bottom: 20px;\n    display: flex;\n    flex-direction: column;\n}\n\n.button-default-project, .project-button {\n    box-sizing: border-box;\n    margin-top: 10px;\n    text-align: left;\n    font-family: Arial;\n    color: #353434;\n    font-size: 20px;\n    background: transparent;\n    padding: 10px 20px 10px 20px;\n    border: none;\n    text-decoration: none;\n  }\n  \n  .button-default-project:hover, .project-button:hover {\n    background: #b8dbff;\n    text-decoration: none;\n  }\n\n  .button-add-project{\n    background-color: transparent;\n    box-sizing: border-box;\n    margin-top: 10px;\n    color: #353434;\n    font-family: Arial;\n    border: none;\n    font-size: 16px;\n  }\n  .button-add-project:hover {\n    background: #b8dbff;\n    text-decoration: none;\n\n  }\n\n  h1{\n    margin-left: 20px;\n  }\n.modal, .modal1 {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0,0,0,0.4);\n  }\n  \n  .modal-content, .modal-content1 {\n    background-color: #fefefe;\n    margin: 15% auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 30%;\n  }\n  \n  .close, .close1 {\n    color: #aaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n  \n  .close:hover, .close:focus, .close1:hover, .close1:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n  }\n  \n\n\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface */ \"./src/interface.js\");\n\n\n\n    \n    \n\n    console.log(\"Window is loaded!\");\n    (0,_interface__WEBPACK_IMPORTED_MODULE_1__.displayProjects)(_interface__WEBPACK_IMPORTED_MODULE_1__.list);\n    (0,_interface__WEBPACK_IMPORTED_MODULE_1__.displayProjectTasks)(_interface__WEBPACK_IMPORTED_MODULE_1__.list.getProjects()[0]); \n    (0,_interface__WEBPACK_IMPORTED_MODULE_1__.manageAddProjectButton)();\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProject: () => (/* binding */ createProject),\n/* harmony export */   createTask: () => (/* binding */ createTask),\n/* harmony export */   displayProjectTasks: () => (/* binding */ displayProjectTasks),\n/* harmony export */   displayProjects: () => (/* binding */ displayProjects),\n/* harmony export */   list: () => (/* binding */ list),\n/* harmony export */   manageAddProjectButton: () => (/* binding */ manageAddProjectButton)\n/* harmony export */ });\n/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-item */ \"./src/list-item.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ \"./src/list.js\");\n\n\n\n\nconst list = new _list__WEBPACK_IMPORTED_MODULE_2__.List();\n\nfunction createAddTaskButton() {\n    const addTaskButton = document.createElement(\"button\");\n    addTaskButton.textContent = \"+ Add Task\";\n    addTaskButton.classList.add(\"add-task-button\");\n\n    return addTaskButton;\n}\n\nfunction createTask(ListItem) {\n    // Get name and date from the ListItem object\n    let text = ListItem.getName();\n    let date = ListItem.getDate();\n\n    // Create the button\n    let btn = document.createElement(\"div\");\n    btn.classList.add(\"task-button\");\n\n    // Create the name div and set its content\n    let nameDiv = document.createElement(\"div\");\n    nameDiv.classList.add(\"task-name\");\n    nameDiv.innerText = text;\n\n    // Create the date div and set its content\n    let dateDiv = document.createElement(\"div\");\n    const dateBtn = document.createElement('button');\n    dateDiv.classList.add(\"task-date\");\n    dateBtn.classList.add('dateBtn');\n \n    if(!date){\n        dateBtn.innerHTML = \"No date\";\n    } else {\n        dateBtn.innerHTML = `${date}`;\n    }\n\n    dateDiv.appendChild(dateBtn);\n    // Append the name and date divs to the button\n    btn.appendChild(nameDiv);\n    btn.appendChild(dateDiv);\n\n    return btn;\n    // Append the button to the task container\n    // document.getElementById(\"task-container\").appendChild(btn);\n}\n\nfunction createProject(Project) {\n\n    let text = Project.getName();\n\n    let btn = document.createElement(\"button\");\n    btn.classList.add(\"project-button\");\n\n    let nameDiv = document.createElement(\"div\");\n    nameDiv.classList.add(\"project-name\");\n    nameDiv.innerText = text;\n    btn.appendChild(nameDiv);\n\n    return btn;\n\n    //document.getElementById(\"menu-bar\").appendChild(btn);\n}\n\nfunction displayProjectTasks(Project) {\n\n    let tasks = Project.getTasks();\n    const taskContainer = document.getElementById('task-container');\n    taskContainer.innerHTML = '';\n\n    let label = document.createElement('h1');\n    label.innerText = Project.getName();\n\n    taskContainer.appendChild(label);\n\n    const addTaskButton = createAddTaskButton();\n    const modal = document.getElementById(\"myModal1\");\n    const span = document.getElementsByClassName(\"close1\")[0];\n    const addButton = document.getElementById(\"add1\");\n    const cancelButton = document.getElementById(\"cancel1\");\n\n    // When the user clicks the button, open the modal \n    addTaskButton.onclick = function() {\n    modal.style.display = \"block\";\n    }\n\n    // When the user clicks on <span> (x), close the modal\n    span.onclick = function() {\n    modal.style.display = \"none\";\n    }\n\n    addButton.onclick = function() {\n        const taskName = document.getElementById(\"taskName\").value;\n        const taskDate = document.getElementById(\"taskDate\").value;\n\n        if (taskName.trim() === \"\") {\n            alert(\"Task name is required.\");\n            return; // Do not close the modal if input is empty\n          }\n    \n        let newTask = new _list_item__WEBPACK_IMPORTED_MODULE_0__.ListItem(taskName,taskDate);\n        Project.addTask(newTask);\n        displayProjectTasks(Project);\n    \n        // Do something with projectName and projectDate\n        console.log(taskName, taskDate);\n    \n        modal.style.display = \"none\";\n        }\n\n    // When the user clicks on \"Cancel\", just close the modal\n    cancelButton.onclick = function() {\n    modal.style.display = \"none\";\n        }\n\n    window.onclick = function(event) {\n        if (event.target == modal) {\n            modal.style.display = \"none\";\n        }}\n\n    taskContainer.appendChild(addTaskButton);\n\n    tasks.forEach((task) => {\n        const button = createTask(task);\n        taskContainer.appendChild(button);\n\n    });\n    let dateDivs = document.getElementsByClassName('task-date');\n    let dateBtns = document.getElementsByClassName('dateBtn');\n    let taskDateInput = null;\n\n    if(dateBtns){\n        for (let i = 0; i < dateBtns.length; i++){\n        dateBtns[i].addEventListener('click', function(){\n            if (!taskDateInput) {\n                taskDateInput = document.createElement('input');\n                taskDateInput.type = 'date';\n                taskDateInput.id = 'taskDate';\n\n                // Append the input element to the clicked dateDiv\n                dateDivs[i].appendChild(taskDateInput);\n                dateBtns[i].style.display = 'none';\n\n                taskDateInput.addEventListener('input', function(event){\n                    Project.getTasks()[i].setDate(event.target.value);\n                    displayProjectTasks(Project);\n                    dateBtns[i].style.display = 'inline-block';\n                });\n\n                // Add a click event to the document to handle cancellation\n                document.addEventListener('click', function(event) {\n                    \n                        // Check if the clicked element is the date input or date button\n                        if (event.target !== taskDateInput && !event.target.classList.contains('dateBtn')) {\n                            dateBtns[i].style.display = 'inline-block';\n                            // Remove the input element and remove the click event listener\n                            if (taskDateInput) {\n                                taskDateInput.remove();\n                                taskDateInput = null;\n\n                            }\n                        }\n                });\n            }\n        });\n    }}\n}\n\nfunction displayProjects(List) {\n\n    let projects = List.getProjects();\n    const projectContainer = document.getElementById('project-container');\n    projectContainer.innerHTML = '';\n\n    const homeButton = document.getElementById(\"button-home-projects\");\n    homeButton.addEventListener('click', function() {\n        displayProjectTasks(projects[0]);\n    })\n\n    const todayButton = document.getElementById(\"button-today-projects\");\n    todayButton.addEventListener('click', function() {\n        displayProjectTasks(projects[1]);\n    })\n\n    const thisWeekButton = document.getElementById(\"button-week-projects\");\n    thisWeekButton.addEventListener('click', function() {\n        displayProjectTasks(projects[2]);\n    })\n\n    for (let j = 3; j<projects.length; j++){\n        const projectButton = createProject(projects[j]);\n        projectContainer.appendChild(projectButton);\n        projectButton.classList.add('project-button');\n        projectButton.addEventListener('click', function() {\n            displayProjectTasks(projects[j]);\n        })\n    }\n}\n\nfunction manageAddProjectButton(){\n\n    const modal = document.getElementById(\"myModal\");\n    const btn = document.getElementById(\"button-add-project\");\n    const span = document.getElementsByClassName(\"close\")[0];\n    const addButton = document.getElementById(\"add\");\n    const cancelButton = document.getElementById(\"cancel\");\n\n    // When the user clicks the button, open the modal \n    btn.onclick = function() {\n    modal.style.display = \"block\";\n    }\n\n    // When the user clicks on <span> (x), close the modal\n    span.onclick = function() {\n    modal.style.display = \"none\";\n    }\n\n    // When the user clicks on \"Add\" button, get the data and close the modal\n    addButton.onclick = function() {\n    const projectName = document.getElementById(\"projectName\").value;\n\n    if (projectName.trim() === \"\") {\n        alert(\"Project name is required.\");\n        return; // Do not close the modal if input is empty\n      }\n\n    let newProject = new _project__WEBPACK_IMPORTED_MODULE_1__.Project(projectName);\n    list.addProject(newProject);\n    displayProjects(list);\n\n    modal.style.display = \"none\";\n    }\n\n    // When the user clicks on \"Cancel\", just close the modal\n    cancelButton.onclick = function() {\n    modal.style.display = \"none\";\n    }\n\n    window.onclick = function(event) {\n        if (event.target == modal) {\n          modal.style.display = \"none\";\n        }}\n}\n\n\n//# sourceURL=webpack:///./src/interface.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   List: () => (/* binding */ List)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-item */ \"./src/list-item.js\");\n\n\n\nclass List {\n    constructor(){\n        this.projects = [];\n        this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__.Project('Home'));\n        this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__.Project('Today'));\n        this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__.Project('This Week'));\n    }\n\n    getProjects(){\n        return this.projects;\n    }\n\n    setProjects(projectArray){\n        this.projects = projectArray;\n    }\n\n    getProject(name){\n        return this.projects.find((project)=> project.getName() === name);\n    }\n\n    addProject(newProj){\n        if (this.projects.find((project)=> project.getName() === newProj.getName())) return;\n        this.projects.push(newProj);\n    }\n\n    deleteProject(name){\n        this.projects = this.projects.filter((project)=> project.getName() !== name);\n    }\n}\n\n\n\n\n//# sourceURL=webpack:///./src/list.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-item */ \"./src/list-item.js\");\n\n\nclass Project {\n    constructor(name){\n        this.name = name;\n        this.tasks = [];\n    }\n\n    getName(){\n        return this.name;\n    }\n    getTasks(){\n        return this.tasks;\n    }\n    getTask(taskName){\n        return this.tasks.find((task)=> task.getName() === taskName);\n    }\n\n    setName(name){\n        this.name = name;\n    }\n    setTasks(taskArray){\n        this.tasks = taskArray;\n    }\n    addTask(newTask){\n        if(this.tasks.find((task)=> task.getName()===newTask.getName())) return;\n        this.tasks.push(newTask)\n    }\n\n    deleteTask(taskName){\n        this.tasks = this.tasks.filter((task)=> task.getName() !== taskName);\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/project.js?");

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