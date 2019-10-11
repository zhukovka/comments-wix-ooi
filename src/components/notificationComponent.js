import React from 'react';
import style from "./style/notificationModal.scss";
import CloseIcon from "../svgs/close-icon/closeIcon";

class NotificationComponent extends React.Component{
    constructor(props){
        super(props);
        this.myStyle = style;
    }
componentDidMount(){
    let elm=document.querySelector("#close_button");
    elm.focus();
}

    render() {
        return (
            <div className={this.myStyle['error-modal']}>
                <div className={this.myStyle["close-container"]}>
                    <CloseIcon className={this.myStyle["close-icon"]} isMobile={"true"} notificationIconFill={"#ffff"} ariaLabel={"close notification"} size={"small"} onClick={this.props.onClose}/>
                </div>
               <div className={this.myStyle["error-text"]} role={"alert"}>
                   {this.props.message}
               </div>
            </div>
        );
    }
}
export default NotificationComponent;