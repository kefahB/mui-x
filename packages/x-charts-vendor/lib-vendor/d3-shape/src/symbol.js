"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Symbol;
exports.symbolsStroke = exports.symbolsFill = void 0;
var _constant = _interopRequireDefault(require("./constant.js"));
var _path = require("./path.js");
var _asterisk = _interopRequireDefault(require("./symbol/asterisk.js"));
var _circle = _interopRequireDefault(require("./symbol/circle.js"));
var _cross = _interopRequireDefault(require("./symbol/cross.js"));
var _diamond = _interopRequireDefault(require("./symbol/diamond.js"));
var _diamond2 = _interopRequireDefault(require("./symbol/diamond2.js"));
var _plus = _interopRequireDefault(require("./symbol/plus.js"));
var _square = _interopRequireDefault(require("./symbol/square.js"));
var _square2 = _interopRequireDefault(require("./symbol/square2.js"));
var _star = _interopRequireDefault(require("./symbol/star.js"));
var _triangle = _interopRequireDefault(require("./symbol/triangle.js"));
var _triangle2 = _interopRequireDefault(require("./symbol/triangle2.js"));
var _wye = _interopRequireDefault(require("./symbol/wye.js"));
var _times = _interopRequireDefault(require("./symbol/times.js"));
// These symbols are designed to be filled.
const symbolsFill = exports.symbolsFill = [_circle.default, _cross.default, _diamond.default, _square.default, _star.default, _triangle.default, _wye.default];

// These symbols are designed to be stroked (with a width of 1.5px and round caps).
const symbolsStroke = exports.symbolsStroke = [_circle.default, _plus.default, _times.default, _triangle2.default, _asterisk.default, _square2.default, _diamond2.default];
function Symbol(type, size) {
  let context = null,
    path = (0, _path.withPath)(symbol);
  type = typeof type === "function" ? type : (0, _constant.default)(type || _circle.default);
  size = typeof size === "function" ? size : (0, _constant.default)(size === undefined ? 64 : +size);
  function symbol() {
    let buffer;
    if (!context) context = buffer = path();
    type.apply(this, arguments).draw(context, +size.apply(this, arguments));
    if (buffer) return context = null, buffer + "" || null;
  }
  symbol.type = function (_) {
    return arguments.length ? (type = typeof _ === "function" ? _ : (0, _constant.default)(_), symbol) : type;
  };
  symbol.size = function (_) {
    return arguments.length ? (size = typeof _ === "function" ? _ : (0, _constant.default)(+_), symbol) : size;
  };
  symbol.context = function (_) {
    return arguments.length ? (context = _ == null ? null : _, symbol) : context;
  };
  return symbol;
}