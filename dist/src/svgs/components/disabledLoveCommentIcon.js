'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint-disable */
/* tslint:disable */


var DisabledLoveCommentIcon = function DisabledLoveCommentIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ['size']);

  return _react2.default.createElement(
    'svg',
    _extends({ viewBox: '0 0 18 15', width: size || "18", height: size || "15" }, props),
    _react2.default.createElement('path', { fill: 'none', className: 'svgStroke', d: 'M1.346 7.641C2.85 10.237 7.978 14.5 9 14.5c1.102 0 6.179-4.145 7.647-6.844.877-1.661 1.092-3.297.567-4.616-.333-1.002-1.178-1.825-2.3-2.295-1.826-.697-4.203.152-5.51 1.932l-.396.538-.405-.53C7.286.957 5.075.086 3.156.754c-1.09.337-1.906 1.177-2.38 2.412C.26 4.46.479 6.094 1.346 7.64z'
    })
  );
};
DisabledLoveCommentIcon.displayName = 'DisabledLoveCommentIcon';
DisabledLoveCommentIcon.propTypes = {
  size: _propTypes2.default.string
};
exports.default = DisabledLoveCommentIcon;
/* tslint:enable */
/* eslint-enable */
//# sourceMappingURL=disabledLoveCommentIcon.js.map