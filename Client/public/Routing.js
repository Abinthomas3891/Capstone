"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var withRouter = function withRouter(WrappedComponent) {
  return function (props) {
    var params = (0, _reactRouterDom.useParams)();
    var navigate = (0, _reactRouterDom.useNavigate)();
    return /*#__PURE__*/_react["default"].createElement(WrappedComponent, _extends({}, props, {
      params: params,
      navigate: navigate
    }));
  };
};
var _default = withRouter;
exports["default"] = _default;