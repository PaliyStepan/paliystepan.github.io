(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-form-page"],{

/***/ "./src/blocks/modules/search-form-page/search-form-page.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/modules/search-form-page/search-form-page.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchFormPage; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/bind */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/bind.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ "./node_modules/@babel/runtime-corejs3/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);





var SearchFormPage = /*#__PURE__*/function () {
  function SearchFormPage(el, selector) {
    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, SearchFormPage);

    this.selector = selector;
    this.root = el ? el : document.querySelector("[".concat(this.selector, "]"));
    if (!this.root) return false;

    this._init();
  }

  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(SearchFormPage, [{
    key: "_init",
    value: function _init() {
      this._matchHTML();

      this._binds();

      this._initEventListeners();

      this._checkValue();
    }
  }, {
    key: "_matchHTML",
    value: function _matchHTML() {
      this.input = this.root.querySelector("[".concat(this.selector, "-input]"));
      this.button = this.root.querySelector("[".concat(this.selector, "-button]"));
      this.clear = this.root.querySelector("[".concat(this.selector, "-clear]"));
    }
  }, {
    key: "_binds",
    value: function _binds() {
      var _context,
          _this = this;

      _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default()(_context = ['_checkValue', '_submitForm', '_clearInput']).call(_context, function (f) {
        var _context2;

        return _this[f] = _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = _this[f]).call(_context2, _this);
      });
    }
  }, {
    key: "_initEventListeners",
    value: function _initEventListeners() {
      this.input.addEventListener('input', this._checkValue);
      this.button.addEventListener('click', this._submitForm);
      this.clear.addEventListener('click', this._clearInput);
    }
  }, {
    key: "_submitForm",
    value: function _submitForm() {
      this.root.submit();
    }
  }, {
    key: "_checkValue",
    value: function _checkValue() {
      if (this.input.value) {
        this.clear.classList.remove("is-hidden");
      } else {
        this.clear.classList.add("is-hidden");
      }
    }
  }, {
    key: "_clearInput",
    value: function _clearInput() {
      this.input.value = '';

      this._checkValue();
    }
  }]);

  return SearchFormPage;
}();



/***/ })

}]);
//# sourceMappingURL=search-form-page.582c.js.map