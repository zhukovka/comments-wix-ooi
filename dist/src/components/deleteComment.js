"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _deleteComment = require("./style/deleteComment.scss");

var _deleteComment2 = _interopRequireDefault(_deleteComment);

var _deleteCommentDesk = require("./style/deleteCommentDesk.scss");

var _deleteCommentDesk2 = _interopRequireDefault(_deleteCommentDesk);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _closeIcon = require("../svgs/close-icon");

var _closeIcon2 = _interopRequireDefault(_closeIcon);

var _button = require("./button");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DeleteComment = function (_React$Component) {
    _inherits(DeleteComment, _React$Component);

    function DeleteComment(props) {
        _classCallCheck(this, DeleteComment);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handleDeleteAction = _this.handleDeleteAction.bind(_this);
        //this.myStyle = style.locals != null ? style.locals : style;
        _this.myStyle = props.isMobile ? _deleteComment2.default : _deleteCommentDesk2.default;
        return _this;
    }

    DeleteComment.prototype.handleDeleteAction = function handleDeleteAction() {
        var _props = this.props,
            handleDeleteCommentAction = _props.handleDeleteCommentAction,
            comment = _props.comment;

        handleDeleteCommentAction(comment.commentId);
    };

    DeleteComment.prototype.render = function render() {
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
            _react2.default.createElement(_closeIcon2.default, { onClick: exit, ariaLabel: cancel, isMobile: isMobile }),
            _react2.default.createElement(
                "div",
                { id: "deleteTitle", className: (0, _classnames2.default)('page-title', this.myStyle['mainTitle'], isMobile ? 'report_main_title' : 'report_main_title_desktop') },
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
                    { className: (0, _classnames2.default)(this.myStyle['messageContainer'], 'sub-title', 'delete_content_text') },
                    _react2.default.createElement(
                        "label",
                        { className: "label",
                            "aria-label": content },
                        content
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: this.myStyle['actionContainer'] },
                    isMobile ? _react2.default.createElement(
                        "div",
                        { id: "reportButtons" },
                        " ",
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

    return DeleteComment;
}(_react2.default.Component);

DeleteComment.propTypes = {
    exit: _propTypes2.default.func,
    handleDeleteCommentAction: _propTypes2.default.func.isRequired,
    isMobile: _propTypes2.default.bool.isRequired,
    title: _propTypes2.default.string.isRequired,
    content: _propTypes2.default.string.isRequired,
    button1Value: _propTypes2.default.string.isRequired,
    cancel: _propTypes2.default.string.isRequired
};

exports.default = DeleteComment;
//# sourceMappingURL=deleteComment.js.map