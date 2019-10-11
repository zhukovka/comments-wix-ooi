"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _notificationModal = require("./style/notificationModal.scss");

var _notificationModal2 = _interopRequireDefault(_notificationModal);

var _closeIcon = require("../svgs/close-icon/closeIcon");

var _closeIcon2 = _interopRequireDefault(_closeIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotificationComponent = function (_React$Component) {
    _inherits(NotificationComponent, _React$Component);

    function NotificationComponent(props) {
        _classCallCheck(this, NotificationComponent);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.myStyle = _notificationModal2.default;
        return _this;
    }

    NotificationComponent.prototype.componentDidMount = function componentDidMount() {
        var elm = document.querySelector("#close_button");
        elm.focus();
    };

    NotificationComponent.prototype.render = function render() {
        return _react2.default.createElement(
            "div",
            { className: this.myStyle['error-modal'] },
            _react2.default.createElement(
                "div",
                { className: this.myStyle["close-container"] },
                _react2.default.createElement(_closeIcon2.default, { className: this.myStyle["close-icon"], isMobile: "true", notificationIconFill: "#ffff", ariaLabel: "close notification", size: "small", onClick: this.props.onClose })
            ),
            _react2.default.createElement(
                "div",
                { className: this.myStyle["error-text"], role: "alert" },
                this.props.message
            )
        );
    };

    return NotificationComponent;
}(_react2.default.Component);

exports.default = NotificationComponent;
//# sourceMappingURL=notificationComponent.js.map