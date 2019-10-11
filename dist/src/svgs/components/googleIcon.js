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


var GoogleIcon = function GoogleIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ['size']);

  return _react2.default.createElement(
    'svg',
    _extends({ viewBox: '0 0 30 19', width: size || "30", height: size || "19" }, props),
    _react2.default.createElement('path', { className: 'svgFill', d: 'M27.353 10.364c0 .85.012 1.74 0 2.59h-2.647v-2.59h-2.647V7.773h2.647V5.182h2.647c0 .847-.018 1.742 0 2.59H30v2.592h-2.647zm-21.33 7.971C1.79 16.685-.674 12.235.16 7.745.996 3.254 4.89 0 9.428 0a9.516 9.516 0 0 1 6.296 2.341 33.68 33.68 0 0 1-2.39 2.494 6.179 6.179 0 0 0-7.328-.194 6.087 6.087 0 0 0-2.384 4.673 6.092 6.092 0 0 0 2.127 4.796c2.867 2.619 8.284 1.318 9.076-2.69-1.795-.026-3.595 0-5.387-.059V8.133h9.009a10.943 10.943 0 0 1-1.704 7.334 9.266 9.266 0 0 1-10.72 2.868z'
    })
  );
};
GoogleIcon.displayName = 'GoogleIcon';
GoogleIcon.propTypes = {
  size: _propTypes2.default.string
};
exports.default = GoogleIcon;
/* tslint:enable */
/* eslint-enable */
//# sourceMappingURL=googleIcon.js.map