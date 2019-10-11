import React from 'react';
import shareModalStyle from './style/sharemodal.scss';
import styleDesk from "./style/sharemodalDesk.scss";
import {FacebookIcon, Twitter, LinkIcon} from "../svgs";
import {shareAction} from "../common/consts";
import CloseIcon from "../svgs/close-icon/closeIcon";




class ShareModal extends React.Component {
    constructor(props) {
        super(props);
        this.copyToClipBoard = this.copyToClipBoard.bind(this);
        this.socialMediaShare = this.socialMediaShare.bind(this);
        // this.toggleIOSCopyLink = this.toggleIOSCopyLink.bind(this);
        // this.handleCopyToClipBoardClick = this.handleCopyToClipBoardClick.bind(this);
        this.myStyle = props.isMobile ? shareModalStyle : styleDesk;
        this.state = {
            copied: false,
            url: "www.google.com", //props.shareURL
            // showIOSCopyLink: false
        };
    }

    // componentDidMount() {
    //     this.mainlabel.focus();
    // }

    stopEventBubble(e) {
        e.stopPropagation();
    }
  /*  componentDidUpdate(prevProps) {
        if(this.props.isMobile!==prevProps.isMobile){
            if(this.props.isMobile){
                let elm=document.querySelector("#backgroundPopup");
                elm.focus();
            } else {
                let elm=document.querySelector("#backgroundPopupDesktop");
                elm.focus();
            }

        }else {
            if(this.props.isMobile){
                let elm=document.querySelector("#backgroundPopup");
                elm.focus();
            } else {
                let elm=document.querySelector("#backgroundPopupDesktop");
                elm.focus();
            }
        }
    }*/
 /*componentDidMount() {
         let elm;
         elm=document.querySelector("#backgroundPopup");
         elm.focus();

 }*/

    socialMediaShare(media) {
        console.log("socialMediaShare madia: ", media);
        let url;
        switch (media) {
            case 'facebook' :
                url = this.props.isMobile ? 'https://m.facebook.com/sharer.php?u=' : 'https://www.facebook.com/sharer/sharer.php?u=';
                break;
            case 'twitter'  :
                url = 'https://twitter.com/intent/tweet?url=';
                break;
        }
        url += this.state.url;
        window.open(url, '_blank', 'top=200, left=200, width=700, height=500');
    }

    copyToClipBoard() {
        console.log("copyToClipBoard start: ");
        let self = this;
        let url = this.state.url;
        const el = document.createElement('input');
        el.value = url;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        self.setState({copied: true});
        setTimeout(function () {
            self.setState({copied: false});
        }, 1500);
        console.log("copyToClipBoard end: ");
    }

    handleShareAction(shareType) {
        const {handleShareAction, comment} = this.props;
        handleShareAction(shareType, comment.commentId);
    }

    //
    // isIOS() {
    //     try {
    //         return !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    //     } catch (e) {
    //         return false;
    //     }
    // }
    //
    // toggleIOSCopyLink(flag) {
    //     this.setState({showIOSCopyLink: flag});
    // }
    //
    // handleCopyToClipBoardClick() {
    //     if (this.props.isMobile && this.isIOS()) {
    //         this.toggleIOSCopyLink(true);
    //     } else {
    //         this.copyToClipBoard();
    //     }
    // }


    render() {
        const {style,isMobile,close} = this.props;
        return (
            <div id={"shareModal"} className={this.myStyle["share_modal_backdrop_style"]} onClick={this.props.close}>
                    <div className={this.myStyle["share_modal_container_style"]} onClick={(e) => e.stopPropagation()}>
                        {!isMobile && <CloseIcon onClick={close}  isMobile={isMobile}/> }
                        <div className={this.myStyle["share_modal_content_container"]}>
                            <div className={this.myStyle["share_modal_header_container"]}>
                                <span className={this.myStyle["share_modal_header"] +(!isMobile ? ' report_main_title_desktop':'')}>
                                    {this.props.shareTitle}
                                </span>
                            </div>
                            <div style={{"text-align":"center"}}>
                            <ul style={{"display":"inline-table"}} id={"shareModalMenu"} role={"menu"} aria-labelledby={"share"} tabIndex={-1} className={this.myStyle["share_modal_content"]}>

                              <li style={{"display":"display","float":"left"}} onClick={() => this.handleShareAction(shareAction.Facebook)} aria-label={"facebook"} tabIndex={0} role={"menuitem"}><FacebookIcon size={!isMobile ? "24" :''} className={this.myStyle["share_modal_img"]}/></li>

                              <li style={{"display":"display","float":"left"}} onClick={() => this.handleShareAction(shareAction.Twitter)} aria-label={"twitter"} tabIndex={0} role={"menuitem"}><Twitter size={!isMobile ? "24" :''} className={this.myStyle["share_modal_img"]}/></li>

                              <li style={{"display":"display","float":"left"}} onClick={() => this.handleShareAction(shareAction.Link)} aria-label={"copy link"} tabIndex={0} role={"menuitem"}>   <LinkIcon size={!isMobile ? "24" :''} className={this.myStyle["share_modal_img"]}/></li>

                            </ul>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

// ShareModal.propTypes = {
//     show: PropTypes.bool.isRequired,
//     handleShareAction: PropTypes.func.isRequired,
// };


export default ShareModal;
