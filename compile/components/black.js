"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Black = Black;
var _react = _interopRequireWildcard(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Badge = "streaming-badge-white.svg";
var SoundCloudLogo = "sc-logo-cloud active.970ed028.svg";
function Black() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "blackContainer"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "streaming"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      backgroundImage: "url(".concat(Badge, ")")
    },
    className: "badge"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "strTitle"
  }, "SoundCloud makes it easy to share your music and get discovered."), /*#__PURE__*/_react["default"].createElement("p", {
    className: "strDesc"
  }, "Not by just anyone, but an audience and community of 150 million plus tastemakers\u2026the day one early adopters that come to SoundCloud to discover and launch the careers of artists like Billie Eilish, Post Malone, Lil Nas X and beyond."))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "carrousel"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "slider"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "item"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: SoundCloudLogo,
    alt: "Logo"
  }), /*#__PURE__*/_react["default"].createElement("h2", null, "Share your music")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "item"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: SoundCloudLogo,
    alt: "Logo"
  }), /*#__PURE__*/_react["default"].createElement("h2", null, "Get discovered")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "item"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: SoundCloudLogo,
    alt: "Logo"
  }), /*#__PURE__*/_react["default"].createElement("h2", null, "Build your profile")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "item"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: SoundCloudLogo,
    alt: "Logo"
  }), /*#__PURE__*/_react["default"].createElement("h2", null, "Grow your fanbase")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "item"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: SoundCloudLogo,
    alt: "Logo"
  }), /*#__PURE__*/_react["default"].createElement("h2", null, "Share your music")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "item"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: SoundCloudLogo,
    alt: "Logo"
  }), /*#__PURE__*/_react["default"].createElement("h2", null, "Get discovered")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "item"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: SoundCloudLogo,
    alt: "Logo"
  }), /*#__PURE__*/_react["default"].createElement("h2", null, "Build your profile")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "item"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: SoundCloudLogo,
    alt: "Logo"
  }), /*#__PURE__*/_react["default"].createElement("h2", null, "Grow your fanbase")))));
}