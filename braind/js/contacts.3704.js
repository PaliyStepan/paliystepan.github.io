(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contacts"],{

/***/ "./src/blocks/modules/event/event.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/event/event.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contacts; });
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ "./node_modules/@babel/runtime-corejs3/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var Contacts = /*#__PURE__*/function () {
  function Contacts() {
    var _this = this;

    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Contacts);

    this.el = document.querySelector('#event-map');
    if (!this.el) return false;

    if (window.ymapsReady) {
      this.initMap();
    } else {
      document.addEventListener('ymaps-ready', function (e) {
        _this.initMap();
      });
    }
  }

  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Contacts, [{
    key: "initMap",
    value: function initMap() {
      var points = [];
      var myMap;
      var cords = this.el.getAttribute('data-cords').split(",");
      points.push(cords);
      myMap = new ymaps.Map(this.el, {
        center: this.el.getAttribute('data-center').split(","),
        controls: [],
        zoom: this.el.getAttribute('data-zoom')
      }, {
        searchControlProvider: 'yandex#search'
      });
      var iconCollection = new ymaps.GeoObjectCollection(null, {
        iconLayout: 'default#image',
        iconImageHref: "".concat(window.SITE_TEMPLATE_PATH_JS, "img/icon-map.svg"),
        iconImageSize: [33, 41] //iconImageOffset: [-16.5, -41]

      });

      for (var i = 0, len = points.length; i < len; i++) {
        iconCollection.add(new ymaps.Placemark(points[i]));
      }

      myMap.geoObjects.add(iconCollection);
      var zoomControl = new ymaps.control.ZoomControl({
        options: {
          size: "small",
          position: {
            left: 'auto',
            right: '2rem',
            top: '2rem'
          }
        }
      });
      var geolocationControl = new ymaps.control.GeolocationControl({
        options: {
          position: {
            left: 'auto',
            right: '2rem',
            top: '9rem'
          }
        }
      });
      myMap.controls.add(zoomControl);
      myMap.controls.add(geolocationControl);
      myMap.behaviors.disable('scrollZoom');
    }
  }]);

  return Contacts;
}();



/***/ })

}]);
//# sourceMappingURL=contacts.3704.js.map