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


var ActiveSendIcon = function ActiveSendIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ['size']);

  return _react2.default.createElement(
    'svg',
    _extends({ viewBox: '0 0 18 18', width: size || "18", height: size || "18" }, props),
    _react2.default.createElement('path', { className: 'svgFill', d: 'M1.496.112l15.948 7.95c.742.387.741 1.472 0 1.86L1.488 17.887c-.742.388-1.61-.283-1.431-1.136l1.358-6.537 8.911-1.055c.281-.026.282-.336 0-.362L1.365 7.786.013 1.25C-.114.397.704-.275 1.496.112z',
      fillRule: 'evenodd' })
  );
};
ActiveSendIcon.displayName = 'ActiveSendIcon';
ActiveSendIcon.propTypes = {
  size: _propTypes2.default.string
};
exports.default = ActiveSendIcon;
/* tslint:enable */
/* eslint-enable */
//# sourceMappingURL=activeSendIcon.js.map