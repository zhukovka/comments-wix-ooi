'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sharemodal = require('./style/sharemodal.scss');

var _sharemodal2 = _interopRequireDefault(_sharemodal);

var _sharemodalDesk = require('./style/sharemodalDesk.scss');

var _sharemodalDesk2 = _interopRequireDefault(_sharemodalDesk);

var _svgs = require('../svgs');

var _consts = require('../common/consts');

var _closeIcon = require('../svgs/close-icon/closeIcon');

var _closeIcon2 = _interopRequireDefault(_closeIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShareModal = function (_React$Component) {
    _inherits(ShareModal, _React$Component);

    function ShareModal(props) {
        _classCallCheck(this, ShareModal);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.copyToClipBoard = _this.copyToClipBoard.bind(_this);
        _this.socialMediaShare = _this.socialMediaShare.bind(_this);
        // this.toggleIOSCopyLink = this.toggleIOSCopyLink.bind(this);
        // this.handleCopyToClipBoardClick = this.handleCopyToClipBoardClick.bind(this);
        _this.myStyle = props.isMobile ? _sharemodal2.default : _sharemodalDesk2.default;
        _this.state = {
            copied: false,
            url: "www.google.com" //props.shareURL
            // showIOSCopyLink: false
        };
        return _this;
    }

    // componentDidMount() {
    //     this.mainlabel.focus();
    // }

    ShareModal.prototype.stopEventBubble = function stopEventBubble(e) {
        e.stopPropagation();
    };
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

    ShareModal.prototype.socialMediaShare = function socialMediaShare(media) {
        console.log("socialMediaShare madia: ", media);
        var url = void 0;
        switch (media) {
            case 'facebook':
                url = this.props.isMobile ? 'https://m.facebook.com/sharer.php?u=' : 'https://www.facebook.com/sharer/sharer.php?u=';
                break;
            case 'twitter':
                url = 'https://twitter.com/intent/tweet?url=';
                break;
        }
        url += this.state.url;
        window.open(url, '_blank', 'top=200, left=200, width=700, height=500');
    };

    ShareModal.prototype.copyToClipBoard = function copyToClipBoard() {
        console.log("copyToClipBoard start: ");
        var self = this;
        var url = this.state.url;
        var el = document.createElement('input');
        el.value = url;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        self.setState({ copied: true });
        setTimeout(function () {
            self.setState({ copied: false });
        }, 1500);
        console.log("copyToClipBoard end: ");
    };

    ShareModal.prototype.handleShareAction = function handleShareAction(shareType) {
        var _props = this.props,
            handleShareAction = _props.handleShareAction,
            comment = _props.comment;

        handleShareAction(shareType, comment.commentId);
    };

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


    ShareModal.prototype.render = function render() {
        var _this2 = this;

        var _props2 = this.props,
            style = _props2.style,
            isMobile = _props2.isMobile,
            close = _props2.close;

        return _react2.default.createElement(
            'div',
            { id: "shareModal", className: this.myStyle["share_modal_backdrop_style"], onClick: this.props.close },
            _react2.default.createElement(
                'div',
                { className: this.myStyle["share_modal_container_style"], onClick: function onClick(e) {
                        return e.stopPropagation();
                    } },
                !isMobile && _react2.default.createElement(_closeIcon2.default, { onClick: close, isMobile: isMobile }),
                _react2.default.createElement(
                    'div',
                    { className: this.myStyle["share_modal_content_container"] },
                    _react2.default.createElement(
                        'div',
                        { className: this.myStyle["share_modal_header_container"] },
                        _react2.default.createElement(
                            'span',
                            { className: this.myStyle["share_modal_header"] + (!isMobile ? ' report_main_title_desktop' : '') },
                            this.props.shareTitle
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: { "text-align": "center" } },
                        _react2.default.createElement(
                            'ul',
                            { style: { "display": "inline-table" }, id: "shareModalMenu", role: "menu", 'aria-labelledby': "share", tabIndex: -1, className: this.myStyle["share_modal_content"] },
                            _react2.default.createElement(
                                'li',
                                { style: { "display": "display", "float": "left" }, onClick: function onClick() {
                                        return _this2.handleShareAction(_consts.shareAction.Facebook);
                                    }, 'aria-label': "facebook", tabIndex: 0, role: "menuitem" },
                                _react2.default.createElement(_svgs.FacebookIcon, { size: !isMobile ? "24" : '', className: this.myStyle["share_modal_img"] })
                            ),
                            _react2.default.createElement(
                                'li',
                                { style: { "display": "display", "float": "left" }, onClick: function onClick() {
                                        return _this2.handleShareAction(_consts.shareAction.Twitter);
                                    }, 'aria-label': "twitter", tabIndex: 0, role: "menuitem" },
                                _react2.default.createElement(_svgs.Twitter, { size: !isMobile ? "24" : '', className: this.myStyle["share_modal_img"] })
                            ),
                            _react2.default.createElement(
                                'li',
                                { style: { "display": "display", "float": "left" }, onClick: function onClick() {
                                        return _this2.handleShareAction(_consts.shareAction.Link);
                                    }, 'aria-label': "copy link", tabIndex: 0, role: "menuitem" },
                                '   ',
                                _react2.default.createElement(_svgs.LinkIcon, { size: !isMobile ? "24" : '', className: this.myStyle["share_modal_img"] })
                            )
                        )
                    )
                )
            )
        );
    };

    return ShareModal;
}(_react2.default.Component);

// ShareModal.propTypes = {
//     show: PropTypes.bool.isRequired,
//     handleShareAction: PropTypes.func.isRequired,
// };


exports.default = ShareModal;
//# sourceMappingURL=shareModal.js.map