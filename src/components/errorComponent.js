import React from "react";
import style from './style/errorComponent.scss';
import CloseIcon from "../svgs/close-icon/closeIcon";

class ErrorComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myStyle = style.locals != null ? style.locals : style;
    }
   componentDidMount() {
        let elm = document.querySelector("#close_button");
        elm.focus();
   }

    render() {
        return (
            <div className={this.props.isMobile ? this.myStyle['mobileError'] : this.myStyle['error']}>
                <div className={this.myStyle["close-container"]}>
                    <CloseIcon className={this.myStyle["close-icon"]} isMobile={"true"} notificationIconFill={"#ffff"} ariaLabel={"close notification"} size={"small"} onClick={this.props.onClose} />
                </div>
                <div className={this.myStyle['error-msg']} role={"alert"}>
                {this.props.message}
                </div>
            </div>
        );
    }
}

export default ErrorComponent;
