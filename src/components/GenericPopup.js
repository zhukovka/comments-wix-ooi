import React from "react";
import PropTypes from "prop-types";
import style from "./style/deleteComment.scss";
import styleDesk from "./style/deleteCommentDesk.scss";
import CloseIcon from "../svgs/close-icon";
import classNames from "classnames";

class GenericPopup extends React.Component {
    constructor(props) {
        super(props);
        this.genericCallback = this.genericCallback.bind(this);
        //this.myStyle = style.locals != null ? style.locals : style;
        this.myStyle = props.isMobile ? style : styleDesk;
    }

    genericCallback() {
        console.log('component')
        this.props.genericCallback();
    }

    render() {
        let {title, content} = this.props.data;
        let {exit, isMobile}=this.props;
        console.log('PROPS !!',this.props)
        return (
            <div className={this.myStyle['container']} id="popup-wrapper" tabIndex="-1" role="dialog">
                <CloseIcon onClick={exit} isMobile={isMobile}/>

                <div className={classNames('page-title', this.myStyle['mainTitle'])}>
                    <span role="title" aria-label={title} tabIndex="0" >{title}</span>
                </div>
                <section>
                    <div className={classNames(this.myStyle['messageContainer'], 'sub-title')}>
                        <label className="label"
                               aria-label={content}>{content}</label>
                    </div>
                    <div className={this.myStyle['actionContainer']}>
                        <button onClick={()=>{this.genericCallback(); exit();}}>log in</button>
                    </div>
                </section>
            </div>
        );
    }
}



export default GenericPopup;
