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

var _closeIcon = require("../svgs/close-icon");

var _closeIcon2 = _interopRequireDefault(_closeIcon);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GenericPopup = function (_React$Component) {
    _inherits(GenericPopup, _React$Component);

    function GenericPopup(props) {
        _classCallCheck(this, GenericPopup);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.genericCallback = _this.genericCallback.bind(_this);
        //this.myStyle = style.locals != null ? style.locals : style;
        _this.myStyle = props.isMobile ? _deleteComment2.default : _deleteCommentDesk2.default;
        return _this;
    }

    GenericPopup.prototype.genericCallback = function genericCallback() {
        console.log('component');
        this.props.genericCallback();
    };

    GenericPopup.prototype.render = function render() {
        var _this2 = this;

        var _props$data = this.props.data,
            title = _props$data.title,
            content = _props$data.content;
        var _props = this.props,
            exit = _props.exit,
            isMobile = _props.isMobile;

        console.log('PROPS !!', this.props);
        return _react2.default.createElement(
            "div",
            { className: this.myStyle['container'], id: "popup-wrapper", tabIndex: "-1", role: "dialog" },
            _react2.default.createElement(_closeIcon2.default, { onClick: exit, isMobile: isMobile }),
            _react2.default.createElement(
                "div",
                { className: (0, _classnames2.default)('page-title', this.myStyle['mainTitle']) },
                _react2.default.createElement(
                    "span",
                    { role: "title", "aria-label": title, tabIndex: "0" },
                    title
                )
            ),
            _react2.default.createElement(
                "section",
                null,
                _react2.default.createElement(
                    "div",
                    { className: (0, _classnames2.default)(this.myStyle['messageContainer'], 'sub-title') },
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
                    _react2.default.createElement(
                        "button",
                        { onClick: function onClick() {
                                _this2.genericCallback();exit();
                            } },
                        "log in"
                    )
                )
            )
        );
    };

    return GenericPopup;
}(_react2.default.Component);

exports.default = GenericPopup;
//# sourceMappingURL=GenericPopup.js.map