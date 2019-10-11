import React, {PureComponent} from 'react';
import {WixCommentsWrapper, WixCommentsWrapperEditorMode} from "wix-comments/dist/src";
import PopupOoiMobileComponent from "./mobile/popupOoiMobileComponent";
import ErrorPopupComponent from "./mobile/ErrorPopupComponent";
import * as localesData from "./locales/text_en.json";
import {ErrorComponent, NotificationComponent} from "./components";

export default class WixCommentsOoi extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            token:this.props.token,
            entityID: this.props.entityID,
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
            showGenericPopup:false,
            reportedTypes: null,
            popupData:null,
            gotError: false,
            isComment: true,
            replyContainerCommentId: null,
            showDesktopPopup: false,
            mousePosition: null,
            showNotificationPopup:null,
            notificationPopupMessage:null,
            showTopExpandedRCE:false
        };
        this.handleOnClose = this.handleOnClose.bind(this);
        this.throwError=this.throwError.bind(this);
        this.throwEditError=this.throwEditError.bind(this);
        this.showNotification=this.showNotification.bind(this);
        this.closeShowNotification=this.closeShowNotification.bind(this);
        this.closeErrorNotification=this.closeErrorNotification.bind(this);
        this.local = null;
    }

    // componentWillReceiveProps(nextProps, nextContext) {
    //     console.log('ooi componentWillReceiveProps nextProps: ',nextProps);
    //     if(this.state.entityID !== nextProps.entityID) {
    //         this.setState({entityID: nextProps.entityID});
    //     }
    // }

    componentWillMount() {
        // this.local = this.props.settings.language !== {} ? this.props.settings.language : localesData;
        if (!this.props.settings || !this.props.settings.language || (Object.keys(this.props.settings.language).length === 0 && this.props.settings.language.constructor === Object)) {
            this.local = localesData;
        } else {
            this.local = this.props.settings.language;
        }

        // this.local =  localesData;

        console.log("this.local ", this.local);
        console.log("locales.app.addFirstComment : ", this.local["app.addFirstComment"]);
    }

    handleGenericPopup = (callback,key) => {
        console.log('CALLED , OOI',this.state);
        this.setState(() => {
            return {
                showPopup: true,
                handleGenericCallback: callback,
                showGenericPopup:true,
                popupData: this.popupDataMap[key],
                showDesktopPopup:false
            };
        });
    };

    handleMoreAction = (opt, resAction, comment, isComment, replyContainerCommentId, position, index) => {
        this.setState((state, props) => {
            return {
                showPopup: true,
                options: opt,
                response: resAction,
                comment: comment,
                isComment: isComment,
                replyContainerCommentId: replyContainerCommentId,
                index: index,
                showDesktopPopup: !props.isMobile,
                mousePosition: position,
            };
        });
    };

    handleShowReportedAction = (reportedTypes, deleteAction, comment) => {
        this.setState(() => {
            return {
                showPopup: true,
                showReportedPopup: true,
                reportedTypes: reportedTypes,
                deleteAction: deleteAction,
                comment: comment,
                showDesktopPopup: false,
            };
        });
    };

    handleReportAction = (reportAction) => {
        this.setState(() => {
            return {
                reportAction: reportAction
            };
        });
    };

    handleShareAction = (shareAction) => {
        console.log("handleShareAction shareAction: " ,shareAction);

        this.setState(() => {
            return {
                shareAction: shareAction
            };
        });
    };

    handleDeleteAction = (deleteAction) => {
        this.setState(() => {
            return {
                deleteAction: deleteAction
            };
        });
    };

    handleEditAction = (editAction, getMentionSuggestions) => {
        console.log('wix ooi | getMentionSuggestions:', getMentionSuggestions );
        this.setState(() => {
            return {
                editAction: editAction,
                getMentionSuggestions: getMentionSuggestions
            };
        });
    };

    handleOnClose(){
        this.setState(
            {showPopup:false,
                showReportedPopup: false,
                showGenericPopup:false,
                showDesktopPopup:false,
        });
    }

    /*
    * For Testing *
     */
    throwError(error){
        this.setState({error:error});
        let self=this;
        setTimeout(()=>self.setState({error:null}), 3000);
    }

    throwEditError(error){
        this.setState({editError:error});
        let self=this;
        setTimeout(()=>self.setState({editError:null}), 3000);
    }

    showNotification(message){
        this.setState({notificationPopupMessage:message});
        let self=this;
        setTimeout(()=>self.setState({notificationPopupMessage:null,showTopExpandedRCE:true}),3000);
    }
    closeShowNotification(){
        this.setState({notificationPopupMessage:null});
        //this.setState({showTopExpandedRCE:true});
        let elm =document.querySelector("#avatar");
        console.log("avatar "+elm);
        elm.focus();
    }
    closeErrorNotification(){
        this.setState({error:null});
    }
    render() {
        const {isMobile, settings, token, style, memberAuth, memberData, currentMember,
            navigateToProfile, appHeight, signedInstance, appDefinitionId, onLoad, styleConverter, viewSharedComment, triggerShareMode} = this.props;
        const {comment, isComment, replyContainerCommentId, showPopup, options, response,
            reportAction, shareAction, deleteAction, editAction, handleGenericCallback, showGenericPopup,
            popupData, showReportedPopup, reportedTypes, index, getMentionSuggestions, entityID} = this.state;
        console.log('OOI | viewSharedComment: ', viewSharedComment);
        console.log('OOI | this.props.entityID: ', this.props.entityID);

        console.log("11111 this.props.editorMode", this.props.editorMode);

        return (
            <div>
                { this.state.error && <ErrorComponent onClose={this.closeErrorNotification} isMobile={isMobile} message={this.state.error} />}
                {this.state.notificationPopupMessage && <NotificationComponent message={this.state.notificationPopupMessage} onClose={this.closeShowNotification}/>}
                {viewSharedComment && <WixCommentsWrapper
                    versionTwoStyleDesktop={this.props.versionTwoStyleDesktop}
                    isMobile={isMobile}
                    settings={settings}
                    key={viewSharedComment ? viewSharedComment.entityID : entityID}
                    entityID={viewSharedComment ? viewSharedComment.entityID : entityID}
                    token={token}
                    style={style}
                    local={this.local}
                    onMoreAction={this.handleMoreAction}
                    onReportAction={this.handleReportAction}
                    onShareAction={this.handleShareAction}
                    onDeleteAction={this.handleDeleteAction}
                    onEditAction={this.handleEditAction}
                    onShowReportedAction={this.handleShowReportedAction}
                    handleGenericPopup={this.handleGenericPopup}
                    memberAuth={memberAuth}
                    memberData={memberData}
                    currentMember={currentMember}
                    navigateToProfile={navigateToProfile}
                    appHeight={appHeight}
                    signedInstance={signedInstance}
                    appDefinitionId={appDefinitionId}
                    onLoad={onLoad}
                    styleConverter={styleConverter}
                    throwError={this.throwError}
                    throwEditError={this.throwEditError}
                    viewSharedComment={viewSharedComment}
                    triggerShareMode={triggerShareMode}
                    showNotification={this.showNotification}
                    showTopExpandedRCE={this.state.showTopExpandedRCE}
                    editorMode={this.props.editorMode}
                    buildShareURL={this.props.buildShareURL}
                />
                }
                {!viewSharedComment && !this.props.editorMode && <WixCommentsWrapper
                        versionTwoStyleDesktop={this.props.versionTwoStyleDesktop}
                        isMobile={isMobile}
                        settings={settings}
                        key={this.props.entityID}
                        entityID={this.props.entityID}
                        token={token}
                        style={style}
                        local={this.local}
                        onMoreAction={this.handleMoreAction}
                        onReportAction={this.handleReportAction}
                        onShareAction={this.handleShareAction}
                        onDeleteAction={this.handleDeleteAction}
                        onEditAction={this.handleEditAction}
                        onShowReportedAction={this.handleShowReportedAction}
                        handleGenericPopup={this.handleGenericPopup}
                        memberAuth={memberAuth}
                        memberData={memberData}
                        currentMember={currentMember}
                        navigateToProfile={navigateToProfile}
                        appHeight={appHeight}
                        signedInstance={signedInstance}
                        appDefinitionId={appDefinitionId}
                        onLoad={onLoad}
                        styleConverter={styleConverter}
                        throwError={this.throwError}
                        throwEditError={this.throwEditError}
                        triggerShareMode={triggerShareMode}
                        showNotification={this.showNotification}
                        showTopExpandedRCE={this.state.showTopExpandedRCE}
                        editorMode={this.props.editorMode}
                        buildShareURL={this.props.buildShareURL}
                    />
                }
                {this.props.editorMode && <WixCommentsWrapperEditorMode
                    versionTwoStyleDesktop={this.props.versionTwoStyleDesktop}
                    isMobile={isMobile}
                    settings={settings}
                    key={viewSharedComment ? viewSharedComment.entityID : entityID}
                    entityID={viewSharedComment ? viewSharedComment.entityID : entityID}
                    token={token}
                    style={style}
                    local={this.local}
                    onMoreAction={this.handleMoreAction}
                    onReportAction={this.handleReportAction}
                    onShareAction={this.handleShareAction}
                    onDeleteAction={this.handleDeleteAction}
                    onEditAction={this.handleEditAction}
                    onShowReportedAction={this.handleShowReportedAction}
                    handleGenericPopup={this.handleGenericPopup}
                    memberAuth={memberAuth}
                    memberData={memberData}
                    currentMember={currentMember}
                    navigateToProfile={navigateToProfile}
                    appHeight={appHeight}
                    signedInstance={signedInstance}
                    appDefinitionId={appDefinitionId}
                    onLoad={onLoad}
                    styleConverter={styleConverter}
                    throwError={this.throwError}
                    throwEditError={this.throwEditError}
                    viewSharedComment={viewSharedComment}
                    triggerShareMode={triggerShareMode}
                    showNotification={this.showNotification}
                    showTopExpandedRCE={this.state.showTopExpandedRCE}
                    editorMode={this.props.editorMode}
                />
                }

                {showPopup && <PopupOoiMobileComponent
                    isMobile={isMobile}
                    style={style}
                    settings={settings}
                    local={this.local}
                    options={options}
                    response={response}
                    reportAction={reportAction}
                    shareAction={shareAction}
                    deleteAction={deleteAction}
                    editAction={editAction}
                    getMentionSuggestions={getMentionSuggestions}
                    comment={comment}
                    isComment={isComment}
                    replyContainerCommentId={replyContainerCommentId}
                    genericCallback={handleGenericCallback}
                    showGenericPopup={showGenericPopup}
                    genericData={popupData}
                    onClose={this.handleOnClose}
                    showReportedPopup={showReportedPopup}
                    reportedTypes={reportedTypes}
                    index={index}
                    showDesktopPopup={this.state.showDesktopPopup}
                    mousePosition={this.state.mousePosition}
                    triggerScroll={this.props.triggerScroll}
                    editError={this.state.editError}
                />}

            </div>
        );
    }
}
