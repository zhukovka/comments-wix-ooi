"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _components = require("../components");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _consts = require("../common/consts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PopupOoiMobileComponent = function (_Component) {
    _inherits(PopupOoiMobileComponent, _Component);

    function PopupOoiMobileComponent(props) {
        _classCallCheck(this, PopupOoiMobileComponent);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.doFocus = function () {
            _this.divMoreAction.current.focus();
            console.log("fdd");
        };

        _this.handleKeys = function (event) {
            //  console.log("gray element: ", document.querySelector("#backgroundPopup").parentElement.firstElementChild.getElementsByTagName("ul")[0].lastElementChild);
            console.log('event.target.id ' + event.target.id);
            //   console.log("more "+document.querySelector("#moreActionsMenu").firstElementChild);
            var elm = void 0;
            if (event.keyCode === 27) {
                _this.handleClose();
            }
            if (event.keyCode === 13) event.target.click();else if (event.keyCode === 40 || event.keyCode === 9) {
                //down
                if (event.target.id === "backgroundPopup" || event.target.id === "backgroundPopupDesktop") {
                    // elm = document.querySelector("#backgroundPopup").parentElement.firstElementChild.getElementsByTagName("ul")[0].firstElementChild;
                    elm = document.querySelector("#section").firstElementChild;
                    console.log("id is " + elm.id);
                    if (elm.id === "shareModal") {
                        elm = document.querySelector("#shareModalMenu").firstElementChild;
                    }
                    if (elm.id === "moreActionsMenu") {
                        elm = document.querySelector("#moreActionsMenu").firstElementChild;
                    }
                    if (elm.id === "popup-wrapper") {
                        //elm = document.querySelector("#reportModal").firstElementChild;
                        elm = document.querySelector("#close_button");
                    }
                    if (elm.id === "editModal") {
                        elm = document.querySelector("#richContentTextId");
                    }
                    console.log(elm);
                    elm.focus();
                    event.preventDefault();
                } else {
                    var _elm = event.target.nextElementSibling;
                    console.log("elm down is " + _elm);
                    /******** for commentReported ********/
                    if (_elm !== null && _elm.id === "commentReported") {
                        _elm = document.querySelector("#reportButtons").firstElementChild;
                    }
                    /******** for commentReported ********/
                    /******** for report popup ********/
                    if (_elm !== null && _elm.id === "reportTitle") {
                        _this.downPrevId = _elm.id;
                        console.log("this.downPrevId " + _this.downPrevId);
                        _elm = document.querySelector("#reportModal").firstElementChild;
                    }
                    if (_elm == null && _this.downPrevId === "reportTitle") {
                        _elm = document.querySelector("#reportButtons").firstElementChild;
                        _this.downPrevId = null;
                        _this.upPrevId = "reportModal";
                    }
                    /******* for report popup ********/

                    /** -----------------------------------**/

                    /******* for delete popup ********/
                    if (_elm !== null && _elm.id === "deleteTitle") {
                        _this.upPrevId = "close_button";
                        _this.reportPopup = "delete";
                        console.log("this.downPrevId " + _this.downPrevId);
                        _elm = document.querySelector("#reportButtons").firstElementChild;
                    }
                    /******* for delete popup********/

                    /** -----------------------------------**/

                    /******* for edit popup ********/
                    if (_elm !== null && _elm.id === "PluginsButtonId") {
                        _elm = document.querySelector("#editButtons").firstElementChild;
                        _this.upPrevId = "PluginsButtonId";
                    }
                    /******* for edit popup ********/

                    if (_elm == null) {

                        if (_this.state.showDesktopPopup) _elm = document.querySelector("#backgroundPopupDesktop");else _elm = document.querySelector("#backgroundPopup");
                        console.log(_elm);
                        _elm.focus();
                        event.preventDefault();
                    }
                    console.log("this.downPrevId " + _this.downPrevId);
                    console.log(_elm);
                    _elm.focus();
                    event.preventDefault();
                }
            } else if (event.keyCode === 38 || event.keyCode === 9) {
                //up
                if (event.target.id === "backgroundPopup" || event.target.id === "backgroundPopupDesktop") {
                    // elm = document.querySelector("#backgroundPopup").parentElement.firstElementChild.getElementsByTagName("ul")[0].lastElementChild;
                    elm = document.querySelector("#section").firstElementChild;
                    console.log("id is " + elm.id);
                    if (elm.id === "shareModal") {
                        elm = document.querySelector("#shareModalMenu").lastElementChild;
                    }
                    if (elm.id === "moreActionsMenu") {
                        elm = document.querySelector("#moreActionsMenu").lastElementChild;
                    }
                    /* if(elm.id=="popup-wrapper"){
                         elm = document.querySelector("#reportModal").lastElementChild;
                     }*/
                    if (elm.id === "popup-wrapper") {
                        //elm = document.querySelector("#reportModal").firstElementChild;
                        elm = document.querySelector("#reportButtons").lastElementChild;
                        _this.reportPopup !== "delete" ? _this.upPrevId = "reportModal" : _this.upPrevId = "close_button";
                    }
                    if (elm.id === "editModal") {
                        elm = document.querySelector("#editButtons").lastElementChild;
                        _this.upPrevId = "PluginsButtonId";
                    }
                    console.log(elm);
                    elm.focus();
                    event.preventDefault();
                } else {
                    console.log("this.downPrevId " + _this.downPrevId);
                    console.log("this.upPrevId " + _this.upPrevId);
                    var _elm2 = event.target.previousElementSibling;
                    if (_elm2 == null && _this.upPrevId === "close_button") {
                        console.log("this.upPrevId " + _this.upPrevId);
                        _elm2 = document.querySelector("#close_button");
                        _this.upPrevId = null;
                    }
                    if (_elm2 == null && _this.upPrevId === "reportModal") {
                        _elm2 = document.querySelector("#reportModal").lastElementChild;
                        _this.upPrevId = "close_button";
                        _this.downPrevId = "reportTitle";
                    }
                    if (_elm2 == null && _this.upPrevId === "PluginsButtonId") {
                        _elm2 = document.querySelector("#richContentTextId");
                        _this.upPrevId = null;
                    }
                    if (_elm2 == null) {
                        if (_this.state.showDesktopPopup) _elm2 = document.querySelector("#backgroundPopupDesktop");else _elm2 = document.querySelector("#backgroundPopup");
                        console.log(_elm2);
                        _elm2.focus();
                        event.preventDefault();
                    }
                    console.log(_elm2);
                    _elm2.focus();
                    event.preventDefault();
                }
            }
        };

        _this.handleMoreActionResponse = function (answer, id) {
            console.log("11112121 answer: ", answer);
            var response = _this.state.moreActionModal.data.response;


            switch (answer.value) {
                case "share":
                    response(answer);
                    _this.showShare();
                    break;
                case "edit":
                    response(answer, id);
                    _this.props.isMobile ? _this.showEdit() : _this.handleClose();
                    break;
                case "report":
                    response(answer);
                    _this.showReport();
                    break;
                case "delete":
                    response(answer);
                    _this.showDelete();
                    /**for accessibility**/
                    _this.reportPopup = "delete";
                    /**for accessibility**/
                    break;
                default:
                    _this.handleClose();
            }
        };

        _this.showReport = function () {
            _this.setState(function () {
                return {
                    showDesktopPopup: false,
                    closeMainModal: true,
                    showMainModal: false,
                    showReportModal: true
                };
            });
        };

        _this.showShare = function () {
            _this.setState(function () {
                return {
                    showDesktopPopup: false,
                    closeMainModal: true,
                    showMainModal: false,
                    showShareModal: true
                };
            });
        };

        _this.showDelete = function () {
            _this.setState(function () {
                return {
                    showDesktopPopup: false,
                    closeMainModal: true,
                    showMainModal: false,
                    showDeleteModal: true
                };
            });
        };

        _this.showEdit = function () {
            console.log(" showEdit ");
            _this.setState(function () {
                return {
                    showDesktopPopup: false,
                    closeMainModal: true,
                    showMainModal: false,
                    showEditModal: true
                };
            });
            //this.handleClose();
        };

        _this.handleClose = function (handleAction) {
            console.log("handleClose | this.props: ", _this.props);
            setTimeout(function () {
                this.props.triggerScroll(true);
            }.bind(_this), 0);

            _this.setState(function () {
                return {
                    moreActionModal: {
                        show: false,
                        data: null
                    },
                    showDesktopPopup: false,
                    closeMainModal: false,
                    showMainModal: false,
                    showReportModal: false,
                    showShareModal: false,
                    showDeleteModal: false,
                    showEditModal: false,
                    showReportedModal: false,
                    showGenericPopup: false,
                    isRequestSuccess: false,
                    isReportError: false
                };
            });

            _this.props.onClose();

            if (handleAction === _consts.action.DeleteComment) {
                var elm = document.querySelector("#commentHasBeenDeleted");
                console.log(elm);
                elm && elm.focus();
            } else {
                var _elm3 = document.getElementById("" + _this.props.comment.commentId);
                _elm3 && _elm3.focus();
            }
        };

        _this.handleShareAction = function (actionType, commentId) {
            var shareAction = _this.state.shareAction;

            shareAction(actionType, commentId);

            _this.handleClose();
        };

        _this.handleReportConfirmAction = function (reportType) {
            var reportAction = _this.state.reportAction;
            var comment = _this.props.comment;


            reportAction(reportType, comment.commentId, _this.reportCallBack);
        };

        _this.reportCallBack = function (res) {
            console.log('111111111reportCallBack res: ', res);
            _this.setState({
                isRequestSuccess: res,
                isReportError: !res
            });
        };

        _this.handleDeleteCommentAction = function (commentId) {
            var _this$props = _this.props,
                isComment = _this$props.isComment,
                replyContainerCommentId = _this$props.replyContainerCommentId;
            var deleteAction = _this.state.deleteAction;

            deleteAction(commentId, isComment, replyContainerCommentId);
            _this.handleClose(_consts.action.DeleteComment);
        };

        _this.handleEditComment = function (content, id) {
            console.log('PopupOoiMobileComponent | handleEditComment this.props.isComment : ', _this.props.isComment);
            var _this$props2 = _this.props,
                isComment = _this$props2.isComment,
                replyContainerCommentId = _this$props2.replyContainerCommentId;
            var editAction = _this.state.editAction;

            editAction(content, id, isComment, replyContainerCommentId, _this.handleClose);
        };

        _this.handleGenericCallback = function () {
            var genericCallback = _this.state.genericCallback;

            genericCallback();
        };

        _this.getReportLabels = function () {
            var local = _this.props.local;

            return {
                title: local["comment.reportTitle"],
                optionsTitle: local["comment.reportQuestion"],
                cancel: local["menu.cancel"],
                confirm: local["comment.reportAcceptButton"],
                done: local["menu.done"],
                responseTitle: local["comment.reportConfirmTitle"],
                responseMessage: local["comment.reportConfirmContent"]
            };
        };

        _this.getReportOptions = function () {
            var local = _this.props.local;

            return [{
                value: _consts.ReportType.UnwantedContent,
                label: local["comment.reportOption1"]
            }, {
                value: _consts.ReportType.Harassment,
                label: local["comment.reportOption2"]
            }, {
                value: _consts.ReportType.InappropriateContent,
                label: local["comment.reportOption3"]
            }, {
                value: _consts.ReportType.HateSpeechOrGraphic,
                label: local["comment.reportOption4"]
            }];
        };

        _this.state = {
            moreActionModal: {
                show: false,
                data: null
            },
            reportAction: null,
            deleteAction: null,
            shareAction: null,
            editAction: null,
            showMainModal: true,
            genericCallback: null,
            showGenericPopup: false,
            showReportModal: false,
            showDeleteModal: false,
            showShareModal: false,
            showEditModal: false,
            showReportedModal: false,
            closeMainModal: false,
            isRequestSuccess: false,
            isReportError: false,
            showDesktopPopup: false
        };
        _this.downPrevId = null;
        _this.upPrevId = null;
        _this.reportPopup = null;
        _this.handleMoreActionResponse = _this.handleMoreActionResponse.bind(_this);
        _this.handleClose = _this.handleClose.bind(_this);
        _this.handleShareAction = _this.handleShareAction.bind(_this);
        _this.handleDeleteCommentAction = _this.handleDeleteCommentAction.bind(_this);
        _this.handleReportConfirmAction = _this.handleReportConfirmAction.bind(_this);
        _this.divMoreAction = _react2.default.createRef();
        _this.divMoreActionDesktop = _react2.default.createRef();
        return _this;
    }

    PopupOoiMobileComponent.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState, snapshot) {
        var _state = this.state,
            showMainModal = _state.showMainModal,
            showReportModal = _state.showReportModal,
            showShareModal = _state.showShareModal,
            showDeleteModal = _state.showDeleteModal,
            showEditModal = _state.showEditModal,
            showReportedModal = _state.showReportedModal;

        if (showMainModal || showReportModal || showShareModal || showDeleteModal || showEditModal || showReportedModal) {
            this.props.triggerScroll(false);
        }
        console.log("this.props.showDesktopPopup " + this.props.showDesktopPopup);
        console.log("prevProps.showDesktopPopup " + prevProps.showDesktopPopup);
        console.log("this.state.showDesktopPopup " + this.state.showDesktopPopup);
        console.log("prevProps.isMobile " + prevProps.isMobile);
        console.log("this.props.isMobile " + this.props.isMobile);
        console.log("this.state.showEditModal " + this.state.showEditModal);

        if (prevProps.showDesktopPopup === true && this.state.showDesktopPopup === true) {
            this.divMoreActionDesktop.current.focus();
        } else if (prevProps.showDesktopPopup === false && this.state.showDesktopPopup === false && this.props.isMobile === true) {
            this.divMoreAction.current.focus();
        } else if (prevProps.showDesktopPopup === false && this.state.showDesktopPopup === false && this.props.isMobile === false) {
            this.divMoreAction.current.focus();
        } else if (prevProps.showDesktopPopup !== this.state.showDesktopPopup && this.props.isMobile === false) {
            this.divMoreAction.current.focus();
        }

        /* if(this.state.showDesktopPopup!==prevProps.showDesktopPopup){
             if(this.state.showDesktopPopup===true){
                 let elm = document.querySelector("#backgroundPopupDesktop");
                 console.log("elmId " + elm.id);
                 elm.focus();
             }else {
                 this.divMoreAction.current.focus();
             }
         }else {
           {this.props.isMobile ? this.divMoreAction.current.focus() : this.divMoreActionDesktop.current.focus()}
         }*/

        /*   if (this.props.showDesktopPopup !== prevProps.showDesktopPopup) {
               if (this.props.showDesktopPopup) {
                   let elm = document.querySelector("#backgroundPopupDesktop");
                   console.log("elmId " + elm.id);
                   elm.focus();
               } else {
                   this.divMoreAction.current.focus();
               }
           }else {
               if (this.props.showDesktopPopup) {
                   let elm = document.querySelector("#backgroundPopupDesktop");
                   console.log("elmId " + elm.id);
                   elm.focus();
               }else {
                   this.divMoreAction.current.focus();
               }
           }*/
        // this.divMoreAction.current.focus();
        /*   if(this.props.isMobile){
               this.divMoreAction.current.focus();
           }else {
               let elm = document.querySelector("#backgroundPopupDesktop");
               console.log("elmId " + elm.id);
               elm.focus();
           } */
    };

    PopupOoiMobileComponent.prototype.componentDidMount = function componentDidMount() {
        var _props = this.props,
            options = _props.options,
            response = _props.response,
            reportAction = _props.reportAction,
            deleteAction = _props.deleteAction,
            shareAction = _props.shareAction,
            showReportedPopup = _props.showReportedPopup,
            showGenericPopup = _props.showGenericPopup,
            genericCallback = _props.genericCallback,
            editAction = _props.editAction,
            getMentionSuggestions = _props.getMentionSuggestions;

        console.log("Popup props:", this.props);
        this.setState(function (state, props) {
            return {
                moreActionModal: {
                    show: true,
                    data: { options: options, response: response }
                },
                reportAction: reportAction,
                editAction: editAction,
                getMentionSuggestions: getMentionSuggestions,
                deleteAction: deleteAction,
                shareAction: shareAction,
                genericCallback: genericCallback,
                showMainModal: !(showReportedPopup || state.closeMainModal || showGenericPopup),
                showReportedModal: showReportedPopup,
                showGenericPopup: showGenericPopup,
                showDesktopPopup: props.showDesktopPopup
            };
        });
    };

    PopupOoiMobileComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var reportAction = nextProps.reportAction,
            deleteAction = nextProps.deleteAction,
            shareAction = nextProps.shareAction,
            showReportedPopup = nextProps.showReportedPopup,
            genericCallback = nextProps.genericCallback,
            editAction = nextProps.editAction,
            getMentionSuggestions = nextProps.getMentionSuggestions;

        console.log("MMMMMMMMMM", genericCallback);

        this.setState(function (state) {
            return {
                reportAction: reportAction,
                deleteAction: deleteAction,
                shareAction: shareAction,
                genericCallback: genericCallback,
                editAction: editAction,
                getMentionSuggestions: getMentionSuggestions
                // showDesktopPopup: showDesktopPopup,
                // showMainModal: !(showReportedPopup || state.closeMainModal),
                // showReportedModal: showReportedPopup,
            };
        });
    };

    PopupOoiMobileComponent.prototype.render = function render() {
        var _props2 = this.props,
            comment = _props2.comment,
            local = _props2.local,
            isMobile = _props2.isMobile;
        var _state2 = this.state,
            showGenericPopup = _state2.showGenericPopup,
            moreActionModal = _state2.moreActionModal,
            showMainModal = _state2.showMainModal,
            showReportModal = _state2.showReportModal,
            showShareModal = _state2.showShareModal,
            showDeleteModal = _state2.showDeleteModal,
            showReportedModal = _state2.showReportedModal,
            showEditModal = _state2.showEditModal,
            getMentionSuggestions = _state2.getMentionSuggestions,
            showDesktopPopup = _state2.showDesktopPopup;
        var show = moreActionModal.show,
            data = moreActionModal.data;

        var errorStatus = null;
        if (this.props.editError && this.props.editError.id === comment.commentId) {
            errorStatus = this.props.editError;
        }
        return _react2.default.createElement(
            "div",
            null,
            !showDesktopPopup ? _react2.default.createElement(
                "div",
                {
                    style: {
                        display: show ? "flex" : "none",
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0,0,0,0.4)",
                        justifyContent: "center",
                        zIndex: 99999
                    },
                    tabindex: 0,
                    role: "dialog",
                    "aria-labelledby": "moreActions",
                    id: "backgroundPopup",
                    ref: this.divMoreAction,
                    onClick: this.handleClose,
                    onKeyDown: this.handleKeys,
                    "aria-label": "close dialog"
                },
                _react2.default.createElement(
                    "section",
                    { id: "section", onClick: function onClick(e) {
                            return e.stopPropagation();
                        } },
                    showMainModal && _react2.default.createElement(_components.MoreActionModal, {
                        isMobile: isMobile,
                        data: data,
                        handleMoreActionResponse: this.handleMoreActionResponse,
                        comment: comment
                    }),
                    showReportModal && _react2.default.createElement(_components.Report, {
                        isMobile: isMobile,
                        style: this.props.style,
                        labels: this.getReportLabels(),
                        reportOptions: this.getReportOptions(),
                        exit: this.handleClose,
                        confirmAction: this.handleReportConfirmAction,
                        isRequestSuccess: this.state.isRequestSuccess,
                        isReportError: this.state.isReportError
                    }),
                    showShareModal && _react2.default.createElement(_components.ShareModal, { style: this.props.style,
                        isMobile: isMobile,
                        shareTitle: local["menu.shareCommentTitle"],
                        handleShareAction: this.handleShareAction,
                        close: this.handleClose,
                        comment: comment,
                        doFocus: this.doFocus
                    }),
                    showDeleteModal && _react2.default.createElement(_components.DeleteComment, {
                        isMobile: isMobile,
                        comment: comment,
                        style: this.props.style,
                        title: local["comment.deleteTitle"],
                        content: local["comment.deleteText"],
                        button1Value: local["menu.delete"],
                        cancel: local["menu.cancel"],
                        exit: this.handleClose,
                        handleDeleteCommentAction: this.handleDeleteCommentAction
                    }),
                    showReportedModal && _react2.default.createElement(_components.CommentReported, {
                        isMobile: isMobile,
                        comment: comment,
                        style: this.props.style,
                        title: local["comment.reportedTitle"],
                        contentTop: local["comment.reportedContentTop"],
                        contentBottom: local["comment.reportedContentBottom"],
                        button1Value: local["menu.delete"],
                        cancel: local["menu.cancel"],
                        reportedTypes: this.props.reportedTypes,
                        exit: this.handleClose,
                        handleDeleteCommentAction: this.handleDeleteCommentAction
                    }),
                    showEditModal && _react2.default.createElement(_components.EditComment, {
                        local: local,
                        isMobile: isMobile,
                        comment: comment,
                        style: this.props.style,
                        onUpdateComment: this.handleEditComment,
                        exit: this.handleClose,
                        getMentionSuggestions: getMentionSuggestions,
                        editError: errorStatus
                    }),
                    showGenericPopup && _react2.default.createElement(_components.GenericPopup, {
                        isMobile: isMobile,
                        style: this.props.style,
                        data: this.props.genericData,
                        cancel: local["menu.cancel"],
                        exit: this.handleClose,
                        genericCallback: this.handleGenericCallback
                    })
                )
            ) : _react2.default.createElement(
                "div",
                {
                    style: {
                        display: show ? "flex" : "none",
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0,0,0,0)",
                        justifyContent: "center",
                        zIndex: 99999
                    },
                    tabIndex: 0,
                    onClick: this.handleClose,
                    onKeyDown: this.handleKeys,
                    id: "backgroundPopupDesktop",
                    ref: this.divMoreActionDesktop,
                    role: "dialog",
                    "aria-labelledby": "moreActions",
                    "aria-label": "close dialog"
                },
                _react2.default.createElement(
                    "section",
                    { id: "section", onClick: function onClick(e) {
                            return e.stopPropagation();
                        } },
                    showMainModal && _react2.default.createElement(_components.MoreActionModal, {
                        isMobile: isMobile,
                        data: data,
                        handleMoreActionResponse: this.handleMoreActionResponse,
                        comment: comment,
                        mousePosition: this.props.mousePosition
                    })
                )
            )
        );
    };

    return PopupOoiMobileComponent;
}(_react.Component);

exports.default = PopupOoiMobileComponent;
//# sourceMappingURL=popupOoiMobileComponent.js.map