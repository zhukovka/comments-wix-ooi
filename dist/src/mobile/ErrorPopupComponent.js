"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _errorModal = require("../components/style/errorModal.scss");

var _errorModal2 = _interopRequireDefault(_errorModal);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ErrorPopupComponent = function (_Component) {
    _inherits(ErrorPopupComponent, _Component);

    function ErrorPopupComponent(props) {
        _classCallCheck(this, ErrorPopupComponent);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.myStyle = _errorModal2.default.locals != null ? _errorModal2.default.locals : _errorModal2.default;
        return _this;
    }

    ErrorPopupComponent.prototype.render = function render() {
        return _react2.default.createElement(
            "div",
            { className: this.myStyle['error-modal'] },
            _react2.default.createElement(
                "div",
                { className: this.myStyle["error-content"] },
                _react2.default.createElement(
                    "div",
                    { className: this.myStyle["error-text"] },
                    "Something went wrong !"
                )
            )
        );
    };

    return ErrorPopupComponent;
}(_react.Component);

exports.default = ErrorPopupComponent;
//# sourceMappingURL=ErrorPopupComponent.js.map