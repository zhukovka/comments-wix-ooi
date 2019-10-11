import React from "react";
import PropTypes from "prop-types";
import style from "./style/commentReported.scss";
import styleDesk from "./style/commentReportedDesk.scss";

import classNames from "classnames";
import Button from "./button";
import CloseIcon from "../svgs/close-icon";

class CommentReported extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteAction = this.handleDeleteAction.bind(this);
        this.buildContent = this.buildContent.bind(this);
        //this.myStyle = style.locals != null ? style.locals : style;
        this.myStyle = props.isMobile ? style : styleDesk;
    }

    handleDeleteAction() {
        const {handleDeleteCommentAction, comment} = this.props;
        handleDeleteCommentAction(comment.commentId);
    }

    buildContent = () => {
        const {reportedTypes, contentTop, contentBottom, comment} = this.props;
        let reportOption = reportedTypes ? reportedTypes.reportedTypes : [];
        let number = comment.reported.count;
        let content = eval("`" + contentTop + "`");
        let reportOptionFormated = reportOption.map((op, key) => {
            let str = `- ${op}\n`;
            return (<span key={key} className={this.myStyle["report_options"]}>
                {str}
            </span>)
        });

        return <label className={this.myStyle["report_options_container"]+" label"}>
            {content}
            {reportOptionFormated}
            <br/>
            {contentBottom}
        </label>;
    };

    render() {
        let {exit, cancel, button1Value, title, content,isMobile} = this.props;

        return (
            <div className={this.myStyle['container']} id="popup-wrapper" tabIndex="-1" role="dialog">
                <CloseIcon className={this.myStyle['close_icon_container']} onClick={exit} ariaLabel={cancel} isMobile={isMobile}/>

                <div id={"commentReported"} className={classNames('page-title', this.myStyle['mainTitle'],(isMobile ? 'report_main_title' : 'report_main_title_desktop'))}>
                    <span role="title" aria-label={title} tabIndex="0" ref={(x) => {
                        this.mainLabel = x;
                    }}>{title}</span>
                </div>
                <section>
                    <div className={classNames(this.myStyle['message-container'], 'sub-title',(isMobile ?  'report_content_text': 'comments_text' ))}>
                        {this.buildContent()}
                    </div>
                    <div className={this.myStyle['actionContainer']}>
                        {
                            isMobile ?
                                <div id={"reportButtons"}>
                                    <Button onClick={this.handleDeleteAction} label={button1Value} onKeyDown={this.onKeyDown} styleType='primary'/>
                                    <Button onClick={exit} label={cancel} styleType='secondary' buttonStyle={this.myStyle['cancelButton']} />
                                </div>
                                :
                                <div id={"reportButtons"}>
                                    <Button onClick={exit} label={cancel} styleType='secondary' buttonStyle={this.myStyle['cancelButton']} />
                                    <Button onClick={this.handleDeleteAction} label={button1Value} onKeyDown={this.onKeyDown} styleType='primary'/>
                                </div>
                        }

                    </div>
                </section>
            </div>
        );
    }
}

// CommentReported.propTypes = {
//     exit: PropTypes.func,
//     handleDeleteCommentAction: PropTypes.func.isRequired,
//     isMobile: PropTypes.bool.isRequired,
//     title: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired,
//     button1Value: PropTypes.string.isRequired,
//     cancel: PropTypes.string.isRequired,
// };

export default CommentReported;
