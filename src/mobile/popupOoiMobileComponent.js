import React, {Component} from 'react';
import {ShareModal, MoreActionModal, Report, DeleteComment, GenericPopup, CommentReported, EditComment} from "../components";
import PropTypes from "prop-types";
import {ReportType,action} from "../common/consts";

export default class PopupOoiMobileComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            moreActionModal: {
                show: false,
                data: null
            },
            reportAction: null,
            deleteAction: null,
            shareAction: null,
            editAction:null,
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
            showDesktopPopup: false,
        };
        this.downPrevId=null;
        this.upPrevId=null;
        this.reportPopup=null;
        this.handleMoreActionResponse = this.handleMoreActionResponse.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShareAction = this.handleShareAction.bind(this);
        this.handleDeleteCommentAction = this.handleDeleteCommentAction.bind(this);
        this.handleReportConfirmAction = this.handleReportConfirmAction.bind(this);
        this.divMoreAction = React.createRef();
        this.divMoreActionDesktop = React.createRef();
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        let {showMainModal, showReportModal, showShareModal, showDeleteModal, showEditModal, showReportedModal} = this.state;
        if(showMainModal || showReportModal || showShareModal || showDeleteModal || showEditModal || showReportedModal){
            this.props.triggerScroll(false);
        }
        console.log("this.props.showDesktopPopup " + this.props.showDesktopPopup);
        console.log("prevProps.showDesktopPopup " + prevProps.showDesktopPopup);
        console.log("this.state.showDesktopPopup " + this.state.showDesktopPopup);
        console.log("prevProps.isMobile "+prevProps.isMobile) ;
        console.log("this.props.isMobile "+this.props.isMobile);
        console.log("this.state.showEditModal "+this.state.showEditModal);

        if(prevProps.showDesktopPopup===true && this.state.showDesktopPopup===true){
            this.divMoreActionDesktop.current.focus();
        }else if(prevProps.showDesktopPopup===false && this.state.showDesktopPopup===false && this.props.isMobile===true){
            this.divMoreAction.current.focus();
        }else if(prevProps.showDesktopPopup===false && this.state.showDesktopPopup===false && this.props.isMobile===false){
            this.divMoreAction.current.focus();
        }else if(prevProps.showDesktopPopup!==this.state.showDesktopPopup && this.props.isMobile===false){
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
    }
    doFocus=()=>{
        this.divMoreAction.current.focus();
        console.log("fdd")
    }

    componentDidMount() {
        const {options, response, reportAction, deleteAction, shareAction, showReportedPopup, showGenericPopup, genericCallback , editAction, getMentionSuggestions} = this.props;
        console.log("Popup props:", this.props);
        this.setState((state, props) => {
                return {
                    moreActionModal: {
                        show: true,
                        data: {options: options, response: response}
                    },
                    reportAction: reportAction,
                    editAction: editAction,
                    getMentionSuggestions:getMentionSuggestions,
                    deleteAction: deleteAction,
                    shareAction: shareAction,
                    genericCallback: genericCallback,
                    showMainModal: !(showReportedPopup || state.closeMainModal || showGenericPopup),
                    showReportedModal: showReportedPopup,
                    showGenericPopup: showGenericPopup,
                    showDesktopPopup: props.showDesktopPopup,
                };
            }
        );
    }
    handleKeys=(event)=> {
      //  console.log("gray element: ", document.querySelector("#backgroundPopup").parentElement.firstElementChild.getElementsByTagName("ul")[0].lastElementChild);
          console.log('event.target.id '+event.target.id);
     //   console.log("more "+document.querySelector("#moreActionsMenu").firstElementChild);
        let elm;
        if (event.keyCode === 27) {
          this.handleClose();
        }
        if (event.keyCode === 13) event.target.click();
        else if (event.keyCode === 40 || event.keyCode === 9 ) {//down
               if(event.target.id ==="backgroundPopup" || event.target.id ==="backgroundPopupDesktop"){
                  // elm = document.querySelector("#backgroundPopup").parentElement.firstElementChild.getElementsByTagName("ul")[0].firstElementChild;
                   elm = document.querySelector("#section").firstElementChild;
                   console.log("id is "+elm.id);
                   if(elm.id==="shareModal"){
                       elm = document.querySelector("#shareModalMenu").firstElementChild;
                   }
                   if(elm.id==="moreActionsMenu"){
                       elm = document.querySelector("#moreActionsMenu").firstElementChild;
                   }
                   if(elm.id==="popup-wrapper"){
                      //elm = document.querySelector("#reportModal").firstElementChild;
                       elm = document.querySelector("#close_button");
                   }
                   if(elm.id==="editModal"){
                       elm = document.querySelector("#richContentTextId");
                   }
                   console.log(elm);
                   elm.focus();
                   event.preventDefault();
               }

               else {
                   let elm =  event.target.nextElementSibling;
                   console.log("elm down is "+elm);
                   /******** for commentReported ********/
                   if(elm!==null && elm.id==="commentReported"){
                       elm = document.querySelector("#reportButtons").firstElementChild;
                   }
                   /******** for commentReported ********/
                 /******** for report popup ********/
                   if(elm !==null && elm.id==="reportTitle"){
                       this.downPrevId=elm.id;
                       console.log("this.downPrevId "+this.downPrevId);
                       elm = document.querySelector("#reportModal").firstElementChild;
                   }
                   if(elm==null && this.downPrevId==="reportTitle"){
                       elm = document.querySelector("#reportButtons").firstElementChild;
                       this.downPrevId=null;
                       this.upPrevId="reportModal";
                   }
                  /******* for report popup ********/

                  /** -----------------------------------**/

                  /******* for delete popup ********/
                   if(elm !==null && elm.id==="deleteTitle"){
                       this.upPrevId="close_button";
                       this.reportPopup="delete";
                       console.log("this.downPrevId "+this.downPrevId);
                       elm = document.querySelector("#reportButtons").firstElementChild;
                   }
                  /******* for delete popup********/


                   /** -----------------------------------**/


                   /******* for edit popup ********/
                   if(elm !==null && elm.id==="PluginsButtonId"){
                       elm = document.querySelector("#editButtons").firstElementChild;
                       this.upPrevId="PluginsButtonId";
                   }
                   /******* for edit popup ********/

                   if(elm==null) {

                       if(this.state.showDesktopPopup) elm=document.querySelector("#backgroundPopupDesktop");
                       else  elm=document.querySelector("#backgroundPopup");
                       console.log(elm)
                       elm.focus();
                       event.preventDefault();
                   }
                   console.log("this.downPrevId "+this.downPrevId);
                   console.log(elm);
                   elm.focus();
                   event.preventDefault();
               }
       }
        else if (event.keyCode === 38 || event.keyCode === 9){//up
            if(event.target.id ==="backgroundPopup" || event.target.id ==="backgroundPopupDesktop"){
               // elm = document.querySelector("#backgroundPopup").parentElement.firstElementChild.getElementsByTagName("ul")[0].lastElementChild;
                elm = document.querySelector("#section").firstElementChild;
                console.log("id is "+elm.id);
                if(elm.id==="shareModal"){
                    elm = document.querySelector("#shareModalMenu").lastElementChild;
                }
                if(elm.id==="moreActionsMenu"){
                    elm = document.querySelector("#moreActionsMenu").lastElementChild;
                }
               /* if(elm.id=="popup-wrapper"){
                    elm = document.querySelector("#reportModal").lastElementChild;
                }*/
                if(elm.id==="popup-wrapper"){
                    //elm = document.querySelector("#reportModal").firstElementChild;
                    elm = document.querySelector("#reportButtons").lastElementChild;
                    this.reportPopup!=="delete" ? this.upPrevId="reportModal" : this.upPrevId="close_button";
                }
                if(elm.id==="editModal"){
                     elm = document.querySelector("#editButtons").lastElementChild;
                     this.upPrevId="PluginsButtonId";
                }
                console.log(elm);
                elm.focus();
                event.preventDefault();
            }
            else {
                console.log("this.downPrevId "+this.downPrevId);
                console.log("this.upPrevId "+this.upPrevId  );
                let elm =  event.target.previousElementSibling;
                if(elm==null && this.upPrevId==="close_button"){
                    console.log("this.upPrevId "+this.upPrevId);
                    elm = document.querySelector("#close_button");
                    this.upPrevId=null;
                }
                if(elm==null && this.upPrevId==="reportModal"){
                    elm = document.querySelector("#reportModal").lastElementChild;
                    this.upPrevId="close_button";
                    this.downPrevId="reportTitle";
                }
                if(elm==null && this.upPrevId==="PluginsButtonId"){
                    elm = document.querySelector("#richContentTextId");
                    this.upPrevId=null;
                }
                if(elm==null) {
                    if(this.state.showDesktopPopup) elm=document.querySelector("#backgroundPopupDesktop");
                    else  elm=document.querySelector("#backgroundPopup");
                    console.log(elm)
                    elm.focus();
                    event.preventDefault();
                }
                console.log(elm);
                elm.focus();
                event.preventDefault();
            }

        }
    }

    componentWillReceiveProps(nextProps) {
        const {reportAction, deleteAction, shareAction, showReportedPopup, genericCallback, editAction, getMentionSuggestions} = nextProps;
        console.log("MMMMMMMMMM", genericCallback);

        this.setState((state) => {
            return {
                reportAction: reportAction,
                deleteAction: deleteAction,
                shareAction: shareAction,
                genericCallback: genericCallback,
                editAction: editAction,
                getMentionSuggestions: getMentionSuggestions,
                // showDesktopPopup: showDesktopPopup,
                // showMainModal: !(showReportedPopup || state.closeMainModal),
                // showReportedModal: showReportedPopup,
            };
        });
    }

    handleMoreActionResponse = (answer, id) => {
        console.log("11112121 answer: ", answer);
        const {
            moreActionModal: {
                data: {response}
            }
        } = this.state;

        switch (answer.value) {
            case "share":
                response(answer);
                this.showShare();
                break;
            case "edit":
                response(answer, id);
                this.props.isMobile ? this.showEdit() : this.handleClose();
                break;
            case "report":
                response(answer);
                this.showReport();
                break;
            case "delete":
                response(answer);
                this.showDelete();
                /**for accessibility**/
                this.reportPopup="delete";
                /**for accessibility**/
                break;
            default:
                this.handleClose();
        }
    };

    showReport = () => {
        this.setState(() => {
            return {
                showDesktopPopup: false,
                closeMainModal: true,
                showMainModal: false,
                showReportModal: true
            };
        });
    };

    showShare = () => {
        this.setState(() => {
            return {
                showDesktopPopup: false,
                closeMainModal: true,
                showMainModal: false,
                showShareModal: true
            };
        });
    };

    showDelete = () => {
        this.setState(() => {
            return {
                showDesktopPopup: false,
                closeMainModal: true,
                showMainModal: false,
                showDeleteModal: true
            };
        });
    };

    showEdit = () => {
        console.log(" showEdit ");
        this.setState(() => {
            return {
                showDesktopPopup: false,
                closeMainModal: true,
                showMainModal: false,
                showEditModal: true
            };
        });
        //this.handleClose();
    };

    handleClose = (handleAction) => {
        console.log("handleClose | this.props: ", this.props);
        setTimeout(function(){this.props.triggerScroll(true)}.bind(this),0);

        this.setState(() => {
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
                isReportError: false,
            };
        });

        this.props.onClose();

       if(handleAction===action.DeleteComment){
           let elm=document.querySelector("#commentHasBeenDeleted");
           console.log(elm);
           elm && elm.focus();
        }
       else{
           let elm = document.getElementById(`${this.props.comment.commentId}`);
           elm && elm.focus();
       }

    };

    handleShareAction = (actionType, commentId) => {
        const {shareAction} = this.state;
        shareAction(actionType, commentId);

        this.handleClose();
    };

    handleReportConfirmAction = (reportType) => {
        const {reportAction} = this.state;
        const {comment} = this.props;

        reportAction(reportType, comment.commentId, this.reportCallBack);
    };

    reportCallBack = (res) => {
        console.log('111111111reportCallBack res: ', res);
        this.setState({
            isRequestSuccess: res,
            isReportError: !res
        });
    };

    handleDeleteCommentAction = (commentId) => {
        const {isComment, replyContainerCommentId} = this.props;
        const {deleteAction} = this.state;
        deleteAction(commentId, isComment, replyContainerCommentId);
        this.handleClose(action.DeleteComment);
    };

    handleEditComment = (content, id) => {
        console.log('PopupOoiMobileComponent | handleEditComment this.props.isComment : ', this.props.isComment);
        const {isComment, replyContainerCommentId} = this.props;
        const {editAction} = this.state;
        editAction(content, id, isComment, replyContainerCommentId,this.handleClose);
    };

    handleGenericCallback = () => {
        const {genericCallback} = this.state;
        genericCallback();
    };

    getReportLabels = () => {
        const {local} = this.props;
        return {
            title: local["comment.reportTitle"]
            , optionsTitle: local["comment.reportQuestion"]
            , cancel: local["menu.cancel"]
            , confirm: local["comment.reportAcceptButton"]
            , done: local["menu.done"]
            , responseTitle: local["comment.reportConfirmTitle"]
            , responseMessage: local["comment.reportConfirmContent"]
        };
    };

    getReportOptions = () => {
        const {local} = this.props;
        return [
            {
                value: ReportType.UnwantedContent,
                label: local["comment.reportOption1"]
            },
            {
                value: ReportType.Harassment,
                label: local["comment.reportOption2"]
            },
            {
                value: ReportType.InappropriateContent,
                label: local["comment.reportOption3"]
            },
            {
                value: ReportType.HateSpeechOrGraphic,
                label: local["comment.reportOption4"]
            }
        ];
    };

    render() {
        const {comment, local,isMobile} = this.props;
        const {showGenericPopup, moreActionModal, showMainModal, showReportModal, showShareModal, showDeleteModal, showReportedModal, showEditModal, getMentionSuggestions, showDesktopPopup} = this.state;
        const {show, data} = moreActionModal;
        let errorStatus=null;
        if(this.props.editError && this.props.editError.id===comment.commentId){
            errorStatus=this.props.editError;
        }
        return (
            <div>
                {!showDesktopPopup ?
                    <div
                        style={{
                            display: show ? "flex" : "none",
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0,0,0,0.4)",
                            justifyContent: "center",
                            zIndex:99999
                        }}
                        tabindex={0}
                        role={"dialog"}
                        aria-labelledby={"moreActions"}
                        id={"backgroundPopup"}
                        ref={this.divMoreAction}
                        onClick={this.handleClose}
                        onKeyDown={this.handleKeys}
                        aria-label={"close dialog"}
                    >
                        <section id={"section"} onClick={(e) => e.stopPropagation()}>

                            {showMainModal &&

                            <MoreActionModal
                                isMobile={isMobile}
                                data={data}
                                handleMoreActionResponse={this.handleMoreActionResponse}
                                comment={comment}
                            />}

                            {showReportModal &&
                            <Report
                                isMobile={isMobile}
                                style={this.props.style}
                                labels={this.getReportLabels()}
                                reportOptions={this.getReportOptions()}
                                exit={this.handleClose}
                                confirmAction={this.handleReportConfirmAction}
                                isRequestSuccess={this.state.isRequestSuccess}
                                isReportError={this.state.isReportError}
                            />}

                            {showShareModal &&
                            <ShareModal style={this.props.style}
                                        isMobile={isMobile}
                                        shareTitle={local["menu.shareCommentTitle"]}
                                        handleShareAction={this.handleShareAction}
                                        close={this.handleClose}
                                        comment={comment}
                                        doFocus={this.doFocus}
                            />}

                            {showDeleteModal &&
                            <DeleteComment
                                isMobile={isMobile}
                                comment={comment}
                                style={this.props.style}
                                title={local["comment.deleteTitle"]}
                                content={local["comment.deleteText"]}
                                button1Value={local["menu.delete"]}
                                cancel={local["menu.cancel"]}
                                exit={this.handleClose}
                                handleDeleteCommentAction={this.handleDeleteCommentAction}
                            />}

                            {showReportedModal &&
                            <CommentReported
                                isMobile={isMobile}
                                comment={comment}
                                style={this.props.style}
                                title={local["comment.reportedTitle"]}
                                contentTop={local["comment.reportedContentTop"]}
                                contentBottom={local["comment.reportedContentBottom"]}
                                button1Value={local["menu.delete"]}
                                cancel={local["menu.cancel"]}
                                reportedTypes={this.props.reportedTypes}
                                exit={this.handleClose}
                                handleDeleteCommentAction={this.handleDeleteCommentAction}
                            />}

                            {showEditModal &&
                            <EditComment
                                local={local}
                                isMobile={isMobile}
                                comment={comment}
                                style={this.props.style}
                                onUpdateComment={this.handleEditComment}
                                exit={this.handleClose}
                                getMentionSuggestions={getMentionSuggestions}
                                editError={errorStatus}
                            />}

                            {showGenericPopup &&
                            <GenericPopup
                                isMobile={isMobile}
                                style={this.props.style}
                                data={this.props.genericData}
                                cancel={local["menu.cancel"]}
                                exit={this.handleClose}
                                genericCallback={this.handleGenericCallback}
                            />}

                        </section>
                    </div>
:
                    <div
                        style={{
                            display: show ? "flex" : "none",
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0,0,0,0)",
                            justifyContent: "center",
                            zIndex:99999
                        }}
                        tabIndex={0}
                        onClick={this.handleClose}
                        onKeyDown={this.handleKeys}
                        id={"backgroundPopupDesktop"}
                        ref={this.divMoreActionDesktop}
                        role={"dialog"}
                        aria-labelledby={"moreActions"}
                        aria-label={"close dialog"}
                    >
                        <section id={"section"} onClick={(e) => e.stopPropagation()}>

                            {showMainModal &&
                            <MoreActionModal
                                isMobile={isMobile}
                                data={data}
                                handleMoreActionResponse={this.handleMoreActionResponse}
                                comment={comment}
                                mousePosition={this.props.mousePosition}
                            />}

                        </section>
                    </div>
                }
            </div>
        );
    }
}