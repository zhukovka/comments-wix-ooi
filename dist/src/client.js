'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactI18next = require('react-i18next');

var _i18n = require('./i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _app = require('./app/app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var locale = window.__LOCALE__;

_reactDom2.default.render(_react2.default.createElement(
    _reactI18next.I18nextProvider,
    { i18n: (0, _i18n2.default)(locale) },
    _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_app2.default, null)
    )
), document.getElementById('root'));
//# sourceMappingURL=client.js.map