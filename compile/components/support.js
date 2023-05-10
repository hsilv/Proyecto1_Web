"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Support = Support;
var _react = _interopRequireWildcard(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var poteBaby = "poteBaby.dffb49e2.svg";
function Support() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "blackContainer support"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "supportContainer"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "picContainer"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: poteBaby,
    alt: "Pote Baby"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "descContainer"
  }, /*#__PURE__*/_react["default"].createElement("h2", null, "\u201CMy earliest supporter was SoundCloud...my right hand man since day one\u201D"), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("b", null, "Pote Baby"), " ", /*#__PURE__*/_react["default"].createElement("br", null), "First on SoundCloud of '22 Artists"))));
}