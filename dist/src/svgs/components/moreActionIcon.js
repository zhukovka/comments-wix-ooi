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


var MoreActionIcon = function MoreActionIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ['size']);

  return _react2.default.createElement(
    'svg',
    _extends({ viewBox: '0 0 3 16', width: size || "3", height: size || "16" }, props),
    _react2.default.createElement('path', { className: 'svgFill', d: 'M1.444 9.5A1.5 1.5 0 1 1 3 8a1.528 1.528 0 0 1-1.556 1.5zm0-6.5A1.5 1.5 0 1 1 3 1.5 1.528 1.528 0 0 1 1.444 3zm.112 10A1.5 1.5 0 1 1 0 14.5 1.531 1.531 0 0 1 1.556 13z',
      fillRule: 'evenodd' })
  );
};
MoreActionIcon.displayName = 'MoreActionIcon';
MoreActionIcon.propTypes = {
  size: _propTypes2.default.string
};
exports.default = MoreActionIcon;
/* tslint:enable */
/* eslint-enable */
//# sourceMappingURL=moreActionIcon.js.map