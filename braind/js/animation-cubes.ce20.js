(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["animation-cubes"],{

/***/ "./src/blocks/modules/animation-cubes/animation-cubes.js":
/*!***************************************************************!*\
  !*** ./src/blocks/modules/animation-cubes/animation-cubes.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AnimationCubes; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_repeat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/repeat */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/repeat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_repeat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_repeat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/set-timeout */ "./node_modules/@babel/runtime-corejs3/core-js-stable/set-timeout.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ "./node_modules/@babel/runtime-corejs3/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");







var AnimationCubes = /*#__PURE__*/function () {
  function AnimationCubes(el) {
    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, AnimationCubes);

    this.root = el;
    if (!this.root) return false;
    this.objects = [];
    this.delays = []; // this.init()
    // this.render()
    // this.delayFunc()

    this.initNative();
  }

  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(AnimationCubes, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.ease = function () {
        var easings = {
          "linear": function linear(progress) {
            if (progress == 0) return 0;
            if (progress == 1) return 1;
            return progress;
          },
          "out-elastic": function outElastic(progress) {
            if (progress == 0) return 0;
            if (progress == 1) return 1;
            return Math.pow(2, -10 * progress) * Math.sin((progress - .1) * 5 * Math.PI) + 1;
          },
          "in-out-exponential": function inOutExponential(progress) {
            if (progress == 0) return 0;
            if (progress == 1) return 1;
            return (progress *= 2) < 1 ? .5 * Math.pow(1024, progress - 1) : .5 * (-Math.pow(2, -10 * (progress - 1)) + 2);
          }
        };
        return function (_ref, progress) {
          var _ref$easing = _ref.easing,
              easing = _ref$easing === void 0 ? "linear" : _ref$easing;
          return easings[easing](progress);
        };
      }();

      this.scene = new three__WEBPACK_IMPORTED_MODULE_5__["Scene"]();
      this.scene.background = new three__WEBPACK_IMPORTED_MODULE_5__["Color"](0xf0f0f0);
      this.setCamera();
      this.createCube(0, 0, 0, 0);

      var nlayers = 24,
          nfaces = 6,
          l = 1,
          t = 5,
          //seconds
      f = function f(i, j, m) {
        var h = 0.5 * m,
            q = 0.25 * m,
            s = Math.pow(-1, Math.floor(2 * j / m) + 1);
        return s * Math.min(i, Math.floor(q - Math.floor(Math.abs(q - j % h))));
      };

      for (var i = 1; i < nlayers; i++) {
        var m = i * nfaces;

        for (var _j = 0; _j < m; _j++) {
          var x = l * f(i, _j, m),
              y = -l * f(i, (_j + i) % m, m),
              z = l * f(i, (_j + 2 * i) % m, m);
          this.createCube(x, y, z);
        }
      }

      this.renderer = new three__WEBPACK_IMPORTED_MODULE_5__["WebGLRenderer"]({
        antialias: true
      });
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(this.root.offsetWidth, this.root.offsetHeight);
      this.root.appendChild(this.renderer.domElement);

      _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_2___default()(function () {
        _this.render();
      }, 300);

      var n = 1,
          j = 0;
      this.delays[0] = [];
      this.delays[0].push(this.objects[0]);

      for (var _i = 1; _i < nlayers; _i++) {
        var _m = _i * nfaces,
            oldN = n;

        n = n + _m;

        for (var index = oldN; index <= n - 1; index++) {
          var delay = _i * .25 * t / nlayers * 1000;
          if (!this.delays[delay]) this.delays[delay] = [];
          this.delays[delay].push(this.objects[index]);
        }
      }
    }
  }, {
    key: "createCube",
    value: function createCube() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var opacity = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      // cubes
      var scale = 2;
      this.cubeGeo = new three__WEBPACK_IMPORTED_MODULE_5__["BoxBufferGeometry"](1 * scale, 1 * scale, 1 * scale);
      this.cubeMaterial = new three__WEBPACK_IMPORTED_MODULE_5__["MeshBasicMaterial"]({
        color: 0xffffff,
        map: new three__WEBPACK_IMPORTED_MODULE_5__["TextureLoader"]().load("".concat(window.SITE_TEMPLATE_PATH_JS, "img/animation-cubes/rect3.png")),
        transparent: true,
        opacity: opacity
      });
      var voxel = new three__WEBPACK_IMPORTED_MODULE_5__["Mesh"](this.cubeGeo, this.cubeMaterial);
      voxel.position.set(x * scale, y * scale, z * scale);
      this.scene.add(voxel);
      this.objects.push(voxel);
    }
  }, {
    key: "setCamera",
    value: function setCamera() {
      var width = this.root.offsetWidth,
          height = this.root.offsetHeight,
          aspect = width / height,
          D = 15;
      this.camera = new three__WEBPACK_IMPORTED_MODULE_5__["OrthographicCamera"](-D * aspect, D * aspect, D, -D, 1, 1000);
      this.camera.position.set(20, 20, 20);
      this.camera.lookAt(0, 0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      this.renderer.render(this.scene, this.camera);
    }
  }, {
    key: "trackTime",
    value: function trackTime(timing) {
      var now = performance.now();
      if (!timing.startTime) timing.startTime = now;
      var elapsed = now - timing.startTime;
      var duration = timing.duration;
      if (duration != null && duration <= elapsed) timing.startTime = null;
      return elapsed;
    }
  }, {
    key: "getProgress",
    value: function getProgress(timing) {
      var duration = timing.duration;
      return duration > 0 ? Math.min(this.trackTime(timing) / duration, 1) : 1;
    }
  }, {
    key: "getCurrentValue",
    value: function getCurrentValue(_ref2, easing) {
      var _ref2$from = _ref2.from,
          from = _ref2$from === void 0 ? 0 : _ref2$from,
          to = _ref2.to;
      from + (to - from) * easing;
    }
  }, {
    key: "play",
    value: function play(_ref3) {
      var _this2 = this;

      var timeline = _ref3.timeline,
          _ref3$repeat = _babel_runtime_corejs3_core_js_stable_instance_repeat__WEBPACK_IMPORTED_MODULE_1___default()(_ref3),
          repeat = _ref3$repeat === void 0 ? false : _ref3$repeat,
          _ref3$startAt = _ref3.startAt,
          startAt = _ref3$startAt === void 0 ? 0 : _ref3$startAt;

      var _timeline$startAt = timeline[startAt],
          keyframes = _timeline$startAt.keyframes,
          timing = _timeline$startAt.timing;

      var tick = function tick(time) {
        var progress = _this2.getProgress(timing);

        var easing = _this2.ease(timing, progress);

        var rotation = _this2.getCurrentValue(keyframes.rotation, easing);

        var opacity = _this2.getCurrentValue(keyframes.opacity, easing);

        _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_0___default()(timeline).call(timeline, function (el) {
          _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_2___default()(function () {
            var _context;

            _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_0___default()(_context = el.meshs).call(_context, function (mesh) {
              if (mesh.rotation.y < Math.PI / 2) mesh.rotation.y = rotation;
              if (mesh.material.opacity != 1) mesh.material.opacity = opacity;
            });
          }, el.delay);
        });

        _this2.renderer.render(_this2.scene, _this2.camera);

        requestAnimationFrame(tick);
      };

      tick();
    }
  }, {
    key: "delayFunc",
    value: function delayFunc() {
      var _this3 = this;

      var timeline = [];

      for (var delay in this.delays) {
        timeline.push({
          meshs: this.delays[delay],
          delay: delay
        });
      }

      _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_0___default()(timeline).call(timeline, function (delay) {
        delay.keyframes = {
          rotation: {
            from: 0,
            to: Math.PI / 2
          },
          opacity: {
            from: 0,
            to: 1
          }
        }, delay.timing = {
          duration: 1000
        };
      });

      _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_2___default()(function () {
        _this3.play({
          timeline: timeline,
          repeat: false
        });
      }, 500);
    }
  }, {
    key: "initNative",
    value: function initNative() {
      var camera,
          scene,
          renderer,
          root = this.root;
      var cubeGeo, cubeMaterial;
      var objects = [];
      var delays = [];
      init();
      render();

      function init() {
        scene = new three__WEBPACK_IMPORTED_MODULE_5__["Scene"]();
        scene.background = new three__WEBPACK_IMPORTED_MODULE_5__["Color"](0xffffff);
        setCamera();
        createCube(0, 0, 0, 0);

        var nlayers = 24,
            nfaces = 6,
            l = 1,
            t = 5,
            //seconds
        f = function f(i, j, m) {
          var h = 0.5 * m,
              q = 0.25 * m,
              s = Math.pow(-1, Math.floor(2 * j / m) + 1);
          return s * Math.min(i, Math.floor(q - Math.floor(Math.abs(q - j % h))));
        };

        for (var i = 1; i < nlayers; i++) {
          var m = i * nfaces;

          for (var _j2 = 0; _j2 < m; _j2++) {
            var x = l * f(i, _j2, m),
                y = -l * f(i, (_j2 + i) % m, m),
                z = l * f(i, (_j2 + 2 * i) % m, m);
            createCube(x, y, z);
          }
        }

        renderer = new three__WEBPACK_IMPORTED_MODULE_5__["WebGLRenderer"]({
          antialias: true
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(root.offsetWidth, root.offsetHeight);
        root.appendChild(renderer.domElement);
        render();
        var n = 1,
            j = 0;
        delays[0] = [];
        delays[0].push(objects[0]);

        for (var _i2 = 1; _i2 < nlayers; _i2++) {
          var _m2 = _i2 * nfaces,
              oldN = n;

          n = n + _m2;

          for (var index = oldN; index <= n - 1; index++) {
            var delay = _i2 * .25 * t / nlayers * 1000;
            if (!delays[delay]) delays[delay] = [];
            delays[delay].push(objects[index]);
          }
        }
      }

      function createCube() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var opacity = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        // cubes
        var scale = 2;
        cubeGeo = new three__WEBPACK_IMPORTED_MODULE_5__["BoxBufferGeometry"](1 * scale, 1 * scale, 1 * scale);
        cubeMaterial = new three__WEBPACK_IMPORTED_MODULE_5__["MeshBasicMaterial"]({
          color: 0xffffff,
          map: new three__WEBPACK_IMPORTED_MODULE_5__["TextureLoader"]().load("".concat(window.SITE_TEMPLATE_PATH_JS, "img/animation-cubes/rect3.png")),
          transparent: true,
          opacity: opacity
        });
        var voxel = new three__WEBPACK_IMPORTED_MODULE_5__["Mesh"](cubeGeo, cubeMaterial);
        voxel.position.set(x * scale, y * scale, z * scale);
        scene.add(voxel);
        objects.push(voxel);
      }

      function setCamera() {
        var width = root.offsetWidth,
            height = root.offsetHeight,
            aspect = width / height,
            D = 15;
        camera = new three__WEBPACK_IMPORTED_MODULE_5__["OrthographicCamera"](-D * aspect, D * aspect, D, -D, 1, 1000);
        camera.position.set(20, 20, 20);
        camera.lookAt(0, 0, 0);
      }

      function render() {
        renderer.render(scene, camera);
      }

      var trackTime = function trackTime(timing) {
        var now = performance.now();
        if (!timing.startTime) timing.startTime = now;
        var elapsed = now - timing.startTime;
        var duration = timing.duration;
        if (duration != null && duration <= elapsed) timing.startTime = null;
        return elapsed;
      };

      var getProgress = function getProgress(timing) {
        var duration = timing.duration;
        return duration > 0 ? Math.min(trackTime(timing) / duration, 1) : 1;
      };

      var getCurrentValue = function getCurrentValue(_ref4, easing) {
        var _ref4$from = _ref4.from,
            from = _ref4$from === void 0 ? 0 : _ref4$from,
            to = _ref4.to;
        return from + (to - from) * easing;
      };

      var ease = function () {
        var easings = {
          "linear": function linear(progress) {
            if (progress == 0) return 0;
            if (progress == 1) return 1;
            return progress;
          },
          "out-elastic": function outElastic(progress) {
            if (progress == 0) return 0;
            if (progress == 1) return 1;
            return Math.pow(2, -10 * progress) * Math.sin((progress - .1) * 5 * Math.PI) + 1;
          },
          "in-out-exponential": function inOutExponential(progress) {
            if (progress == 0) return 0;
            if (progress == 1) return 1;
            return (progress *= 2) < 1 ? .5 * Math.pow(1024, progress - 1) : .5 * (-Math.pow(2, -10 * (progress - 1)) + 2);
          }
        };
        return function (_ref5, progress) {
          var _ref5$easing = _ref5.easing,
              easing = _ref5$easing === void 0 ? "linear" : _ref5$easing;
          return easings[easing](progress);
        };
      }();

      var play = function play(_ref6) {
        var timeline = _ref6.timeline,
            _ref6$repeat = _babel_runtime_corejs3_core_js_stable_instance_repeat__WEBPACK_IMPORTED_MODULE_1___default()(_ref6),
            repeat = _ref6$repeat === void 0 ? false : _ref6$repeat,
            _ref6$startAt = _ref6.startAt,
            startAt = _ref6$startAt === void 0 ? 0 : _ref6$startAt;

        var _timeline$startAt2 = timeline[startAt],
            keyframes = _timeline$startAt2.keyframes,
            timing = _timeline$startAt2.timing;
        var raf;

        var tick = function tick(time) {
          var progress = getProgress(timing);
          var easing = ease(timing, progress);
          var rotation = getCurrentValue(keyframes.rotation, easing);
          var opacity = getCurrentValue(keyframes.opacity, easing);

          _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_0___default()(timeline).call(timeline, function (el, elIndex) {
            _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_2___default()(function () {
              var _context2;

              _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = el.meshs).call(_context2, function (mesh) {
                if (mesh.rotation.y < Math.PI / 2) mesh.rotation.y = rotation;
                if (mesh.material.opacity != 1) mesh.material.opacity = opacity;
              });
            }, el.delay);
          });

          renderer.render(scene, camera);
          raf = requestAnimationFrame(tick);
        };

        tick();

        _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_2___default()(function () {
          cancelAnimationFrame(raf);
        }, 3000);
      };

      var timeline = [];

      for (var delay in delays) {
        timeline.push({
          meshs: delays[delay],
          delay: delay
        });
      }

      _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_0___default()(timeline).call(timeline, function (delay) {
        delay.keyframes = {
          rotation: {
            from: 0,
            to: Math.PI / 2
          },
          opacity: {
            from: 0,
            to: 1
          }
        }, delay.timing = {
          duration: 1000
        };
      });

      document.addEventListener('cubes-in-viewport', function (e) {
        play({
          timeline: timeline,
          repeat: false
        });
      });
    }
  }]);

  return AnimationCubes;
}();



/***/ })

}]);
//# sourceMappingURL=animation-cubes.ce20.js.map