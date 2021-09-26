(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["animation-pattern-lines"],{

/***/ "./src/blocks/modules/animation-pattern-lines/animation-pattern-lines.js":
/*!*******************************************************************************!*\
  !*** ./src/blocks/modules/animation-pattern-lines/animation-pattern-lines.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AnimationPatternLines; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/set-timeout */ "./node_modules/@babel/runtime-corejs3/core-js-stable/set-timeout.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ "./node_modules/@babel/runtime-corejs3/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);







var AnimationPatternLines = /*#__PURE__*/function () {
  function AnimationPatternLines(selector, el) {
    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, AnimationPatternLines);

    this.selector = selector;
    this.root = el || document.querySelector("[".concat(this.selector, "]"));
    this.url = this.root.getAttribute(this.selector);
    if (!this.root || !this.url) return false;
    this.animations = [];
    this.init();
  }

  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(AnimationPatternLines, [{
    key: "init",
    value: function init() {
      this.request();
    }
  }, {
    key: "request",
    value: function request() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_5___default()({
        method: 'GET',
        url: this.url
      }).then(function (res) {
        var template = res.data.template || res.data;
        _this.root.innerHTML = template;

        _this.animate();
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this2 = this;

      var svgs = this.root.querySelectorAll('[data-svg]');

      _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default()(svgs).call(svgs, function (svg, svgIndex) {
        var io = new IntersectionObserver(function (entries) {
          if (entries[0].isIntersecting) {
            if (!svg.classList.contains('is-inited')) {
              var groups = svg.querySelectorAll('[data-animate-group]');

              _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_0___default()(function () {
                _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default()(groups).call(groups, function (group, groupIndex) {
                  var _delay = !svgIndex ? 0 : Math.floor(Math.random() * svgs.length) * 3000,
                      animation = Object(animejs__WEBPACK_IMPORTED_MODULE_4__["default"])({
                    targets: group.querySelectorAll('[data-stroke] path'),
                    strokeDashoffset: [animejs__WEBPACK_IMPORTED_MODULE_4__["default"].setDashoffset, 0],
                    easing: 'easeInOutCubic',
                    duration: 500,
                    direction: 'normal',
                    // loop: true,
                    opacity: [0, 1],
                    endDelay: _delay,
                    delay: function delay(el, i) {
                      return i * 500 + _delay;
                    },
                    update: function update() {},
                    begin: function begin() {}
                  });

                  _this2.animations.push({
                    finished: false,
                    anime: animation
                  });

                  animation.finished.then(function () {
                    _this2.animations[groupIndex].finished = true;
                  });
                });
              }, 500);

              svg.classList.add('is-inited');
            }
          }
        }, {});
        io.observe(svg);
      });

      var observerContainer = new IntersectionObserver(function (entries) {
        _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default()(entries).call(entries, function (entry) {
          if (entry.isIntersecting) {
            var _context;

            _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default()(_context = _this2.animations).call(_context, function (animation) {
              if (!animation.finished) {
                animation.anime.play();
              }
            });
          } else {
            var _context2;

            _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = _this2.animations).call(_context2, function (animation) {
              if (!animation.finished) {
                animation.anime.pause();
              }
            });
          }
        });
      }, {});
      observerContainer.observe(this.root);
    }
  }]);

  return AnimationPatternLines;
}();



/***/ })

}]);
//# sourceMappingURL=animation-pattern-lines.9e30.js.map