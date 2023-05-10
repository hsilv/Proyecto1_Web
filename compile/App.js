"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = App;
var _react = _interopRequireWildcard(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
var _welcome = require("./components/welcome");
var _paid = require("./components/paid");
var _black = require("./components/black");
var _card = require("./components/card");
var _support = require("./components/support");
var _bottom = require("./components/bottom");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var paidGif = "getpaid.04846f59.gif";
var accessPlay = "accessplaylist.c4d542a4.gif";
var distribute = "distribute.48e2adb5.gif";
var knowtop = "knowtopfans.803b376d.gif";
var buildProfile = "buildyourprofile.22d13177.gif";
var tracks = "tracks.00aef2dc.gif";
function App() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_welcome.Welcome, null), /*#__PURE__*/_react["default"].createElement(_black.Black, null), /*#__PURE__*/_react["default"].createElement(_card.LeftCard, {
    title: "Get paid fairly for your music.",
    p: ["Our revolutionary new fan-powered model is a more equitable and transparent approach that pays artists directly based on top fans' listening habits.", /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("b", null, "\u201CIt's such a simple idea. (As a fan) your monthly fees get split up between the songs (and artists) you actually listen to.\u201C\u2014 RAC,"), " ", "artist and producer.")],
    img: paidGif
  }), /*#__PURE__*/_react["default"].createElement(_card.LeftCard, {
    title: "Access playlist opportunities, increase your streams and reach new fans.",
    p: ["SoundCloud for Artists is the only platform that allows you to submit your tracks for national airplay via SoundCloud Radio on SiriusXM. Start pitching now to get your tracks in the hands of DSP playlist editors, A&R execs, brands, music supervisors and more."],
    img: accessPlay
  }), /*#__PURE__*/_react["default"].createElement(_card.LeftCard, {
    title: "Distribute your music to Spotify, Apple, TikTok, and more.",
    p: ["SoundCloud is the only streaming platform that also amplifies the global reach of your releases as a distributor to all major streaming platforms and social networks."],
    img: distribute
  }), /*#__PURE__*/_react["default"].createElement(_support.Support, null), /*#__PURE__*/_react["default"].createElement(_card.RightCard, {
    title: "Know who your top fans are and message them directly.",
    p: ["SoundCloud is the only streaming platform that allows you to easily identify your top fans based on their listening and engagement habits that support your music, and message them directly via desktop or mobile."],
    img: knowtop
  }), /*#__PURE__*/_react["default"].createElement(_card.RightCard, {
    title: "Build your profile and share your brand.",
    p: ["Tell your story and let listeners fall in love with you by using our expanded profile tools. Build your brand and express yourself to give fans more insight into who you are and what moves you. Repost and pin your favorite tracks in Spotlight, create playlists with commentary, host AMAs, and send text and audio messages to your top fans."],
    img: buildProfile
  }), /*#__PURE__*/_react["default"].createElement(_card.RightCard, {
    title: "Get feedback on your tracks to perfect your sound.",
    p: ["Only on SoundCloud can fans directly give feedback to your tracks. Send private links and post tracks for select groups of listeners only. Then get their feedback directly, make edits to your track, and replace the file without losing any stats."],
    img: tracks
  }), /*#__PURE__*/_react["default"].createElement(_bottom.Bottom, null));
}