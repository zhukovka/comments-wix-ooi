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


var ActiveLoveCommentIcon = function ActiveLoveCommentIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ['size']);

  return _react2.default.createElement(
    'svg',
    _extends({ viewBox: '0 0 18 15', fill: '#FF4040', width: size || "18", height: size || "15" }, props),
    _react2.default.createElement('path', { stroke: '#FF4040', d: 'M9.003 14.5c.21-.136.992-.648 1.41-.936a37.67 37.67 0 0 0 2.725-2.054c1.395-1.161 2.495-2.288 3.19-3.33.12-.18.228-.357.32-.524.876-1.661 1.091-3.297.566-4.616-.333-1.002-1.178-1.825-2.3-2.295-1.826-.697-4.203.152-5.51 1.932l-.396.538-.405-.53C7.286.957 5.075.086 3.156.754c-1.09.337-1.906 1.177-2.38 2.412-.516 1.294-.297 2.93.568 4.471a8.8 8.8 0 0 0 .961 1.313c.667.771 1.535 1.595 2.561 2.452 1.268 1.06 3.691 2.811 4.123 3.104-.039.026-.02.014.014-.007zm-.005 0a.917.917 0 0 0-.05.034c.092.008.116.022.106.012a.189.189 0 0 0-.082-.044c-.011-.002-.006-.002.026-.002z'
    })
  );
};
ActiveLoveCommentIcon.displayName = 'ActiveLoveCommentIcon';
ActiveLoveCommentIcon.propTypes = {
  size: _propTypes2.default.string
};
exports.default = ActiveLoveCommentIcon;
/* tslint:enable */
/* eslint-enable */
//# sourceMappingURL=activeLoveCommentIcon.js.map