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


var VideoIcon = function VideoIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ['size']);

  return _react2.default.createElement(
    'svg',
    _extends({ viewBox: '0 0 17 11', width: size || "17", height: size || "11" }, props),
    _react2.default.createElement('path', { className: 'svgFill', d: 'M13 3l2.842-1.421A.8.8 0 0 1 17 2.294v6.412a.8.8 0 0 1-1.158.715L13 8v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v2zm0 3.9l2.708 1.354a.2.2 0 0 0 .29-.179V2.922a.2.2 0 0 0-.29-.178L13 4.098V6.9zM1 1v9h11V1H1z'
    })
  );
};
VideoIcon.displayName = 'VideoIcon';
VideoIcon.propTypes = {
  size: _propTypes2.default.string
};
exports.default = VideoIcon;
/* tslint:enable */
/* eslint-enable */
//# sourceMappingURL=videoIcon.js.map