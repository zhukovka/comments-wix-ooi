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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioButtons = function (_React$Component) {
    _inherits(RadioButtons, _React$Component);

    function RadioButtons(props) {
        _classCallCheck(this, RadioButtons);

        //this.myStyle = style.locals != null ? style.locals : style;
        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.myStyle = props.isMobile ? _style2.default : _styleDesk2.default;
        _this.state = {
            selected: props.defaultValue
        };
        _this.handleOptionChange = _this.handleOptionChange.bind(_this);
        _this.name = Math.random().toString(36).substring(7);
        return _this;
    }

    RadioButtons.prototype.handleOptionChange = function handleOptionChange(event) {
        var value = event.target.value;
        if (event.target.tagName === "LABEL" || event.target.tagName === "DIV") {
            value = event.target.id;
        }
        this.setState({
            selected: value
        });
        this.props.onChange(value);
    };

    RadioButtons.prototype.render = function render() {
        var _props = this.props,
            options = _props.options,
            isMobile = _props.isMobile;

        var self = this;
        return _react2.default.createElement(
            'div',
            { id: "reportModal", role: "menu", 'aria-labelledby': "report", tabIndex: -1 },
            options.map(function (option, index) {
                return _react2.default.createElement(
                    'div',
                    { id: option.value, onClick: self.handleOptionChange, 'aria-label': "radio " + option.label, tabIndex: 0, role: "menuitem", key: index, className: self.myStyle["option"] + (isMobile ? ' report_content_text' : ' report_content_text_desktop') },
                    _react2.default.createElement('input', { type: 'radio', name: "radio group", value: option.value,
                        checked: self.state.selected == option.value, onChange: self.handleOptionChange }),
                    _react2.default.createElement(
                        'label',
                        { id: option.value, onClick: self.handleOptionChange },
                        option.label
                    )
                );
            })
        );
    };

    return RadioButtons;
}(_react2.default.Component);

RadioButtons.propTypes = {
    options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
        label: _propTypes2.default.string.isRequired
    })).isRequired,
    onChange: _propTypes2.default.func.isRequired,
    defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};
exports.default = RadioButtons;
//# sourceMappingURL=radioButtons.js.map