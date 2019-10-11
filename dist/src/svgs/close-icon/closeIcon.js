'use strict';

exports.__esModule = true;
exports.default = CloseIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = require('./style/style.scss');

var _style2 = _interopRequireDefault(_style);

var _styleDesk = require('./style/styleDesk.scss');

var _styleDesk2 = _interopRequireDefault(_styleDesk);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CloseIcon(_ref) {
    var onClick = _ref.onClick,
        ariaLabel = _ref.ariaLabel,
        className = _ref.className,
        size = _ref.size,
        isMobile = _ref.isMobile,
        notificationIconFill = _ref.notificationIconFill;

    var smallIcon = size === "small";
    //let myStyle = style.locals != null ? style.locals : style;
    var myStyle = isMobile ? _style2.default : _styleDesk2.default;
    return _react2.default.createElement(
        'button',
        { className: (0, _classnames2.default)(myStyle['closeIcon'], className || ""), onClick: onClick, 'aria-label': ariaLabel,
            tabIndex: '0', id: 'close_button' },
        smallIcon ? _react2.default.createElement(
            'svg',
            { xmlns: 'http://www.w3.org/2000/svg', width: '8px', height: '8px', viewBox: '0 0 9 9', version: '1.1' },
            _react2.default.createElement(
                'g',
                { id: 'New-Master', stroke: notificationIconFill || "none", strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
                _react2.default.createElement(
                    'g',
                    { id: 'LINE-GRID-INSTRUCTIONS', transform: 'translate(-531.000000, -1129.000000)', fill: notificationIconFill || "#333333" },
                    _react2.default.createElement(
                        'g',
                        { id: 'Group-Copy-5', transform: 'translate(531.000000, 1129.000000)' },
                        _react2.default.createElement('path', {
                            d: 'M4.5,3.80769231 L8.30769231,2.08163348e-13 L9,0.692307692 L5.19230769,4.5 L9,8.30769231 L8.30769231,9 L4.5,5.19230769 L0.692307692,9 L-4.85300689e-12,8.30769231 L3.80769231,4.5 L-8.35011747e-13,0.692307692 L0.692307692,2.08655315e-12 L4.5,3.80769231 Z',
                            id: 'Combined-Shape' })
                    )
                )
            )
        ) : _react2.default.createElement(
            'svg',
            { width: '12px', height: '12px', viewBox: '0 0 12 12', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
            _react2.default.createElement(
                'g',
                { id: 'New-Master', stroke: notificationIconFill || "none", strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
                _react2.default.createElement(
                    'g',
                    { id: 'icons', transform: 'translate(-995.000000, -817.000000)', fill: notificationIconFill || "#333333" },
                    _react2.default.createElement(
                        'g',
                        { id: 'Group-41', transform: 'translate(995.000000, 817.000000)' },
                        _react2.default.createElement('path', {
                            d: 'M6,5.07692308 L11.0769231,1.15463195e-14 L12,0.923076923 L6.92307692,6 L12,11.0769231 L11.0769231,12 L6,6.92307692 L0.923076923,12 L-2.30926389e-14,11.0769231 L5.07692308,6 L-2.30926389e-14,0.923076923 L0.923076923,1.17683641e-14 L6,5.07692308 Z',
                            id: 'Combined-Shape' })
                    )
                )
            )
        )
    );
}

CloseIcon.proptypes = {
    ariaLabel: _propTypes2.default.string.isRequired,
    onClick: _propTypes2.default.func.isRequired,
    className: _propTypes2.default.string,
    size: _propTypes2.default.oneOf(["small", "medium"])
};
//# sourceMappingURL=closeIcon.js.map