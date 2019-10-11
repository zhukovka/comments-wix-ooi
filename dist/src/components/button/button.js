'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
    var _onClick = _ref.onClick,
        label = _ref.label,
        styleType = _ref.styleType,
        isDisabled = _ref.isDisabled,
        ariaLabel = _ref.ariaLabel,
        icon = _ref.icon,
        buttonStyle = _ref.buttonStyle;

    var btnType = styleType != null ? styleType : 'primary';

    var btnClass = (0, _classnames2.default)({
        // 'main-btn': true,
        disabled: Boolean(isDisabled)
    }, buttonStyle, btnType);
    return _react2.default.createElement(
        'button',
        { tabIndex: 0, className: btnClass,
            'aria-label': ariaLabel || label,
            onClick: function onClick(e) {
                if (!isDisabled) {
                    _onClick(e);
                }
            } },
        label
    );
};

Button.propTypes = {
    onClick: _propTypes2.default.func,
    label: _propTypes2.default.string.isRequired,
    styleType: _propTypes2.default.oneOf(['primary', 'secondary', 'text']),
    isDisabled: _propTypes2.default.bool,
    ariaLabel: _propTypes2.default.string,
    icon: _propTypes2.default.string
};
exports.default = Button;
//# sourceMappingURL=button.js.map