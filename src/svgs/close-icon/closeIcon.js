import React from 'react';
import Proptypes from 'prop-types';
import style from './style/style.scss';
import styleDesk from './style/styleDesk.scss';
import classNames from 'classnames';

export default function CloseIcon({onClick, ariaLabel, className, size,isMobile,notificationIconFill}) {
    let smallIcon = size === "small";
    //let myStyle = style.locals != null ? style.locals : style;
    let myStyle = isMobile ? style : styleDesk;
    return (
        <button className={classNames(myStyle['closeIcon'], className || "")} onClick={onClick} aria-label={ariaLabel}
                tabIndex="0" id="close_button">
            {smallIcon ?
                <svg xmlns="http://www.w3.org/2000/svg" width="8px" height="8px" viewBox="0 0 9 9" version="1.1">
                    <g id="New-Master" stroke={notificationIconFill || "none"} strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="LINE-GRID-INSTRUCTIONS" transform="translate(-531.000000, -1129.000000)" fill={notificationIconFill || "#333333"}>
                            <g id="Group-Copy-5" transform="translate(531.000000, 1129.000000)">
                                <path
                                    d="M4.5,3.80769231 L8.30769231,2.08163348e-13 L9,0.692307692 L5.19230769,4.5 L9,8.30769231 L8.30769231,9 L4.5,5.19230769 L0.692307692,9 L-4.85300689e-12,8.30769231 L3.80769231,4.5 L-8.35011747e-13,0.692307692 L0.692307692,2.08655315e-12 L4.5,3.80769231 Z"
                                    id="Combined-Shape"/>
                            </g>
                        </g>
                    </g>
                </svg>
                :
                <svg width="12px" height="12px" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g id="New-Master" stroke={notificationIconFill || "none"} strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="icons" transform="translate(-995.000000, -817.000000)" fill={notificationIconFill || "#333333"}>
                            <g id="Group-41" transform="translate(995.000000, 817.000000)">
                                <path
                                    d="M6,5.07692308 L11.0769231,1.15463195e-14 L12,0.923076923 L6.92307692,6 L12,11.0769231 L11.0769231,12 L6,6.92307692 L0.923076923,12 L-2.30926389e-14,11.0769231 L5.07692308,6 L-2.30926389e-14,0.923076923 L0.923076923,1.17683641e-14 L6,5.07692308 Z"
                                    id="Combined-Shape"/>
                            </g>
                        </g>
                    </g>
                </svg>
            }
        </button>
    );
}

CloseIcon.proptypes = {
    ariaLabel: Proptypes.string.isRequired,
    onClick: Proptypes.func.isRequired,
    className: Proptypes.string,
    size: Proptypes.oneOf(["small", "medium"])
};
