function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
const withRouter = WrappedComponent => props => {
  const params = useParams();
  const navigate = useNavigate();
  return /*#__PURE__*/React.createElement(WrappedComponent, _extends({}, props, {
    params: params,
    navigate: navigate
  }));
};
export default withRouter;