import React from 'react';
import moreActionModal from './style/moreActionModal.scss';
import moreActionModalDesk from './style/moreActionModalDesk.scss';

const MoreActionModal = (props) => {
    const {data} = props;
    let myStyle = props.isMobile ? moreActionModal : moreActionModalDesk;
    const handleKeys=(event)=>{
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
    }
    const popupPositionStyle = props.isMobile ? {} :
        {
            left: props.mousePosition ? props.mousePosition.x - 297 : 0,
            top: props.mousePosition ? props.mousePosition.y + 15 : 0
        };

    return (
        <ul id={"moreActionsMenu"} role={"menu"} aria-labelledby={"moreActions"} tabindex={-1} className={myStyle["more_action"]} style={popupPositionStyle}>
            {data && data.options &&
            data.options.map((option, key) => {
                return (
                    <li aria-haspopup={"true"} role={"menuitem"} tabindex={-1} id={option.value}  key={key} className={(option.value === "reported") ? (myStyle["reported_more_action_modal"]+" selectionDisable") : (myStyle["more_action_modal"]+" comments_text")}
                      onKeyDown={handleKeys}  onClick={() => (option.value === "reported") ? null : props.handleMoreActionResponse(option, props.comment.commentId)}
                    >
                        {option.action}
                    </li>
                );
            })}
        </ul>
    );
};

export default MoreActionModal;
