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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* font-family: 'Acme', sans-serif;\\nfont-family: 'Cinzel', serif; */\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nheader {\\n  display: flex;\\n  align-items: center;\\n  padding-left: 2vw;\\n  text-align: center;\\n  background-color: #b22222;\\n  gap: 10vw;\\n}\\n\\n.poke-counter {\\n  color: white;\\n  font-family: \\\"Cinzel\\\", serif;\\n  font-weight: bold;\\n  text-decoration: none;\\n}\\n\\n.poke-counter:hover {\\n  text-decoration: underline;\\n}\\n\\nfooter {\\n  position: fixed;\\n  bottom: 0;\\n  padding: 2.5vw;\\n  border: solid grey 2px;\\n  width: 100%;\\n  background-color: #b22222;\\n  color: white;\\n  font-family: \\\"Cinzel\\\", serif;\\n}\\n\\n.items-container {\\n  padding: 2vw;\\n  display: grid;\\n  grid-template-columns: 30vw 30vw 30vw;\\n  gap: 4vw;\\n  margin-bottom: 10vw;\\n}\\n\\n.pokemon-card {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-around;\\n  align-items: center;\\n  width: 30vw;\\n}\\n\\n.pokemon-img {\\n  width: 30vw;\\n  height: 20vw;\\n  margin-bottom: 2vw;\\n}\\n\\n.pokemon-name {\\n  font-size: 5vw;\\n  margin-bottom: 1vw;\\n  font-family: \\\"Acme\\\", sans-serif;\\n  color: #b22222;\\n}\\n\\n.likes-counter {\\n  margin: 1vw;\\n  font-family: \\\"Cinzel\\\", serif;\\n  font-weight: 700;\\n  font-size: 2.5vw;\\n}\\n\\n.comment {\\n  border: groove black 2px;\\n  border-radius: 5px;\\n  height: 6vw;\\n  width: 12vw;\\n  text-decoration: none;\\n  cursor: pointer;\\n  background-color: #b22222;\\n  color: whitesmoke;\\n  text-align: center;\\n  padding-top: 1.5vw;\\n  font-size: 2vw;\\n  font-weight: 500;\\n  font-family: \\\"Cinzel\\\", serif;\\n}\\n\\n.comment:hover {\\n  background-color: #ae3333;\\n  color: black;\\n  border: solid gray 1px;\\n}\\n\\n/* card pop CSS */\\n\\n.pokemon-pop {\\n  display: none;\\n}\\n\\n.fixed-item {\\n  position: fixed;\\n  background-color: rgba(56, 56, 56, 0.8);\\n  top: 0;\\n  width: 100%;\\n  height: 100vh;\\n  z-index: 1;\\n  backdrop-filter: blur(2px);\\n}\\n\\n.body-card {\\n  position: absolute;\\n  z-index: 2;\\n  width: 40%;\\n  height: 90vh;\\n  background-color: gainsboro;\\n  border: solid 10px #ddd520;\\n  margin: auto;\\n  left: 0;\\n  right: 0;\\n  top: 0;\\n  bottom: 0;\\n  overflow-x: hidden;\\n  overflow-y: scroll;\\n  box-shadow:\\n    2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),\\n    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),\\n    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),\\n    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),\\n    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),\\n    100px 100px 80px rgba(0, 0, 0, 0.07);\\n}\\n\\n.grass {\\n  border: solid 10px #228b22;\\n}\\n\\n.fire {\\n  border: solid 10px #b22222;\\n}\\n\\n.water {\\n  border: solid 10px #4169e1;\\n}\\n\\n.fa-solid {\\n  position: absolute;\\n  right: 0;\\n  padding: 20px;\\n}\\n\\n.poke-img-div {\\n  text-align: center;\\n  border-bottom: solid 2px rgba(240, 255, 255, 0.5);\\n  padding: 5px;\\n}\\n\\n.poke-img-div img {\\n  width: 15vw;\\n}\\n\\n.poke-data {\\n  margin-top: 1vw;\\n}\\n\\n.poke-data h2 {\\n  text-align: center;\\n  font-family: 'Acme', sans-serif;\\n  font-size: 1.8rem;\\n}\\n\\n.poke-description-card {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\\n  margin: 0.5rem 0;\\n}\\n\\nul {\\n  text-align: center;\\n}\\n\\n.description-title {\\n  font-family: \\\"Acme\\\", sans-serif;\\n  list-style: none;\\n  font-size: 1rem;\\n  text-align: center;\\n}\\n\\n.li {\\n  font-family: \\\"Cinzel\\\", serif;\\n  list-style: none;\\n  font-size: 0.9rem;\\n}\\n\\n.display-comment h3 {\\n  font-family: 'Acme', sans-serif;\\n  text-align: center;\\n  padding-bottom: 10px;\\n  font-size: 1.2rem;\\n}\\n\\n.comment-line {\\n  font-family: 'Cinzel', serif;\\n  font-size: 0.8rem;\\n  width: 85%;\\n  margin: 0 auto;\\n}\\n\\n.comment-title {\\n  font-family: 'Acme', sans-serif;\\n  text-align: center;\\n  margin-top: 10px;\\n  padding-bottom: 5px;\\n  font-size: 1.2rem;\\n}\\n\\n#comment-form {\\n  display: flex;\\n  flex-direction: column;\\n  width: 80%;\\n  margin: 1vw auto;\\n}\\n\\n#comment-form input,\\ntextarea {\\n  padding: 5px;\\n  margin-bottom: 5px;\\n}\\n\\n.comment-btn {\\n  padding: 5px;\\n  width: 40%;\\n}\\n\\n@media only screen and (max-width: 600px) {\\n  .poke-data h2 {\\n    font-size: 1.2rem;\\n  }\\n\\n  .li {\\n    font-size: 0.8rem;\\n  }\\n\\n  .display-comment h3 {\\n    font-size: 1rem;\\n  }\\n\\n  .comment-line {\\n    font-size: 0.7rem;\\n  }\\n\\n  .comment-title {\\n    font-size: 1rem;\\n  }\\n\\n  .comment-btn {\\n    width: 60%;\\n  }\\n}\\n\\n.like-button,\\n.like-icon {\\n  height: 3vw;\\n  width: 3vw;\\n  border: none;\\n  background-color: inherit;\\n  cursor: pointer;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"pokemnData\": () => (/* binding */ pokemnData)\n/* harmony export */ });\n/* eslint-disable no-await-in-loop */\n\nconst container = document.querySelector('.items-container');\nconst pokemonList = 'https://pokeapi.co/api/v2/pokemon/?limit=60&offset=0';\nconst likeApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dXDIQAnIOHUjELoXSV9S/likes';\nlet pokemons = [];\n\nconst getData = async (Api) => {\n  const stored = await fetch(Api);\n  const data = stored.json();\n  return data;\n};\n\nconst pokemnData = async () => {\n  const data = await getData(pokemonList);\n  pokemons = data.results;\n  for (let i = 0; i < pokemons.length; i += 1) {\n    const pokemonURL = pokemons[i].url;\n    const pokemonDetails = await getData(pokemonURL);\n    pokemons[i].id = pokemonDetails.id;\n    pokemons[i].img = pokemonDetails.sprites.other.dream_world.front_default;\n  }\n  return pokemons;\n};\n\nconst likesShow = async () => {\n  const likes = await getData(likeApi);\n  const pokemons = await pokemnData();\n  for (let i = 0; i < likes.length; i += 1) {\n    for (let x = 0; x < pokemons.length; x += 1) {\n      if (Number(likes[i].item_id) === pokemons[x].id) {\n        pokemons[x].likes = likes[i].likes;\n      }\n    }\n  }\n  return pokemons;\n};\n\nconst addlike = async (button) => {\n  await fetch(likeApi, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({ item_id: button.id }),\n  });\n  button.innerHTML = `<svg class=\"like-icon red\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"256\" height=\"256\" viewBox=\"0 0 256 256\" xml:space=\"preserve\">\n<desc>Created with Fabric.js 1.7.22</desc>\n<defs>\n</defs>\n<g transform=\"translate(128 128) scale(0.72 0.72)\" style=\"\">\n<g style=\"stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;\" transform=\"translate(-175.05 -175.05000000000004) scale(3.89 3.89)\" >\n<path d=\"M 45 10.715 c 4.77 -4.857 11.36 -7.861 18.64 -7.861 C 78.198 2.854 90 14.87 90 29.694 c 0 35.292 -36.812 34.15 -45 57.453 C 36.812 63.843 0 64.986 0 29.694 C 0 14.87 11.802 2.854 26.36 2.854 C 33.64 2.854 40.23 5.858 45 10.715 z\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(211,28,28); fill-rule: nonzero; opacity: 1;\" transform=\" matrix(1 0 0 1 0 0) \" stroke-linecap=\"round\" />\n</g>\n</g>\n</svg>`;\n  button.setAttribute('disabled', '');\n  const counterLikes = document.getElementById(`${button.id}counter`);\n  const likes = counterLikes.innerHTML.split(' ');\n  likes[0] = Number(likes[0]) + 1;\n  counterLikes.innerHTML = likes.join(' ');\n};\n\nconst likeIcon = () => {\n  const likeButton = document.querySelectorAll('button');\n  likeButton.forEach((button) => {\n    button.addEventListener('click', () => {\n      addlike(button);\n    });\n  });\n};\n\nconst pokemonShow = async () => {\n  const pokemons = await likesShow();\n  container.innerHTML = '';\n  for (let i = 0; i < pokemons.length; i += 1) {\n    container.innerHTML += `<article class=\"pokemon-card\">\n        <img src=\"${pokemons[i].img}\" alt=\"${\n  pokemons[i].name\n}\" class=\"pokemon-img\"/>\n        <h2 class=\"pokemon-name\">${pokemons[i].name.toUpperCase()}</h2>\n        <button class=\"like-button\" id=\"${pokemons[i].id}\">\n      <svg\n        xmlns=\"http://www.w3.org/2000/svg\"\n        xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n        version=\"1.1\"\n        width=\"256\"\n        height=\"256\"\n        viewBox=\"0 0 256 256\"\n        xml:space=\"preserve\"\n        class=\"like-icon\"\n      >\n        <desc>Created with Fabric.js 1.7.22</desc>\n        <defs></defs>\n        <g transform=\"translate(128 128) scale(0.72 0.72)\" style=\"\">\n          <g\n            style=\"\n              stroke: none;\n              stroke-width: 0;\n              stroke-dasharray: none;\n              stroke-linecap: butt;\n              stroke-linejoin: miter;\n              stroke-miterlimit: 10;\n              fill: none;\n              fill-rule: nonzero;\n              opacity: 1;\n            \"\n            transform=\"translate(-175.05 -175.05000000000004) scale(3.89 3.89)\"\n          >\n            <path\n              d=\"M 45 86.304 c -0.459 0 -0.919 -0.105 -1.342 -0.316 C 12.259 70.287 0.527 47.557 0.019 31.52 C -0.325 20.69 4.171 11.488 12.045 6.905 C 20.918 1.743 32.568 2.841 45 9.968 c 12.432 -7.127 24.085 -8.225 32.955 -3.063 c 7.874 4.583 12.369 13.785 12.026 24.615 c -0.509 16.037 -12.24 38.768 -43.64 54.468 C 45.919 86.198 45.46 86.304 45 86.304 z M 24.426 9.698 c -3.46 0 -6.615 0.793 -9.363 2.393 c -6.026 3.507 -9.324 10.52 -9.047 19.239 C 6.462 45.415 16.968 65.466 45 79.939 C 73.032 65.466 83.537 45.415 83.984 31.33 c 0.276 -8.719 -3.021 -15.732 -9.048 -19.239 c -7.25 -4.219 -17.325 -2.825 -28.373 3.924 c -0.959 0.587 -2.167 0.587 -3.127 0 C 36.577 11.824 30.092 9.698 24.426 9.698 z\"\n              style=\"\n                stroke: none;\n                stroke-width: 1;\n                stroke-dasharray: none;\n                stroke-linecap: butt;\n                stroke-linejoin: miter;\n                stroke-miterlimit: 10;\n                fill: rgb(0, 0, 0);\n                fill-rule: nonzero;\n                opacity: 1;\n              \"\n              transform=\" matrix(1 0 0 1 0 0) \"\n              stroke-linecap=\"round\"\n            />\n          </g>\n        </g>\n      </svg>\n    </button>\n        <p class=\"likes-counter\" id=\"${pokemons[i].id}counter\">${\n  pokemons[i].likes || 0\n} likes</p>\n        <a href=\"#\" class=\"comment\" id=\"${\n  pokemons[i].id\n}\">Comments</a></article>`;\n  }\n  likeIcon();\n};\n\nconst itemCounter = async () => {\n  const pokemons = await pokemnData();\n  const pokemonCounter = document.querySelector('.poke-counter');\n  pokemonCounter.innerHTML = `${pokemons.length} Pokemons`;\n};\n\nitemCounter();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pokemonShow);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pokePop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pokePop.js */ \"./src/pokePop.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\nconst displayPop = async () => {\n  await (0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  const commentBtn = document.querySelectorAll('.comment');\n  commentBtn.forEach((btn) => {\n    btn.addEventListener('click', async (e) => {\n      const pokePop = document.querySelector('.pokemon-pop');\n      pokePop.style.display = 'block';\n      (0,_pokePop_js__WEBPACK_IMPORTED_MODULE_0__.displayPokemon)(e);\n    });\n  });\n};\n\n(0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\ndisplayPop();\n\n\n//# sourceURL=webpack://javascript-capstone/./src/index.js?");

/***/ }),

/***/ "./src/pokePop.js":
/*!************************!*\
  !*** ./src/pokePop.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"counterComment\": () => (/* binding */ counterComment),\n/* harmony export */   \"displayPokemon\": () => (/* binding */ displayPokemon),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments)\n/* harmony export */ });\n/* eslint-disable no-use-before-define */\n\nconst getArray = async () => {\n  const url = 'https://pokeapi.co/api/v2/pokemon?limit=60';\n  const data = await fetch(url);\n  return data.json();\n};\n\nconst getDataLink = async (id) => {\n  const data = await getArray();\n  const dataLink = data.results[id - 1].url;\n  const pokeDataLink = await fetch(dataLink);\n  return pokeDataLink.json();\n};\n\nconst getComments = async (e) => {\n  const commentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dXDIQAnIOHUjELoXSV9S/comments?item_id=item${e.target.id}`;\n  const data = await fetch(commentUrl);\n  return data.json();\n};\n\nconst closePop = () => {\n  const sectionCard = document.querySelector('.pokemon-pop');\n  const closeBtn = document.querySelector('.fa-solid');\n  closeBtn.addEventListener('click', () => {\n    sectionCard.style.display = 'none';\n  });\n};\n\nconst showComments = async (e) => {\n  const comments = await getComments(e);\n  const commentsDiv = document.querySelector('.all-comments');\n  commentsDiv.innerHTML = null;\n  comments.forEach((comment) => {\n    const { username } = comment;\n    const creationDate = comment.creation_date;\n    const commentLine = comment.comment;\n    commentsDiv.insertAdjacentHTML('beforeend', `\n    <p class=\"comment-line\"><strong>${creationDate}</strong> ${username}: ${commentLine}<p>`);\n  });\n};\n\nconst counterComment = async (e) => {\n  const comments = await getComments(e);\n  const numberComments = comments.length;\n  return numberComments;\n};\n\nconst displayPokemon = async (e) => {\n  const data = await getDataLink(e.target.id);\n  const { name } = data;\n  const nameUp = name.charAt(0).toUpperCase() + name.slice(1);\n  const img = data.sprites.other.dream_world.front_default;\n  const type = data.types[0].type.name;\n  const typeUp = type.charAt(0).toUpperCase() + type.slice(1);\n  const { abilities } = data;\n  const abilitieOneUp = abilities[0].ability.name.charAt(0).toUpperCase()\n  + abilities[0].ability.name.slice(1);\n  const abilitieTwoUp = abilities[1].ability.name.charAt(0).toUpperCase()\n  + abilities[1].ability.name.slice(1);\n  const hp = data.stats[0].base_stat;\n  const attack = data.stats[1].base_stat;\n  const defense = data.stats[2].base_stat;\n  const speed = data.stats[5].base_stat;\n  const commentsCounter = await counterComment(e);\n  const sectionCard = document.querySelector('.pokemon-pop');\n  sectionCard.innerHTML = null;\n  sectionCard.insertAdjacentHTML('afterbegin', `\n  <div class=\"fixed-item\">\n        <div class=\"body-card\">\n          <i class=\"fa-solid fa-xmark\"></i>\n          <div class=\"poke-img-div\">\n            <img src=\"${img}\" alt=\"\" class=\"poke-img\">\n          </div>\n          <div class=\"poke-data\">\n            <h2 class=\"poke-name\">${nameUp}</h2>\n            <div class=\"poke-description-card\">\n              <ul>\n                <li class=\"description-title\">Type:</li>\n                <li class=\"poke-type li\">${typeUp}</li>\n              </ul>\n              <ul>\n                <li class=\"description-title\">Abilities</li>\n                <li class=\"ability-one li\">${abilitieOneUp}</li>\n                <li class=\"ability-two li\">${abilitieTwoUp}</li>\n              </ul>\n              <ul>\n                <li class=\"description-title\">Basic Stats</li>\n                <li class=\"hp li\"><strong>HP:</strong> ${hp}</li>\n                <li class=\"attack li\"><strong>Attack:</strong> ${attack}</li>\n                <li class=\"defense li\"><strong>Defense</strong>: ${defense}</li>\n                <li class=\"speed li\"><strong>Speed</strong>: ${speed} </li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"display-comment\">\n          <h3 class=\"comment-counter\"> Comment (${commentsCounter || 0})</h3>\n          <div class=\"all-comments\"></div>\n        </div>\n        <h3 class=\"comment-title\">Add a comment</h3>\n        <form id=\"comment-form\">\n          <input class=\"username\" type=\"text\" placeholder=\"insert your username\" required=\"\">\n          <textarea id=\"textarea\" cols=\"20\" rows=\"5\" placeholder=\"Enter your comment\" required=\"\"></textarea>\n          <button type=\"submit\" class=\"comment-btn\" id=\"${e.target.id}\">Comment</button>\n        </form>\n      </div>`);\n  const bodyCard = document.querySelector('.body-card');\n  if (type === 'grass') {\n    bodyCard.classList.add('grass');\n    bodyCard.classList.remove('water');\n    bodyCard.classList.remove('fire');\n  } else if (type === 'water') {\n    bodyCard.classList.add('water');\n    bodyCard.classList.remove('grass');\n    bodyCard.classList.remove('fire');\n  } else {\n    bodyCard.classList.add('fire');\n    bodyCard.classList.remove('water');\n    bodyCard.classList.remove('grass');\n  }\n  closePop();\n  showComments(e);\n  postComment(e);\n};\n\nconst postComment = async () => {\n  const commentBtn = document.querySelector('.comment-btn');\n  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dXDIQAnIOHUjELoXSV9S/comments';\n  commentBtn.addEventListener('click', async (e) => {\n    e.preventDefault();\n    const userName = document.querySelector('.username');\n    const textArea = document.getElementById('textarea');\n    const id = `item${e.target.id}`;\n    await fetch(url, {\n      method: 'POST',\n      body: JSON.stringify({\n        item_id: id,\n        username: userName.value,\n        comment: textArea.value,\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    });\n    showComments(e);\n    e.target.parentElement.reset();\n    displayPokemon(e);\n  });\n};\n\n//# sourceURL=webpack://javascript-capstone/./src/pokePop.js?");

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