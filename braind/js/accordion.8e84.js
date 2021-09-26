(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accordion"],{

/***/ "./src/blocks/modules/accordion/accordion.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/accordion/accordion.js ***!
  \***************************************************/
/*! exports provided: default, Accordion, AccordionFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Accordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return Accordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionFactory", function() { return AccordionFactory; });
/* harmony import */ var _babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/toConsumableArray */ "./node_modules/@babel/runtime-corejs3/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/bind */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/bind.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ "./node_modules/@babel/runtime-corejs3/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);






var Accordion = /*#__PURE__*/function () {
  function Accordion(selector, el) {
    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Accordion);

    this.selector = selector;
    this.root = el ? el : document.querySelector("[".concat(this.selector, "]"));
    if (!this.root) return false;
    this.heading = this.root.querySelector("[".concat(this.selector, "-heading]"));
    this.body = this.root.querySelector("[".concat(this.selector, "-body]"));
    this.lineClamp = this.root.getAttribute("".concat(this.selector)) === "line-clamp";

    this._init();
  }

  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Accordion, [{
    key: "_binds",
    value: function _binds() {
      var _context,
          _this = this;

      _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2___default()(_context = ['_accordionHandler']).call(_context, function (f) {
        var _context2;

        return _this[f] = _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = _this[f]).call(_context2, _this);
      });
    }
  }, {
    key: "_init",
    value: function _init() {
      this._binds();

      this._initEventListeners();

      if (this.root.classList.contains('is-open')) this._open();

      if (this.lineClamp && this.body.scrollHeight < 600) {
        this._open();

        this.heading.classList.add('is-hidden');
      }
    }
  }, {
    key: "_initEventListeners",
    value: function _initEventListeners() {
      this.heading.addEventListener('click', this._accordionHandler);
    }
  }, {
    key: "_accordionHandler",
    value: function _accordionHandler(e) {
      e.preventDefault();

      if (!this.root.classList.contains('is-open')) {
        this._open();
      } else {
        this._close();
      }
    }
  }, {
    key: "_open",
    value: function _open() {
      this.body.style.height = this.body.scrollHeight + 'px';
      this.root.classList.add('is-open');
    }
  }, {
    key: "_close",
    value: function _close() {
      this.body.style.height = '';
      this.root.classList.remove('is-open');
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._close();

      this.heading.removeEventListener('click', this._accordionHandler);
    }
  }]);

  return Accordion;
}();



var AccordionFactory = function AccordionFactory(props) {
  var _context3,
      _this2 = this;

  _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, AccordionFactory);

  this.accordions = [];

  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2___default()(_context3 = _babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(document.querySelectorAll("[".concat(props.selector, "]")))).call(_context3, function (el) {
    _this2.accordions.push(new Accordion(props.selector, el));
  });
};



/***/ })

}]);
//# sourceMappingURL=accordion.8e84.js.map