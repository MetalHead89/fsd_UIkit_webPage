/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pug_modules_text_field_text_field_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/pug/modules/text-field/text-field.js */ \"./pug/modules/text-field/text-field.js\");\n/* harmony import */ var _pug_modules_text_field_text_field_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pug_modules_text_field_text_field_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pug_modules_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/pug/modules/dropdown/dropdown.js */ \"./pug/modules/dropdown/dropdown.js\");\n/* harmony import */ var _pug_modules_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pug_modules_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/scss/style.scss */ \"./scss/style.scss\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pug_modules_color_block_color_block_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/pug/modules/color-block/color-block.scss */ \"./pug/modules/color-block/color-block.scss\");\n/* harmony import */ var _pug_modules_color_block_color_block_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pug_modules_color_block_color_block_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _scss_fonts_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/scss/fonts.scss */ \"./scss/fonts.scss\");\n/* harmony import */ var _scss_fonts_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scss_fonts_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _scss_ui_kit_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/scss/ui_kit.scss */ \"./scss/ui_kit.scss\");\n/* harmony import */ var _scss_ui_kit_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scss_ui_kit_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _pug_modules_type_block_type_block_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/pug/modules/type-block/type-block.scss */ \"./pug/modules/type-block/type-block.scss\");\n/* harmony import */ var _pug_modules_type_block_type_block_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_pug_modules_type_block_type_block_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _pug_modules_text_field_text_field_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/pug/modules/text-field/text-field.scss */ \"./pug/modules/text-field/text-field.scss\");\n/* harmony import */ var _pug_modules_text_field_text_field_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_pug_modules_text_field_text_field_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _pug_modules_dropdown_dropdown_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/pug/modules/dropdown/dropdown.scss */ \"./pug/modules/dropdown/dropdown.scss\");\n/* harmony import */ var _pug_modules_dropdown_dropdown_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_pug_modules_dropdown_dropdown_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _pug_modules_button_button_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/pug/modules/button/button.scss */ \"./pug/modules/button/button.scss\");\n/* harmony import */ var _pug_modules_button_button_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_pug_modules_button_button_scss__WEBPACK_IMPORTED_MODULE_9__);\n//Scripts\n\n\n\n// Styles\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./pug/modules/button/button.scss":
/*!****************************************!*\
  !*** ./pug/modules/button/button.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./pug/modules/button/button.scss?");

/***/ }),

/***/ "./pug/modules/color-block/color-block.scss":
/*!**************************************************!*\
  !*** ./pug/modules/color-block/color-block.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./pug/modules/color-block/color-block.scss?");

/***/ }),

/***/ "./pug/modules/dropdown/dropdown.js":
/*!******************************************!*\
  !*** ./pug/modules/dropdown/dropdown.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Dropdown {\n    constructor(dropdown) {\n        let quantityNumbers = dropdown.getElementsByClassName('dropdown__quantity-number');\n        let buttonsSub = dropdown.getElementsByClassName('dropdown__subtract-button');\n        let buttonsAdd = dropdown.getElementsByClassName('dropdown__add-button');\n\n        this.isOptionVisible = false;\n        this.header = dropdown.getElementsByClassName('dropdown__header')[0];\n        this.headerText = dropdown.getElementsByClassName('dropdown__header-text')[0];\n        this.options = dropdown.getElementsByClassName('dropdown__options')[0];\n        this.quantityNumber1 = quantityNumbers[0];\n        this.quantityNumber2 = quantityNumbers[1];\n        this.quantityNumber3 = quantityNumbers[2];\n        this.buttonSub1 = buttonsSub[0];\n        this.buttonSub2 = buttonsSub[1];\n        this.buttonSub3 = buttonsSub[2];\n        this.buttonAdd1 = buttonsAdd[0];\n        this.buttonAdd2 = buttonsAdd[1];\n        this.buttonAdd3 = buttonsAdd[2];\n\n        this.buttonAdd1.onclick = () => this.clickAddNumberButton(this.buttonAdd1);\n        this.buttonAdd2.onclick = () => this.clickAddNumberButton(this.buttonAdd2);\n        this.buttonAdd3.onclick = () => this.clickAddNumberButton(this.buttonAdd3);\n        this.buttonSub1.onclick = () => this.clickSubNumberButton(this.buttonSub1);\n        this.buttonSub2.onclick = () => this.clickSubNumberButton(this.buttonSub2);\n        this.buttonSub3.onclick = () => this.clickSubNumberButton(this.buttonSub3);\n        this.header.onclick = () => this.clickHeader();\n\n        if (dropdown.className.includes('dropdown_guests')) {\n            this.buttonClear = dropdown.getElementsByClassName('dropdown__button-clear')[0];\n            this.buttonApply = dropdown.getElementsByClassName('dropdown__button-apply')[0];\n            this.buttonClear.onclick = () => this.clickClearButton();\n            this.buttonApply.onclick = () => this.generateHeader();\n            this.dropdownType = 'guests';\n        }\n        else\n            this.dropdownType = 'comfort';\n    }\n\n    clickHeader() {\n        if (this.isOptionVisible) {\n            this.options.style.display = \"none\";\n            this.header.removeAttribute(\"style\")\n        }\n        else {\n            this.options.style.display = \"flex\";\n            this.header.style.borderRadius = \"4px 4px 0 0\";\n            this.header.style.border = \"1px solid rgba(31, 32, 65, 0.5)\";\n        }\n        this.isOptionVisible = !this.isOptionVisible;\n    }\n\n    clickAddNumberButton(button) {\n        dropdownOptionNumber = button.previousSibling;\n        number = parseInt(dropdownOptionNumber.textContent);\n        dropdownOptionNumber.textContent = number + 1;\n\n        if (number == 0) \n            dropdownOptionNumber.previousSibling.disabled = false;\n        \n        if (this.dropdownType == 'guests')\n            this.setClearButton();\n        this.generateHeader();\n    }\n\n    clickSubNumberButton(button) {\n        dropdownOptionNumber = button.nextSibling;\n        number = parseInt(dropdownOptionNumber.textContent);\n        dropdownOptionNumber.textContent = number - 1;\n    \n        if (number == 1)\n            dropdownOptionNumber.previousSibling.disabled = true;\n\n        if (this.dropdownType == 'guests')\n            this.setClearButton();\n        this.generateHeader();\n    }\n\n    clickClearButton() {\n        this.quantityNumber1.textContent = 0;\n        this.quantityNumber2.textContent = 0;\n        this.quantityNumber3.textContent = 0;\n        this.buttonSub1.disabled = true;\n        this.buttonSub2.disabled = true;\n        this.buttonSub3.disabled = true;\n        this.generateHeader();\n        this.setClearButton();\n    }\n\n    generateHeader() {\n        if (this.dropdownType == 'guests'){\n            let guestsCount = parseInt(this.quantityNumber1.textContent) + parseInt(this.quantityNumber2.textContent);\n            let babiesCount = parseInt(this.quantityNumber3.textContent);\n\n            if (guestsCount == 0 && babiesCount == 0)\n                this.headerText.textContent = 'Сколько гостей';\n            else if (guestsCount > 0 && babiesCount == 0)\n                this.headerText.textContent = guestsCount + ' ' + this.wordGenerator('guest', parseInt(guestsCount));\n            else if (guestsCount > 0 && babiesCount > 0)\n                this.headerText.textContent = `${guestsCount} ${this.wordGenerator('guest', parseInt(guestsCount))}, \n                    ${babiesCount} ${this.wordGenerator('baby', parseInt(babiesCount))}`;\n        }\n        else if (this.dropdownType == 'comfort') {\n            let comfort = {\n                'bedroomsCount': parseInt(this.quantityNumber1.textContent),\n                'bedsCount': parseInt(this.quantityNumber2.textContent),\n                'bathroomsCount': parseInt(this.quantityNumber3.textContent)\n            };\n\n            let headerText = '';\n            for (let key in comfort) {\n                if (comfort[key] > 0) {\n                    if (headerText != '')\n                        headerText += ', ';\n                    headerText += `${comfort[key]} ${this.wordGenerator(key, comfort[key])}`;\n                }\n            }\n\n            if (headerText == '')\n                headerText = 'Выберите удобства'\n            \n            this.headerText.textContent = headerText;\n        }\n    }\n\n    setClearButton() {\n        if (parseInt(this.quantityNumber1.textContent) + parseInt(this.quantityNumber2.textContent) + parseInt(this.quantityNumber3.textContent) > 0) {\n            this.buttonClear.style.display = 'inline-block';\n        }\n        else\n            this.buttonClear.style.display = 'none';\n    }\n\n    wordGenerator(word, number) {\n        let number10 = number % 10;\n        let number100 = number % 100;\n        if (number10 == 1 && number100 != 11){\n            if (word == 'guest')\n                return 'гость';\n            else if (word == 'baby')\n                return 'младенец';\n            else if (word == 'bedroomsCount')\n                return 'спальня';\n            else if (word == 'bedsCount')\n                return 'кровать';\n            else if (word == 'bathroomsCount')\n                return 'ванная комната';\n        }\n        else if ((number10 >= 2 && number10 <= 4) && !(number100 >= 12 && number100 <= 14)) {\n            if (word == 'guest')\n                return 'гостя';\n            else if (word == 'baby')\n                return 'младенца';\n            else if (word == 'bedroomsCount')\n                return 'спальни';\n            else if (word == 'bedsCount')\n                return 'кровати';\n            else if (word == 'bathroomsCount')\n                return 'ванные комнаты';\n        }\n        else {\n            if (word == 'guest')\n                return 'гостей';\n            else if (word == 'baby')\n                return 'младенцев';\n            else if (word == 'bedroomsCount')\n                return 'спален';\n            else if (word == 'bedsCount')\n                return 'кроватей';\n            else if (word == 'bathroomsCount')\n                return 'ванных комнат';\n        }\n    }\n}\n\nlet dr = [];\nvar dropdowns = document.getElementsByClassName('dropdown');\nfor (dropdownElement of dropdowns) {\n    dr.push(new Dropdown(dropdownElement));\n} \n\n//# sourceURL=webpack:///./pug/modules/dropdown/dropdown.js?");

/***/ }),

/***/ "./pug/modules/dropdown/dropdown.scss":
/*!********************************************!*\
  !*** ./pug/modules/dropdown/dropdown.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./pug/modules/dropdown/dropdown.scss?");

/***/ }),

/***/ "./pug/modules/text-field/text-field.js":
/*!**********************************************!*\
  !*** ./pug/modules/text-field/text-field.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let maskedTextField = document.querySelector('.text-field__field-masked');\n\nif (maskedTextField) {\n    maskedTextField.oninput = onInputMaskedTextField;\n    maskedTextField.onpaste = onPastetMaskedTextField;\n    maskedTextField.onkeydown = onKeydowMaskedTextField;\n}\n\nfunction getTextWithoutDots(text) {\n    /**\n     * Удаляет точки из полученной строки\n     * \n     * @param {string} text - строка с точками\n     * @returns {string} Строка без точек\n     */\n\n    return text.split('.').join('');\n}\n\nfunction onPastetMaskedTextField() {\n    /**\n     * Проверяет, что вставляемый текст содержит в себе только цифры и точки.\n     * В случае неудачной проверки отменяет вставку\n     */\n\n    clipboardData = event.clipboardData || window.clipboardData;\n    pastedData = clipboardData.getData('Text');\n\n    if (isNaN(getTextWithoutDots(pastedData)))\n        event.preventDefault();\n}\n\nfunction onKeydowMaskedTextField() {\n    /**\n     * Сдвигает каретку во время удаления, если она стоит до или перед точкой\n     */\n    \n    if (event.key == 'Backspace' && this.selectionStart == this.selectionEnd && \n    this.value.substr(this.selectionStart - 1, 1) == '.') {\n        this.selectionStart--;\n        this.selectionEnd--;\n    }\n    if (event.key == 'Delete' && this.selectionStart == this.selectionEnd && \n    this.value.substr(this.selectionStart, 1) == '.') {\n        this.selectionStart++;\n        this.selectionEnd++;\n    }\n}\n\nfunction onInputMaskedTextField() {\n    /**\n     * Ограничивает ввод символов, не являющихся буквами\n     * Расставляет разделители.\n     */\n    let caretPosition = this.selectionStart;\n    let text = this.value;\n    \n    if (isNaN(getTextWithoutDots(text))) {\n        startCaretPosition = caretPosition - event.data.length;\n        text = `${text.slice(0, startCaretPosition)}${text.slice(caretPosition)}`;\n        if (text.length > 1)\n            caretPosition -= 2;\n        else\n            caretPosition--;\n    }\n\n    if ((event.inputType == 'deleteContentBackward' || event.inputType == 'deleteContentForward') && text.length > 2) {\n        caretPosition--;\n    }\n\n    text = getTextWithoutDots(text);\n    \n    if (text.length >= 2 && text.length < 4) {\n        text = `${text.slice(0, 2)}.${text.slice(2)}`;\n        caretPosition ++;\n    }\n    else if (text.length >= 4) {\n        text = `${text.slice(0, 2)}.${text.slice(2, 4)}.${text.slice(4, 8)}`\n        caretPosition ++;\n    }\n        \n    this.value = text;\n    this.selectionStart = caretPosition;\n    this.selectionEnd = caretPosition;\n}\n\n//# sourceURL=webpack:///./pug/modules/text-field/text-field.js?");

/***/ }),

/***/ "./pug/modules/text-field/text-field.scss":
/*!************************************************!*\
  !*** ./pug/modules/text-field/text-field.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./pug/modules/text-field/text-field.scss?");

/***/ }),

/***/ "./pug/modules/type-block/type-block.scss":
/*!************************************************!*\
  !*** ./pug/modules/type-block/type-block.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./pug/modules/type-block/type-block.scss?");

/***/ }),

/***/ "./scss/fonts.scss":
/*!*************************!*\
  !*** ./scss/fonts.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./scss/fonts.scss?");

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./scss/style.scss?");

/***/ }),

/***/ "./scss/ui_kit.scss":
/*!**************************!*\
  !*** ./scss/ui_kit.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./scss/ui_kit.scss?");

/***/ })

/******/ });