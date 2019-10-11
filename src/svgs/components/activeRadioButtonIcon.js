/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const ActiveRadioButtonIcon = ({size, ...props}) => (
  <svg viewBox="0 0 16 16" width={ size || "16" } height={ size || "16" } {...props}>
    <g fill="none" transform="translate(1 1)" fillRule="evenodd">
      <circle cx="7" cy="7" r="7" className="svgStroke svgFill"  strokeOpacity=".2" />
      <circle cx="7" cy="7" r="3" className="svgFill" />
    </g>
  </svg>
);
ActiveRadioButtonIcon.displayName = 'ActiveRadioButtonIcon';
ActiveRadioButtonIcon.propTypes = {
  size: PropTypes.string
}
export default ActiveRadioButtonIcon;
/* tslint:enable */
/* eslint-enable */
