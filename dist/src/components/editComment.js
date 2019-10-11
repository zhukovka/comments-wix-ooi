"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _editCommentContainer = require("./style/editCommentContainer.scss");

var _editCommentContainer2 = _interopRequireDefault(_editCommentContainer);

var _closeIcon = require("../svgs/close-icon/closeIcon");

var _closeIcon2 = _interopRequireDefault(_closeIcon);

var _src = require("wix-comments-rce/dist/src");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditComment = function (_React$Component) {
    _inherits(EditComment, _React$Component);

    function EditComment(props) {
        _classCallCheck(this, EditComment);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.myStyle = _editCommentContainer2.default.locals != null ? _editCommentContainer2.default.locals : _editCommentContainer2.default;
        _this.onUpdateComment = _this.onUpdateComment.bind(_this);
        return _this;
    }

    EditComment.prototype.onUpdateComment = function onUpdateComment(content) {
        this.props.onUpdateComment(content, this.props.comment.commentId);
    };

    EditComment.prototype.render = function render() {
        console.log('edit comment popup props: ', this.props);

        console.log('comment in edit : ', this.props.comment.comment.text.content);
        return _react2.default.createElement(
            "div",
            { id: "editModal", className: this.myStyle['container'], role: "dialog" },
            _react2.default.createElement(
                "selection",
                { className: this.myStyle['rce-container'] },
                _react2.default.createElement(
                    "div",
                    { className: this.myStyle.rceContainer },
                    _react2.default.createElement(_src.RichContentEditorComponent, {
                        isMobile: this.props.isMobile,
                        local: this.props.local,
                        expandedOnly: true,
                        onEditorStateChange: this.onEditorStateChange,
                        getMentionSuggestions: this.props.getMentionSuggestions,
                        show: { collapsedRCE: false, expandedRCE: true },
                        placeHolder: "Edit place holder",
                        showElements: { expandedOnly: true, showCollapsed: false, showExpanded: true },
                        inEditComment: true,
                        initialState: this.props.comment.comment.text.content,
                        onUpdateComment: this.onUpdateComment,
                        exit: this.props.exit,
                        error: this.props.editError,
                        editorMode: this.props.editorMode
                    })
                )
            )
        );
    };

    return EditComment;
}(_react2.default.Component);

exports.default = EditComment;
//# sourceMappingURL=editComment.js.map