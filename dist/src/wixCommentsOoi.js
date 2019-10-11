"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _src = require("wix-comments/dist/src");

var _popupOoiMobileComponent = require("./mobile/popupOoiMobileComponent");

var _popupOoiMobileComponent2 = _interopRequireDefault(_popupOoiMobileComponent);

var _ErrorPopupComponent = require("./mobile/ErrorPopupComponent");

var _ErrorPopupComponent2 = _interopRequireDefault(_ErrorPopupComponent);

var _text_en = require("./locales/text_en.json");

var localesData = _interopRequireWildcard(_text_en);

var _components = require("./components");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WixCommentsOoi = function (_PureComponent) {
    _inherits(WixCommentsOoi, _PureComponent);

    function WixCommentsOoi(props) {
        _classCallCheck(this, WixCommentsOoi);

        var _this = _possibleConstructorReturn(this, _PureComponent.call(this, props));

        _initialiseProps.call(_this);

        _this.state = {
            token: _this.props.token,
            entityID: _this.props.entityID,
            data: null,
            options: null,
            response: null,
            showPopup: false,
            comment: null,
            reportAction: null,
            shareAction: null,
            deleteAction: null,
            editAction: null,
            showReportedPopup: false,
            showGenericPopup: false,
            reportedTypes: null,
            popupData: null,
            gotError: false,
            isComment: true,
            replyContainerCommentId: null,
            showDesktopPopup: false,
            mousePosition: null,
            showNotificationPopup: null,
            notificationPopupMessage: null,
            showTopExpandedRCE: false
        };
        _this.handleOnClose = _this.handleOnClose.bind(_this);
        _this.throwError = _this.throwError.bind(_this);
        _this.throwEditError = _this.throwEditError.bind(_this);
        _this.showNotification = _this.showNotification.bind(_this);
        _this.closeShowNotification = _this.closeShowNotification.bind(_this);
        _this.closeErrorNotification = _this.closeErrorNotification.bind(_this);
        _this.local = null;
        return _this;
    }

    // componentWillReceiveProps(nextProps, nextContext) {
    //     console.log('ooi componentWillReceiveProps nextProps: ',nextProps);
    //     if(this.state.entityID !== nextProps.entityID) {
    //         this.setState({entityID: nextProps.entityID});
    //     }
    // }

    WixCommentsOoi.prototype.componentWillMount = function componentWillMount() {
        // this.local = this.props.settings.language !== {} ? this.props.settings.language : localesData;
        if (!this.props.settings || !this.props.settings.language || Object.keys(this.props.settings.language).length === 0 && this.props.settings.language.constructor === Object) {
            this.local = localesData;
        } else {
            this.local = this.props.settings.language;
        }

        // this.local =  localesData;

        console.log("this.local ", this.local);
        console.log("locales.app.addFirstComment : ", this.local["app.addFirstComment"]);
    };

    WixCommentsOoi.prototype.handleOnClose = function handleOnClose() {
        this.setState({ showPopup: false,
            showReportedPopup: false,
            showGenericPopup: false,
            showDesktopPopup: false
        });
    };

    /*
    * For Testing *
     */


    WixCommentsOoi.prototype.throwError = function throwError(error) {
        this.setState({ error: error });
        var self = this;
        setTimeout(function () {
            return self.setState({ error: null });
        }, 3000);
    };

    WixCommentsOoi.prototype.throwEditError = function throwEditError(error) {
        this.setState({ editError: error });
        var self = this;
        setTimeout(function () {
            return self.setState({ editError: null });
        }, 3000);
    };

    WixCommentsOoi.prototype.showNotification = function showNotification(message) {
        this.setState({ notificationPopupMessage: message });
        var self = this;
        setTimeout(function () {
            return self.setState({ notificationPopupMessage: null, showTopExpandedRCE: true });
        }, 3000);
    };

    WixCommentsOoi.prototype.closeShowNotification = function closeShowNotification() {
        this.setState({ notificationPopupMessage: null });
        //this.setState({showTopExpandedRCE:true});
        var elm = document.querySelector("#avatar");
        console.log("avatar " + elm);
        elm.focus();
    };

    WixCommentsOoi.prototype.closeErrorNotification = function closeErrorNotification() {
        this.setState({ error: null });
    };

    WixCommentsOoi.prototype.render = function render() {
        var _props = this.props,
            isMobile = _props.isMobile,
            settings = _props.settings,
            token = _props.token,
            style = _props.style,
            memberAuth = _props.memberAuth,
            memberData = _props.memberData,
            currentMember = _props.currentMember,
            navigateToProfile = _props.navigateToProfile,
            appHeight = _props.appHeight,
            signedInstance = _props.signedInstance,
            appDefinitionId = _props.appDefinitionId,
            onLoad = _props.onLoad,
            styleConverter = _props.styleConverter,
            viewSharedComment = _props.viewSharedComment,
            triggerShareMode = _props.triggerShareMode;
        var _state = this.state,
            comment = _state.comment,
            isComment = _state.isComment,
            replyContainerCommentId = _state.replyContainerCommentId,
            showPopup = _state.showPopup,
            options = _state.options,
            response = _state.response,
            reportAction = _state.reportAction,
            shareAction = _state.shareAction,
            deleteAction = _state.deleteAction,
            editAction = _state.editAction,
            handleGenericCallback = _state.handleGenericCallback,
            showGenericPopup = _state.showGenericPopup,
            popupData = _state.popupData,
            showReportedPopup = _state.showReportedPopup,
            reportedTypes = _state.reportedTypes,
            index = _state.index,
            getMentionSuggestions = _state.getMentionSuggestions,
            entityID = _state.entityID;

        console.log('OOI | viewSharedComment: ', viewSharedComment);
        console.log('OOI | this.props.entityID: ', this.props.entityID);

        console.log("11111 this.props.editorMode", this.props.editorMode);

        return _react2.default.createElement(
            "div",
            null,
            this.state.error && _react2.default.createElement(_components.ErrorComponent, { onClose: this.closeErrorNotification, isMobile: isMobile, message: this.state.error }),
            this.state.notificationPopupMessage && _react2.default.createElement(_components.NotificationComponent, { message: this.state.notificationPopupMessage, onClose: this.closeShowNotification }),
            viewSharedComment && _react2.default.createElement(_src.WixCommentsWrapper, {
                versionTwoStyleDesktop: this.props.versionTwoStyleDesktop,
                isMobile: isMobile,
                settings: settings,
                key: viewSharedComment ? viewSharedComment.entityID : entityID,
                entityID: viewSharedComment ? viewSharedComment.entityID : entityID,
                token: token,
                style: style,
                local: this.local,
                onMoreAction: this.handleMoreAction,
                onReportAction: this.handleReportAction,
                onShareAction: this.handleShareAction,
                onDeleteAction: this.handleDeleteAction,
                onEditAction: this.handleEditAction,
                onShowReportedAction: this.handleShowReportedAction,
                handleGenericPopup: this.handleGenericPopup,
                memberAuth: memberAuth,
                memberData: memberData,
                currentMember: currentMember,
                navigateToProfile: navigateToProfile,
                appHeight: appHeight,
                signedInstance: signedInstance,
                appDefinitionId: appDefinitionId,
                onLoad: onLoad,
                styleConverter: styleConverter,
                throwError: this.throwError,
                throwEditError: this.throwEditError,
                viewSharedComment: viewSharedComment,
                triggerShareMode: triggerShareMode,
                showNotification: this.showNotification,
                showTopExpandedRCE: this.state.showTopExpandedRCE,
                editorMode: this.props.editorMode,
                buildShareURL: this.props.buildShareURL
            }),
            !viewSharedComment && !this.props.editorMode && _react2.default.createElement(_src.WixCommentsWrapper, {
                versionTwoStyleDesktop: this.props.versionTwoStyleDesktop,
                isMobile: isMobile,
                settings: settings,
                key: this.props.entityID,
                entityID: this.props.entityID,
                token: token,
                style: style,
                local: this.local,
                onMoreAction: this.handleMoreAction,
                onReportAction: this.handleReportAction,
                onShareAction: this.handleShareAction,
                onDeleteAction: this.handleDeleteAction,
                onEditAction: this.handleEditAction,
                onShowReportedAction: this.handleShowReportedAction,
                handleGenericPopup: this.handleGenericPopup,
                memberAuth: memberAuth,
                memberData: memberData,
                currentMember: currentMember,
                navigateToProfile: navigateToProfile,
                appHeight: appHeight,
                signedInstance: signedInstance,
                appDefinitionId: appDefinitionId,
                onLoad: onLoad,
                styleConverter: styleConverter,
                throwError: this.throwError,
                throwEditError: this.throwEditError,
                triggerShareMode: triggerShareMode,
                showNotification: this.showNotification,
                showTopExpandedRCE: this.state.showTopExpandedRCE,
                editorMode: this.props.editorMode,
                buildShareURL: this.props.buildShareURL
            }),
            this.props.editorMode && _react2.default.createElement(_src.WixCommentsWrapperEditorMode, {
                versionTwoStyleDesktop: this.props.versionTwoStyleDesktop,
                isMobile: isMobile,
                settings: settings,
                key: viewSharedComment ? viewSharedComment.entityID : entityID,
                entityID: viewSharedComment ? viewSharedComment.entityID : entityID,
                token: token,
                style: style,
                local: this.local,
                onMoreAction: this.handleMoreAction,
                onReportAction: this.handleReportAction,
                onShareAction: this.handleShareAction,
                onDeleteAction: this.handleDeleteAction,
                onEditAction: this.handleEditAction,
                onShowReportedAction: this.handleShowReportedAction,
                handleGenericPopup: this.handleGenericPopup,
                memberAuth: memberAuth,
                memberData: memberData,
                currentMember: currentMember,
                navigateToProfile: navigateToProfile,
                appHeight: appHeight,
                signedInstance: signedInstance,
                appDefinitionId: appDefinitionId,
                onLoad: onLoad,
                styleConverter: styleConverter,
                throwError: this.throwError,
                throwEditError: this.throwEditError,
                viewSharedComment: viewSharedComment,
                triggerShareMode: triggerShareMode,
                showNotification: this.showNotification,
                showTopExpandedRCE: this.state.showTopExpandedRCE,
                editorMode: this.props.editorMode
            }),
            showPopup && _react2.default.createElement(_popupOoiMobileComponent2.default, {
                isMobile: isMobile,
                style: style,
                settings: settings,
                local: this.local,
                options: options,
                response: response,
                reportAction: reportAction,
                shareAction: shareAction,
                deleteAction: deleteAction,
                editAction: editAction,
                getMentionSuggestions: getMentionSuggestions,
                comment: comment,
                isComment: isComment,
                replyContainerCommentId: replyContainerCommentId,
                genericCallback: handleGenericCallback,
                showGenericPopup: showGenericPopup,
                genericData: popupData,
                onClose: this.handleOnClose,
                showReportedPopup: showReportedPopup,
                reportedTypes: reportedTypes,
                index: index,
                showDesktopPopup: this.state.showDesktopPopup,
                mousePosition: this.state.mousePosition,
                triggerScroll: this.props.triggerScroll,
                editError: this.state.editError
            })
        );
    };

    return WixCommentsOoi;
}(_react.PureComponent);

var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.handleGenericPopup = function (callback, key) {
        console.log('CALLED , OOI', _this2.state);
        _this2.setState(function () {
            return {
                showPopup: true,
                handleGenericCallback: callback,
                showGenericPopup: true,
                popupData: _this2.popupDataMap[key],
                showDesktopPopup: false
            };
        });
    };

    this.handleMoreAction = function (opt, resAction, comment, isComment, replyContainerCommentId, position, index) {
        _this2.setState(function (state, props) {
            return {
                showPopup: true,
                options: opt,
                response: resAction,
                comment: comment,
                isComment: isComment,
                replyContainerCommentId: replyContainerCommentId,
                index: index,
                showDesktopPopup: !props.isMobile,
                mousePosition: position
            };
        });
    };

    this.handleShowReportedAction = function (reportedTypes, deleteAction, comment) {
        _this2.setState(function () {
            return {
                showPopup: true,
                showReportedPopup: true,
                reportedTypes: reportedTypes,
                deleteAction: deleteAction,
                comment: comment,
                showDesktopPopup: false
            };
        });
    };

    this.handleReportAction = function (reportAction) {
        _this2.setState(function () {
            return {
                reportAction: reportAction
            };
        });
    };

    this.handleShareAction = function (shareAction) {
        console.log("handleShareAction shareAction: ", shareAction);

        _this2.setState(function () {
            return {
                shareAction: shareAction
            };
        });
    };

    this.handleDeleteAction = function (deleteAction) {
        _this2.setState(function () {
            return {
                deleteAction: deleteAction
            };
        });
    };

    this.handleEditAction = function (editAction, getMentionSuggestions) {
        console.log('wix ooi | getMentionSuggestions:', getMentionSuggestions);
        _this2.setState(function () {
            return {
                editAction: editAction,
                getMentionSuggestions: getMentionSuggestions
            };
        });
    };
};

exports.default = WixCommentsOoi;
//# sourceMappingURL=wixCommentsOoi.js.map