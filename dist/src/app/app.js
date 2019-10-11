'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactI18next = require('react-i18next');

var _app = require('./style/app.scss');

var _app2 = _interopRequireDefault(_app);

var _wixCommentsOoi = require('../wixCommentsOoi');

var _wixCommentsOoi2 = _interopRequireDefault(_wixCommentsOoi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.state = {};

        _this.onAddComment = _this.onAddComment.bind(_this);
        return _this;
    }

    App.prototype.onAddComment = function onAddComment() {};

    App.prototype.render = function render() {
        var isMobile = true;
        var _props = this.props,
            settings = _props.settings,
            style = _props.style,
            commentId = _props.commentId,
            replyId = _props.replyId,
            isComment = _props.isComment;


        return _react2.default.createElement(
            'div',
            { className: style.root_css },
            _react2.default.createElement(_wixCommentsOoi2.default, { isMobile: isMobile,
                settings: settings,
                commentId: commentId,
                replyId: replyId,
                isComment: isComment === 'true',
                style: style
            })
        );
    };

    return App;
}(_react2.default.Component);

exports.default = (0, _reactI18next.translate)()(App);
//# sourceMappingURL=app.js.map