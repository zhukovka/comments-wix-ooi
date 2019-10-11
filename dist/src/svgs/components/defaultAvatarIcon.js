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


var DefaultAvatarIcon = function DefaultAvatarIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ['size']);

  return _react2.default.createElement(
    'svg',
    _extends({ viewBox: '0 0 40 40', width: size || "40", height: size || "40" }, props),
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('circle', { id: 'a', cx: '20', cy: '20', r: '20' })
    ),
    _react2.default.createElement(
      'g',
      { fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'mask',
        { id: 'b', className: 'svgFill' },
        _react2.default.createElement('use', { xlinkHref: '#a' })
      ),
      _react2.default.createElement('use', { 'class': 'svgFill', xlinkHref: '#a' }),
      _react2.default.createElement(
        'g',
        { 'class': 'svgFill', mask: 'url(#b)' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(5 10)' },
          _react2.default.createElement('circle', { cx: '15.5', cy: '7.5', r: '7.5' }),
          _react2.default.createElement('circle', { cx: '15', cy: '32', r: '15' })
        )
      )
    )
  );
};
DefaultAvatarIcon.displayName = 'DefaultAvatarIcon';
DefaultAvatarIcon.propTypes = {
  size: _propTypes2.default.string
};
exports.default = DefaultAvatarIcon;
/* tslint:enable */
/* eslint-enable */
//# sourceMappingURL=defaultAvatarIcon.js.map