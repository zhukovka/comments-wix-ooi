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


var DeleteTextIcon = function DeleteTextIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ['size']);

  return _react2.default.createElement(
    'svg',
    _extends({ viewBox: '0 0 22 22', width: size || "22", height: size || "22" }, props),
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('circle', { id: 'b', cx: '10', cy: '10', r: '10' }),
      _react2.default.createElement(
        'filter',
        { id: 'a', width: '115%', height: '115%', x: '-7.5%', y: '-7.5%', filterUnits: 'objectBoundingBox' },
        _react2.default.createElement('feOffset', { 'in': 'SourceAlpha', result: 'shadowOffsetOuter1' }),
        _react2.default.createElement('feGaussianBlur', { 'in': 'shadowOffsetOuter1', result: 'shadowBlurOuter1', stdDeviation: '.5' }),
        _react2.default.createElement('feColorMatrix', { 'in': 'shadowBlurOuter1', values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.198171422 0' })
      )
    ),
    _react2.default.createElement(
      'g',
      { fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { transform: 'translate(1 1)' },
        _react2.default.createElement('use', { className: 'svgFill', filter: 'url(#a)', xlinkHref: '#b' }),
        _react2.default.createElement('use', { className: 'svgFill', xlinkHref: '#b' })
      ),
      _react2.default.createElement('path', { className: 'svgFill', d: 'M11.263 11.933l-2.68 2.68-.67-.67 2.68-2.68-2.68-2.68.67-.67 2.68 2.68 2.68-2.68.67.67-2.68 2.68 2.68 2.68-.67.67-2.68-2.68z' })
    )
  );
};
DeleteTextIcon.displayName = 'DeleteTextIcon';
DeleteTextIcon.propTypes = {
  size: _propTypes2.default.string
};
exports.default = DeleteTextIcon;
/* tslint:enable */
/* eslint-enable */
//# sourceMappingURL=deleteTextIcon.js.map