"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _report = require("./style/report.scss");

var _report2 = _interopRequireDefault(_report);

var _reportDesk = require("./style/reportDesk.scss");

var _reportDesk2 = _interopRequireDefault(_reportDesk);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _options = require("./options");

var _options2 = _interopRequireDefault(_options);

var _closeIcon = require("../svgs/close-icon");

var _closeIcon2 = _interopRequireDefault(_closeIcon);

var _button = require("./button");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Report = function (_React$Component) {
    _inherits(Report, _React$Component);

    function Report(props) {
        _classCallCheck(this, Report);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.onChange = _this.onChange.bind(_this);
        _this.handleReportAction = _this.handleReportAction.bind(_this);
        //this.myStyle = style.locals != null ? style.locals : style;
        _this.myStyle = props.isMobile ? _report2.default : _reportDesk2.default;
        _this.state = {
            selectedOption: null
        };
        return _this;
    }

    Report.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.isReportError) {
            this.props.exit();
        }
    };

    Report.prototype.onChange = function onChange(val) {
        this.setState({ selectedOption: val });
    };

    Report.prototype.handleReportAction = function handleReportAction() {
        var selectedOption = this.state.selectedOption;

        if (selectedOption == null) return;
        this.props.confirmAction(selectedOption);
    };

    Report.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            _props$labels = _props.labels,
            title = _props$labels.title,
            optionsTitle = _props$labels.optionsTitle,
            cancel = _props$labels.cancel,
            confirm = _props$labels.confirm,
            done = _props$labels.done,
            responseTitle = _props$labels.responseTitle,
            responseMessage = _props$labels.responseMessage,
            exit = _props.exit,
            reportOptions = _props.reportOptions,
            isRequestSuccess = _props.isRequestSuccess,
            isMobile = _props.isMobile;

        var sectionTitle = isRequestSuccess ? responseTitle : title;
        return _react2.default.createElement(
            "div",
            { className: !isRequestSuccess ? this.myStyle['container'] : this.myStyle['container'] + " " + this.myStyle['requestSuccess'], id: "popup-wrapper", tabIndex: "-1", role: "dialog" },
            _react2.default.createElement(_closeIcon2.default, { onClick: exit, ariaLabel: cancel, isMobile: isMobile }),
            _react2.default.createElement(
                "div",
                { id: "reportTitle", className: (0, _classnames2.default)('page-title', this.myStyle['mainTitle'], isMobile ? 'report_main_title' : 'report_main_title_desktop') },
                _react2.default.createElement(
                    "span",
                    { role: "title", "aria-label": title, tabIndex: "0", ref: function ref(x) {
                            _this2.mainLabel = x;
                        } },
                    sectionTitle
                )
            ),
            isRequestSuccess ? _react2.default.createElement(
                "section",
                null,
                _react2.default.createElement(
                    "div",
                    { className: (0, _classnames2.default)(this.myStyle['messageContainer'], 'sub-title', isMobile ? 'report_content_text' : 'report_content_text_desktop') },
                    _react2.default.createElement(
                        "label",
                        { className: "label",
                            "aria-label": responseMessage },
                        responseMessage
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: this.myStyle['actionContainer'] },
                    _react2.default.createElement(_button2.default, { onClick: exit, label: done, styleType: !isMobile ? this.myStyle["doneButton"] + ' primary' : 'primary' })
                )
            ) : _react2.default.createElement(
                "section",
                null,
                _react2.default.createElement(
                    "div",
                    { className: (0, _classnames2.default)('sub-title') },
                    _react2.default.createElement(_options2.default, {
                        isMobile: isMobile,
                        options: reportOptions,
                        onChange: this.onChange, title: optionsTitle })
                ),
                _react2.default.createElement(
                    "div",
                    { className: this.myStyle['actionContainer'] },
                    isMobile ? _react2.default.createElement(
                        "div",
                        { id: "reportButtons" },
                        _react2.default.createElement(_button2.default, { onClick: this.handleReportAction, label: confirm, styleType: "primary", onKeyDown: this.onKeyDown, isDisabled: this.state.selectedOption === null }),
                        _react2.default.createElement(_button2.default, { onClick: exit, label: cancel, styleType: "secondary", buttonStyle: this.myStyle['cancelButton'] })
                    ) : _react2.default.createElement(
                        "div",
                        { id: "reportButtons" },
                        _react2.default.createElement(_button2.default, { onClick: exit, label: cancel, styleType: "secondary", buttonStyle: this.myStyle['cancelButton'] }),
                        _react2.default.createElement(_button2.default, { onClick: this.handleReportAction, label: confirm, styleType: "primary", onKeyDown: this.onKeyDown, isDisabled: this.state.selectedOption === null })
                    )
                )
            )
        );
    };

    return Report;
}(_react2.default.Component);

Report.propTypes = {
    exit: _propTypes2.default.func,
    confirmAction: _propTypes2.default.func.isRequired,
    isMobile: _propTypes2.default.bool.isRequired,
    reportOptions: _propTypes2.default.array.isRequired,
    labels: _propTypes2.default.shape({
        title: _propTypes2.default.string.isRequired,
        optionsTitle: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]).isRequired,
        cancel: _propTypes2.default.string.isRequired,
        confirm: _propTypes2.default.string.isRequired,
        done: _propTypes2.default.string.isRequired,
        responseTitle: _propTypes2.default.string.isRequired,
        responseMessage: _propTypes2.default.string.isRequired
    })
};
exports.default = Report;
//# sourceMappingURL=report.js.map