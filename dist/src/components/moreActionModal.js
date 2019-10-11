'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moreActionModal = require('./style/moreActionModal.scss');

var _moreActionModal2 = _interopRequireDefault(_moreActionModal);

var _moreActionModalDesk = require('./style/moreActionModalDesk.scss');

var _moreActionModalDesk2 = _interopRequireDefault(_moreActionModalDesk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MoreActionModal = function MoreActionModal(props) {
    var data = props.data;

    var myStyle = props.isMobile ? _moreActionModal2.default : _moreActionModalDesk2.default;
    var handleKeys = function handleKeys(event) {
        /* if (event.keyCode == 13) event.target.click();
          else if (event.keyCode == 40){//down
              console.log("2");
             let elm =  event.target.nextElementSibling;
              if(elm==null) props.dd();
                  // elm= event.target.parentElement.firstElementChild;
              elm.focus();
              event.preventDefault();
           }
          else if (event.keyCode == 38){//up
              console.log("3")
              let elm =  event.target.previousElementSibling;
              if(elm==null) props.dd();
                  //elm= event.target.parentElement.lastElementChild;
              elm.focus();
              event.preventDefault();
          }
          */
    };
    var popupPositionStyle = props.isMobile ? {} : {
        left: props.mousePosition ? props.mousePosition.x - 297 : 0,
        top: props.mousePosition ? props.mousePosition.y + 15 : 0
    };

    return _react2.default.createElement(
        'ul',
        { id: "moreActionsMenu", role: "menu", 'aria-labelledby': "moreActions", tabindex: -1, className: myStyle["more_action"], style: popupPositionStyle },
        data && data.options && data.options.map(function (option, key) {
            return _react2.default.createElement(
                'li',
                { 'aria-haspopup': "true", role: "menuitem", tabindex: -1, id: option.value, key: key, className: option.value === "reported" ? myStyle["reported_more_action_modal"] + " selectionDisable" : myStyle["more_action_modal"] + " comments_text",
                    onKeyDown: handleKeys, onClick: function onClick() {
                        return option.value === "reported" ? null : props.handleMoreActionResponse(option, props.comment.commentId);
                    }
                },
                option.action
            );
        })
    );
};

exports.default = MoreActionModal;
//# sourceMappingURL=moreActionModal.js.map