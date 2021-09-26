(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["anchor-menu"],{

/***/ "./src/blocks/modules/anchor-menu/anchor-menu.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/anchor-menu/anchor-menu.js ***!
  \*******************************************************/
/*! exports provided: default, AnchorMenu, AnchorMenuFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AnchorMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnchorMenu", function() { return AnchorMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnchorMenuFactory", function() { return AnchorMenuFactory; });
/* harmony import */ var _babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/toConsumableArray */ "./node_modules/@babel/runtime-corejs3/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ "./node_modules/@babel/runtime-corejs3/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sticky_sidebar_v2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sticky-sidebar-v2 */ "./node_modules/sticky-sidebar-v2/src/sticky-sidebar.js");
/* harmony import */ var _js_helpers_breakpoints__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/js/helpers/breakpoints */ "./src/js/helpers/breakpoints.js");









var AnchorMenu = /*#__PURE__*/function () {
  function AnchorMenu(selector, el) {
    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, AnchorMenu);

    this.selector = selector;
    this.root = el ? el : document.querySelector("[".concat(this.selector, "]"));
    if (!this.root) return false;

    this._init();
  }

  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(AnchorMenu, [{
    key: "_init",
    value: function _init() {
      var _context,
          _this = this;

      this._matchHTML();

      this._stickyMenu();

      _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context = this.menuItems).call(_context, function (item) {
        var anchor = document.querySelector(item.dataset.href);

        _this._clickToItem(item, anchor);

        _this._watcherAnchors(item, anchor);

        _this._scrollAfterload(item, anchor);
      });
    }
  }, {
    key: "_matchHTML",
    value: function _matchHTML() {
      this.header = document.querySelector('#header');
      this.container = this.root.closest("[".concat(this.selector, "-container]"));
      this.menuItems = this.root.querySelectorAll("[".concat(this.selector, "-item]"));
    }
  }, {
    key: "_stickyMenu",
    value: function _stickyMenu() {
      var _this2 = this;

      var sidebar;
      Object(_js_helpers_breakpoints__WEBPACK_IMPORTED_MODULE_7__["mqTest"])(window.matchMedia("(min-width: ".concat(_js_helpers_breakpoints__WEBPACK_IMPORTED_MODULE_7__["breakpoints"]['mid-desktop'], ")")), {
        unmatch: function unmatch() {
          if (sidebar) sidebar.destroy();

          if (_this2.root.getAttribute("".concat(_this2.selector)) !== "desktop") {
            sidebar = new sticky_sidebar_v2__WEBPACK_IMPORTED_MODULE_6__["default"](_this2.root, {
              topSpacing: _this2.header.offsetHeight,
              containerSelector: "[".concat(_this2.selector, "-container]"),
              innerWrapperSelector: "[".concat(_this2.selector, "-wrapper]"),
              resizeSensor: true,
              stickyClass: 'is-fixed'
            });
          }
        }
      });
    }
  }, {
    key: "_clickToItem",
    value: function _clickToItem(item, anchor) {
      var _this3 = this;

      item.addEventListener('click', function (e) {
        e.preventDefault();

        _this3._scrollAnchors(anchor);
      });
    }
  }, {
    key: "_watcherAnchors",
    value: function _watcherAnchors(item, anchor) {
      var _context2,
          _this4 = this;

      var visibleBlocks = document.querySelectorAll(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = "[".concat(this.selector, "-visible-block=\"")).call(_context2, item.dataset.href, "\"]"));
      var observer = new IntersectionObserver(function (_ref) {
        var _ref2 = _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref, 1),
            e = _ref2[0];

        if (e.intersectionRatio > 0) {
          item.classList.add('is-visible');
          item.parentElement.scrollTo({
            left: item.offsetLeft,
            behavior: 'smooth'
          });

          if (visibleBlocks.length) {
            _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(visibleBlocks).call(visibleBlocks, function (block) {
              block.classList.add('is-visible');
            });
          }

          if (_this4.menuItems[_this4.menuItems.length - 1] === item) {
            _this4.root.classList.add('is-only-last-child');
          }
        } else {
          item.classList.remove('is-visible');

          if (visibleBlocks.length) {
            _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(visibleBlocks).call(visibleBlocks, function (block) {
              block.classList.remove('is-visible');
            });
          }

          if (_this4.menuItems[_this4.menuItems.length - 1] === item) {
            _this4.root.classList.remove('is-only-last-child');
          }
        }
      }, {
        rootMargin: -this.header.offsetHeight + 'px 0px 0px 0px',
        threshold: [0]
      });
      observer.observe(anchor);
    }
  }, {
    key: "_scrollAnchors",
    value: function _scrollAnchors(anchor) {
      var _this5 = this;

      var scrollTop = anchor.getBoundingClientRect().top + window.pageYOffset,
          offTop;
      Object(_js_helpers_breakpoints__WEBPACK_IMPORTED_MODULE_7__["mqTest"])(window.matchMedia("(min-width: ".concat(_js_helpers_breakpoints__WEBPACK_IMPORTED_MODULE_7__["breakpoints"]['mid-desktop'], ")")), {
        match: function match() {
          offTop = _this5.header.offsetHeight;
        },
        unmatch: function unmatch() {
          offTop = _this5.header.offsetHeight + _this5.root.offsetHeight;
        }
      });
      window.scrollTo({
        top: scrollTop - offTop,
        behavior: 'smooth'
      });
    }
  }, {
    key: "outsideScrollAnchors",
    value: function outsideScrollAnchors(hash) {
      var anchor = document.querySelector(hash),
          scrollTop = anchor.getBoundingClientRect().top + window.pageYOffset,
          header = document.querySelector('#header'),
          anchorMenu = document.querySelector('[data-anchor-menu="mobile"]'),
          offTop;
      Object(_js_helpers_breakpoints__WEBPACK_IMPORTED_MODULE_7__["mqTest"])(window.matchMedia("(min-width: ".concat(_js_helpers_breakpoints__WEBPACK_IMPORTED_MODULE_7__["breakpoints"]['desktop'], ")")), {
        match: function match() {
          offTop = header.offsetHeight;
        },
        unmatch: function unmatch() {
          if (anchorMenu) {
            offTop = header.offsetHeight + anchorMenu.offsetHeight;
          }
        }
      });
      window.scrollTo({
        top: scrollTop - offTop,
        behavior: 'smooth'
      });
    }
  }, {
    key: "_pushState",
    value: function _pushState(state) {
      window.history.pushState(null, null, state);
    }
  }, {
    key: "_scrollAfterload",
    value: function _scrollAfterload(item, anchor) {
      if (location.hash == item.dataset.href) {
        this._scrollAnchors(anchor);
      }
    }
  }]);

  return AnchorMenu;
}();



var AnchorMenuFactory = function AnchorMenuFactory(selector) {
  var _context3,
      _this6 = this;

  _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, AnchorMenuFactory);

  this.anchorMenus = [];

  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context3 = _babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(document.querySelectorAll("[".concat(selector, "]")))).call(_context3, function (el) {
    _this6.anchorMenus.push(new AnchorMenu(selector, el));
  });
};



/***/ })

}]);
//# sourceMappingURL=anchor-menu.c63b.js.map