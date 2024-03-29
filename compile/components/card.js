"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LeftCard = LeftCard;
exports.RightCard = RightCard;
var _react = _interopRequireWildcard(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function LeftCard(_ref) {
  var title = _ref.title,
    p = _ref.p,
    img = _ref.img;
  var paragraphs = [];
  var _iterator = _createForOfIteratorHelper(p),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var par = _step.value;
      paragraphs.push( /*#__PURE__*/_react["default"].createElement("p", {
        key: par
      }, par));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "card Left"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "descContainer"
  }, /*#__PURE__*/_react["default"].createElement("h2", null, title), paragraphs), /*#__PURE__*/_react["default"].createElement("img", {
    src: img,
    alt: "Gif"
  }));
}
function RightCard(_ref2) {
  var title = _ref2.title,
    p = _ref2.p,
    img = _ref2.img;
  var paragraphs = [];
  var _iterator2 = _createForOfIteratorHelper(p),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var par = _step2.value;
      paragraphs.push( /*#__PURE__*/_react["default"].createElement("p", {
        key: par
      }, par));
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "card Right"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: img,
    alt: "Gif"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "descContainer"
  }, /*#__PURE__*/_react["default"].createElement("h2", null, title), paragraphs));
}