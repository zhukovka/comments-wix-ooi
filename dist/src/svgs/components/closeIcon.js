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


var CloseIcon = function CloseIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ['size']);

  return _react2.default.createElement(
    'svg',
    _extends({ viewBox: '0 0 12 12', width: size || "12", height: size || "12" }, props),
    _react2.default.createElement('path', { className: 'svgFill', d: 'M6 5.077L11.077 0 12 .923 6.923 6 12 11.077l-.923.923L6 6.923.923 12 0 11.077 5.077 6 0 .923.923 0 6 5.077z', fillRule: 'evenodd' })
  );
};
CloseIcon.displayName = 'CloseIcon';
CloseIcon.propTypes = {
  size: _propTypes2.default.string
};
exports.default = CloseIcon;
/* tslint:enable */
/* eslint-enable */
//# sourceMappingURL=closeIcon.js.map