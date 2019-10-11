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


var GifIcon = function GifIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ['size']);

  return _react2.default.createElement(
    'svg',
    _extends({ viewBox: '0 0 16 11', width: size || "16", height: size || "11" }, props),
    _react2.default.createElement(
      'g',
      { fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement('rect', { width: '15', height: '10', x: '.5', y: '.5', className: 'svgStroke', rx: '1' }),
      _react2.default.createElement(
        'text',
        { className: 'svgFill', fontFamily: 'Arial-BoldMT, Arial', fontSize: '6', fontWeight: 'bold' },
        _react2.default.createElement(
          'tspan',
          { x: '3', y: '8' },
          'GIF'
        )
      )
    )
  );
};
GifIcon.displayName = 'GifIcon';
GifIcon.propTypes = {
  size: _propTypes2.default.string
};
exports.default = GifIcon;
/* tslint:enable */
/* eslint-enable */
//# sourceMappingURL=gifIcon.js.map