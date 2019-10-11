import React from "react";
import style from "./style/editCommentContainer.scss";
import CloseIcon from "../svgs/close-icon/closeIcon";
import {RichContentEditorComponent} from 'wix-comments-rce/dist/src';

class EditComment extends React.Component {
    constructor(props) {
        super(props);
        this.myStyle = style.locals != null ? style.locals : style;
        this.onUpdateComment=this.onUpdateComment.bind(this);
    }

    onUpdateComment(content){
        this.props.onUpdateComment(content,this.props.comment.commentId );
    }



    render() {
        console.log('edit comment popup props: ',this.props);

        console.log('comment in edit : ',this.props.comment.comment.text.content);
        return (
            <div id={"editModal"} className={this.myStyle['container']} role="dialog">
                <selection className={this.myStyle['rce-container']}>
                    <div className={this.myStyle.rceContainer}>
                    <RichContentEditorComponent
                        isMobile={this.props.isMobile}
                        local={this.props.local}
                        expandedOnly={true}
                        onEditorStateChange={this.onEditorStateChange}
                        getMentionSuggestions={this.props.getMentionSuggestions}
                        show={{collapsedRCE: false ,expandedRCE: true}}
                        placeHolder={"Edit place holder"}
                        showElements={{expandedOnly: true, showCollapsed: false, showExpanded: true}}
                        inEditComment={true}
                        initialState={this.props.comment.comment.text.content}
                        onUpdateComment={this.onUpdateComment}
                        exit={this.props.exit}
                        error={this.props.editError}
                        editorMode={this.props.editorMode}
                    />
                    </div>
                </selection>
            </div>
        );
    }
}

export default EditComment;
