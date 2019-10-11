/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const DisabledRadioButtonIcon = ({size, ...props}) => (
  <svg viewBox="0 0 16 16" width={ size || "16" } height={ size || "16" } {...props}>
    <circle cx="7" cy="7" r="7" className="svgStroke svgFill" transform="translate(1 1)" fillRule="evenodd" strokeOpacity=".2" />
  </svg>
);
DisabledRadioButtonIcon.displayName = 'DisabledRadioButtonIcon';
DisabledRadioButtonIcon.propTypes = {
  size: PropTypes.string
}
export default DisabledRadioButtonIcon;
/* tslint:enable */
/* eslint-enable */
