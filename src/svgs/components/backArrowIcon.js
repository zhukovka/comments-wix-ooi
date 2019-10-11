/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const BackArrowIcon = ({size, ...props}) => (
  <svg viewBox="0 0 10 16" width={ size || "10" } height={ size || "16" } {...props}>
    <path fill="none" className="svgStroke" d="M8.778 15.556L1 7.778 8.778 0" />
  </svg>
);
BackArrowIcon.displayName = 'BackArrowIcon';
BackArrowIcon.propTypes = {
  size: PropTypes.string
}
export default BackArrowIcon;
/* tslint:enable */
/* eslint-enable */
