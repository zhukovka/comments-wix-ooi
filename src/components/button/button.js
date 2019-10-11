import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

let Button = ({onClick, label, styleType, isDisabled, ariaLabel, icon, buttonStyle}) => {
    let btnType = styleType != null ? styleType : 'primary';

    let btnClass = classNames({
            // 'main-btn': true,
            disabled: Boolean(isDisabled)
        },
        buttonStyle,
        btnType );
    return (

            <button tabIndex={0} className={btnClass}
                    aria-label={ariaLabel || label}
                    onClick={(e) => {
                        if (!isDisabled) {
                            onClick(e);
                        }
                    }}>
                {label}
            </button>

    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.string.isRequired,
    styleType: PropTypes.oneOf(['primary', 'secondary', 'text']),
    isDisabled: PropTypes.bool,
    ariaLabel: PropTypes.string,
    icon: PropTypes.string
};
export default Button;
