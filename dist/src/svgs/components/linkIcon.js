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


var LinkIcon = function LinkIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ['size']);

  return _react2.default.createElement(
    'svg',
    _extends({ viewBox: '0 0 20 20', width: size || "20", height: size || "20" }, props),
    _react2.default.createElement('path', { className: 'svgFill', d: 'M6.328 12.412a.493.493 0 0 1 0-.697l5.39-5.39a.493.493 0 0 1 .698 0l1.306 1.306a.49.49 0 0 1 0 .697l-5.39 5.39a.495.495 0 0 1-.698 0l-1.306-1.306zM18.407 1.593A5.407 5.407 0 0 1 20 5.44a5.404 5.404 0 0 1-1.593 3.846l-3.373 3.372a.49.49 0 0 1-.697 0l-1.601-1.601 3.617-3.617a2.675 2.675 0 0 0 0-3.78 2.675 2.675 0 0 0-3.78 0L8.958 7.279 7.34 5.663a.492.492 0 0 1 0-.697l3.372-3.373A5.406 5.406 0 0 1 14.56 0c1.453 0 2.82.566 3.847 1.593zm-7.282 11.075l1.604 1.604a.49.49 0 0 1 0 .697L9.29 18.408A5.426 5.426 0 0 1 5.44 20a5.428 5.428 0 0 1-3.849-1.591 5.451 5.451 0 0 1 0-7.699l3.44-3.439a.504.504 0 0 1 .697 0l1.618 1.617-3.588 3.588a2.675 2.675 0 0 0 0 3.78 2.673 2.673 0 0 0 3.779 0l3.588-3.588z',
      fillRule: 'evenodd' })
  );
};
LinkIcon.displayName = 'LinkIcon';
LinkIcon.propTypes = {
  size: _propTypes2.default.string
};
exports.default = LinkIcon;
/* tslint:enable */
/* eslint-enable */
//# sourceMappingURL=linkIcon.js.map