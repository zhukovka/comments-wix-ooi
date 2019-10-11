"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _commentReported = require("./style/commentReported.scss");

var _commentReported2 = _interopRequireDefault(_commentReported);

var _commentReportedDesk = require("./style/commentReportedDesk.scss");

var _commentReportedDesk2 = _interopRequireDefault(_commentReportedDesk);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _button = require("./button");

var _button2 = _interopRequireDefault(_button);

var _closeIcon = require("../svgs/close-icon");

var _closeIcon2 = _interopRequireDefault(_closeIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentReported = function (_React$Component) {
    _inherits(CommentReported, _React$Component);

    function CommentReported(props) {
        _classCallCheck(this, CommentReported);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.buildContent = function () {
            var _this$props = _this.props,
                reportedTypes = _this$props.reportedTypes,
                contentTop = _this$props.contentTop,
                contentBottom = _this$props.contentBottom,
                comment = _this$props.comment;

            var reportOption = reportedTypes ? reportedTypes.reportedTypes : [];
            var number = comment.reported.count;
            var content = eval("`" + contentTop + "`");
            var reportOptionFormated = reportOption.map(function (op, key) {
                var str = "- " + op + "\n";
                return _react2.default.createElement(
                    "span",
                    { key: key, className: _this.myStyle["report_options"] },
                    str
                );
            });

            return _react2.default.createElement(
                "label",
                { className: _this.myStyle["report_options_container"] + " label" },
                content,
                reportOptionFormated,
                _react2.default.createElement("br", null),
                contentBottom
            );
        };

        _this.handleDeleteAction = _this.handleDeleteAction.bind(_this);
        _this.buildContent = _this.buildContent.bind(_this);
        //this.myStyle = style.locals != null ? style.locals : style;
        _this.myStyle = props.isMobile ? _commentReported2.default : _commentReportedDesk2.default;
        return _this;
    }

    CommentReported.prototype.handleDeleteAction = function handleDeleteAction() {
        var _props = this.props,
            handleDeleteCommentAction = _props.handleDeleteCommentAction,
            comment = _props.comment;

        handleDeleteCommentAction(comment.commentId);
    };

    CommentReported.prototype.render = function render() {
        var _this2 = this;

        var _props2 = this.props,
            exit = _props2.exit,
            cancel = _props2.cancel,
            button1Value = _props2.button1Value,
            title = _props2.title,
            content = _props2.content,
            isMobile = _props2.isMobile;


        return _react2.default.createElement(
            "div",
            { className: this.myStyle['container'], id: "popup-wrapper", tabIndex: "-1", role: "dialog" },
            _react2.default.createElement(_closeIcon2.default, { className: this.myStyle['close_icon_container'], onClick: exit, ariaLabel: cancel, isMobile: isMobile }),
            _react2.default.createElement(
                "div",
                { id: "commentReported", className: (0, _classnames2.default)('page-title', this.myStyle['mainTitle'], isMobile ? 'report_main_title' : 'report_main_title_desktop') },
                _react2.default.createElement(
                    "span",
                    { role: "title", "aria-label": title, tabIndex: "0", ref: function ref(x) {
                            _this2.mainLabel = x;
                        } },
                    title
                )
            ),
            _react2.default.createElement(
                "section",
                null,
                _react2.default.createElement(
                    "div",
                    { className: (0, _classnames2.default)(this.myStyle['message-container'], 'sub-title', isMobile ? 'report_content_text' : 'comments_text') },
                    this.buildContent()
                ),
                _react2.default.createElement(
                    "div",
                    { className: this.myStyle['actionContainer'] },
                    isMobile ? _react2.default.createElement(
                        "div",
                        { id: "reportButtons" },
                        _react2.default.createElement(_button2.default, { onClick: this.handleDeleteAction, label: button1Value, onKeyDown: this.onKeyDown, styleType: "primary" }),
                        _react2.default.createElement(_button2.default, { onClick: exit, label: cancel, styleType: "secondary", buttonStyle: this.myStyle['cancelButton'] })
                    ) : _react2.default.createElement(
                        "div",
                        { id: "reportButtons" },
                        _react2.default.createElement(_button2.default, { onClick: exit, label: cancel, styleType: "secondary", buttonStyle: this.myStyle['cancelButton'] }),
                        _react2.default.createElement(_button2.default, { onClick: this.handleDeleteAction, label: button1Value, onKeyDown: this.onKeyDown, styleType: "primary" })
                    )
                )
            )
        );
    };

    return CommentReported;
}(_react2.default.Component);

// CommentReported.propTypes = {
//     exit: PropTypes.func,
//     handleDeleteCommentAction: PropTypes.func.isRequired,
//     isMobile: PropTypes.bool.isRequired,
//     title: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired,
//     button1Value: PropTypes.string.isRequired,
//     cancel: PropTypes.string.isRequired,
// };

exports.default = CommentReported;
//# sourceMappingURL=commentReported.js.map