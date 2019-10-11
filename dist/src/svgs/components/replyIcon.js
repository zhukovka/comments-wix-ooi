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


var ReplyIcon = function ReplyIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ['size']);

  return _react2.default.createElement(
    'svg',
    _extends({ viewBox: '0 0 15 15', width: size || "15", height: size || "15" }, props),
    _react2.default.createElement('path', { fill: 'none', className: 'svgStroke', d: 'M.702 14.298l.856-3.246-.099-.176a6.966 6.966 0 1 1 2.665 2.665l-.176-.1-3.246.857z' })
  );
};
ReplyIcon.displayName = 'ReplyIcon';
ReplyIcon.propTypes = {
  size: _propTypes2.default.string
};
exports.default = ReplyIcon;
/* tslint:enable */
/* eslint-enable */
//# sourceMappingURL=replyIcon.js.map