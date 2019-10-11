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


var ActiveRadioButtonIcon = function ActiveRadioButtonIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ['size']);

  return _react2.default.createElement(
    'svg',
    _extends({ viewBox: '0 0 16 16', width: size || "16", height: size || "16" }, props),
    _react2.default.createElement(
      'g',
      { fill: 'none', transform: 'translate(1 1)', fillRule: 'evenodd' },
      _react2.default.createElement('circle', { cx: '7', cy: '7', r: '7', className: 'svgStroke svgFill', strokeOpacity: '.2' }),
      _react2.default.createElement('circle', { cx: '7', cy: '7', r: '3', className: 'svgFill' })
    )
  );
};
ActiveRadioButtonIcon.displayName = 'ActiveRadioButtonIcon';
ActiveRadioButtonIcon.propTypes = {
  size: _propTypes2.default.string
};
exports.default = ActiveRadioButtonIcon;
/* tslint:enable */
/* eslint-enable */
//# sourceMappingURL=activeRadioButtonIcon.js.map