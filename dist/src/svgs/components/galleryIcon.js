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


var GalleryIcon = function GalleryIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ['size']);

  return _react2.default.createElement(
    'svg',
    _extends({ viewBox: '0 0 15 12', width: size || "15", height: size || "12" }, props),
    _react2.default.createElement('path', { className: 'svgFill', d: 'M0 3a1 1 0 0 1 1-1h2.75L4.418.576A1 1 0 0 1 5.323 0h4.354a1 1 0 0 1 .905.576L11.25 2H14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3zm1 0v8h13V3h-3.5L9.48 1H5.518L4.5 3H1zm6.5 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z'
    })
  );
};
GalleryIcon.displayName = 'GalleryIcon';
GalleryIcon.propTypes = {
  size: _propTypes2.default.string
};
exports.default = GalleryIcon;
/* tslint:enable */
/* eslint-enable */
//# sourceMappingURL=galleryIcon.js.map