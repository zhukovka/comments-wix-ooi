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


var BackArrowIcon = function BackArrowIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ['size']);

  return _react2.default.createElement(
    'svg',
    _extends({ viewBox: '0 0 10 16', width: size || "10", height: size || "16" }, props),
    _react2.default.createElement('path', { fill: 'none', className: 'svgStroke', d: 'M8.778 15.556L1 7.778 8.778 0' })
  );
};
BackArrowIcon.displayName = 'BackArrowIcon';
BackArrowIcon.propTypes = {
  size: _propTypes2.default.string
};
exports.default = BackArrowIcon;
/* tslint:enable */
/* eslint-enable */
//# sourceMappingURL=backArrowIcon.js.map