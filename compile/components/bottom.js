"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bottom = Bottom;
var _react = _interopRequireWildcard(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
require("../styles/bottom.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var fosc = "FoSC_2022_EKKSTACY.c029ecb5.jpg";
function Bottom() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "bottomContainer"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "descContainer"
  }, /*#__PURE__*/_react["default"].createElement("h2", null, "On SoundCloud, your streams and fans are worth more."), /*#__PURE__*/_react["default"].createElement("p", null, "We believe that what\u2019s next isn\u2019t determined by algorithms and gatekeepers, but that the true path toward a long and successful career is best achieved by cultivating deep fan relationships and community.", /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), "We\u2019re driving the evolution of what streaming should be, and what it needs to be to create a more equitable and exciting future for ALL artists.", /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), "Become a member of something much bigger than any other streaming platform or distributor can offer- a movement and community of artists, producers, and songwriters who are the driving force that continues to push what\u2019s", /*#__PURE__*/_react["default"].createElement("i", null, " Next"), "."), /*#__PURE__*/_react["default"].createElement("div", {
    className: "buttonContainer"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "buttonRow"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "white"
  }, "Join SoundCloud"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "black"
  }, "Sign into your SoundCloud account")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "picContainer"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: fosc,
    alt: "Fosc"
  })));
}