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


var DisabledPluginPlusIcon = function DisabledPluginPlusIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ['size']);

  return _react2.default.createElement(
    'svg',
    _extends({ viewBox: '0 0 18 18', width: size || "18", height: size || "18" }, props),
    _react2.default.createElement(
      'g',
      { fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement('circle', { cx: '9', cy: '9', r: '9', className: 'svgFill', opacity: '.2' }),
      _react2.default.createElement('path', { className: 'svgFill', d: 'M8.526 8.526v-3.79h.948v3.79h3.79v.948h-3.79v3.79h-.948v-3.79h-3.79v-.948h3.79z' })
    )
  );
};
DisabledPluginPlusIcon.displayName = 'DisabledPluginPlusIcon';
DisabledPluginPlusIcon.propTypes = {
  size: _propTypes2.default.string
};
exports.default = DisabledPluginPlusIcon;
/* tslint:enable */
/* eslint-enable */
//# sourceMappingURL=disabledPluginPlusIcon.js.map