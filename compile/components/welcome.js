"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Welcome = Welcome;
var _react = _interopRequireWildcard(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var SoundCloudLogo = "sc-logo-for-artists-cloud-black.37f1a0e2.png";
var Kellow = "Kelow.png";
function Welcome() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "headDiv"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bar"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: SoundCloudLogo,
    alt: "SoundCloud Logo"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://soundcloud.com/kelow",
    className: "Kellow",
    style: {
      backgroundImage: "url(".concat(Kellow, ")")
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "presentation"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "title"
  }, "This is ", /*#__PURE__*/_react["default"].createElement("br", null), " SoundCloud for Artists."), /*#__PURE__*/_react["default"].createElement("div", {
    className: "desc"
  }, "Introducing our all in one platform to help artists ", /*#__PURE__*/_react["default"].createElement("br", null), " accelerate careers and become what's Next in music."), /*#__PURE__*/_react["default"].createElement("div", {
    className: "buttonContainer"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "buttons"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "join"
  }, "Join SoundCloud for Artists"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "sign"
  }, "Sign in"))))));
}