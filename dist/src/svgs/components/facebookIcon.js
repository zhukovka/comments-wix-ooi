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


var FacebookIcon = function FacebookIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ['size']);

  return _react2.default.createElement(
    'svg',
    _extends({ viewBox: '0 0 20 19', width: size || "20", height: size || "19" }, props),
    _react2.default.createElement('path', { className: 'svgFill', d: 'M18.896 0H1.104C.494 0 0 .47 0 1.049V17.95C0 18.531.494 19 1.104 19h9.579v-7.358H8.076V8.775h2.607V6.66c0-2.454 1.577-3.79 3.882-3.79 1.104 0 2.052.078 2.329.113v2.564l-1.598.001c-1.254 0-1.496.566-1.496 1.396v1.83h2.989l-.39 2.868h-2.6V19h5.097c.61 0 1.104-.47 1.104-1.049V1.05C20 .469 19.506 0 18.896 0',
      fillRule: 'evenodd' })
  );
};
FacebookIcon.displayName = 'FacebookIcon';
FacebookIcon.propTypes = {
  size: _propTypes2.default.string
};
exports.default = FacebookIcon;
/* tslint:enable */
/* eslint-enable */
//# sourceMappingURL=facebookIcon.js.map