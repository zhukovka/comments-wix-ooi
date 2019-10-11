'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = require('./style.scss');

var _style2 = _interopRequireDefault(_style);

var _styleDesk = require('./styleDesk.scss');

var _styleDesk2 = _interopRequireDefault(_styleDesk);

var _radioButtons = require('./radioButtons');

var _radioButtons2 = _interopRequireDefault(_radioButtons);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Options = function (_React$Component) {
    _inherits(Options, _React$Component);

    function Options(props) {
        _classCallCheck(this, Options);

        //this.myStyle = style.locals != null ? style.locals : style;
        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.myStyle = props.isMobile ? _style2.default : _styleDesk2.default;
        return _this;
    }

    Options.prototype.render = function render() {
        var _props = this.props,
            options = _props.options,
            title = _props.title,
            onChange = _props.onChange,
            isMobile = _props.isMobile;

        return _react2.default.createElement(
            'div',
            { className: this.myStyle["options-container"] },
            _react2.default.createElement(
                'label',
                { className: (0, _classnames2.default)(this.myStyle['optionsTitle'], isMobile ? 'report_content_text' : 'report_content_text_desktop'),
                    'aria-label': title },
                title
            ),
            _react2.default.createElement(_radioButtons2.default, {
                isMobile: this.props.isMobile,
                className: 'sub-title',
                options: options,
                onChange: onChange })
        );
    };

    return Options;
}(_react2.default.Component);

Options.propTypes = {
    options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
        label: _propTypes2.default.string.isRequired
    })).isRequired,
    title: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string]).isRequired,
    onChange: _propTypes2.default.func.isRequired,
    defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};
exports.default = Options;
//# sourceMappingURL=options.js.map