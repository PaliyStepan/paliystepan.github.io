(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["under-block"],{

/***/ "./src/js/helpers/under-block.js":
/*!***************************************!*\
  !*** ./src/js/helpers/under-block.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UnderBlock; });
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ "./node_modules/@babel/runtime-corejs3/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var UnderBlock = /*#__PURE__*/function () {
  function UnderBlock(el, selector) {
    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UnderBlock);

    this.root = el;
    this.selector = selector;
    if (!this.root || !this.selector) return false;
    this.block = this.root.closest("[".concat(this.selector, "-container]"));

    this._init();
  }

  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(UnderBlock, [{
    key: "_init",
    value: function _init() {
      this._eventHandler();
    }
  }, {
    key: "_eventHandler",
    value: function _eventHandler() {
      var _this = this;

      this.root.addEventListener('click', function () {
        var header = document.querySelector('#header'),
            scrollTop = _this.block.getBoundingClientRect().bottom + window.pageYOffset;
        window.scrollTo({
          top: scrollTop - header.offsetHeight,
          behavior: 'smooth'
        });
      });
    }
  }]);

  return UnderBlock;
}();



/***/ })

}]);
//# sourceMappingURL=under-block.06af.js.map