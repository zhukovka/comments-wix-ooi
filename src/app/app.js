import React from 'react';
import {translate} from 'react-i18next';
import style from './style/app.scss';
import WixCommentsOoi from '../wixCommentsOoi';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.onAddComment = this.onAddComment.bind(this);
    }

    onAddComment() {
    }

    render() {
        let isMobile = true;
        let {settings, style, commentId, replyId, isComment} = this.props;

        return (
            <div className={style.root_css}>
                <WixCommentsOoi isMobile={isMobile}
                                settings={settings}
                                commentId={commentId}
                                replyId={replyId}
                                isComment={(isComment === 'true')}
                                style={style}
                />
            </div>
        );
    }
}

export default translate()(App);
