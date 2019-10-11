import React, {Component} from 'react';
import style from "../components/style/errorModal.scss";
import classNames from "classnames";

export default class ErrorPopupComponent extends Component{
    constructor(props) {
        super(props);
        this.myStyle = style.locals != null ? style.locals : style;
    }

    render() {
        return(
            <div className={this.myStyle['error-modal']}>
                <div className={this.myStyle["error-content"]}>
                    <div className={this.myStyle["error-text"]}>
                        Something went wrong !
                    </div>
                </div>

            </div>
        );
    }
}
