import React from "react";
import PropTypes from "prop-types";
import style from "./style/deleteComment.scss";
import styleDesk from "./style/deleteCommentDesk.scss";
import classNames from "classnames";
import CloseIcon from "../svgs/close-icon";
import Button from "./button";

class DeleteComment extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteAction = this.handleDeleteAction.bind(this);
        //this.myStyle = style.locals != null ? style.locals : style;
        this.myStyle = props.isMobile ? style : styleDesk;
    }

    handleDeleteAction() {
        const {handleDeleteCommentAction, comment} = this.props;
        handleDeleteCommentAction(comment.commentId);
    }

    render() {
        let {exit, cancel, button1Value, title, content ,isMobile} = this.props;
        return (
            <div className={this.myStyle['container']} id="popup-wrapper" tabIndex="-1" role="dialog">
                <CloseIcon onClick={exit} ariaLabel={cancel} isMobile={isMobile} />

                <div  id={"deleteTitle"} className={classNames('page-title', this.myStyle['mainTitle'],(isMobile ? 'report_main_title' :'report_main_title_desktop'))}>
                    <span role="title" aria-label={title} tabIndex="0" ref={(x) => {
                        this.mainLabel = x;
                    }}>{title}</span>
                </div>
                <section>
                    <div className={classNames(this.myStyle['messageContainer'], 'sub-title','delete_content_text')}>
                        <label className="label"
                               aria-label={content}>{content}</label>
                    </div>
                    <div className={this.myStyle['actionContainer']}>
                        {isMobile ? <div id={"reportButtons"}> <Button onClick={this.handleDeleteAction} label={button1Value} onKeyDown={this.onKeyDown} styleType='primary'/>
                                          <Button onClick={exit} label={cancel} styleType='secondary' buttonStyle={this.myStyle['cancelButton']}/></div>
                            :
                                    <div id={"reportButtons"}>
                                    <Button onClick={exit} label={cancel} styleType='secondary' buttonStyle={this.myStyle['cancelButton']} />
                                    <Button onClick={this.handleDeleteAction} label={button1Value} onKeyDown={this.onKeyDown} styleType='primary' />
                                    </div>
                        }

                    </div>
                </section>
            </div>
        );
    }
}

DeleteComment.propTypes = {
    exit: PropTypes.func,
    handleDeleteCommentAction: PropTypes.func.isRequired,
    isMobile: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    button1Value: PropTypes.string.isRequired,
    cancel: PropTypes.string.isRequired,
};

export default DeleteComment;
