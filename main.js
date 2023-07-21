"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkjavascriptcapstone"] = self["webpackChunkjavascriptcapstone"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n  padding: 0;\r\n  margin: 0;\r\n  background-color: rgb(161, 230, 230);\r\n}\r\n\r\n.dflex {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  gap: 15px;\r\n  flex-wrap: wrap;\r\n}\r\n\r\nheader,\r\nfooter {\r\n  background-color: rgb(245, 209, 109);\r\n}\r\n\r\nmain {\r\n  padding: 15px;\r\n}\r\n\r\n#logo {\r\n  max-width: 100px;\r\n}\r\n\r\nul,\r\nli a {\r\n  text-decoration: none;\r\n  list-style: none;\r\n  color: black;\r\n  font-size: 15px;\r\n}\r\n\r\nfooter {\r\n  font-size: 15px;\r\n  text-align: center;\r\n  justify-content: center;\r\n  height: 50px;\r\n}\r\n\r\n.mealimg {\r\n  width: 200px;\r\n}\r\n\r\n.mealtitle {\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  text-align: center;\r\n}\r\n\r\nh2 {\r\n  color: brown;\r\n}\r\n\r\n.container,\r\n.item {\r\n  width: 300px;\r\n  height: 460px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.item {\r\n  border: 3px solid brown;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n  background-color: rgba(250, 232, 182, 0.705);\r\n}\r\n\r\n#likes {\r\n  background-color: transparent;\r\n  border: transparent;\r\n  font-size: 30px;\r\n  color: brown;\r\n}\r\n\r\n#likes:active {\r\n  color: red;\r\n  font-weight: 900;\r\n}\r\n\r\n#comments {\r\n  background-color: rgb(245, 209, 109);\r\n  width: 100px;\r\n  height: 34px;\r\n  border-radius: 12px;\r\n  border: 3px solid brown;\r\n}\r\n\r\n#commentsPopup {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 90%;\r\n  max-width: 90vw;\r\n  height: 90vh;\r\n  max-height: 90vh;\r\n  overflow-y: auto;\r\n  background-color: rgb(250, 232, 182);\r\n  padding: 20px;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\r\n  text-align: center;\r\n  border: 3px solid brown;\r\n}\r\n\r\n#commentsPopup h2 {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n#commentsPopup img {\r\n  width: 400px;\r\n  height: 300px;\r\n  object-fit: cover;\r\n}\r\n\r\n#details-instructions {\r\n  color: brown;\r\n  padding: 30px;\r\n  margin-left: 90px;\r\n  margin-right: 90px;\r\n}\r\n\r\n#commentsPopup h3 {\r\n  color: brown;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n#nameInput {\r\n  margin-bottom: 10px;\r\n  width: 70%;\r\n  padding: 5px;\r\n  border: 1px solid brown;\r\n}\r\n\r\n#commentInput {\r\n  margin-bottom: 20px;\r\n  width: 70%;\r\n  padding: 5px;\r\n  height: 100px;\r\n  border: 1px solid brown;\r\n}\r\n\r\n#commentsPopup .closeButton {\r\n  position: absolute;\r\n  top: 20px;\r\n  right: 20px;\r\n  background: none;\r\n  border: none;\r\n  padding: 0;\r\n  font-size: 40px;\r\n  cursor: pointer;\r\n  color: brown;\r\n}\r\n\r\n#submitCommentButton {\r\n  background-color: rgb(245, 209, 109);\r\n  width: 120px;\r\n  height: 40px;\r\n  border-radius: 12px;\r\n  border: 2px solid brown;\r\n  color: brown;\r\n  font-size: 16px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.comment-text {\r\n  color: brown;\r\n  font-size: 14px;\r\n}\r\n\r\n.comments-count {\r\n  color: brown;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n}\r\n\r\n#mainTitle {\r\n  color: brown;\r\n  font-size: 30px;\r\n  font-weight: 900;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Modules/commentsCounter.js":
/*!****************************************!*\
  !*** ./src/Modules/commentsCounter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countComments = () => {\r\n  const comments = document.querySelectorAll('.comment-text');\r\n  return comments.length;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countComments);\r\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/Modules/commentsCounter.js?");

/***/ }),

/***/ "./src/Modules/commentsPopup.js":
/*!**************************************!*\
  !*** ./src/Modules/commentsPopup.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getItemsDetails_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getItemsDetails.js */ \"./src/Modules/getItemsDetails.js\");\n/* harmony import */ var _getComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getComments.js */ \"./src/Modules/getComments.js\");\n/* harmony import */ var _sendComment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sendComment.js */ \"./src/Modules/sendComment.js\");\n/* harmony import */ var _commentsCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commentsCounter.js */ \"./src/Modules/commentsCounter.js\");\n\r\n\r\n\r\n\r\n\r\nconst showCommentsPopup = async (id) => {\r\n  const details = await (0,_getItemsDetails_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id);\r\n  const appId = 'k513WvYOj4wUaRdaeuNF';\r\n\r\n  const popup = document.createElement('div');\r\n  popup.id = 'commentsPopup';\r\n  popup.innerHTML = `\r\n  <h2>${details.strMeal}</h2>\r\n  <img src=\"${details.strMealThumb}\" alt=\"${details.strMeal}\">\r\n  <p id=\"details-instructions\">${details.strInstructions}</p>\r\n  <div id=\"commentsContainer\"></div>\r\n  <h3>Add a comment</h3>\r\n  <form id=\"commentForm\">\r\n    <div>\r\n      <input type=\"text\" id=\"nameInput\" placeholder=\"Your name\">\r\n    </div>\r\n    <div>\r\n      <textarea id=\"commentInput\" placeholder=\"Your comment\"></textarea>\r\n    </div>\r\n    <button id=\"submitCommentButton\">Comment</button>\r\n  </form>\r\n  <button class=\"closeButton\">&times;</button>\r\n`;\r\n\r\n  document.body.appendChild(popup);\r\n\r\n  const commentsContainer = popup.querySelector('#commentsContainer');\r\n\r\n  // Create a new element to display the comment count\r\n  const commentsCountElement = document.createElement('p');\r\n  commentsCountElement.id = 'commentsCount';\r\n  commentsCountElement.classList.add('comments-count');\r\n\r\n  popup.insertBefore(commentsCountElement, commentsContainer);\r\n\r\n  const updateComments = async () => {\r\n    const comments = await (0,_getComments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(appId, id);\r\n    if (!Array.isArray(comments)) {\r\n      // This block it's designed to handle the empty data in comments\r\n    } else {\r\n      commentsContainer.innerHTML = '';\r\n      comments.forEach((comment) => {\r\n        const commentElement = document.createElement('p');\r\n        commentElement.textContent = `${comment.creation_date} - ${comment.username}: ${comment.comment}`;\r\n        commentElement.classList.add('comment-text');\r\n        commentsContainer.appendChild(commentElement);\r\n      });\r\n      // Update the comments count after updating the comments\r\n      commentsCountElement.textContent = `Comments: ${(0,_commentsCounter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()}`;\r\n    }\r\n  };\r\n\r\n  await updateComments();\r\n\r\n  const form = popup.querySelector('#commentForm');\r\n  form.addEventListener('submit', async (event) => {\r\n    const usernameInput = popup.querySelector('#nameInput');\r\n    const commentInput = popup.querySelector('#commentInput');\r\n\r\n    event.preventDefault();\r\n\r\n    const username = usernameInput.value;\r\n    const comment = commentInput.value;\r\n\r\n    await (0,_sendComment_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(appId, id, username, comment);\r\n    await updateComments(); // Update the comments (and the count) after submitting a comment\r\n\r\n    // Clear the input fields after the comment has been sent and comments have been updated\r\n    usernameInput.value = '';\r\n    commentInput.value = '';\r\n  });\r\n\r\n  popup.querySelector('.closeButton').addEventListener('click', () => {\r\n    document.body.removeChild(popup);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showCommentsPopup);\r\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/Modules/commentsPopup.js?");

/***/ }),

/***/ "./src/Modules/errorHandler.js":
/*!*************************************!*\
  !*** ./src/Modules/errorHandler.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst handleFetchError = (error) => {\r\n  const errorMessage = document.getElementById('error-message');\r\n  if (errorMessage) {\r\n    errorMessage.innerHTML = `<span>${error.message}</span>`;\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleFetchError);\n\n//# sourceURL=webpack://javascriptcapstone/./src/Modules/errorHandler.js?");

/***/ }),

/***/ "./src/Modules/getComments.js":
/*!************************************!*\
  !*** ./src/Modules/getComments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getComments = async (appId, id) => {\r\n  try {\r\n    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${id}`);\r\n    const data = await response.json();\r\n    return data;\r\n  } catch (error) {\r\n    return error;\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);\n\n//# sourceURL=webpack://javascriptcapstone/./src/Modules/getComments.js?");

/***/ }),

/***/ "./src/Modules/getItems.js":
/*!*********************************!*\
  !*** ./src/Modules/getItems.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commentsPopup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentsPopup.js */ \"./src/Modules/commentsPopup.js\");\n/* harmony import */ var _errorHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errorHandler.js */ \"./src/Modules/errorHandler.js\");\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./likes.js */ \"./src/Modules/likes.js\");\n/* harmony import */ var _itemCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./itemCounter.js */ \"./src/Modules/itemCounter.js\");\n\r\n\r\n\r\n\r\n\r\nconst container = document.querySelector('#itemsContainer');\r\n\r\nconst displayItems = (dataMeals) => {\r\n  dataMeals.forEach(async (meals) => {\r\n    const numberOfLikes = await (0,_likes_js__WEBPACK_IMPORTED_MODULE_2__.getLikes)();\r\n    let likes = 0;\r\n    numberOfLikes.forEach((elem) => {\r\n      if (elem.item_id === meals.idMeal) {\r\n        likes = elem.likes;\r\n      }\r\n    });\r\n    const mainDiv = document.createElement('div');\r\n    mainDiv.className = 'dflex container';\r\n    mainDiv.innerHTML = `\r\n    <div class=\"item dflex\">\r\n      <img class=\"mealimg\" id=\"${meals.idMeal}\" src=\"${meals.strMealThumb}\" alt=\"${meals.strMealThumb}\">\r\n      <div class=\"dflex mealtitle\">\r\n        <h2>${meals.strMeal}</h2>\r\n        <div>\r\n          <span class=\"${meals.idMeal}\" id=\"likesNumber\">${likes} likes</span>\r\n          <button class=\"${meals.idMeal}\" id=\"likes\">&#9825;</button>\r\n        </div>\r\n      </div>\r\n        <button class=\"testing\" id=\"comments\">Comments</button>\r\n      </div>\r\n    `;\r\n\r\n    mainDiv.querySelectorAll('#comments').forEach((commentsButton) => {\r\n      commentsButton.addEventListener('click', async () => {\r\n        await (0,_commentsPopup_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(meals.idMeal).catch(_errorHandler_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n      });\r\n    });\r\n\r\n    mainDiv.querySelector('#likes').addEventListener('click', async (event) => {\r\n      const id = event.target.className;\r\n      await (0,_likes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(id);\r\n      const updateLikes = mainDiv.querySelector('#likesNumber');\r\n      await (0,_likes_js__WEBPACK_IMPORTED_MODULE_2__.updateText)(meals.idMeal, updateLikes);\r\n    });\r\n\r\n    container.appendChild(mainDiv);\r\n  });\r\n};\r\n\r\nconst getItems = async () => {\r\n  const request = await fetch('https://themealdb.com/api/json/v1/1/filter.php?c=Vegetarian');\r\n  const data = await request.json();\r\n  displayItems(data.meals);\r\n  (0,_itemCounter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(data.meals.length);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getItems);\n\n//# sourceURL=webpack://javascriptcapstone/./src/Modules/getItems.js?");

/***/ }),

/***/ "./src/Modules/getItemsDetails.js":
/*!****************************************!*\
  !*** ./src/Modules/getItemsDetails.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getItemDetails = async (id) => {\r\n  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);\r\n  const data = await request.json();\r\n  return data.meals[0];\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getItemDetails);\n\n//# sourceURL=webpack://javascriptcapstone/./src/Modules/getItemsDetails.js?");

/***/ }),

/***/ "./src/Modules/itemCounter.js":
/*!************************************!*\
  !*** ./src/Modules/itemCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst homeItemCounter = (containerItems) => {\r\n  const hometitle = document.querySelector('#mainTitle');\r\n  hometitle.textContent = `${containerItems} Vegetarian Recipes`;\r\n  return hometitle.textContent;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeItemCounter);\n\n//# sourceURL=webpack://javascriptcapstone/./src/Modules/itemCounter.js?");

/***/ }),

/***/ "./src/Modules/likes.js":
/*!******************************!*\
  !*** ./src/Modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getLikes: () => (/* binding */ getLikes),\n/* harmony export */   updateText: () => (/* binding */ updateText)\n/* harmony export */ });\nconst postLikes = async (id) => {\r\n  const sendData = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/k513WvYOj4wUaRdaeuNF/likes/', {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n    body: JSON.stringify({\r\n      item_id: id,\r\n    }),\r\n  });\r\n  const result = await sendData.text();\r\n  return result;\r\n};\r\n\r\nconst getLikes = async () => {\r\n  const requestLikes = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/k513WvYOj4wUaRdaeuNF/likes/');\r\n  const dataLikes = await requestLikes.json();\r\n  return dataLikes;\r\n};\r\n\r\nconst updateText = async (idmeal, span) => {\r\n  const numberOfLikes = await getLikes();\r\n  let likes = 0;\r\n  numberOfLikes.forEach((elem) => {\r\n    if (elem.item_id === idmeal) {\r\n      likes = elem.likes;\r\n    }\r\n  });\r\n  span.textContent = `${likes} likes`;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postLikes);\n\n//# sourceURL=webpack://javascriptcapstone/./src/Modules/likes.js?");

/***/ }),

/***/ "./src/Modules/sendComment.js":
/*!************************************!*\
  !*** ./src/Modules/sendComment.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendComment = async (appId, id, username1, comment1) => {\r\n  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify({\r\n      item_id: id,\r\n      username: username1,\r\n      comment: comment1,\r\n    }),\r\n  });\r\n\r\n  if (!response.ok) {\r\n    throw new Error('Error sending the comment');\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendComment);\n\n//# sourceURL=webpack://javascriptcapstone/./src/Modules/sendComment.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _images_VegetarianRestauratLogo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/VegetarianRestauratLogo.png */ \"./src/images/VegetarianRestauratLogo.png\");\n/* harmony import */ var _Modules_getItems_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/getItems.js */ \"./src/Modules/getItems.js\");\n\r\n\r\n\r\n\r\ndocument.querySelector('#logo').src = _images_VegetarianRestauratLogo_png__WEBPACK_IMPORTED_MODULE_1__;\r\n\r\nwindow.addEventListener('load', () => {\r\n  (0,_Modules_getItems_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n});\r\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/index.js?");

/***/ }),

/***/ "./src/images/VegetarianRestauratLogo.png":
/*!************************************************!*\
  !*** ./src/images/VegetarianRestauratLogo.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b3909570c94cc41b9906.png\";\n\n//# sourceURL=webpack://javascriptcapstone/./src/images/VegetarianRestauratLogo.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);