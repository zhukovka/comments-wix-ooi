'use strict';

exports.__esModule = true;
var action = exports.action = {
    Report: 'report',
    Share: 'share',
    Edit: 'edit',
    DeleteComment: 'deleteComment',
    DeleteReply: 'deleteReply'
};

var actionStatus = exports.actionStatus = {
    Cancel: 'cancel',
    Done: 'done',
    Delete: 'delete',
    Reporting: 'reporting'
};

var shareAction = exports.shareAction = {
    Facebook: 'facebook',
    Twitter: 'twitter',
    Google: 'google',
    Link: 'link',
    Cancel: 'cancel'
};

var RCEPosition = exports.RCEPosition = {
    TopRCE: 'top rce',
    BottomRCE: 'bottom rce',
    commentsNoRepliesRCE: 'comments no replies rce',
    commentsWithRepliesRCE: 'comments with replies rce'
};

var ModalType = exports.ModalType = {
    JoinCommunityModal: 'join_community',
    JoinGroupModal: 'join_group',
    DeleteComment: 'delete_comment',
    ReportComment: 'report_comment',
    DeleteReply: 'delete_reply'
};

var ReportType = exports.ReportType = {
    UnwantedContent: 'UNWANTED_CONTENT',
    Harassment: 'HARASSMENT',
    InappropriateContent: 'INAPPROPRIATE_CONTENT',
    HateSpeechOrGraphic: 'HATE_SPEECH_OR_GRAPHIC'
};
//# sourceMappingURL=consts.js.map